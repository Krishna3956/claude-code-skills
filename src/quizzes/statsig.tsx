import type { QuizConfig } from "@/components/quiz/types";

export const statsigConfig: QuizConfig = {
  slug: "statsig",
  toolName: "Statsig",
  tagline: "6 rounds. ~3 min. No account required.",
  subtitle:
    "Think you know Statsig? Test feature flags, experimentation, layers, and statistical analysis.",
  sansFont: "inter",
  serifFont: "instrument-serif",
  accentColor: "#194BFB",
  accentColorDim: "#1339CC",
  accentColorSubtle: "rgba(25,75,251,0.10)",
  bgColor: "linear-gradient(145deg, #F5F7FF 0%, #EFF2FF 55%, #E8ECFF 100%)",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#ECF0FF",
  textColor: "#0A1030",
  textSecondary: "#2A3868",
  textTertiary: "#5A6898",
  borderColor: "#D0D8F8",
  borderSubtle: "#E2EAFF",
  scorecardBg: "#0A1030",
  scorecardAccentColor: "#88A8FF",
  scorecardDivider: "#1A2860",
  scorecardLabelColor: "#A0B8E0",
  scorecardGridColor: "#1A2860",
  navbarTheme: "light",
  logo: (
    <img
      src="/logos/statsig.svg"
      alt="Statsig"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/statsig.svg"
      alt="Statsig"
      width={42}
      height={42}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  analyticsPrefix: "statsig",
  dimensionLabels: {
    memory: "Gate Logic",
    orchestration: "Experiment Design",
    automation: "Metric Pipelines",
    extensibility: "SDK Surface",
    workflows: "Rollout Ops",
    prompting: "API Recall",
    bestPractices: "Statistical Discipline",
  },
  archetypes: [
    {
      title: "Statsig Grandmaster",
      emoji: "🏆",
      description:
        "You design experiments with statistical rigor and ship features with data-driven confidence.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Experiment Architect",
      emoji: "🧠",
      description:
        "Strong command of gates, layers, holdouts, and metric interpretation.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Power Operator",
      emoji: "⚡",
      description:
        "You run feature rollouts and experiments with solid methodology.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Skilled Builder",
      emoji: "🛠️",
      description:
        "Good experimentation fundamentals with room for deeper statistical rigor.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Practitioner",
      emoji: "📈",
      description: "You can run feature gates and basic experiments effectively.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Explorer",
      emoji: "🌱",
      description:
        "Good start. More reps on experiment design and metric analysis will help.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Steps",
      emoji: "🚀",
      description: "Clear path to data-driven feature engineering.",
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
        "Statsig feature gates evaluate rules server-side by default, meaning the SDK fetches gate values rather than evaluating rules on the client",
      isTrue: true,
      explanation:
        "Server-side evaluation ensures consistent targeting and prevents rule leakage to clients.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "orchestration",
      statement:
        "Statsig layers allow multiple experiments to run on mutually exclusive user segments, preventing interaction effects between concurrent tests",
      isTrue: true,
      explanation:
        "Layers partition users so experiments don't contaminate each other's results.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "automation",
      statement:
        "Statsig Pulse automatically computes experiment results including confidence intervals, p-values, and metric lifts without manual statistical analysis",
      isTrue: true,
      explanation: "Pulse handles the statistical heavy lifting for experiment analysis.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Running an A/B test for 2 days with 50 users per variant is sufficient for statistically significant results on most product metrics",
      isTrue: false,
      explanation:
        "Small samples and short durations produce unreliable results with high false positive rates.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "orchestration",
      scenario: "You're running two experiments that could interact. Better isolation strategy?",
      optionA: "Use Statsig layers to ensure mutually exclusive allocation",
      optionB: "Run both experiments on 100% of users and hope for the best",
      correct: "A",
      explanation:
        "Layers prevent interaction effects between concurrent experiments.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "workflows",
      scenario:
        "You need to gradually roll out a risky feature. Safer approach?",
      optionA: "Staged rollout with percentage gates and metric monitoring",
      optionB: "Ship to 100% and watch for support tickets",
      correct: "A",
      explanation:
        "Staged rollouts with monitoring catch issues before full exposure.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "bestPractices",
      scenario: "For reliable experiment results, what matters more?",
      optionA: "Adequate sample size and pre-registered metrics",
      optionB: "Running many short experiments simultaneously",
      correct: "A",
      explanation:
        "Statistical power requires sufficient samples and pre-defined success metrics.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "Statsig concept that partitions users across mutually exclusive experiments:",
      blank: "Layer",
      options: ["Layer", "Segment", "Cohort"],
      explanation:
        "Layers ensure experiments don't interfere with each other.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "prompting",
      scenario: "Statsig's automated experiment analysis dashboard:",
      blank: "Pulse",
      options: ["Pulse", "Insights", "Analytics"],
      explanation:
        "Pulse provides automated statistical analysis of experiment results.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "extensibility",
      scenario: "Feature gate rule type that targets users based on custom properties:",
      blank: "Targeting gate",
      options: ["Targeting gate", "Random gate", "Static gate"],
      explanation: "Targeting gates evaluate user properties against defined rules.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real Statsig concept!",
      correctItems: ["Feature gates", "Layers", "Pulse", "Dynamic configs"],
      wrongItems: ["Redis queues", "Docker volumes", "GraphQL schemas", "Terraform modules"],
      timeLimit: 15,
      explanation: "These are core Statsig platform concepts.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "workflows",
      prompt: "Tap every strong experimentation practice!",
      correctItems: ["Pre-registered metrics", "Adequate sample size", "Holdout groups", "Staged rollouts"],
      wrongItems: ["No control group", "Peeking at results daily", "50-user experiments", "No metric definition"],
      timeLimit: 15,
      explanation: "Strong experimentation requires rigor and discipline.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "automation",
      prompt: "One is NOT a Statsig feature. Which one?",
      items: ["Feature gates", "Layers", "Pulse", "Kubernetes autoscaler"],
      oddItem: "Kubernetes autoscaler",
      explanation: "Statsig is for feature flags and experimentation, not infrastructure.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "Which practice most undermines experiment validity?",
      items: [
        "Pre-registered success metrics",
        "Adequate runtime duration",
        "Mutual exclusion via layers",
        "Stopping experiments early when results look good",
      ],
      oddItem: "Stopping experiments early when results look good",
      explanation: "Early stopping inflates false positive rates and invalidates results.",
    },
    {
      type: "odd_one_out",
      id: 15,
      dimension: "orchestration",
      prompt: "Final boss: weakest experimentation strategy?",
      items: [
        "Layer-based isolation",
        "Statistical significance thresholds",
        "Holdout measurement",
        "Ship everything without measurement",
      ],
      oddItem: "Ship everything without measurement",
      explanation: "Shipping without measurement provides no data-driven feedback.",
    },
  ],
  rounds: [
    {
      name: "Truth or Myth",
      icon: "?",
      ids: [1, 2, 3, 4],
      tagline: "Real feature or total BS?",
    },
    {
      name: "This or That",
      icon: "vs",
      ids: [5, 6, 7],
      tagline: "Pick the smarter move",
    },
    {
      name: "Quick Pick",
      icon: ">>",
      ids: [8, 9, 10],
      tagline: "Name that feature",
    },
    {
      name: "Speed Round",
      icon: "::",
      ids: [11, 12],
      tagline: "Tap fast, think faster",
    },
    {
      name: "Odd One Out",
      icon: "//",
      ids: [13, 14],
      tagline: "Spot the fake",
    },
    {
      name: "Final Boss",
      icon: "*",
      ids: [15],
      tagline: "One shot. Expert level.",
    },
  ],
};
