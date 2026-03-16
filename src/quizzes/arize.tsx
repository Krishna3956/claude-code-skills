import type { QuizConfig } from "@/components/quiz/types";

const arizeLogo = (
  <img
    src="/logos/arize.svg"
    alt="Arize"
    width={154}
    height={42}
    style={{ objectFit: "contain" }}
  />
);

export const arizeConfig: QuizConfig = {
  slug: "arize",
  toolName: "Arize",
  tagline: "5 rounds. ~3 min. No tracing backend migration required.",
  subtitle:
    "Made for serious Arize users. Tracing, evals, experiments, annotations, dashboards, and release judgment for AI systems in production.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#FF008C",
  accentColorDim: "#D40076",
  accentColorSubtle: "rgba(255,0,140,0.10)",
  bgColor: "#FCF7FC",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#F7ECFB",
  textColor: "#161423",
  textSecondary: "#544C6B",
  textTertiary: "#756F8C",
  borderColor: "#E7CFF1",
  borderSubtle: "#F1E3F7",
  scorecardBg: "#131220",
  scorecardAccentColor: "#AC2EFB",
  scorecardDivider: "#40355E",
  scorecardLabelColor: "#E4D5F6",
  scorecardGridColor: "#40355E",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#E7CFF1",
  ctaTextColor: "#FFFFFF",
  logo: arizeLogo,
  scorecardLogo: (
    <img
      src="/logos/arize.svg"
      alt="Arize"
      width={142}
      height={38}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "arize",
  dimensionLabels: {
    memory: "Tracing",
    orchestration: "Eval Ops",
    automation: "Release Safety",
    extensibility: "Open Standards",
    workflows: "Monitoring",
    prompting: "Prompt Iteration",
    bestPractices: "AI Reliability Judgment",
  },
  archetypes: [
    {
      title: "AI Reliability Operator",
      emoji: "🧠",
      description:
        "You think in traces, eval loops, annotations, and regression control as one system. That is how Arize is meant to be used.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Observability Architect",
      emoji: "🏗️",
      description:
        "You understand how Arize connects development and production. A few sharper calls around standards and workflow boundaries would move you into the top tier.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Eval Systems Builder",
      emoji: "⚙️",
      description:
        "You are operating with strong instincts. The remaining gap is mostly in how rigorously you turn traces and annotations into repeatable release discipline.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Tracing Practitioner",
      emoji: "🧭",
      description:
        "You know the platform well, though some of the deeper experiment and annotation workflows are not fully second nature yet.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Model Watcher",
      emoji: "👀",
      description:
        "You can monitor systems productively, but the full eval-and-iteration loop still has room to tighten.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Prompt Reviewer",
      emoji: "📝",
      description:
        "You have the right categories in mind, but your operating model is still closer to inspection than disciplined AI quality management.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh AX User",
      emoji: "🌱",
      description:
        "You are early. The next step is learning how Arize ties traces, evals, annotations, experiments, and monitoring into one feedback loop.",
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
        "Arize positions AX as one place for development, observability, and evaluation rather than treating production monitoring as a separate world from development",
      isTrue: true,
      explanation:
        "That is core homepage messaging. Arize explicitly frames development and production as one iteration cycle powered by shared data and evaluation.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "orchestration",
      statement:
        "Human annotations in Arize are only for offline labeling, not for managing production annotation queues or building golden datasets",
      isTrue: false,
      explanation:
        "That is false. Arize explicitly says human annotations cover labeling queues, production annotations, and golden dataset creation in one place.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "automation",
      scenario:
        "Your team wants to catch prompt regressions before a release lands in production. Which move is stronger?",
      optionA: "Use evaluation-driven CI/CD with datasets and experiments so regressions are surfaced before rollout",
      optionB: "Ship first, then infer quality later from complaints and a handful of support tickets",
      correct: "A",
      explanation:
        "Arize explicitly highlights evaluation-driven CI/CD and automated experiments as the way to catch prompt and agent regressions early.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "memory",
      scenario:
        "You need to understand whether an agent used the right tools, configuration, and model path on a bad response. Which move is stronger?",
      optionA: "Look only at aggregate latency and token charts",
      optionB: "Inspect trace-level execution so you can follow the full request flow across tools and model steps",
      correct: "B",
      explanation:
        "That is the operator-grade move. Arize emphasizes full-flow tracing because averages alone do not explain why a specific agent run went wrong.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "orchestration",
      scenario:
        "Which Arize surface is explicitly about managing labeling queues, production annotations, and golden dataset creation?",
      blank: "Human Annotations",
      options: ["Dashboards", "Prompt Playground", "Human Annotations"],
      explanation:
        "Human Annotations is the exact workflow Arize describes for queues, annotations, and golden dataset creation.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "extensibility",
      scenario:
        "Which open-source Arize project is specifically positioned around observability and evaluation for AI applications?",
      blank: "Phoenix OSS",
      options: ["Phoenix OSS", "Inference Gateway", "adb Studio"],
      explanation:
        "Phoenix OSS is Arize's open-source observability and evaluation offering. It is also what they point to directly from the homepage navigation.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "workflows",
      prompt: "Tap every real Arize AX workflow or surface called out on the site!",
      correctItems: ["Tracing", "Dashboards", "Experiments", "Human Annotations", "Monitoring"],
      wrongItems: ["Email warmup", "Warehouse routing", "Mobile MDM", "CDN rendering"],
      timeLimit: 15,
      explanation:
        "Those are all real Arize surfaces or workflows from the homepage and docs. The others are unrelated product categories.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "automation",
      prompt: "Tap every reliability workflow Arize explicitly pushes for serious AI teams!",
      correctItems: ["Golden datasets", "Production annotations", "Evaluation-driven CI/CD", "Prompt regression detection"],
      wrongItems: ["Laptop procurement", "Payroll approvals", "Office seating", "Print queue monitoring"],
      timeLimit: 15,
      explanation:
        "These are exactly the kinds of evaluation and release-discipline workflows Arize highlights for real production teams.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a strong Arize-style reliability instinct. Which one?",
      items: [
        "Use production data to improve development decisions",
        "Run experiments and evals before shipping risky prompt changes",
        "Treat average latency as enough to explain all agent failures",
        "Use annotations and traces together when curating quality datasets",
      ],
      oddItem: "Treat average latency as enough to explain all agent failures",
      explanation:
        "That is the weak move. Arize is built around the idea that traces, evals, and production context are needed to actually understand AI system behavior.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "extensibility",
      prompt:
        "One of these is NOT an Arize concept or surface referenced across the site and docs. Which one?",
      items: [
        "Open standard tracing",
        "Prompt Playground",
        "Phoenix OSS",
        "Kubernetes GPU overcommit",
      ],
      oddItem: "Kubernetes GPU overcommit",
      explanation:
        "Open standard tracing, Prompt Playground, and Phoenix OSS all fit Arize. Kubernetes GPU overcommit belongs to a completely different infrastructure category.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Real Arize workflows or made-up observability lore?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Choose the operator-grade move" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Name the exact Arize surface" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real reliability workflow" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the weak AI-quality instinct" },
  ],
};
