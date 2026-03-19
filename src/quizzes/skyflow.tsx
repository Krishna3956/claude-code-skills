import type { QuizConfig } from "@/components/quiz/types";

const skyflowLogo = (
  <img
    src="/logos/skyflow.svg"
    alt="Skyflow"
    width={150}
    height={45}
    style={{ objectFit: "contain" }}
  />
);

export const skyflowConfig: QuizConfig = {
  slug: "skyflow",
  toolName: "Skyflow",
  tagline: "5 rounds. ~3 min. No raw PII in app logs required.",
  subtitle:
    "Made for serious Skyflow users. Vaults, tokenization, Elements, governance, Connections, Pipelines, Functions, and AI data-sanitization judgment.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#123B74",
  accentColorDim: "#0C2952",
  accentColorSubtle: "rgba(18,59,116,0.10)",
  bgColor: "#F4F7FB",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EAF1F8",
  textColor: "#0D1B2A",
  textSecondary: "#44566C",
  textTertiary: "#6A7D92",
  borderColor: "#C9D9EA",
  borderSubtle: "#DFEAF4",
  scorecardBg: "#0C1830",
  scorecardAccentColor: "#6CA6FF",
  scorecardDivider: "#28456A",
  scorecardLabelColor: "#D2E3FF",
  scorecardGridColor: "#28456A",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#D7E4F0",
  ctaTextColor: "#FFFFFF",
  logo: skyflowLogo,
  scorecardLogo: (
    <img
      src="/logos/skyflow.svg"
      alt="Skyflow"
      width={142}
      height={42}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "skyflow",
  dimensionLabels: {
    memory: "Vault Model",
    orchestration: "Data Flows",
    automation: "Runtime Controls",
    extensibility: "Processing",
    workflows: "Secure Collection",
    prompting: "AI Sanitization",
    bestPractices: "Privacy Architecture",
  },
  archetypes: [
    {
      title: "Runtime Privacy Architect",
      emoji: "🔐",
      description:
        "You think in isolation boundaries, least-privilege access, and runtime-safe data flows. That is the right operating model for Skyflow.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Vault Systems Operator",
      emoji: "🧭",
      description:
        "You understand how Skyflow fits across collection, governance, and downstream usage. A bit more depth around processing choices would push you into the top tier.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Sensitive Data Builder",
      emoji: "⚙️",
      description:
        "You have solid Skyflow instincts. The remaining gap is mostly in choosing the strongest runtime pattern under pressure.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Privacy Workflow Designer",
      emoji: "🛡️",
      description:
        "You know the platform well enough to use it productively, though some of the deeper governance and processing boundaries still need tightening.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Tokenization Practitioner",
      emoji: "🏷️",
      description:
        "You understand the basics, but your architecture still leaves room for cleaner separation between sensitive systems and the rest of the stack.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Compliance Implementer",
      emoji: "📋",
      description:
        "You know why Skyflow exists, but the sharper product and runtime choices are not fully second nature yet.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Vault Explorer",
      emoji: "🌱",
      description:
        "You are early. The next step is learning how Skyflow separates collection, storage, governance, downstream use, and AI-safe data exposure.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "bestPractices",
      statement:
        "Skyflow positions itself as a runtime data privacy control layer rather than a tool for copying sensitive data into even more application systems",
      isTrue: true,
      explanation:
        "That is core Skyflow positioning. The product is meant to reduce sensitive-data sprawl, not normalize it across more services.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "prompting",
      statement:
        "Skyflow's AI and data-sanitization capability is about getting sensitive data into models faster, not about keeping sensitive data out of model context when it should be protected",
      isTrue: false,
      explanation:
        "That is false. Skyflow explicitly frames AI security around keeping sensitive data out of models unless exposure is governed and safe.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "workflows",
      scenario:
        "You need to collect cardholder or PII data in a browser without routing raw values through your frontend app state. Which move is stronger?",
      optionA: "Use Skyflow Elements or client-side SDKs to collect sensitive fields directly into the vault boundary",
      optionB: "Capture everything in your app first and tokenize it later after it has already crossed the frontend stack",
      correct: "A",
      explanation:
        "Skyflow explicitly positions Elements and client-side SDKs for secure client-side collection so raw sensitive values do not spread through app layers unnecessarily.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "orchestration",
      scenario:
        "Your team needs to send sensitive payment data to Stripe without exposing the raw data broadly across internal services. Which move is stronger?",
      optionA: "Build another internal relay service that handles the cleartext payload before forwarding it",
      optionB: "Use Skyflow Connections to securely send the data downstream to the third-party API",
      correct: "B",
      explanation:
        "Connections are the productized path Skyflow documents for securely using sensitive data with downstream APIs like Stripe and Adyen.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "memory",
      scenario:
        "Which Skyflow API is specifically called out for reading and writing sensitive data to a vault?",
      blank: "Data API",
      options: ["Management API", "Audit Export API", "Data API"],
      explanation:
        "The docs explicitly say the Data API is used to read and write sensitive data to a Vault.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "extensibility",
      scenario:
        "Which Skyflow feature is described as running custom code to process or transform data?",
      blank: "Functions",
      options: ["Vaults", "Functions", "Elements"],
      explanation:
        "Functions are the feature Skyflow describes for running custom processing or transformation logic on data.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "automation",
      prompt: "Tap every real Skyflow feature or control surface!",
      correctItems: ["Vault", "Connections", "Pipelines", "Functions", "Governance"],
      wrongItems: ["GPU autoscaler", "Email warmup", "Feature flag console", "Warehouse robotics"],
      timeLimit: 15,
      explanation:
        "Those are real Skyflow features or capability areas. The others belong to completely different product categories.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "prompting",
      prompt: "Tap every sensitive-data context Skyflow explicitly targets on the site!",
      correctItems: ["PII", "PCI", "PHI", "AI and MCP security", "Data residency"],
      wrongItems: ["Video transcoding", "Search ranking", "Calendar booking", "Code formatting"],
      timeLimit: 15,
      explanation:
        "Those are all on-site Skyflow use cases and product contexts. The others are unrelated workloads.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "extensibility",
      prompt:
        "One of these is NOT the right Skyflow processing boundary. Which one?",
      items: [
        "Use Pipelines when you need to process sensitive data in bulk",
        "Use Functions when custom transformation logic should run in Skyflow's processing layer",
        "Use Connections when sensitive data must reach Stripe or Adyen securely",
        "Use the Management API as your primary interface for reading and writing row-level sensitive data",
      ],
      oddItem:
        "Use the Management API as your primary interface for reading and writing row-level sensitive data",
      explanation:
        "That is the wrong one. The docs separate Data API for data access from Management API for managing Skyflow resources.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a strong Skyflow architecture instinct. Which one?",
      items: [
        "Minimize where raw sensitive data appears in your stack",
        "Apply fine-grained access controls around sensitive values",
        "Treat tokenization and governance as runtime controls, not just compliance theater",
        "Mirror raw sensitive records into as many internal tools as possible so every team has direct access",
      ],
      oddItem:
        "Mirror raw sensitive records into as many internal tools as possible so every team has direct access",
      explanation:
        "That is the anti-pattern Skyflow is designed to avoid. The platform exists to reduce exposure and enforce tighter runtime boundaries around sensitive data.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Real Skyflow architecture or invented privacy lore?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Choose the operator-grade move" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Name the exact API or feature" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real control surfaces" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the weak privacy instinct" },
  ],
};
