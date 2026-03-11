import type { QuizConfig } from "@/components/quiz/types";

export const fastlyConfig: QuizConfig = {
  slug: "fastly",
  toolName: "Fastly",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "Just you vs. Fastly trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#FF282D",
  accentColorDim: "#D91D23",
  accentColorSubtle: "rgba(255,40,45,0.10)",
  bgColor: "#F8FAFC",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EEF2F7",
  textColor: "#0D1422",
  textSecondary: "#3F4C5E",
  textTertiary: "#6E7A8B",
  borderColor: "#D8E0EA",
  borderSubtle: "#E9EEF4",
  scorecardBg: "#0D1422",
  scorecardAccentColor: "#FF5458",
  scorecardDivider: "#233046",
  scorecardLabelColor: "#A9B6C8",
  scorecardGridColor: "#233046",
  logo: (
    <img
      src="/logos/fastly.png"
      alt="Fastly"
      width={44}
      height={44}
      style={{ borderRadius: 10, objectFit: "contain" }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/fastly.png"
      alt="Fastly"
      width={42}
      height={42}
      style={{ borderRadius: 10, objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "fastly",
  dimensionLabels: {
    memory: "Edge Basics",
    orchestration: "Traffic Flow",
    automation: "Deploy & Logging",
    extensibility: "Platform Capabilities",
    workflows: "Caching & Purging",
    prompting: "Header Strategy",
    bestPractices: "Reliability & Ops",
  },
  archetypes: [
    {
      title: "Edge Commander",
      emoji: "⚡",
      description:
        "You understand Fastly deeply, from caching semantics and purging to shielding, observability, and safe deployments.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Delivery Architect",
      emoji: "🏗️",
      description:
        "You have strong command of Fastly's core mechanics and can make sharp edge-delivery decisions in production.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Cache Strategist",
      emoji: "🧠",
      description:
        "You can reason about Fastly behavior confidently. A few advanced implementation details are left to master.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Edge Operator",
      emoji: "🛠️",
      description:
        "You know Fastly's day-to-day workflow and can ship changes safely, with room to grow on deeper optimization patterns.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Platform Practitioner",
      emoji: "📦",
      description:
        "You have the fundamentals and can run practical use cases, but some edge-specific nuances are still developing.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "CDN Explorer",
      emoji: "🌱",
      description:
        "You are building a solid Fastly baseline and now need more repetition on versioning, purging, and cache controls.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First POP",
      emoji: "🚀",
      description:
        "Great start. You have the key concepts, and deeper Fastly internals will click quickly from here.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "memory",
      statement:
        "Fastly is an edge cloud platform that includes CDN delivery and edge compute capabilities",
      isTrue: true,
      explanation:
        "Fastly positions itself as an edge cloud platform, combining modern content delivery with programmable edge services.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "workflows",
      statement:
        "Fastly's Surrogate-Key response header can tag cache objects so you can purge by key later",
      isTrue: true,
      explanation:
        "Surrogate keys are a core Fastly pattern for grouped invalidation without purging every URL one by one.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "bestPractices",
      statement:
        "Changes to a Fastly service version become live automatically right after you save them",
      isTrue: false,
      explanation:
        "Fastly uses service versioning. Configuration changes take effect in production only after version activation.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "orchestration",
      statement:
        "Origin shielding can reduce repetitive origin fetches by funneling requests through a shield POP",
      isTrue: true,
      explanation:
        "Shielding introduces a designated shield layer between edge POPs and origin, reducing duplicate origin traffic.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "prompting",
      scenario:
        "You want longer edge caching but short browser caching. Which policy is better?",
      optionA:
        "Set Surrogate-Control for CDN TTL and keep a shorter browser Cache-Control max-age",
      optionB: "Use one short Cache-Control max-age for everyone",
      correct: "A",
      explanation:
        "Fastly checks surrogate-specific controls first, so Surrogate-Control lets you tune CDN caching independently from browser caching.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "workflows",
      scenario:
        "A product launch changed 500 related pages tagged with the same key. What's the safer move?",
      optionA: "Purge by surrogate key for that content group",
      optionB: "Run Purge All for the entire service",
      correct: "A",
      explanation:
        "Key-based purging targets the exact content set and avoids unnecessary global cache invalidation.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "orchestration",
      scenario:
        "You need to modify production behavior on a live service version. What workflow is better?",
      optionA: "Edit the active version directly in place",
      optionB: "Clone to a new version, change it, and activate when ready",
      correct: "B",
      explanation:
        "Version cloning and activation is Fastly's standard deployment workflow for controlled rollouts and rollback safety.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "prompting",
      scenario:
        "Which header does Fastly evaluate first when deciding cache freshness lifetime?",
      blank: "Surrogate-Control",
      options: ["Surrogate-Control", "Expires", "ETag"],
      explanation:
        "Fastly evaluates Surrogate-Control first, then Cache-Control directives, then Expires.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "memory",
      scenario:
        "Which response header is used to attach surrogate cache keys in Fastly?",
      blank: "Surrogate-Key",
      options: ["Surrogate-Key", "X-Forwarded-For", "Content-Security-Policy"],
      explanation:
        "Surrogate-Key is Fastly's key-tagging header for grouped purge operations.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "automation",
      scenario:
        "After configuring a new service version, what step makes it serve live traffic?",
      blank: "Activate the version",
      options: ["Activate the version", "Export the version", "Compress the version"],
      explanation:
        "Fastly service versions require activation before new configuration reaches production requests.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real Fastly capability!",
      correctItems: [
        "Compute",
        "VCL services",
        "Origin shielding",
        "Image Optimizer",
        "Surrogate key purging",
      ],
      wrongItems: [
        "CloudFront Functions",
        "Lambda@Edge",
        "Route53 hosted zones",
        "EC2 Auto Scaling groups",
      ],
      timeLimit: 15,
      explanation:
        "All correct items are Fastly platform capabilities. The wrong items belong to other cloud platforms.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "automation",
      prompt: "Tap every endpoint type Fastly supports for log streaming!",
      correctItems: ["Amazon S3", "BigQuery", "Datadog", "New Relic", "Syslog"],
      wrongItems: ["Google Docs", "Trello Board", "Airtable View", "Figma File"],
      timeLimit: 15,
      explanation:
        "Fastly supports streaming logs to operational destinations like S3, BigQuery, Datadog, New Relic, and Syslog.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "prompting",
      prompt:
        "One option is NOT part of Fastly's documented cache-lifetime precedence. Which one?",
      items: [
        "Surrogate-Control",
        "Cache-Control: s-maxage",
        "Expires",
        "X-Robots-Tag",
      ],
      oddItem: "X-Robots-Tag",
      explanation:
        "Fastly's cache lifetime precedence includes Surrogate-Control, Cache-Control directives, and Expires, not SEO metadata headers.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "workflows",
      prompt: "One of these is NOT a Fastly purge style. Which one?",
      items: ["Purge all", "Purge by URL", "Purge by surrogate key", "Purge by SQL query"],
      oddItem: "Purge by SQL query",
      explanation:
        "Fastly supports purge-all, URL purge, and key-based purge. SQL-based purge is not a Fastly cache invalidation mode.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "bestPractices",
      statement:
        "If a response is marked Cache-Control: private, shared caches like Fastly should not store it",
      isTrue: true,
      explanation:
        "The private directive is for user-specific responses and tells shared caches not to store that content.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Edge truth or fake claim?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the safer production move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name the right Fastly concept" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Tap fast, filter noise" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the subtle fake" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Edge architecture level." },
  ],
};
