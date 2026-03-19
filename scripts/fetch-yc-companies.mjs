import { mkdir, writeFile } from "node:fs/promises";
import * as cheerio from "cheerio";

const OUTPUT_DIR = new URL("../data/", import.meta.url);
const OUTPUT_PATH = new URL("yc-companies-enriched.json", OUTPUT_DIR);
const META_URL = "https://yc-oss.github.io/api/meta.json";
const COMPANIES_URL = "https://yc-oss.github.io/api/companies/all.json";
const DEFAULT_CONCURRENCY = 12;
const PAGE_TIMEOUT_MS = 30000;
const PAGE_RETRIES = 3;

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .replace(/&#(\d+);/g, (_, codePoint) =>
      String.fromCodePoint(Number.parseInt(codePoint, 10))
    );
}

function normalizeWhitespace(value) {
  return decodeHtml(value).replace(/\s+/g, " ").trim();
}

function normalizeUrlForComparison(value) {
  try {
    const url = new URL(value);
    return `${url.hostname}${url.pathname}`.replace(/\/+$/, "");
  } catch {
    return value.replace(/^https?:\/\//, "").replace(/\/+$/, "");
  }
}

function uniqBy(items, getKey) {
  const seen = new Set();
  return items.filter((item) => {
    const key = getKey(item);
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function extractMetaTag(html, attr, value) {
  const $ = cheerio.load(html);
  return $(`meta[${attr}="${value}"]`).attr("content") ?? null;
}

function extractCompanySocials($, slug, website) {
  const socials = [];
  const normalizedWebsite = website ? normalizeUrlForComparison(website) : null;
  $(`a[data-tooltip-id="social-tooltip-${slug}"]`).each((_, element) => {
    const anchor = $(element);
    const url = anchor.attr("href");

    if (!url) {
      return;
    }

    socials.push({
      label:
        anchor.attr("data-tooltip-content")
        ?? (normalizedWebsite && normalizeUrlForComparison(url) === normalizedWebsite
          ? "Website"
          : anchor.attr("aria-label"))
        ?? url,
      url,
    });
  });

  return uniqBy(socials, (social) => `${social.label}:${social.url}`);
}

function extractFounders($) {
  const founders = [];
  $(".group.space-y-3").each((_, element) => {
      const card = $(element);

      if (!card.find('a[data-tooltip-id^="founder-social-tooltip-"]').length) {
        return;
      }

      const name = card.find("img.h-full.w-full.object-cover").first().attr("alt")
        ?? card.find('[class*="font-bold"]').first().text().trim();
      const role = card.find('[class*="text-gray-600"]').first().text().trim();
      const bio = normalizeWhitespace(
        card.find(".prose.max-w-full.whitespace-pre-line").first().text()
      );
      const avatarUrl = card.find("img.h-full.w-full.object-cover").first().attr("src") ?? null;

      if (!name || !role) {
        return;
      }

      const socials = [];
      card.find('a[data-tooltip-id^="founder-social-tooltip-"]').each((__, socialElement) => {
        const anchor = $(socialElement);
        const url = anchor.attr("href");

        if (!url) {
          return;
        }

        socials.push({
          label: anchor.attr("data-tooltip-content") ?? anchor.attr("aria-label") ?? url,
          aria_label: anchor.attr("aria-label") ?? null,
          url,
        });
      });

      founders.push({
        name,
        role,
        bio: bio || null,
        avatar_url: avatarUrl,
        socials: uniqBy(socials, (social) => `${social.label}:${social.url}`),
      });
    });

  return uniqBy(founders, (founder) => founder.name.toLowerCase());
}

function extractPublicCompanyPageData(html, company) {
  const $ = cheerio.load(html);
  const title = extractMetaTag(html, "property", "og:title")
    ?? extractMetaTag(html, "name", "title");
  const description = extractMetaTag(html, "name", "description")
    ?? extractMetaTag(html, "property", "og:description");

  return {
    page_title: title,
    page_description: description,
    company_socials: extractCompanySocials($, company.slug, company.website),
    founders: extractFounders($),
  };
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; YCExporter/1.0; +https://www.ycombinator.com/companies)",
      accept: "application/json,text/plain,*/*",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function fetchTextWithRetry(url, attempt = 1) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), PAGE_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; YCExporter/1.0; +https://www.ycombinator.com/companies)",
        accept: "text/html,application/xhtml+xml",
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return await response.text();
  } catch (error) {
    if (attempt >= PAGE_RETRIES) {
      throw error;
    }

    const delayMs = 500 * 2 ** (attempt - 1);
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    return fetchTextWithRetry(url, attempt + 1);
  } finally {
    clearTimeout(timeout);
  }
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (true) {
      const currentIndex = nextIndex;
      nextIndex += 1;

      if (currentIndex >= items.length) {
        return;
      }

      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker())
  );

  return results;
}

async function main() {
  const requestedConcurrency = Number.parseInt(process.argv[2] ?? "", 10);
  const requestedLimit = Number.parseInt(process.argv[3] ?? "", 10);
  const concurrency = Number.isFinite(requestedConcurrency) && requestedConcurrency > 0
    ? requestedConcurrency
    : DEFAULT_CONCURRENCY;

  console.log("Fetching YC API metadata...");
  const meta = await fetchJson(META_URL);

  console.log("Fetching all launched YC companies...");
  const allCompanies = await fetchJson(COMPANIES_URL);
  const companies = Number.isFinite(requestedLimit) && requestedLimit > 0
    ? allCompanies.slice(0, requestedLimit)
    : allCompanies;

  console.log(
    `Enriching ${companies.length} companies with public YC company-page data using concurrency=${concurrency}...`
  );

  let completed = 0;
  const failures = [];

  const enrichedCompanies = await mapWithConcurrency(
    companies,
    concurrency,
    async (company) => {
      try {
        const html = await fetchTextWithRetry(company.url);
        const enrichment = extractPublicCompanyPageData(html, company);
        completed += 1;

        if (completed % 100 === 0 || completed === companies.length) {
          console.log(`Processed ${completed}/${companies.length}`);
        }

        return {
          ...company,
          enrichment: {
            source: "public_yc_company_page",
            fetched_at: new Date().toISOString(),
            ...enrichment,
          },
        };
      } catch (error) {
        completed += 1;
        failures.push({
          slug: company.slug,
          url: company.url,
          error: error instanceof Error ? error.message : String(error),
        });

        if (completed % 100 === 0 || completed === companies.length) {
          console.log(`Processed ${completed}/${companies.length}`);
        }

        return {
          ...company,
          enrichment: {
            source: "public_yc_company_page",
            fetched_at: new Date().toISOString(),
            page_title: null,
            page_description: null,
            company_socials: [],
            founders: [],
            error: error instanceof Error ? error.message : String(error),
          },
        };
      }
    }
  );

  const payload = {
    generated_at: new Date().toISOString(),
    source_api_meta: meta,
    source_api_url: COMPANIES_URL,
    total_companies: enrichedCompanies.length,
    failed_page_enrichments: failures.length,
    failures,
    companies: enrichedCompanies,
  };

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT_PATH, JSON.stringify(payload, null, 2) + "\n", "utf8");

  console.log(`Wrote ${enrichedCompanies.length} companies to ${OUTPUT_PATH.pathname}`);
  if (failures.length > 0) {
    console.log(`Some page enrichments failed: ${failures.length}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
