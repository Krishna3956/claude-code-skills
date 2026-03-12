import type { QuizConfig } from "@/components/quiz/types";

export const voiceflowConfig: QuizConfig = {
  slug: "voiceflow",
  toolName: "Voiceflow",
  tagline: "6 rounds. ~3 min. No account required.",
  subtitle:
    "Think you know Voiceflow? Test agent architecture, dialog design, integrations, and conversational AI engineering.",
  sansFont: "inter",
  serifFont: "instrument-serif",
  accentColor: "#3D5AFE",
  accentColorDim: "#2E4AD4",
  accentColorSubtle: "rgba(61,90,254,0.10)",
  bgColor: "linear-gradient(145deg, #0A0C18 0%, #0F1224 55%, #141830 100%)",
  bgElevated: "#181C30",
  bgSurface: "#1C2038",
  bgSurfaceLight: "#222840",
  textColor: "#E5E8F5",
  textSecondary: "#A8B0D0",
  textTertiary: "#7880A8",
  borderColor: "#2A3050",
  borderSubtle: "#222840",
  scorecardBg: "#080A14",
  scorecardAccentColor: "#88A0FF",
  scorecardDivider: "#1A2050",
  scorecardLabelColor: "#A0B0E0",
  scorecardGridColor: "#1A2050",
  navbarTheme: "dark",
  logo: (
    <img
      src="/logos/voiceflow.svg"
      alt="Voiceflow"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/voiceflow.svg"
      alt="Voiceflow"
      width={42}
      height={42}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  analyticsPrefix: "voiceflow",
  dimensionLabels: {
    memory: "Agent Architecture",
    orchestration: "Dialog Design",
    automation: "Integration Patterns",
    extensibility: "API Surface",
    workflows: "Conversation Ops",
    prompting: "Builder Recall",
    bestPractices: "Production Discipline",
  },
  archetypes: [
    {
      title: "Voiceflow Grandmaster",
      emoji: "🏆",
      description:
        "You architect production conversational agents with deep dialog and integration mastery.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Dialog Architect",
      emoji: "🧠",
      description:
        "Strong command of conversation flows, knowledge bases, and agent orchestration.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Power Builder",
      emoji: "⚡",
      description:
        "You build and deploy conversational agents with confidence.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Skilled Builder",
      emoji: "🛠️",
      description:
        "Solid agent-building fundamentals with room for deeper integration knowledge.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Practitioner",
      emoji: "📈",
      description:
        "You can build useful conversational flows effectively.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Explorer",
      emoji: "🌱",
      description:
        "Good start. More reps on dialog design and API integrations will help.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Steps",
      emoji: "🚀",
      description:
        "Clear path to production-grade conversational AI engineering.",
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
        "Voiceflow's canvas-based builder uses a visual flow model where conversation paths are represented as connected blocks with branching logic",
      isTrue: true,
      explanation:
        "The visual canvas is core to Voiceflow's drag-and-drop conversation design.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "orchestration",
      statement:
        "Voiceflow Knowledge Base allows agents to answer questions from uploaded documents using retrieval-augmented generation without custom code",
      isTrue: true,
      explanation:
        "Knowledge Base provides RAG-powered Q&A from uploaded content sources.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "automation",
      statement:
        "Voiceflow agents can only respond to text input and cannot integrate with external APIs or databases during conversations",
      isTrue: false,
      explanation:
        "Voiceflow supports API steps, custom functions, and external integrations within flows.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Intent classification in Voiceflow uses NLU to match user utterances to predefined intents with training phrases",
      isTrue: true,
      explanation:
        "NLU intent matching is how agents understand user goals from natural language.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "extensibility",
      scenario:
        "User asks something outside your agent's scope. Better fallback strategy?",
      optionA: "Route to Knowledge Base with graceful escalation to human agent",
      optionB: "Return a generic 'I don't understand' message",
      correct: "A",
      explanation:
        "KB fallback with human escalation maintains conversation quality.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "orchestration",
      scenario:
        "You need to collect multiple pieces of information from a user. Better pattern?",
      optionA:
        "Use slot-filling with entity extraction and confirmation prompts",
      optionB: "Ask one giant question and parse the entire response manually",
      correct: "A",
      explanation:
        "Structured slot-filling ensures reliable data collection.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "workflows",
      scenario:
        "For testing conversation quality before launch, what's stronger?",
      optionA:
        "Systematic test scenarios covering happy paths, edge cases, and fallbacks",
      optionB: "Manual testing of a few common questions",
      correct: "A",
      explanation:
        "Comprehensive test coverage catches dialog failures before users do.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "Voiceflow feature that lets agents answer from uploaded documents:",
      blank: "Knowledge Base",
      options: ["Knowledge Base", "Intent Library", "Entity Store"],
      explanation:
        "Knowledge Base provides RAG-powered answers from document sources.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "prompting",
      scenario:
        "The visual building block in Voiceflow that represents a conversation step:",
      blank: "Block/Step",
      options: ["Block/Step", "Widget", "Module"],
      explanation:
        "Blocks and steps are the fundamental canvas building units.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "extensibility",
      scenario:
        "Voiceflow capability for calling external services during a conversation:",
      blank: "API step",
      options: ["API step", "Webhook listener", "gRPC call"],
      explanation:
        "API steps make HTTP requests to external services within the flow.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real Voiceflow concept!",
      correctItems: [
        "Knowledge Base",
        "Intent classification",
        "Canvas builder",
        "API steps",
      ],
      wrongItems: [
        "Docker Compose",
        "Kubernetes pods",
        "Redis streams",
        "Terraform state",
      ],
      timeLimit: 15,
      explanation: "These are core Voiceflow platform concepts.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "workflows",
      prompt: "Tap every strong conversational AI practice!",
      correctItems: [
        "Fallback handling",
        "Slot-filling patterns",
        "Test scenarios",
        "Analytics monitoring",
      ],
      wrongItems: [
        "No fallback strategy",
        "Single response path",
        "No testing",
        "Ignoring analytics",
      ],
      timeLimit: 15,
      explanation:
        "Production conversational agents need structured dialog workflows.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "automation",
      prompt: "One is NOT a Voiceflow builder feature. Which one?",
      items: [
        "Intent classification",
        "Knowledge Base",
        "API steps",
        "Container orchestration",
      ],
      oddItem: "Container orchestration",
      explanation:
        "Container orchestration is infrastructure, not a Voiceflow builder feature.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "Which practice most harms agent quality?",
      items: [
        "Training phrase diversity",
        "Fallback handling",
        "Entity validation",
        "Single training phrase per intent",
      ],
      oddItem: "Single training phrase per intent",
      explanation:
        "Single training phrase per intent leads to poor NLU coverage.",
    },
    {
      type: "odd_one_out",
      id: 15,
      dimension: "orchestration",
      prompt: "Final boss: weakest conversational agent strategy?",
      items: [
        "Knowledge Base for coverage",
        "Intent-based routing",
        "Graceful fallbacks",
        "Hardcoded responses with no NLU",
      ],
      oddItem: "Hardcoded responses with no NLU",
      explanation:
        "Hardcoded responses with no NLU cannot scale or understand users.",
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
