import type { QuizConfig } from "@/components/quiz/types";

export const buildkiteConfig: QuizConfig = {
  slug: "buildkite",
  toolName: "Buildkite",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle:
    "Think you know Buildkite? Test pipeline architecture, agent design, dynamic pipelines, and CI/CD best practices.",
  sansFont: "inter",
  serifFont: "instrument-serif",
  accentColor: "#14CC80",
  accentColorDim: "#10B070",
  accentColorSubtle: "rgba(20,204,128,0.10)",
  bgColor: "linear-gradient(145deg, #F2FCF7 0%, #ECF9F0 55%, #E4F3E8 100%)",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#E8F5EC",
  textColor: "#0A2018",
  textSecondary: "#1A4030",
  textTertiary: "#4A7060",
  borderColor: "#C0E0CC",
  borderSubtle: "#D0ECD8",
  scorecardBg: "#081810",
  scorecardAccentColor: "#60E8A0",
  scorecardDivider: "#1A3828",
  scorecardLabelColor: "#90C8A8",
  scorecardGridColor: "#1A3828",
  navbarTheme: "light",
  logo: (
    <img
      src="/logos/buildkite.svg"
      alt="Buildkite"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/buildkite.svg"
      alt="Buildkite"
      width={42}
      height={42}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  analyticsPrefix: "buildkite",
  dimensionLabels: {
    memory: "Pipeline Architecture",
    orchestration: "Agent Design",
    automation: "Build Automation",
    extensibility: "Plugin Surface",
    workflows: "CI/CD Ops",
    prompting: "CLI Recall",
    bestPractices: "Pipeline Discipline",
  },
  archetypes: [
    {
      title: "Buildkite Grandmaster",
      emoji: "🏆",
      description:
        "You architect CI/CD pipelines with deep agent, plugin, and dynamic pipeline mastery.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Pipeline Architect",
      emoji: "🧠",
      description:
        "Strong command of agent queues, artifact management, and build optimization.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Power Operator",
      emoji: "⚡",
      description:
        "You run production CI/CD pipelines with confidence and strong agent management.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Skilled Builder",
      emoji: "🛠️",
      description:
        "Solid CI/CD fundamentals with room for deeper pipeline optimization.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Practitioner",
      emoji: "📈",
      description: "You can build and maintain pipelines effectively day to day.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Explorer",
      emoji: "🌱",
      description:
        "Good start. More reps on dynamic pipelines and agent scaling will help.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Steps",
      emoji: "🚀",
      description: "Clear path to production-grade CI/CD engineering.",
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
        "Buildkite's hybrid architecture runs the agent on your own infrastructure while the coordination layer runs in Buildkite's cloud, meaning source code never leaves your network",
      isTrue: true,
      explanation:
        "The agent-based model keeps code and secrets on your infrastructure.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "automation",
      statement:
        "Dynamic pipelines in Buildkite allow a build step to programmatically generate and upload additional pipeline steps at runtime based on changed files or other conditions",
      isTrue: true,
      explanation:
        "Dynamic pipelines enable monorepo optimization and conditional build graphs.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "Buildkite agents use queue-based routing where steps specify which agent queue should execute them, enabling heterogeneous build infrastructure",
      isTrue: true,
      explanation:
        "Agent queues allow routing steps to specific machine types (GPU, ARM, high-memory).",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Buildkite plugins are only cosmetic UI additions and cannot modify build behavior, environment variables, or artifact handling",
      isTrue: false,
      explanation:
        "Plugins can hook into every lifecycle phase including checkout, command, and artifact stages.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "orchestration",
      scenario:
        "You have a monorepo with 20 services. Better CI strategy?",
      optionA:
        "Dynamic pipeline that detects changed paths and only builds affected services",
      optionB: "Run all 20 service builds on every commit regardless of changes",
      correct: "A",
      explanation:
        "Path-based dynamic pipelines dramatically reduce unnecessary build time.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "automation",
      scenario:
        "You need GPU-accelerated ML model training in CI. Better approach?",
      optionA: "Route those steps to a dedicated GPU agent queue",
      optionB: "Run GPU workloads on standard CPU agents",
      correct: "A",
      explanation: "Queue-based routing sends steps to appropriate hardware.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "workflows",
      scenario: "For build secrets management, what's stronger?",
      optionA:
        "Agent-level secret storage that injects at runtime without exposing to Buildkite cloud",
      optionB:
        "Store secrets as plaintext environment variables in pipeline YAML",
      correct: "A",
      explanation:
        "Agent-side secrets never transit through Buildkite's coordination layer.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "Buildkite concept that routes build steps to specific agent types:",
      blank: "Agent queues",
      options: ["Agent queues", "Build pools", "Runner groups"],
      explanation: "Queues route steps to agents with matching queue tags.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "prompting",
      scenario: "Buildkite feature that generates pipeline steps at runtime:",
      blank: "Dynamic pipelines",
      options: ["Dynamic pipelines", "Auto-scaling", "Build triggers"],
      explanation: "Dynamic pipelines upload steps programmatically during a build.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "extensibility",
      scenario:
        "Buildkite extension mechanism that hooks into build lifecycle phases:",
      blank: "Plugins",
      options: ["Plugins", "Widgets", "Modules"],
      explanation:
        "Plugins hook into checkout, command, artifact, and other lifecycle phases.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real Buildkite concept!",
      correctItems: [
        "Agent queues",
        "Dynamic pipelines",
        "Plugins",
        "Artifact uploads",
      ],
      wrongItems: [
        "Kubernetes operators",
        "GraphQL resolvers",
        "Redis pub/sub",
        "Docker registries",
      ],
      timeLimit: 15,
      explanation: "These are core Buildkite platform concepts.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "workflows",
      prompt: "Tap every strong CI/CD practice!",
      correctItems: [
        "Path-based triggering",
        "Agent-side secrets",
        "Parallel step execution",
        "Artifact caching",
      ],
      wrongItems: [
        "Build everything always",
        "Secrets in YAML",
        "Sequential-only builds",
        "No caching",
      ],
      timeLimit: 15,
      explanation: "Production CI/CD requires proper secrets, parallelism, and caching.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "automation",
      prompt: "One is NOT a Buildkite feature. Which one?",
      items: [
        "Dynamic pipelines",
        "Agent queues",
        "Build plugins",
        "Kubernetes pod autoscaling",
      ],
      oddItem: "Kubernetes pod autoscaling",
      explanation:
        "Buildkite uses agents and queues; K8s autoscaling is infrastructure-level, not a Buildkite feature.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "Which practice most slows down CI/CD?",
      items: [
        "Dynamic path-based pipelines",
        "Parallel step execution",
        "Artifact caching",
        "Building every service on every commit in a monorepo",
      ],
      oddItem: "Building every service on every commit in a monorepo",
      explanation:
        "Full monorepo builds on every commit waste time; path-based pipelines optimize this.",
    },
    {
      type: "odd_one_out",
      id: 15,
      dimension: "orchestration",
      prompt: "Final boss: weakest CI/CD architecture?",
      items: [
        "Hybrid agent model",
        "Queue-based routing",
        "Dynamic pipeline generation",
        "Single shared agent with no queues, no caching, no parallelism",
      ],
      oddItem:
        "Single shared agent with no queues, no caching, no parallelism",
      explanation:
        "Shared agent with no optimization leads to bottlenecks and slow builds.",
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
