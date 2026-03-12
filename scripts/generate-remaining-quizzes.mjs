import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();

const targets = [
  { name: 'Neon', slug: 'neon', url: 'https://neon.tech', accent: '#00E599' },
  { name: 'Railway', slug: 'railway', url: 'https://railway.com', accent: '#7C3AED' },
  { name: 'Trigger.dev', slug: 'triggerdev', url: 'https://trigger.dev', accent: '#4F46E5' },
  { name: 'Inngest', slug: 'inngest', url: 'https://www.inngest.com', accent: '#2563EB' },
  { name: 'Dub', slug: 'dub', url: 'https://dub.co', accent: '#111827' },
  { name: 'Knock', slug: 'knock', url: 'https://knock.app', accent: '#7C3AED' },
  { name: 'Loops', slug: 'loops', url: 'https://loops.so', accent: '#5B5CE2' },
  { name: 'Tinybird', slug: 'tinybird', url: 'https://www.tinybird.co', accent: '#2563EB' },
  { name: 'Infisical', slug: 'infisical', url: 'https://infisical.com', accent: '#111827' },
  { name: 'Unkey', slug: 'unkey', url: 'https://unkey.com', accent: '#0EA5E9' },
  { name: 'Depot', slug: 'depot', url: 'https://depot.dev', accent: '#2563EB' },
  { name: 'Axiom', slug: 'axiom', url: 'https://axiom.co', accent: '#6D28D9' },
  { name: 'Coda', slug: 'coda', url: 'https://coda.io', accent: '#7C3AED' },
  { name: 'Rows', slug: 'rows', url: 'https://rows.com', accent: '#2563EB' },
  { name: 'Tally', slug: 'tally', url: 'https://tally.so', accent: '#5B5CE2' },
  { name: 'Contra', slug: 'contra', url: 'https://contra.com', accent: '#111827' },
];

const targetSlugFilter = (process.env.TARGET_SLUGS ?? '')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

const runTargets = targetSlugFilter.length
  ? targets.filter((t) => targetSlugFilter.includes(t.slug.toLowerCase()))
  : targets;

const gatewayKey = process.env.AI_GATEWAY_API_KEY;
const gatewayBase = process.env.AI_GATEWAY_BASE_URL ?? 'https://ai-gateway.vercel.sh/v1';
const gatewayModel = process.env.AI_GATEWAY_MODEL ?? 'anthropic/claude-sonnet-4.6';

if (!gatewayKey) {
  console.error('Missing AI_GATEWAY_API_KEY in environment');
  process.exit(1);
}

const roundTypeById = new Map([
  [1, 'truth_or_myth'], [2, 'truth_or_myth'], [3, 'truth_or_myth'], [4, 'truth_or_myth'],
  [5, 'this_or_that'], [6, 'this_or_that'], [7, 'this_or_that'],
  [8, 'quick_pick'], [9, 'quick_pick'], [10, 'quick_pick'],
  [11, 'speed_pick'], [12, 'speed_pick'],
  [13, 'odd_one_out'], [14, 'odd_one_out'], [15, 'odd_one_out'],
]);

const dims = ['memory','orchestration','automation','extensibility','workflows','prompting','bestPractices'];

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractLinks(baseUrl, html) {
  const links = new Set();
  const hrefRe = /href\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = hrefRe.exec(html)) !== null) {
    const raw = m[1].trim();
    if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:')) continue;
    try {
      const u = new URL(raw, baseUrl);
      if (!['http:','https:'].includes(u.protocol)) continue;
      if (u.hostname !== baseUrl.hostname) continue;
      const p = u.pathname.toLowerCase();
      const useful = [
        '/docs','/doc','/api','/reference','/developers','/developer','/guide','/guides',
        '/help','/kb','/knowledge','/changelog','/release','/features','/product','/integrations',
        '/security','/pricing','/blog'
      ].some((k)=>p.includes(k));
      if (useful || p === '/' || p.split('/').filter(Boolean).length <= 1) {
        u.hash = '';
        u.search = '';
        links.add(u.toString());
      }
    } catch {}
  }
  return [...links];
}

async function fetchPage(url) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'HWYK-QuizGen/1.0 (+https://www.howwellyouknow.com)',
        'Accept': 'text/html,application/xhtml+xml',
      },
    });
    if (!res.ok) throw new Error(`fetch ${res.status}`);
    const html = await res.text();
    const title = (html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '').replace(/\s+/g, ' ').trim();
    return { html, text: stripHtml(html).slice(0, 18000), title };
  } finally {
    clearTimeout(t);
  }
}

async function crawl(base) {
  const root = new URL(base);
  const seeds = ['/', '/docs', '/documentation', '/api', '/developers', '/developer', '/guides', '/features', '/product', '/integrations', '/changelog'];
  const queue = new Set(seeds.map((p)=>new URL(p, root).toString()));
  const pages = [];
  const seen = new Set();

  while (queue.size && pages.length < 18) {
    const next = queue.values().next().value;
    queue.delete(next);
    if (!next || seen.has(next)) continue;
    seen.add(next);
    try {
      const p = await fetchPage(next);
      if (p.text.length < 300) continue;
      pages.push({ url: next, text: p.text, title: p.title });
      for (const l of extractLinks(root, p.html)) {
        if (!seen.has(l) && queue.size < 60) queue.add(l);
      }
    } catch {}
  }

  if (!pages.length) throw new Error(`No pages crawled for ${base}`);
  return pages;
}

function findJsonObject(s) {
  const start = s.indexOf('{');
  if (start < 0) return null;
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let i = start; i < s.length; i++) {
    const ch = s[i];
    if (inStr) {
      if (esc) { esc = false; continue; }
      if (ch === '\\') { esc = true; continue; }
      if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') { inStr = true; continue; }
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) return s.slice(start, i + 1);
    }
  }
  return null;
}

async function llmJson(prompt) {
  const res = await fetch(`${gatewayBase}/chat/completions`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${gatewayKey}`,
    },
    body: JSON.stringify({
      model: gatewayModel,
      temperature: 0.2,
      max_tokens: 6500,
      messages: [
        { role: 'system', content: 'Return only valid JSON. No markdown. No prose.' },
        { role: 'user', content: prompt },
      ],
    }),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`LLM ${res.status} ${t.slice(0, 300)}`);
  }
  const payload = await res.json();
  const txt = payload?.choices?.[0]?.message?.content ?? '';
  const cleaned = txt.trim().replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
  const block = findJsonObject(cleaned) ?? cleaned;
  return JSON.parse(block);
}

function ensureChallengeShape(ch, id) {
  const type = roundTypeById.get(id);
  if (ch.type !== type) throw new Error(`id ${id} wrong type ${ch.type} expected ${type}`);
  if (!dims.includes(ch.dimension)) throw new Error(`id ${id} invalid dimension`);
  if (typeof ch.explanation !== 'string' || typeof ch.id !== 'number') throw new Error(`id ${id} bad fields`);
  if (type === 'truth_or_myth') {
    if (typeof ch.statement !== 'string' || typeof ch.isTrue !== 'boolean') throw new Error(`id ${id} truth shape`);
  }
  if (type === 'this_or_that') {
    if (typeof ch.scenario !== 'string' || typeof ch.optionA !== 'string' || typeof ch.optionB !== 'string' || !['A','B'].includes(ch.correct)) throw new Error(`id ${id} thisor shape: ${JSON.stringify(ch)}`);
  }
  if (type === 'quick_pick') {
    if (typeof ch.scenario !== 'string' || typeof ch.blank !== 'string' || !Array.isArray(ch.options) || ch.options.length < 3 || !ch.options.includes(ch.blank)) throw new Error(`id ${id} quick shape`);
  }
  if (type === 'speed_pick') {
    if (typeof ch.prompt !== 'string' || !Array.isArray(ch.correctItems) || !Array.isArray(ch.wrongItems) || typeof ch.timeLimit !== 'number') throw new Error(`id ${id} speed shape`);
  }
  if (type === 'odd_one_out') {
    if (typeof ch.prompt !== 'string' || !Array.isArray(ch.items) || ch.items.length !== 4 || typeof ch.oddItem !== 'string' || !ch.items.includes(ch.oddItem)) throw new Error(`id ${id} odd shape`);
  }
}

function normalizeChallengeShape(ch, id) {
  const type = roundTypeById.get(id);
  const out = { ...ch, id, type };

  if (type === 'truth_or_myth' && typeof out.statement !== 'string' && typeof out.question === 'string') {
    out.statement = out.question;
  }
  if (type === 'this_or_that' && typeof out.scenario !== 'string' && typeof out.question === 'string') {
    out.scenario = out.question;
  }
  if (type === 'this_or_that' && typeof out.optionA !== 'string') {
    if (typeof out.choiceA === 'string') out.optionA = out.choiceA;
    else if (typeof out.a === 'string') out.optionA = out.a;
  }
  if (type === 'this_or_that' && typeof out.optionB !== 'string') {
    if (typeof out.choiceB === 'string') out.optionB = out.choiceB;
    else if (typeof out.b === 'string') out.optionB = out.b;
  }
  if (type === 'this_or_that' && (!out.optionA || !out.optionB) && Array.isArray(out.options) && out.options.length >= 2) {
    out.optionA = String(out.options[0]);
    out.optionB = String(out.options[1]);
  }
  if (type === 'this_or_that' && !['A', 'B'].includes(out.correct)) {
    const ans = typeof out.answer === 'string' ? out.answer : (typeof out.correctOption === 'string' ? out.correctOption : '');
    if (ans) {
      const normalizedAns = ans.trim();
      if (normalizedAns.toUpperCase() === 'A' || normalizedAns.toUpperCase() === 'B') {
        out.correct = normalizedAns.toUpperCase();
      } else if (typeof out.optionA === 'string' && normalizedAns === out.optionA) {
        out.correct = 'A';
      } else if (typeof out.optionB === 'string' && normalizedAns === out.optionB) {
        out.correct = 'B';
      }
    }
    if (typeof out.correct === 'string') {
      const c = out.correct.trim().toLowerCase();
      if (c === 'optiona' || c === 'a') out.correct = 'A';
      if (c === 'optionb' || c === 'b') out.correct = 'B';
    }
  }
  if (type === 'quick_pick' && typeof out.scenario !== 'string' && typeof out.question === 'string') {
    out.scenario = out.question;
  }
  if (type === 'speed_pick' && typeof out.prompt !== 'string' && typeof out.question === 'string') {
    out.prompt = out.question;
  }
  if (type === 'odd_one_out') {
    if (typeof out.prompt !== 'string' && typeof out.question === 'string') out.prompt = out.question;
    if (!Array.isArray(out.items) && Array.isArray(out.options)) out.items = out.options;
  }

  return out;
}

function pascalFromSlug(slug) {
  return slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function dimAccent(hex) {
  const n = Number.parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const dr = Math.max(0, Math.floor(r * 0.88));
  const dg = Math.max(0, Math.floor(g * 0.88));
  const db = Math.max(0, Math.floor(b * 0.88));
  return `#${[dr,dg,db].map((v)=>v.toString(16).padStart(2,'0')).join('').toUpperCase()}`;
}

function rgba(hex, a) {
  const n = Number.parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${a})`;
}

function buildQuizTsx(t, generated) {
  const varName = `${pascalFromSlug(t.slug.charAt(0).toLowerCase() + t.slug.slice(1))}Config`;
  const accentDim = dimAccent(t.accent);
  const subtitle = `Just you vs. ${t.name} challenge trivia.`;
  const dimLabels = generated.dimensionLabels ?? {
    memory: 'Core Concepts',
    orchestration: 'Workflow Design',
    automation: 'Execution Patterns',
    extensibility: 'Integrations',
    workflows: 'Product Usage',
    prompting: 'Command Recall',
    bestPractices: 'Operational Discipline',
  };

  const archetypes = [
    { title: `${t.name} Grandmaster`, emoji: '🏆', description: `You can reason about ${t.name} like a true power user under real constraints.`, minScore: 90, maxScore: 100 },
    { title: 'Workflow Architect', emoji: '🧠', description: `Strong command of advanced ${t.name} workflows with only a few edge cases left.`, minScore: 80, maxScore: 89 },
    { title: 'Power Operator', emoji: '⚡', description: `You can execute reliably and make good product-level tradeoffs.`, minScore: 70, maxScore: 79 },
    { title: 'Skilled Builder', emoji: '🛠️', description: `Solid execution across core features, with room to sharpen advanced depth.`, minScore: 60, maxScore: 69 },
    { title: 'Practitioner', emoji: '📈', description: `You can ship practical outcomes and are leveling up fast.`, minScore: 50, maxScore: 59 },
    { title: 'Explorer', emoji: '🌱', description: `Great base. More repetition on edge cases will significantly raise your score.`, minScore: 40, maxScore: 49 },
    { title: 'First Steps', emoji: '🚀', description: `Strong start. Keep going and mastery is very reachable.`, minScore: 0, maxScore: 39 },
  ];

  const challenges = JSON.stringify(generated.challenges, null, 4)
    .replace(/"(type|id|dimension|statement|isTrue|explanation|scenario|optionA|optionB|correct|blank|options|prompt|correctItems|wrongItems|timeLimit|items|oddItem)":/g, '$1:');

  return `import type { QuizConfig } from "@/components/quiz/types";

export const ${varName}: QuizConfig = {
  slug: "${t.slug}",
  toolName: "${t.name}",
  tagline: "${generated.tagline || '6 rounds. ~3 min. No signup required.'}",
  subtitle: "${subtitle}",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "${t.accent}",
  accentColorDim: "${accentDim}",
  accentColorSubtle: "${rgba(t.accent, 0.1)}",
  bgColor: "linear-gradient(145deg, #F8FAFC 0%, #FFFFFF 55%, #F3F7FF 100%)",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EEF2F7",
  textColor: "#0F172A",
  textSecondary: "#334155",
  textTertiary: "#64748B",
  borderColor: "#D7E0EA",
  borderSubtle: "#E7EDF4",
  scorecardBg: "#111827",
  scorecardAccentColor: "${t.accent}",
  scorecardDivider: "#243247",
  scorecardLabelColor: "#AFC2DD",
  scorecardGridColor: "#243247",
  logo: (
    <img
      src="/logos/${t.slug}.png"
      alt="${t.name}"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 10 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/${t.slug}.png"
      alt="${t.name}"
      width={42}
      height={42}
      style={{ borderRadius: 10, objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "${t.slug}",
  dimensionLabels: ${JSON.stringify(dimLabels, null, 2)},
  archetypes: ${JSON.stringify(archetypes, null, 2)},
  challenges: ${challenges},
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Real feature or total BS?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the smarter move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name that feature" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Tap fast, think faster" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the fake" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Expert level." },
  ],
};
`;
}

function routeVar(slug) {
  return `${pascalFromSlug(slug)}Config`;
}

function layoutTsx(t) {
  const cfg = routeVar(t.slug);
  const title = `How ${t.name} Are You?`;
  return `import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { ${cfg} } from "@/quizzes/${t.slug}";

const canonicalUrl = "https://www.howwellyouknow.com/play/${t.slug}";
const description = "Think you know ${t.name}? Test your real product depth in 6 rounds and get a shareable scorecard.";
const ogImageUrl = "/api/og?title=${encodeURIComponent(title).replace(/%20/g, '+')}&tool=${encodeURIComponent(t.name).replace(/%20/g, '+')}&slug=${t.slug}";

export const metadata: Metadata = {
  title: "${title}",
  description,
  icons: { icon: "/logos/${t.slug}.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "${title}",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "${title}" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={${cfg}}>{children}</QuizLayout>;
}
`;
}

function pageTsx(slug) {
  const cfg = routeVar(slug);
  return `"use client";
import { QuizPage } from "@/components/quiz";
import { ${cfg} } from "@/quizzes/${slug}";

export default function Page() {
  return <QuizPage config={${cfg}} />;
}
`;
}

function resultTsx(slug) {
  const cfg = routeVar(slug);
  return `"use client";
import { ResultsPage } from "@/components/quiz";
import { ${cfg} } from "@/quizzes/${slug}";

export default function Page() {
  return <ResultsPage config={${cfg}} />;
}
`;
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function saveLogo(t) {
  const dest = path.join(ROOT, 'public', 'logos', `${t.slug}.png`);
  const domain = new URL(t.url).hostname;
  const candidates = [
    `${t.url.replace(/\/$/, '')}/favicon.ico`,
    `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(t.url)}`,
  ];
  for (const u of candidates) {
    try {
      const res = await fetch(u);
      if (!res.ok) continue;
      const arr = await res.arrayBuffer();
      if (arr.byteLength < 200) continue;
      await fs.writeFile(dest, Buffer.from(arr));
      return;
    } catch {}
  }
  console.warn(`Could not fetch logo for ${t.name} (${domain})`);
}

for (const t of runTargets) {
  console.log(`\\n=== ${t.name} ===`);
  const pages = await crawl(t.url);
  const facts = pages
    .map((p, i) => `SOURCE ${i + 1}\\nURL: ${p.url}\\nTITLE: ${p.title || '(none)'}\\nTEXT:\\n${p.text.slice(0, 6500)}`)
    .join('\\n\\n---\\n\\n');

  const prompt = [
    `Create a high-quality product quiz for ${t.name} (${t.url}).`,
    'Return JSON with shape:',
    '{ "tagline": string, "dimensionLabels": {"memory":string,"orchestration":string,"automation":string,"extensibility":string,"workflows":string,"prompting":string,"bestPractices":string}, "challenges": Challenge[] }',
    '',
    'Challenge schema by id:',
    '1-4: truth_or_myth: {type,id,dimension,statement,isTrue,explanation}',
    '5-7: this_or_that: {type,id,dimension,scenario,optionA,optionB,correct,explanation}',
    '8-10: quick_pick: {type,id,dimension,scenario,blank,options,explanation}',
    '11-12: speed_pick: {type,id,dimension,prompt,correctItems,wrongItems,timeLimit,explanation}',
    '13-15: odd_one_out: {type,id,dimension,prompt,items,oddItem,explanation}',
    '',
    'Hard constraints:',
    '- Exactly 15 challenges with ids 1..15 and correct type per id slot.',
    '- Ensure all 7 dimensions are used at least once.',
    '- Questions must be factual, product-behavior-focused, power-user level, and a bit difficult.',
    '- Absolutely avoid positioning, pricing, vague marketing, or wording like "claims", "positions", "markets itself".',
    '- No em dash character.',
    '- Explanations concise and factual.',
    '- For quick_pick: blank MUST be one of options.',
    '- For odd_one_out: oddItem MUST be one of items.',
    '- For speed_pick: no overlap between correctItems and wrongItems.',
    '- timeLimit should be 15.',
    '',
    'Sources:',
    facts,
  ].join('\\n');

  let generated = null;
  let lastErr = null;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const retryHint =
        attempt === 1
          ? ''
          : `\\n\\nRetry ${attempt}: Your previous output failed strict schema checks. Return strict JSON and conform exactly to each challenge type shape by id.`;
      const candidate = await llmJson(prompt + retryHint);
      if (!candidate || !Array.isArray(candidate.challenges) || candidate.challenges.length !== 15) {
        throw new Error(`invalid challenge count`);
      }
      const normalized = [];
      const dimSet = new Set();
      for (let id = 1; id <= 15; id++) {
        const ch = candidate.challenges.find((x) => x.id === id);
        if (!ch) throw new Error(`missing challenge id ${id}`);
        const n = normalizeChallengeShape(ch, id);
        ensureChallengeShape(n, id);
        normalized.push(n);
        dimSet.add(n.dimension);
      }
      if (dimSet.size < 7) throw new Error(`dimension coverage too low`);
      candidate.challenges = normalized;
      generated = candidate;
      break;
    } catch (err) {
      lastErr = err;
      console.warn(`Attempt ${attempt} failed for ${t.slug}: ${err.message}`);
    }
  }

  if (!generated) {
    throw new Error(`Unable to generate valid quiz for ${t.slug}: ${lastErr?.message ?? 'unknown error'}`);
  }

  await saveLogo(t);

  const quizPath = path.join(ROOT, 'src', 'quizzes', `${t.slug}.tsx`);
  await fs.writeFile(quizPath, buildQuizTsx(t, generated), 'utf8');

  const baseRoute = path.join(ROOT, 'src', 'app', 'play', t.slug);
  await ensureDir(path.join(baseRoute, 'results'));
  await fs.writeFile(path.join(baseRoute, 'layout.tsx'), layoutTsx(t), 'utf8');
  await fs.writeFile(path.join(baseRoute, 'page.tsx'), pageTsx(t.slug), 'utf8');
  await fs.writeFile(path.join(baseRoute, 'results', 'page.tsx'), resultTsx(t.slug), 'utf8');

  console.log(`Generated ${t.slug}`);
}

console.log('\\nSelected quizzes generated.');
