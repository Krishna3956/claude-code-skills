import type { QuizConfig } from "@/components/quiz/types";

export const vwoConfig: QuizConfig = {
  slug: "vwo",
  toolName: "VWO",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "Just you vs. VWO trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#6F3FF5",
  accentColorDim: "#5A31D4",
  accentColorSubtle: "rgba(111,63,245,0.12)",
  bgColor: "linear-gradient(135deg, #F8F4FF 0%, #F2EBFF 45%, #FDF2FA 100%)",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#F3ECFF",
  textColor: "#1F1440",
  textSecondary: "#4F4475",
  textTertiary: "#7B72A0",
  borderColor: "#DED3F5",
  borderSubtle: "#EFE7FF",
  scorecardBg: "#1D123A",
  scorecardAccentColor: "#A87BFF",
  scorecardDivider: "#3B2A68",
  scorecardLabelColor: "#C8BAEA",
  scorecardGridColor: "#3B2A68",
  logo: (
    <img
      src="/logos/vwo.png"
      alt="VWO"
      width={44}
      height={44}
      style={{ borderRadius: 10, objectFit: "contain" }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/vwo.png"
      alt="VWO"
      width={42}
      height={42}
      style={{ borderRadius: 10, objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "vwo",
  dimensionLabels: {
    memory: "Testing Fundamentals",
    orchestration: "Experiment Design",
    automation: "Rollouts & Flags",
    extensibility: "Insights Stack",
    workflows: "Campaign Execution",
    prompting: "SDK & Variables",
    bestPractices: "Decision Logic",
  },
  archetypes: [
    {
      title: "Optimization Commander",
      emoji: "🏆",
      description:
        "You understand VWO deeply across experimentation, insights, and feature rollouts with production-grade decision making.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Experiment Architect",
      emoji: "🧠",
      description:
        "You have strong control over VWO's testing and delivery workflows, with only a few advanced nuances left.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Conversion Strategist",
      emoji: "📈",
      description:
        "You can design and operate high-quality experiments and interpret results with confidence.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Growth Operator",
      emoji: "⚙️",
      description:
        "You know VWO's practical workflow well and can ship useful tests and rollouts safely.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Experiment Builder",
      emoji: "🛠️",
      description:
        "You have the core concepts and can run real campaigns, but advanced details still need reps.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Optimization Learner",
      emoji: "🌱",
      description:
        "You are getting the fundamentals right. Keep building depth on campaign types and feature logic.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Variant",
      emoji: "🚀",
      description:
        "Good start. You now have the base layer to level up quickly in VWO.",
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
        "In VWO Split URL testing, variations are hosted on different URLs and traffic is randomly split between them",
      isTrue: true,
      explanation:
        "That is the core Split URL model in VWO: each variation has its own URL and performance is compared across split traffic.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "workflows",
      statement:
        "In a VWO Split URL test, users become part of the test only when they first land on the control URL",
      isTrue: true,
      explanation:
        "VWO's Split URL docs call this out explicitly as an entry condition for that test type.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "Multivariate testing in VWO is mainly for changing only one page element at a time",
      isTrue: false,
      explanation:
        "VWO MVT is for testing combinations of changes across multiple elements on the same page.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "VWO Feature Rollout is intended to capture variation performance data like Feature Test campaigns",
      isTrue: false,
      explanation:
        "VWO documents that rollouts focus on controlled release and do not capture experiment-comparison data the way feature tests do.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "orchestration",
      scenario:
        "You are redesigning checkout flow with major backend changes. Which test type is better?",
      optionA: "Split URL test",
      optionB: "A/B test with only small on-page edits",
      correct: "A",
      explanation:
        "VWO recommends Split URL testing for major redesigns or backend-flow changes across different URLs.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "workflows",
      scenario:
        "You want to compare combinations of headline, CTA text, and hero image on one page. Which is better?",
      optionA: "Multivariate test",
      optionB: "Single Split URL variation",
      correct: "A",
      explanation:
        "MVT is explicitly built to evaluate multiple element combinations on a single page.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "automation",
      scenario:
        "You want to release a feature gradually without experiment comparison metrics. Which is better?",
      optionA: "Feature Rollout",
      optionB: "Feature Test",
      correct: "A",
      explanation:
        "Rollouts are intended for staged release control. Feature tests are for measured variation comparison.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "Which VWO Insights feature replays a visitor's journey as a video?",
      blank: "Session Recordings",
      options: ["Session Recordings", "Goal Composer", "Campaign Scheduler"],
      explanation:
        "VWO Session Recordings captures and replays visitor journeys for behavioral analysis.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "extensibility",
      scenario:
        "Which VWO Insights capability uses color-coded visual layers to show click and scroll behavior?",
      blank: "Heatmaps",
      options: ["Heatmaps", "Webhook Queue", "Dataset Sync"],
      explanation:
        "Heatmaps are VWO's color-coded interaction visualization layer.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "automation",
      scenario:
        "In VWO SDKs, which function fetches a feature flag's status and variables for a user?",
      blank: "GetFlag()",
      options: ["GetFlag()", "RunSplitTest()", "CreateHeatmap()"],
      explanation:
        "VWO developer docs define GetFlag() as the feature flag evaluation call returning enablement and variable access.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real VWO Insights feature area!",
      correctItems: [
        "Heatmaps",
        "Session Recordings",
        "Funnels",
        "Form Analytics",
        "On-page Surveys",
      ],
      wrongItems: [
        "Container Registry",
        "Kubernetes Autoscaler",
        "DNS Zone Manager",
        "CI Build Matrix",
      ],
      timeLimit: 15,
      explanation:
        "These are core VWO Insights feature areas; the wrong options are infrastructure tooling categories outside VWO Insights.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "prompting",
      prompt: "Tap every variable type documented in VWO Feature Experimentation setup!",
      correctItems: ["Boolean", "Text", "Number", "JSON"],
      wrongItems: ["YAML", "XML", "ProtoBuf", "CSV"],
      timeLimit: 15,
      explanation:
        "VWO's Feature Experimentation setup docs explicitly list Boolean, text, number, and JSON as variable types.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "bestPractices",
      prompt:
        "One statement about Feature Rollout vs Feature Test precedence is wrong. Which one?",
      items: [
        "If both qualify, Feature Test takes precedence",
        "Feature Rollout is for gradual release",
        "Feature Test compares variations using captured data",
        "Feature Rollout always overrides Feature Test when both apply",
      ],
      oddItem: "Feature Rollout always overrides Feature Test when both apply",
      explanation:
        "VWO states the opposite precedence: Feature Test is evaluated first when both are applicable.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "memory",
      prompt: "One option is NOT listed as a VWO heatmap report type. Which one?",
      items: ["Clickmap", "Scrollmap", "ClickArea", "Treemap"],
      oddItem: "Treemap",
      explanation:
        "VWO documents Clickmap, Scrollmap, ClickArea, and Element List as heatmap report types.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "prompting",
      statement:
        "After calling GetFlag() in VWO SDK, you can check IsEnabled() and read flag variables for that user context",
      isTrue: true,
      explanation:
        "That is the standard evaluation workflow in VWO Feature Experimentation SDK docs.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Core VWO facts or fake claims?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the right campaign type" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name the exact VWO capability" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Tap fast, avoid tool confusion" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Catch the subtle wrong statement" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. SDK-level clarity." },
  ],
};
