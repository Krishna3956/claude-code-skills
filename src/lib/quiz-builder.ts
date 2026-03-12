const MAX_PAGES = 18;
const MAX_CHARS_PER_PAGE = 18000;
const REQUEST_TIMEOUT_MS = 12000;

export type BuilderQuestion =
  | {
      type: "truth_or_myth";
      question: string;
      isTrue: boolean;
      explanation: string;
      sourceUrl?: string;
    }
  | {
      type: "this_or_that";
      question: string;
      optionA: string;
      optionB: string;
      correct: "A" | "B";
      explanation: string;
      sourceUrl?: string;
    }
  | {
      type: "odd_one_out";
      question: string;
      options: [string, string, string, string];
      oddItem: string;
      explanation: string;
      sourceUrl?: string;
    };

export interface QuizBuilderDraft {
  toolName: string;
  slug: string;
  tagline: string;
  notes?: string;
  colorHint?: string;
  logoUrl?: string;
  fontHint?: string;
  darkModeHint?: boolean;
  questions: [
    BuilderQuestion,
    BuilderQuestion,
    BuilderQuestion,
    BuilderQuestion,
    BuilderQuestion,
    BuilderQuestion,
  ];
}

interface CrawledPage {
  url: string;
  text: string;
  title: string;
}

interface BrandProfile {
  logoUrl?: string;
  accentColor?: string;
  fontHint?: string;
  darkModeHint?: boolean;
}

function normalizeWhitespace(input: string): string {
  return input.replace(/\s+/g, " ").trim();
}

function stripHtml(html: string): string {
  return normalizeWhitespace(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
  );
}

function readTitle(html: string): string {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? normalizeWhitespace(m[1]) : "";
}

function toAbsoluteUrl(baseUrl: URL, raw: string): string | undefined {
  try {
    if (!raw) return undefined;
    const u = new URL(raw.trim(), baseUrl);
    if (!["http:", "https:"].includes(u.protocol)) return undefined;
    return u.toString();
  } catch {
    return undefined;
  }
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const raw = hex.trim().replace(/^#/, "");
  if (![3, 6].includes(raw.length)) return null;
  const full = raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw;
  const num = Number.parseInt(full, 16);
  if (Number.isNaN(num)) return null;
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  const rr = r / 255;
  const gg = g / 255;
  const bb = b / 255;
  const max = Math.max(rr, gg, bb);
  const min = Math.min(rr, gg, bb);
  const d = max - min;
  let h = 0;
  const l = (max + min) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));

  if (d !== 0) {
    if (max === rr) h = ((gg - bb) / d) % 6;
    else if (max === gg) h = (bb - rr) / d + 2;
    else h = (rr - gg) / d + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }

  return { h, s: s * 100, l: l * 100 };
}

function normalizeHexColor(input: string | undefined): string | undefined {
  if (!input) return undefined;
  const m = input.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/);
  if (!m) return undefined;
  const raw = m[1];
  if (raw.length === 3) {
    return `#${raw[0]}${raw[0]}${raw[1]}${raw[1]}${raw[2]}${raw[2]}`.toUpperCase();
  }
  return `#${raw.toUpperCase()}`;
}

function pickAccentColor(hexCandidates: string[]): string | undefined {
  const scored = hexCandidates
    .map((c) => normalizeHexColor(c))
    .filter((c): c is string => Boolean(c))
    .map((hex) => {
      const rgb = hexToRgb(hex);
      if (!rgb) return null;
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      const score = hsl.s - Math.abs(hsl.l - 50) * 0.65;
      return { hex, score, s: hsl.s, l: hsl.l };
    })
    .filter((v): v is { hex: string; score: number; s: number; l: number } => Boolean(v))
    .filter((v) => v.s >= 20 && v.l >= 18 && v.l <= 82)
    .sort((a, b) => b.score - a.score);

  return scored[0]?.hex;
}

function extractBrandProfile(baseUrl: URL, html: string): BrandProfile {
  const profile: BrandProfile = {};

  const logoCandidates: string[] = [];

  const ogImage = html.match(
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i
  )?.[1];
  if (ogImage) logoCandidates.push(ogImage);

  const iconMatches = html.matchAll(
    /<link[^>]+rel=["'][^"']*(?:icon|apple-touch-icon)[^"']*["'][^>]+href=["']([^"']+)["'][^>]*>/gi
  );
  for (const match of iconMatches) {
    if (match[1]) logoCandidates.push(match[1]);
  }

  const imgMatches = html.matchAll(
    /<img[^>]+(?:alt|class|id)=["'][^"']*(?:logo|brand|mark)[^"']*["'][^>]*src=["']([^"']+)["'][^>]*>|<img[^>]+src=["']([^"']+)["'][^>]*(?:alt|class|id)=["'][^"']*(?:logo|brand|mark)[^"']*["'][^>]*>/gi
  );
  for (const match of imgMatches) {
    if (match[1]) logoCandidates.push(match[1]);
    if (match[2]) logoCandidates.push(match[2]);
  }

  for (const candidate of logoCandidates) {
    const abs = toAbsoluteUrl(baseUrl, candidate);
    if (!abs) continue;
    if (/\.(svg|png|webp|jpg|jpeg)(\?|$)/i.test(abs) || abs.includes("logo") || abs.includes("icon")) {
      profile.logoUrl = abs;
      break;
    }
  }

  const themeColor = html.match(
    /<meta[^>]+name=["']theme-color["'][^>]+content=["']([^"']+)["'][^>]*>/i
  )?.[1];
  const hexMatches = [...html.matchAll(/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g)].map((m) => m[0]);
  profile.accentColor = normalizeHexColor(themeColor) ?? pickAccentColor(hexMatches);

  if (themeColor) {
    const rgb = hexToRgb(normalizeHexColor(themeColor) ?? "");
    if (rgb) {
      const { l } = rgbToHsl(rgb.r, rgb.g, rgb.b);
      profile.darkModeHint = l < 24;
    }
  }

  const fontFromGoogle = html.match(/fonts\.googleapis\.com\/css2?\?[^"']*family=([^:&"']+)/i)?.[1];
  if (fontFromGoogle) {
    profile.fontHint = decodeURIComponent(fontFromGoogle).replace(/\+/g, " ").trim();
  } else {
    const ff = html.match(/font-family\s*:\s*['"]?([^,'"();\n]+)[,'";)]/i)?.[1];
    if (ff) profile.fontHint = normalizeWhitespace(ff);
  }

  return profile;
}

function extractLinks(baseUrl: URL, html: string): string[] {
  const links = new Set<string>();
  const hrefRe = /href\s*=\s*["']([^"']+)["']/gi;
  let m: RegExpExecArray | null;

  while ((m = hrefRe.exec(html)) !== null) {
    const raw = m[1].trim();
    if (!raw || raw.startsWith("#") || raw.startsWith("mailto:") || raw.startsWith("tel:")) continue;

    try {
      const url = new URL(raw, baseUrl);
      if (url.protocol !== "http:" && url.protocol !== "https:") continue;
      if (url.hostname !== baseUrl.hostname) continue;

      // keep only docs/product-rich paths
      const p = url.pathname.toLowerCase();
      const useful = [
        "/docs",
        "/doc",
        "/api",
        "/reference",
        "/help",
        "/guide",
        "/guides",
        "/kb",
        "/knowledge",
        "/changelog",
        "/release",
        "/features",
        "/product",
        "/developers",
        "/developer",
        "/integrations",
        "/security",
      ].some((k) => p.includes(k));

      if (useful || p === "/" || p.split("/").filter(Boolean).length <= 1) {
        url.hash = "";
        url.search = "";
        links.add(url.toString());
      }
    } catch {
      // ignore malformed href
    }
  }

  return Array.from(links);
}

async function fetchText(url: string): Promise<{ html: string; text: string; title: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "HWYK-QuizBuilder/1.0 (+https://www.howwellyouknow.com)",
        Accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
    });

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status}`);
    }

    const html = await res.text();
    const text = stripHtml(html).slice(0, MAX_CHARS_PER_PAGE);
    const title = readTitle(html);

    return { html, text, title };
  } finally {
    clearTimeout(timer);
  }
}

function buildSeedPaths(base: URL): string[] {
  const paths = [
    "/",
    "/docs",
    "/documentation",
    "/api",
    "/api-reference",
    "/developer",
    "/developers",
    "/help",
    "/knowledge-base",
    "/changelog",
    "/integrations",
    "/features",
    "/product",
  ];

  return paths.map((p) => new URL(p, base).toString());
}

export async function crawlProductSite(inputUrl: string): Promise<CrawledPage[]> {
  const base = new URL(inputUrl);
  const queue = new Set<string>(buildSeedPaths(base));
  queue.add(new URL("/", base).toString());

  const visited = new Set<string>();
  const pages: CrawledPage[] = [];

  while (queue.size > 0 && pages.length < MAX_PAGES) {
    const [next] = queue;
    queue.delete(next);
    if (!next || visited.has(next)) continue;
    visited.add(next);

    try {
      const { html, text, title } = await fetchText(next);
      if (text.length < 300) continue;

      pages.push({ url: next, text, title });

      for (const link of extractLinks(base, html)) {
        if (!visited.has(link) && queue.size < MAX_PAGES * 3) {
          queue.add(link);
        }
      }
    } catch {
      // skip inaccessible pages
    }
  }

  return pages;
}

function buildPrompt(url: string, pages: CrawledPage[], brand: BrandProfile): string {
  const MAX_SOURCE_CHARS = 6500;
  const facts = pages
    .map((p, i) =>
      `SOURCE ${i + 1}\nURL: ${p.url}\nTITLE: ${p.title || "(no title)"}\nTEXT:\n${p.text.slice(0, MAX_SOURCE_CHARS)}`
    )
    .join("\n\n---\n\n");

  return [
    `You are generating a power-user product quiz from crawled documentation for ${url}.`,
    "",
    "STRICT QUALITY RULES (MANDATORY):",
    "1) Produce exactly 6 questions.",
    "2) Allowed types only: truth_or_myth, this_or_that, odd_one_out.",
    "3) Distribution: 2 truth_or_myth, 2 this_or_that, 2 odd_one_out.",
    "4) Questions must test product behavior, workflows, limits, errors, integrations, configuration, or operational choices.",
    "5) NO marketing-positioning questions, NO pricing questions, NO wording like 'X positions itself/claims/markets itself'.",
    "6) Assume the player is a power user. Questions should be concrete and moderately hard.",
    "7) Every question must be grounded in provided sources. Add sourceUrl for each question.",
    "8) If a fact is uncertain, do not use it.",
    "9) Explanations must be concise and factual.",
    "10) Output ONLY valid JSON. No markdown.",
    "",
    "JSON schema:",
    '{ "toolName": string, "slug": string, "tagline": string, "notes": string, "colorHint": string, "questions": [',
    '  { "type": "truth_or_myth", "question": string, "isTrue": boolean, "explanation": string, "sourceUrl": string },',
    '  { "type": "this_or_that", "question": string, "optionA": string, "optionB": string, "correct": "A"|"B", "explanation": string, "sourceUrl": string },',
    '  { "type": "odd_one_out", "question": string, "options": [string,string,string,string], "oddItem": string, "explanation": string, "sourceUrl": string }',
    '] }',
    "",
    "Also ensure:",
    "- slug is lowercase kebab-case.",
    "- tagline is <= 90 chars.",
    "- no duplicated questions.",
    "",
    "Brand hints from homepage crawl:",
    `- logoUrl: ${brand.logoUrl ?? "unknown"}`,
    `- accentColor: ${brand.accentColor ?? "unknown"}`,
    `- fontHint: ${brand.fontHint ?? "unknown"}`,
    `- darkModeHint: ${brand.darkModeHint ? "true" : "false"}`,
    "",
    "Crawled sources:",
    facts,
  ].join("\n");
}

function extractFirstJsonObject(input: string): string | null {
  const start = input.indexOf("{");
  if (start < 0) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < input.length; i++) {
    const ch = input[i];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === "\"") {
        inString = false;
      }
      continue;
    }

    if (ch === "\"") {
      inString = true;
      continue;
    }

    if (ch === "{") depth++;
    if (ch === "}") {
      depth--;
      if (depth === 0) {
        return input.slice(start, i + 1);
      }
    }
  }

  return null;
}

function parseModelJson(input: string): unknown {
  const trimmed = input.trim();

  const candidates = [
    trimmed,
    trimmed.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim(),
  ];

  const extracted = extractFirstJsonObject(trimmed);
  if (extracted) candidates.push(extracted);

  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      return JSON.parse(candidate);
    } catch {
      // try next candidate
    }
  }

  throw new Error("Model returned invalid JSON");
}

function normalizeDraft(raw: unknown): QuizBuilderDraft {
  if (!raw || typeof raw !== "object") throw new Error("Invalid model response");
  const obj = raw as Record<string, unknown>;

  const toolName = typeof obj.toolName === "string" ? obj.toolName.trim() : "Generated Quiz";
  const slugBase = typeof obj.slug === "string" ? obj.slug : toolName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const slug = slugBase.toLowerCase().replace(/^-+|-+$/g, "") || "generated-quiz";
  const tagline = typeof obj.tagline === "string" ? obj.tagline.trim() : "6 questions. Power-user challenge.";
  const notes = typeof obj.notes === "string" ? obj.notes.trim() : "";
  const colorHint = normalizeHexColor(
    typeof obj.colorHint === "string" ? obj.colorHint.trim() : undefined
  ) ?? "";
  const logoUrl =
    typeof obj.logoUrl === "string" && /^https?:\/\//i.test(obj.logoUrl.trim())
      ? obj.logoUrl.trim()
      : undefined;
  const fontHint = typeof obj.fontHint === "string" ? obj.fontHint.trim() : undefined;
  const darkModeHint = typeof obj.darkModeHint === "boolean" ? obj.darkModeHint : undefined;

  const questionsRaw = Array.isArray(obj.questions) ? obj.questions : [];
  if (questionsRaw.length !== 6) {
    throw new Error("Model did not return exactly 6 questions");
  }

  const questions = questionsRaw.map((q, idx) => {
    if (!q || typeof q !== "object") throw new Error(`Invalid question at ${idx + 1}`);
    const x = q as Record<string, unknown>;
    const type = x.type;

    if (type === "truth_or_myth") {
      if (typeof x.question !== "string" || typeof x.isTrue !== "boolean" || typeof x.explanation !== "string") {
        throw new Error(`Invalid truth_or_myth at ${idx + 1}`);
      }
      return {
        type,
        question: x.question.trim(),
        isTrue: x.isTrue,
        explanation: x.explanation.trim(),
        sourceUrl: typeof x.sourceUrl === "string" ? x.sourceUrl : undefined,
      } satisfies BuilderQuestion;
    }

    if (type === "this_or_that") {
      if (
        typeof x.question !== "string" ||
        typeof x.optionA !== "string" ||
        typeof x.optionB !== "string" ||
        (x.correct !== "A" && x.correct !== "B") ||
        typeof x.explanation !== "string"
      ) {
        throw new Error(`Invalid this_or_that at ${idx + 1}`);
      }
      return {
        type,
        question: x.question.trim(),
        optionA: x.optionA.trim(),
        optionB: x.optionB.trim(),
        correct: x.correct,
        explanation: x.explanation.trim(),
        sourceUrl: typeof x.sourceUrl === "string" ? x.sourceUrl : undefined,
      } satisfies BuilderQuestion;
    }

    if (type === "odd_one_out") {
      if (
        typeof x.question !== "string" ||
        !Array.isArray(x.options) ||
        x.options.length !== 4 ||
        typeof x.oddItem !== "string" ||
        typeof x.explanation !== "string"
      ) {
        throw new Error(`Invalid odd_one_out at ${idx + 1}`);
      }

      const options = x.options.map((v) => String(v).trim()) as [string, string, string, string];

      return {
        type,
        question: x.question.trim(),
        options,
        oddItem: x.oddItem.trim(),
        explanation: x.explanation.trim(),
        sourceUrl: typeof x.sourceUrl === "string" ? x.sourceUrl : undefined,
      } satisfies BuilderQuestion;
    }

    throw new Error(`Unknown question type at ${idx + 1}`);
  }) as QuizBuilderDraft["questions"];

  const counts = {
    truth_or_myth: questions.filter((q) => q.type === "truth_or_myth").length,
    this_or_that: questions.filter((q) => q.type === "this_or_that").length,
    odd_one_out: questions.filter((q) => q.type === "odd_one_out").length,
  };

  if (
    counts.truth_or_myth !== 2 ||
    counts.this_or_that !== 2 ||
    counts.odd_one_out !== 2
  ) {
    throw new Error("Draft must contain exactly 2 truth_or_myth, 2 this_or_that, and 2 odd_one_out questions");
  }

  // Hard fail on vague forbidden patterns.
  const forbidden = /\b(positions itself|markets itself|claims on (their|its) website|according to (the )?website)\b/i;
  for (const q of questions) {
    if (forbidden.test(q.question)) {
      throw new Error("Generated quiz contains vague/marketing-style phrasing");
    }
  }

  return {
    toolName,
    slug,
    tagline: tagline.slice(0, 90),
    notes,
    colorHint,
    logoUrl,
    fontHint,
    darkModeHint,
    questions,
  };
}

export async function generateQuizDraft(url: string): Promise<{ draft: QuizBuilderDraft; pagesUsed: number }> {
  const baseUrl = new URL(url);
  let brand: BrandProfile = {};
  try {
    const { html } = await fetchText(baseUrl.toString());
    brand = extractBrandProfile(baseUrl, html);
  } catch {
    // keep generation working if homepage brand extraction fails
  }

  const pages = await crawlProductSite(url);
  if (pages.length < 2) {
    throw new Error("Could not crawl enough product pages to generate a reliable quiz");
  }

  const prompt = buildPrompt(url, pages, brand);
  const gatewayKey = process.env.AI_GATEWAY_API_KEY;
  const gatewayModel = process.env.AI_GATEWAY_MODEL ?? "anthropic/claude-sonnet-4.6";
  const gatewayBase = process.env.AI_GATEWAY_BASE_URL ?? "https://ai-gateway.vercel.sh/v1";
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const anthropicModel = process.env.ANTHROPIC_QUIZ_MODEL ?? "claude-sonnet-4-6";

  const runModel = async (userPrompt: string): Promise<string> => {
    let text = "";

    if (gatewayKey) {
      const res = await fetch(`${gatewayBase}/chat/completions`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${gatewayKey}`,
        },
        body: JSON.stringify({
          model: gatewayModel,
          temperature: 0.2,
          max_tokens: 5000,
          messages: [
            {
              role: "system",
              content: "You are a strict technical quiz generator. Return only valid JSON. Never include markdown.",
            },
            { role: "user", content: userPrompt },
          ],
        }),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Gateway request failed (${res.status}): ${txt.slice(0, 300)}`);
      }

      const payload = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      text = payload.choices?.[0]?.message?.content ?? "";
    } else if (anthropicKey) {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": anthropicKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: anthropicModel,
          max_tokens: 5000,
          temperature: 0.2,
          system:
            "You are a strict technical quiz generator. Return only valid JSON. Never include markdown.",
          messages: [{ role: "user", content: userPrompt }],
        }),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Model request failed (${res.status}): ${txt.slice(0, 300)}`);
      }

      const payload = (await res.json()) as {
        content?: Array<{ type?: string; text?: string }>;
      };
      text = payload.content?.find((x) => x.type === "text")?.text ?? "";
    } else {
      throw new Error("Missing AI_GATEWAY_API_KEY (or ANTHROPIC_API_KEY fallback) environment variable");
    }

    if (!text) throw new Error("Model returned empty response");
    return text;
  };

  let finalDraft: QuizBuilderDraft | null = null;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < 2; attempt++) {
    const retryHint =
      attempt === 0
        ? ""
        : "\n\nRetry mode: Your previous output failed schema validation. Fix structure only. Return strictly valid JSON with exact schema and exact 6 questions.";

    try {
      const text = await runModel(prompt + retryHint);
      const parsed = parseModelJson(text);
      finalDraft = normalizeDraft(parsed);
      break;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error("Failed to parse model output");
    }
  }

  if (!finalDraft) {
    throw lastError ?? new Error("Failed to generate a valid quiz draft");
  }

  return {
    draft: {
      ...finalDraft,
      colorHint: finalDraft.colorHint || brand.accentColor,
      logoUrl: finalDraft.logoUrl || brand.logoUrl,
      fontHint: finalDraft.fontHint || brand.fontHint,
      darkModeHint: finalDraft.darkModeHint ?? brand.darkModeHint,
    },
    pagesUsed: pages.length,
  };
}
