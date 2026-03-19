import { cache } from "react";
import fs from "node:fs";
import path from "node:path";
import type { LucideIcon } from "lucide-react";
import {
  BookOpenText,
  Boxes,
  Braces,
  Megaphone,
  Users,
} from "lucide-react";

export type Metric = {
  value: string;
  label: string;
};

export type UseCaseCard = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  metrics: Metric[];
};

export type UseCaseTemplateData = {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  persona: string;
  liveHref: string;
  ctaSource: string;
  problemHeading: string;
  problemCopy: string[];
  metrics: Metric[];
  beforeAfter: Array<[string, string]>;
  workflow: Array<{ title: string; description: string }>;
  teamViewTitle: string;
  teamViewSummary: string;
  teamViewMetrics: Metric[];
  teamViewInsights: string[];
  quote: {
    text: string;
    role: string;
  };
};

export type ChallengeEntry = {
  slug: string;
  name: string;
  logoPath: string | null;
  href: string;
};

const NAME_OVERRIDES: Record<string, string> = {
  ai: "AI",
  airtablee: "Airtable",
  apryse: "Apryse",
  calcom: "Cal.com",
  chatgpt: "ChatGPT",
  claude: "Claude",
  "claude-code": "Claude Code",
  clueso: "Clueso",
  commandbar: "CommandBar",
  contra: "Contra",
  coda: "Coda",
  docker: "Docker",
  dub: "Dub",
  e2b: "E2B",
  excel: "Microsoft Excel",
  fastly: "Fastly",
  figma: "Figma",
  flyio: "Fly.io",
  "github-copilot": "GitHub Copilot",
  globalpayments: "Global Payments",
  guru: "Guru",
  hevo: "Hevo",
  hostedai: "Hosted.ai",
  hubspot: "HubSpot",
  huddle01: "Huddle01",
  hygraph: "Hygraph",
  hyperline: "Hyperline",
  infisical: "Infisical",
  inngest: "Inngest",
  langchain: "LangChain",
  langsmith: "LangSmith",
  liveblocks: "Liveblocks",
  lovable: "Lovable",
  merlin: "Merlin",
  "merlin-ai": "Merlin AI",
  midjourney: "Midjourney",
  notionn: "Notion",
  obsidian: "Obsidian",
  onepassword: "1Password",
  openclaw: "OpenClaw",
  paddle: "Paddle",
  planetscale: "PlanetScale",
  posthog: "PostHog",
  postman: "Postman",
  prisma: "Prisma",
  quickpick: "Quick Pick",
  raycast: "Raycast",
  replit: "Replit",
  resend: "Resend",
  safetyculture: "SafetyCulture",
  sanity: "Sanity",
  shopify: "Shopify",
  skyflow: "Skyflow",
  slack: "Slack",
  smallstep: "Smallstep",
  snowflake: "Snowflake",
  sst: "SST",
  starbuzz: "Starbuzz.ai",
  storyblok: "Storyblok",
  storylane: "Storylane",
  stigg: "Stigg",
  stillta: "Stilta",
  superwall: "Superwall",
  tally: "Tally",
  tinybird: "Tinybird",
  tiptap: "Tiptap",
  trainual: "Trainual",
  triggerdev: "Trigger.dev",
  turso: "Turso",
  unkey: "Unkey",
  upstash: "Upstash",
  vwo: "VWO",
  wandb: "Weights & Biases",
  wealthsimple: "Wealthsimple",
  where: "Where",
  whereby: "Whereby",
  windsurf: "Windsurf",
  workos: "WorkOS",
  wordpress: "WordPress",
  zapier: "Zapier",
  zensai: "Zensai",
};

const LOGO_OVERRIDES: Record<string, string> = {
  airtablee: "/logos/airtable.jpg",
  apryse: "/logos/apryse.svg",
  calcom: "/logos/calcom.ico",
  chatgpt: "/logos/chatgpt.svg",
  "claude-code": "/logos/claude-code.svg",
  coda: "/logos/coda.svg",
  docker: "/logos/docker.svg",
  dub: "/logos/dub.png",
  e2b: "/logos/e2b.png",
  excel: "/logos/excel-mark.svg",
  flyio: "/logos/flyio.png",
  "github-copilot": "/logos/github-copilot.jpg",
  globalpayments: "/logos/globalpayments.svg",
  hubspot: "/logos/hubspot.png",
  huddle01: "/logos/huddle01.svg",
  hygraph: "/logos/hygraph.ico",
  infisical: "/logos/infisical.png",
  inngest: "/logos/inngest.png",
  langchain: "/logos/langchain.png",
  langsmith: "/logos/langsmith.svg",
  liveblocks: "/logos/liveblocks.svg",
  lovable: "/logos/lovable.png",
  "merlin-ai": "/logos/zycus.webp",
  midjourney: "/logos/midjourney.jpg",
  notionn: "/logos/notion.png",
  onepassword: "/logos/onepassword.svg",
  openclaw: "/logos/openclaw-wordmark.png",
  paddle: "/logos/paddle.ico",
  planetscale: "/logos/planetscale.png",
  posthog: "/logos/posthog.svg",
  prisma: "/logos/prisma.svg",
  raycast: "/logos/raycast.svg",
  resend: "/logos/resend.svg",
  safetyculture: "/logos/safetyculture.svg",
  shopify: "/logos/shopify.svg",
  skyflow: "/logos/skyflow.svg",
  smallstep: "/logos/smallstep.png",
  snowflake: "/logos/snowflake.png",
  sst: "/logos/sst.svg",
  storyblok: "/logos/storyblok.svg",
  storylane: "/logos/storylane.svg",
  superwall: "/logos/superwall.svg",
  tiptap: "/logos/tiptap.png",
  triggerdev: "/logos/triggerdev.png",
  turso: "/logos/turso.ico",
  upstash: "/logos/upstash.png",
  wandb: "/logos/wandb.svg",
  workos: "/logos/workos.png",
  wordpress: "/logos/wordpress.png",
  zapier: "/logos/zapier.png",
};

const BLOG_POSTS = [
  {
    slug: "why-your-users-dont-read-docs",
    title: "Why your users don't read docs",
    excerpt: "Documentation is necessary, but passive reading rarely drives real product understanding. This is what your team can do about it.",
    author: "Karan Goyal",
    date: "March 14, 2026",
    category: "Product Education",
  },
  {
    slug: "interactive-onboarding",
    title: "The case for interactive onboarding",
    excerpt: "If your onboarding lives in PDFs, docs, and support calls, you are teaching the same thing three times. Interactive challenges shrink that loop.",
    author: "Karan Goyal",
    date: "March 11, 2026",
    category: "Onboarding",
  },
  {
    slug: "docker-community-challenges",
    title: "How Docker grew community engagement with challenges",
    excerpt: "A challenge gives community teams something better than another post in Slack. It gives members a reason to participate and share.",
    author: "Karan Goyal",
    date: "March 8, 2026",
    category: "Community",
  },
  {
    slug: "completion-rate-gap",
    title: "54% vs 12%: the completion rate gap",
    excerpt: "When learning becomes interactive, completion stops looking like a content problem and starts looking like a product design problem.",
    author: "Karan Goyal",
    date: "March 5, 2026",
    category: "Benchmarks",
  },
  {
    slug: "knowledge-first-cs",
    title: "Building a knowledge-first customer success motion",
    excerpt: "Customer success teams already know where users get stuck. The missing piece is a repeatable way to measure that knowledge at scale.",
    author: "Karan Goyal",
    date: "March 1, 2026",
    category: "Customer Success",
  },
  {
    slug: "future-of-product-education",
    title: "The future of product education",
    excerpt: "The next generation of product education will look less like a content library and more like a participation loop your users want to finish.",
    author: "Karan Goyal",
    date: "February 26, 2026",
    category: "Strategy",
  },
];

export const COMPANY_HIGHLIGHTS = [
  "Docker",
  "Snowflake",
  "LangChain",
  "Vercel",
  "Linear",
  "Postman",
  "Resend",
  "Buildkite",
];

export const HOME_TAB_CASES = [
  {
    key: "onboarding",
    label: "Customer Onboarding",
    before: "Docs link in a welcome email. 12% finish rate. The same onboarding questions hit your CS team every week.",
    after: "A 3-minute challenge ships with the onboarding email. 54% completion. Your team sees which features new users still do not understand.",
    metrics: [
      { value: "54%", label: "challenge completion rate" },
      { value: "3 min", label: "time to finish" },
      { value: "31%", label: "fewer repetitive onboarding calls" },
    ],
  },
  {
    key: "community",
    label: "Community Engagement",
    before: "Your Slack launch post gets reactions for a day, then disappears. Community content is hard to reuse and hard to measure.",
    after: "A challenge turns every launch into something members can play, compare, and share. You get participation, referrals, and product education in one loop.",
    metrics: [
      { value: "2.4x", label: "more shares per launch" },
      { value: "68%", label: "players who finish and post scorecards" },
      { value: "110+", label: "challenge examples built already" },
    ],
  },
  {
    key: "launch",
    label: "Feature Launch",
    before: "You ship a feature, announce it once, and hope users connect the dots. Adoption stays low because the value never fully lands.",
    after: "The release email links to a focused challenge. Players learn what changed, where it helps, and how to use it before they ever open the app.",
    metrics: [
      { value: "2.1x", label: "lift in feature recall" },
      { value: "47%", label: "more qualified product conversations" },
      { value: "15", label: "questions per challenge" },
    ],
  },
];

export const PRICING_TIERS = [
  {
    name: "Pilot",
    price: "$99",
    cadence: "/mo",
    badge: "Most popular",
    description: "For teams validating interactive onboarding with a hands-on pilot.",
    features: [
      "3 live challenges",
      "We handle challenge content for you",
      "Hosted challenge pages",
      "Shareable scorecards",
      "Completion and score analytics",
      "48 hour support",
    ],
  },
  {
    name: "Growth",
    price: "$199",
    cadence: "/mo",
    description: "For teams running challenges across onboarding, launches, and community programs.",
    features: [
      "10 live challenges",
      "Full brand styling",
      "Question-level analytics",
      "Knowledge gap reporting",
      "CSV export",
      "24 hour support",
    ],
  },
  {
    name: "Scale",
    price: "$449",
    cadence: "/mo",
    description: "For companies operationalizing product education across multiple teams.",
    features: [
      "Unlimited challenges",
      "Embedded experiences",
      "Lead capture and player-level exports",
      "Priority launch support",
      "Custom reporting",
      "Quarterly strategy review",
    ],
  },
];

export const PRICING_FAQS = [
  {
    question: "What happens in the $99 pilot?",
    answer: "You get three live challenges and our team handles content setup. The pilot is designed to prove fit quickly without asking your team to build everything from scratch.",
  },
  {
    question: "Is there a free tier?",
    answer: "No. The product starts at the Pilot plan because every account includes setup support and challenge production.",
  },
  {
    question: "Do you really create the challenge content?",
    answer: "Yes. For Pilot we handle the content with you. Growth and Scale include the same workflow, plus more room to run multiple programs at once.",
  },
  {
    question: "How many questions are in each challenge?",
    answer: "Each challenge uses 15 questions across five formats: Truth or Myth, This or That, Quick Pick, Odd One Out, and Speed Round.",
  },
  {
    question: "Can we embed challenges in docs or product pages?",
    answer: "Yes. Embedded experiences are included on Scale, and hosted challenge pages are available on every plan.",
  },
  {
    question: "What analytics do we get?",
    answer: "All plans include completion rate and score analytics. Growth adds question-level performance and Scale adds player-level exports and custom reporting.",
  },
  {
    question: "Can we use challenges for launches and community, not just onboarding?",
    answer: "Yes. Teams commonly run the same product on onboarding, feature launches, community campaigns, and documentation checkpoints.",
  },
  {
    question: "How fast can we launch?",
    answer: "Most teams launch their first challenge within a few days once we have the docs URL and the distribution plan.",
  },
  {
    question: "Do you support custom branding?",
    answer: "Yes. Pilot includes your logo and brand color. Growth and Scale add fuller visual control depending on the program.",
  },
  {
    question: "Who is this best for?",
    answer: "The strongest fit is a B2B developer tools company with a product-led motion and a team that cares about onboarding, education, launches, or community participation.",
  },
];

export const USE_CASE_CARDS: UseCaseCard[] = [
  {
    slug: "onboarding",
    eyebrow: "Customer Success",
    title: "Customer onboarding",
    description: "Replace passive welcome docs with a 3-minute challenge that shows what your new users actually learned.",
    href: "/use-cases/onboarding",
    icon: Users,
    metrics: [
      { value: "54%", label: "completion rate" },
      { value: "31%", label: "fewer repeat calls" },
    ],
  },
  {
    slug: "community",
    eyebrow: "Community",
    title: "Community engagement",
    description: "Give launches, office hours, and release drops a format members want to share instead of skim.",
    href: "/use-cases/community",
    icon: Boxes,
    metrics: [
      { value: "2.4x", label: "more challenge shares" },
      { value: "68%", label: "scorecard post rate" },
    ],
  },
  {
    slug: "marketing",
    eyebrow: "Marketing",
    title: "Lead generation",
    description: "Turn static educational content into a qualifying experience that teaches the product while capturing demand.",
    href: "/use-cases/marketing",
    icon: Megaphone,
    metrics: [
      { value: "43%", label: "qualified lead rate" },
      { value: "3 min", label: "time to value" },
    ],
  },
  {
    slug: "documentation",
    eyebrow: "Docs",
    title: "Documentation enhancement",
    description: "Embed knowledge checks after important docs sections so you can see whether your documentation is actually landing.",
    href: "/use-cases/documentation",
    icon: BookOpenText,
    metrics: [
      { value: "12%", label: "docs completion baseline" },
      { value: "75%", label: "active recall retention" },
    ],
  },
  {
    slug: "product-teams",
    eyebrow: "Product",
    title: "Feature launches",
    description: "Pair every launch with a challenge that makes feature education measurable instead of wishful.",
    href: "/use-cases/product-teams",
    icon: Braces,
    metrics: [
      { value: "2.1x", label: "feature recall" },
      { value: "40%", label: "unused feature baseline" },
    ],
  },
];

export const USE_CASE_PAGES: Record<string, UseCaseTemplateData> = {
  onboarding: {
    metadataTitle: "Customer Onboarding Challenges",
    metadataDescription: "Help new users understand your product before the first success review. Replace passive docs with a measurable onboarding challenge.",
    eyebrow: "Customer onboarding",
    title: "Your onboarding docs are being ignored before your first check-in.",
    description: "Turn the welcome flow into a 3-minute challenge that teaches the core product, gives users a scorecard, and shows your CS team where understanding is still weak.",
    persona: "For Heads of Customer Success and onboarding leads at product-led dev tools companies.",
    liveHref: "/play/notion",
    ctaSource: "use-case-onboarding",
    problemHeading: "New users arrive to your onboarding calls half-informed.",
    problemCopy: [
      "You send a thoughtful welcome email, a docs hub, and a checklist. Most users skim the first section and move on.",
      "By the time your CS team meets them, the conversation is still stuck on basics. The same questions repeat, advanced features stay hidden, and activation takes longer than it should.",
    ],
    metrics: [
      { value: "54%", label: "completion rate on challenges" },
      { value: "12%", label: "typical docs completion" },
      { value: "31%", label: "fewer repetitive onboarding calls" },
      { value: "15", label: "questions in the first challenge" },
    ],
    beforeAfter: [
      ["Welcome email with three docs links", "Welcome email with one challenge and one clear next step"],
      ["Users say they have read the docs", "Users arrive with a score that shows what they actually know"],
      ["CS repeats product basics live", "CS starts from the gaps surfaced in the analytics"],
      ["Feature education depends on who reads", "Every user sees the same core concepts in the same sequence"],
    ],
    workflow: [
      {
        title: "Paste the onboarding docs URL",
        description: "Use your quickstart, activation checklist, or getting started guide as the source material.",
      },
      {
        title: "Launch the challenge in the welcome flow",
        description: "Send it in the first email, in-product checklist, or community welcome thread.",
      },
      {
        title: "Let users finish in one sitting",
        description: "The challenge takes about three minutes, so users complete it before the task feels like homework.",
      },
      {
        title: "Review the knowledge gaps",
        description: "Your team sees where users still need help before the first success review ever happens.",
      },
    ],
    teamViewTitle: "What your CS team sees after week one",
    teamViewSummary: "Activation is easier when the team can separate “did not learn it yet” from “read it but still does not get it.”",
    teamViewMetrics: [
      { value: "82%", label: "understand setup basics" },
      { value: "46%", label: "understand permissions model" },
      { value: "63%", label: "understand workflow automation" },
    ],
    teamViewInsights: [
      "Users who score under 60% on permissions questions are the same segment booking extra setup calls.",
      "Workflow automation is being discovered, but the “when to use it” questions still underperform.",
      "The first follow-up email can now focus on two concepts instead of re-teaching the entire product.",
    ],
    quote: {
      text: "The challenge gave us a cleaner first conversation. We stopped asking if users had read the docs and started talking about the features they had missed.",
      role: "Head of CS at a dev tools company",
    },
  },
  community: {
    metadataTitle: "Community Engagement Challenges",
    metadataDescription: "Give your community something better than a release post. Launch interactive challenges members can finish, share, and compare.",
    eyebrow: "Community engagement",
    title: "Your community needs something better than another release post.",
    description: "Turn feature launches, office hours, and product explainers into interactive challenges members finish in minutes and share publicly with a scorecard.",
    persona: "For community managers and developer relations teams who need participation they can measure.",
    liveHref: "/play/docker",
    ctaSource: "use-case-community",
    problemHeading: "Community content disappears the moment the feed moves on.",
    problemCopy: [
      "A launch post gets attention for a few hours. Then it gets buried under support questions, screenshots, and event promos.",
      "That means every announcement has to work harder. You need something members will actually participate in and something your team can point to after the week is over.",
    ],
    metrics: [
      { value: "68%", label: "players who share scorecards" },
      { value: "2.4x", label: "more engagement per launch" },
      { value: "110+", label: "challenge examples already built" },
      { value: "5,000+", label: "plays in the first two weeks" },
    ],
    beforeAfter: [
      ["One Slack post, then silence", "A challenge link members play and repost"],
      ["No signal beyond reactions", "Completion, score, and topic-level engagement data"],
      ["Announcements feel like marketing", "Announcements feel participatory and competitive"],
      ["Community learns passively", "Community learns through active recall"],
    ],
    workflow: [
      {
        title: "Build around the release or event",
        description: "Use release notes, feature docs, or event prep content as the source.",
      },
      {
        title: "Share in Slack, Discord, or your newsletter",
        description: "The challenge works as a simple link, so it fits cleanly into the channels your community already uses.",
      },
      {
        title: "Let members compare scorecards",
        description: "Players finish with a radar chart they can post back into the conversation.",
      },
      {
        title: "Use the analytics to plan the next program",
        description: "See which topics landed, which confused people, and where your next office hours should focus.",
      },
    ],
    teamViewTitle: "What your community team sees",
    teamViewSummary: "The best community programs create participation and product understanding at the same time.",
    teamViewMetrics: [
      { value: "71%", label: "release challenge completion" },
      { value: "39%", label: "share-to-play conversion" },
      { value: "58%", label: "members who discovered a new feature" },
    ],
    teamViewInsights: [
      "Launch posts with challenges drive longer conversation threads than posts with screenshots alone.",
      "The highest-scoring players often become the fastest advocates because they understand the product in public.",
      "Your team gets a repeatable format for launches, recaps, and educational campaigns without inventing a new campaign every week.",
    ],
    quote: {
      text: "It felt less like asking the community to read and more like inviting them to participate. That changed the response immediately.",
      role: "Community lead at a dev tools company",
    },
  },
  marketing: {
    metadataTitle: "Lead Generation Challenges",
    metadataDescription: "Turn educational content into an interactive lead generation asset that qualifies demand by product understanding, not just a form fill.",
    eyebrow: "Lead generation",
    title: "Your highest-intent visitors need more than a PDF and a form.",
    description: "Use a challenge as an interactive content asset that teaches your product, qualifies demand, and captures leads from people who already understand what you do.",
    persona: "For marketing leaders who want higher-quality pipeline from product education content.",
    liveHref: "/play/hubspot",
    ctaSource: "use-case-marketing",
    problemHeading: "Static lead magnets create cold handoffs.",
    problemCopy: [
      "A form fill does not tell your team whether the visitor understands the product or even remembers what they downloaded.",
      "If you want your pipeline to be more qualified, the content itself has to educate. Otherwise every follow-up starts from zero.",
    ],
    metrics: [
      { value: "43%", label: "qualified lead rate" },
      { value: "3 min", label: "average challenge completion time" },
      { value: "29%", label: "lift in demo-request quality" },
      { value: "15", label: "questions per content asset" },
    ],
    beforeAfter: [
      ["Download a PDF, forget the product", "Play a challenge, finish with a score and a clearer mental model"],
      ["Marketing sends a cold lead to sales", "Marketing sends a lead that already understands the basics"],
      ["No signal beyond page views and form fills", "A visible score and topic-level understanding"],
      ["Static content gets skimmed", "Interactive content gets completed and shared"],
    ],
    workflow: [
      {
        title: "Choose a topic with product intent",
        description: "Use a feature page, educational landing page, or comparison guide as the source material.",
      },
      {
        title: "Place the challenge inside the campaign",
        description: "Embed it in the page or use it as the main CTA from paid, email, or organic content.",
      },
      {
        title: "Capture the interested players",
        description: "Players who finish have already spent focused time understanding your product story.",
      },
      {
        title: "Route follow-up by what they learned",
        description: "Your team knows which concepts resonated and which concepts need to be reinforced in follow-up.",
      },
    ],
    teamViewTitle: "What marketing sees",
    teamViewSummary: "The best content does more than attract attention. It moves product understanding forward before a rep ever gets involved.",
    teamViewMetrics: [
      { value: "61%", label: "players who request more info" },
      { value: "47%", label: "can explain the core feature after playing" },
      { value: "36%", label: "return visits from scorecard shares" },
    ],
    teamViewInsights: [
      "You can finally see which campaigns teach the product well, not just which campaigns drive clicks.",
      "Players who finish a challenge give sales a stronger opening than leads who downloaded a static asset.",
      "Challenge analytics reveal where your messaging is still too abstract or too feature-heavy.",
    ],
    quote: {
      text: "The challenge acted like a lead magnet and a product explainer at the same time. That changed the quality of every follow-up conversation.",
      role: "VP of Marketing at a dev tools company",
    },
  },
  documentation: {
    metadataTitle: "Documentation Challenges",
    metadataDescription: "Embed interactive knowledge checks in your docs so you can measure comprehension instead of guessing from page views.",
    eyebrow: "Documentation",
    title: "Page views do not tell you whether your docs are working.",
    description: "Add a challenge after key docs sections to measure comprehension, identify confusing concepts, and turn passive reading into active recall.",
    persona: "For docs teams and product marketers who need better product understanding from self-serve education.",
    liveHref: "/play/docker",
    ctaSource: "use-case-documentation",
    problemHeading: "Your docs team can see traffic but not understanding.",
    problemCopy: [
      "Docs analytics tell you where people landed, how long they stayed, and where they bounced. None of that tells you whether the explanation actually worked.",
      "Without a direct knowledge signal, every rewrite is guesswork. You do not know which concepts need a better example and which concepts already land clearly.",
    ],
    metrics: [
      { value: "12%", label: "docs completion baseline" },
      { value: "75%", label: "retention with active recall" },
      { value: "32%", label: "docs sections flagged for rewrite" },
      { value: "54%", label: "average challenge completion" },
    ],
    beforeAfter: [
      ["Page views as the main success metric", "Comprehension data attached to the content itself"],
      ["Guess which section caused confusion", "See exactly which concept users miss most often"],
      ["Readers move on without checking understanding", "Readers finish with immediate feedback and a score"],
      ["Docs updates happen reactively", "Docs improvements happen from measured weak spots"],
    ],
    workflow: [
      {
        title: "Choose a docs section that matters",
        description: "Start with setup, API onboarding, permissions, or any page that blocks product adoption when misunderstood.",
      },
      {
        title: "Add the challenge after the section",
        description: "Use a hosted link or embed so the challenge appears as the natural next step after reading.",
      },
      {
        title: "Measure comprehension by topic",
        description: "See which concepts are retained and where the explanation is still not clicking.",
      },
      {
        title: "Improve the docs with direct evidence",
        description: "Rewrite the weak sections, then watch challenge performance improve over time.",
      },
    ],
    teamViewTitle: "What the docs team sees",
    teamViewSummary: "A docs page should not just be visited. It should create understanding you can verify.",
    teamViewMetrics: [
      { value: "94%", label: "quickstart comprehension" },
      { value: "45%", label: "permissions comprehension" },
      { value: "38%", label: "workflow automation comprehension" },
    ],
    teamViewInsights: [
      "The permissions model usually underperforms because the docs explain what it is, not when to use each path.",
      "Quickstart pages often score well, which makes them a strong model for how to rewrite more advanced pages.",
      "Support teams benefit because the documentation backlog starts matching what users actually misunderstand.",
    ],
    quote: {
      text: "We stopped debating whether a page was clear and started looking at what readers actually got wrong. That was a better editing workflow immediately.",
      role: "Docs owner at a dev tools company",
    },
  },
  "product-teams": {
    metadataTitle: "Feature Launch Challenges",
    metadataDescription: "Make every feature launch more understandable and measurable with a challenge that teaches value before adoption stalls.",
    eyebrow: "Product teams",
    title: "You shipped the feature. Your users still do not understand why it matters.",
    description: "Pair every release with a challenge that teaches the feature, improves recall, and gives product teams a direct signal on where understanding breaks down.",
    persona: "For product, growth, and lifecycle teams responsible for adoption after launch.",
    liveHref: "/play/vercel",
    ctaSource: "use-case-product-teams",
    problemHeading: "Feature adoption is often a comprehension problem in disguise.",
    problemCopy: [
      "Launch emails, changelogs, and tooltips make users aware that something exists. They do not guarantee users understand when to use it or why it is valuable.",
      "When adoption stays low, teams often blame distribution first. In reality, many users simply never built the right mental model after the announcement.",
    ],
    metrics: [
      { value: "40%", label: "of features go unused after launch" },
      { value: "2.1x", label: "lift in feature recall" },
      { value: "47%", label: "more qualified product conversations" },
      { value: "5 min", label: "to brief the next launch challenge" },
    ],
    beforeAfter: [
      ["Release note gets announced once", "Release challenge teaches the feature interactively"],
      ["Adoption is judged by usage only", "Adoption is paired with understanding data"],
      ["Low usage leaves the team guessing", "Low comprehension points directly to the missing concept"],
      ["Every launch uses the same content format", "Every launch has a format users can finish and share"],
    ],
    workflow: [
      {
        title: "Source the challenge from the release material",
        description: "Use changelogs, docs, and launch notes as the basis for the 15-question flow.",
      },
      {
        title: "Ship it with the release",
        description: "Include the challenge in the email, changelog, docs hub, or in-app launch surface.",
      },
      {
        title: "Review which concepts landed",
        description: "Question-level results show whether users understand the setup, the use case, and the feature boundaries.",
      },
      {
        title: "Use the next follow-up to close the gap",
        description: "Target the concept that lagged instead of sending another generic reminder.",
      },
    ],
    teamViewTitle: "What product teams see after a launch",
    teamViewSummary: "The release is not done when the announcement goes live. It is done when users actually understand the feature well enough to adopt it.",
    teamViewMetrics: [
      { value: "83%", label: "understand the feature headline" },
      { value: "41%", label: "understand when to use it" },
      { value: "52%", label: "understand setup requirements" },
    ],
    teamViewInsights: [
      "Launch messaging often explains what shipped before it explains the specific problem it solves.",
      "If understanding is strong but adoption is still weak, the issue may be UX or market demand rather than education.",
      "If understanding is weak, the team knows exactly what to reinforce before the next launch cycle.",
    ],
    quote: {
      text: "We finally had a way to tell whether users actually understood the launch, not just whether they saw the announcement.",
      role: "Product lead at a dev tools company",
    },
  },
};

export { BLOG_POSTS };

function titleCaseWord(word: string) {
  if (NAME_OVERRIDES[word]) {
    return NAME_OVERRIDES[word];
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

function humanizeSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => titleCaseWord(word))
    .join(" ");
}

function findLogoPath(slug: string) {
  if (LOGO_OVERRIDES[slug]) {
    return LOGO_OVERRIDES[slug];
  }

  const publicDir = path.join(process.cwd(), "public/logos");
  const candidates = [".svg", ".png", ".jpg", ".webp", ".ico"].map((ext) => `${slug}${ext}`);
  const match = candidates.find((fileName) => fs.existsSync(path.join(publicDir, fileName)));

  return match ? `/logos/${match}` : null;
}

export const getChallengeEntries = cache((): ChallengeEntry[] => {
  const quizDir = path.join(process.cwd(), "src/quizzes");
  const files = fs.readdirSync(quizDir).filter((file) => file.endsWith(".tsx"));

  return files
    .map((file) => file.replace(/\.tsx$/, ""))
    .filter((slug) => slug !== "generated-preview")
    .sort((left, right) => humanizeSlug(left).localeCompare(humanizeSlug(right)))
    .map((slug) => ({
      slug,
      name: humanizeSlug(slug),
      logoPath: findLogoPath(slug),
      href: `/play/${slug}`,
    }));
});
