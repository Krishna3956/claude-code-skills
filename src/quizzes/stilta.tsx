import type { QuizConfig } from "@/components/quiz/types";

export const stiltaConfig: QuizConfig = {
  slug: "stilta",
  toolName: "Stilta",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "Just you vs. patent-intelligence power-user mode.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#111827",
  accentColorDim: "#0F172A",
  accentColorSubtle: "rgba(17,24,39,0.08)",
  bgColor: "#F8FAFC",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#F1F5F9",
  textColor: "#111827",
  textSecondary: "#334155",
  textTertiary: "#64748B",
  borderColor: "#E2E8F0",
  borderSubtle: "#EEF2F7",
  scorecardBg: "#111827",
  scorecardAccentColor: "#E2E8F0",
  scorecardDivider: "#334155",
  scorecardLabelColor: "#CBD5E1",
  scorecardGridColor: "#334155",
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        src="/logos/stilta.png"
        alt="Stilta"
        width={36}
        height={36}
        style={{ borderRadius: 8, objectFit: "contain" }}
      />
      <span style={{ fontWeight: 600, letterSpacing: "-0.01em" }}>Stilta</span>
    </div>
  ),
  scorecardLogo: (
    <img
      src="/logos/stilta.png"
      alt="Stilta"
      width={42}
      height={42}
      style={{ borderRadius: 12, objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "stilta",
  dimensionLabels: {
    memory: "Patent Context",
    orchestration: "Reasoning Quality",
    automation: "Monitoring & Agents",
    extensibility: "IP Stack Integration",
    workflows: "Search Workflows",
    prompting: "Query Strategy",
    bestPractices: "Trust & Security",
  },
  archetypes: [
    {
      title: "Portfolio Strategist",
      emoji: "🏛️",
      description:
        "You run Stilta like an expert operator. Search, monitoring, explainability, and workflow design are all dialed in.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Claim Cartographer",
      emoji: "🧭",
      description:
        "You think in claim-level evidence, not vague summaries. Your instincts are strong across FTO and prior-art workflows.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "IP Systems Builder",
      emoji: "⚙️",
      description:
        "You understand how Stilta fits real IP operations and where to trust, verify, and escalate.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Research Accelerator",
      emoji: "🚀",
      description:
        "You know the core platform capabilities and can drive useful outcomes quickly. Advanced rigor is the next unlock.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Workflow Analyst",
      emoji: "📊",
      description:
        "You can run solid searches and interpret results, but some higher-stakes judgment calls are still developing.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Patent Explorer",
      emoji: "🔎",
      description:
        "You have the right foundation, and now you are learning to use evidence, confidence, and monitoring more strategically.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Filing",
      emoji: "🌱",
      description:
        "Good start. You are learning how to turn AI output into defensible IP decisions.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "workflows",
      statement:
        "A strong Stilta user treats AI outputs as draft analysis to verify, not as final legal conclusions to forward untouched",
      isTrue: true,
      explanation:
        "That matches the product's trust model. Stilta is built around explainable reasoning, citations, and reviewable evidence so experts can validate the conclusion before acting on it.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "bestPractices",
      statement:
        "Stilta says customer data can be reused to train shared models by default",
      isTrue: false,
      explanation:
        "Their trust and security messaging explicitly says customer data is not used to train models and remains isolated.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "Stilta emphasizes explainable outputs with citations, confidence signals, and traceable reasoning",
      isTrue: true,
      explanation:
        "The product repeatedly frames trust around traceability: evidence, confidence, and why each result was flagged.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "extensibility",
      statement:
        "Stilta only works as a standalone tool and cannot be connected to an existing IPMS",
      isTrue: false,
      explanation:
        "Their platform pages describe both modes: standalone and integration with existing IPMS workflows.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "workflows",
      scenario:
        "Your team needs to check market entry risk for a new product concept. Which Stilta workflow is the better first move?",
      optionA: "Run Freedom to Operate with claim-level mapping",
      optionB: "Only run a broad landscape chart with no claim matching",
      correct: "A",
      explanation:
        "FTO is designed for blocking-risk analysis. Landscape context helps, but claim-level overlap is what drives legal risk decisions.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "automation",
      scenario:
        "You already assessed this quarter's threats. What keeps you from being blindsided next month?",
      optionA: "Set up continuous monitoring and relevance alerts",
      optionB: "Repeat manual searches when someone remembers",
      correct: "A",
      explanation:
        "Stilta's monitoring layer is built exactly for this: ongoing signal detection instead of periodic reactive searching.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "bestPractices",
      scenario:
        "An executive asks for a one-slide risk summary. Which process is stronger?",
      optionA: "Use only a model summary with no source trails",
      optionB: "Use Stilta's explainable outputs and verify key citations before presenting",
      correct: "B",
      explanation:
        "For high-stakes IP decisions, defensibility matters. Citation-backed reasoning is the safer executive workflow.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "prompting",
      scenario:
        "Which query style best matches Stilta's plain-language interaction model?",
      blank: "Are there any patents blocking our new battery design in the EU?",
      options: [
        "Are there any patents blocking our new battery design in the EU?",
        "run_query_v4 { corpus=all; filter=strict; mode=raw }",
        "NULL",
      ],
      explanation:
        "Stilta markets natural-language questions with explainable results, reducing dependence on heavy Boolean-only workflows.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "orchestration",
      scenario:
        "You are deciding whether to escalate a flagged competitor patent. What output do you want open on screen first?",
      blank: "Citations + confidence + reasoning trail",
      options: [
        "Citations + confidence + reasoning trail",
        "Single confidence number only",
        "Unreferenced paragraph summary",
      ],
      explanation:
        "Their differentiation is not just speed. It is verifiability: why the result exists and what evidence supports it.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "automation",
      scenario:
        "A veteran Stilta operator checking a live competitor space will value which setup most?",
      blank: "Continuous monitoring with relevant alerts",
      options: [
        "Continuous monitoring with relevant alerts",
        "One-off manual searches saved in screenshots",
        "A quarterly spreadsheet with no source links",
      ],
      explanation:
        "Power users do not want to rediscover risk from scratch each time. The monitoring layer is what turns Stilta from a one-off search tool into an operating workflow.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "workflows",
      prompt: "Tap every workflow Stilta explicitly highlights as core!",
      correctItems: [
        "Novelty Search",
        "Freedom to Operate",
        "Landscape Mapping",
        "Prior Art Search",
        "Continuous Monitoring",
      ],
      wrongItems: [
        "Ad campaign attribution",
        "Payroll reconciliation",
        "Graphic design prototyping",
        "Cloud cost forecasting",
      ],
      timeLimit: 15,
      explanation:
        "Stilta's surface area is patent intelligence workflows, not generic business operations tools.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "bestPractices",
      prompt: "Tap every trust/security claim Stilta repeatedly makes!",
      correctItems: [
        "Data is encrypted and isolated",
        "Customer data not used to train models",
        "Traceable references",
        "Explainable reasoning",
        "No black-box-only outputs",
      ],
      wrongItems: [
        "All customer data is public by default",
        "No citations needed in reports",
        "Anonymous shared data lake",
        "No need for human review",
      ],
      timeLimit: 15,
      explanation:
        "Their trust story is explicit: isolation, explainability, and decision support for professional scrutiny.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "automation",
      prompt: "One of these is NOT a Stilta-aligned monitoring outcome. Which one?",
      items: [
        "Alert when relevant competitor patents appear",
        "Track changes continuously across monitored spaces",
        "Surface relevant updates instead of constant manual checks",
        "Disable alerts and wait for quarterly surprises",
      ],
      oddItem: "Disable alerts and wait for quarterly surprises",
      explanation:
        "Stilta positions monitoring as proactive risk reduction; quarterly-only manual checks are exactly what it tries to replace.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "prompting",
      prompt: "One query is weakest for high-quality Stilta analysis. Which one?",
      items: [
        "What claims overlap with our separator architecture in EU filings?",
        "Show evidence for each flagged blocking patent",
        "List confidence and source references for each recommendation",
        "Tell me if we are safe",
      ],
      oddItem: "Tell me if we are safe",
      explanation:
        "Experienced users do not ask broad comfort-seeking questions. They scope by jurisdiction, claim overlap, source evidence, and decision threshold.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "memory",
      statement:
        "Stilta says it can connect patents, citations, legal docs, litigation data, and market intelligence into one reasoning layer",
      isTrue: true,
      explanation:
        "That multi-source reasoning layer is a core platform claim and underpins their portfolio-level analysis narrative.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Real capability or fake claim?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the stronger IP move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Nail the core concepts" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Scan fast, reason faster" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the weak strategy" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. High stakes." },
  ],
};
