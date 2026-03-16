import type { QuizConfig } from "@/components/quiz/types";

const lightfieldLogo = (
  <img
    src="/logos/lightfield.svg"
    alt="Lightfield"
    width={168}
    height={30}
    style={{ objectFit: "contain" }}
  />
);

export const lightfieldConfig: QuizConfig = {
  slug: "lightfield",
  toolName: "Lightfield",
  tagline: "5 rounds. ~3 min. No CRM migration required.",
  subtitle:
    "Made for serious Lightfield users. Customer memory, workflow automation, citations, record operations, and AI-native CRM judgment.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#3D3D43",
  accentColorDim: "#2F2F35",
  accentColorSubtle: "rgba(61,61,67,0.1)",
  bgColor: "#F3F3F2",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#ECECEB",
  textColor: "#171717",
  textSecondary: "#52525B",
  textTertiary: "#71717A",
  borderColor: "#D6D6D3",
  borderSubtle: "#E7E7E4",
  scorecardBg: "#18181B",
  scorecardAccentColor: "#A1A1AA",
  scorecardDivider: "#3F3F46",
  scorecardLabelColor: "#D4D4D8",
  scorecardGridColor: "#3F3F46",
  scorecardLogoBg: "#F3F3F2",
  scorecardLogoBorder: "#D6D6D3",
  ctaTextColor: "#FFFFFF",
  logo: lightfieldLogo,
  scorecardLogo: (
    <img
      src="/logos/lightfield.svg"
      alt="Lightfield"
      width={152}
      height={27}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "lightfield",
  dimensionLabels: {
    memory: "Customer Memory",
    orchestration: "Record Ops",
    automation: "Workflow Builder",
    extensibility: "System Reach",
    workflows: "Sales Execution",
    prompting: "Question Design",
    bestPractices: "CRM Judgment",
  },
  archetypes: [
    {
      title: "AI CRM Operator",
      emoji: "🧠",
      description:
        "You use Lightfield like a real system of work, not a prettier notes bucket. Memory, workflows, context, and downstream execution all connect in your head.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Revenue Systems Builder",
      emoji: "🏗️",
      description:
        "You understand how Lightfield turns conversations into structured action. A few sharper calls around automation depth and source-of-truth boundaries move you to the top tier.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Context-Driven Seller",
      emoji: "📈",
      description:
        "You have strong instincts for using customer memory operationally, not just for recall. You are already ahead of most CRM users.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Workflow-Aware Rep",
      emoji: "🧭",
      description:
        "You know what the system is doing, though some of the deeper workflow and object-operation patterns still need a bit more precision.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Organized Operator",
      emoji: "🗂️",
      description:
        "You are using Lightfield productively, but not every advanced surface has become part of your default operating model yet.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Memory Collector",
      emoji: "📝",
      description:
        "You see the value in customer memory, but the jump from recall to automated action is still forming.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Workspace",
      emoji: "🌱",
      description:
        "You are early. The next step is learning how Lightfield connects meetings, emails, workflows, and CRM objects into one living system.",
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
        "Lightfield frames itself as a CRM that remembers everything and updates itself after customer interactions rather than relying on manual note transfer",
      isTrue: true,
      explanation:
        "That is core site messaging. The point is persistent customer memory that keeps itself current from conversations and activity, not just manual CRM hygiene.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "bestPractices",
      statement:
        "Lightfield expects teams to finish a heavy upfront configuration project before the system can begin understanding emails, meetings, and customer context",
      isTrue: false,
      explanation:
        "That is false. The homepage explicitly says there is no upfront configuration required to start building contextual understanding.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "prompting",
      scenario:
        "An executive asks which customers requested a feature and why. Which Lightfield move is stronger?",
      optionA: "Ask Lightfield across meetings, emails, and conversation records so the answer is grounded in actual customer history",
      optionB: "Scan account stages and hope the structured fields already captured the full reason behind each request",
      correct: "A",
      explanation:
        "This is exactly where Lightfield's value shows up: pulling meaning from conversation history, not pretending every useful signal already lives in rigid CRM fields.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "automation",
      scenario:
        "You want customer conversations to trigger downstream CRM work without turning reps into data-entry clerks. Which move is stronger?",
      optionA: "Wait for reps to summarize every call manually before any account or opportunity change happens",
      optionB: "Use workflows, agent steps, and record operations so conversation context can drive structured follow-up automatically",
      correct: "B",
      explanation:
        "Lightfield keeps adding workflow and agent capabilities because the system is meant to convert context into action, not stop at summarization.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "workflows",
      scenario:
        "Which Lightfield view is explicitly positioned around tasks, due dates, and what should happen next?",
      blank: "Up next",
      options: ["Buyer room", "Up next", "Sequence lab"],
      explanation:
        "Up next is the task- and follow-up-oriented view Lightfield has shipped and iterated on for day-to-day execution.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "extensibility",
      scenario:
        "Which workflow-builder block did Lightfield add so teams can push Lightfield record data to outside services?",
      blank: "HTTP out",
      options: ["Task editor", "HTTP out", "Snippet deploy"],
      explanation:
        "HTTP out is the correct workflow-builder capability. It extends Lightfield beyond internal automation into external system handoffs.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "memory",
      prompt: "Tap every source or context surface Lightfield is clearly built to learn from!",
      correctItems: ["Emails", "Meeting transcripts", "Conversation records", "Files on account records"],
      wrongItems: ["Warehouse scanner logs", "GPU temperature", "Payroll ledger", "Browser extension bookmarks"],
      timeLimit: 15,
      explanation:
        "Lightfield's memory model is built around customer context sources like emails, meetings, conversations, and attached record context, not unrelated operational telemetry.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "automation",
      prompt: "Tap every real Lightfield workflow or platform capability from the product and changelog!",
      correctItems: ["Agent step", "Bulk record exports", "Public meeting links", "MCP connectors", "Outlook sync"],
      wrongItems: ["AWS metering", "Feature flag rollout", "Warehouse routing", "Figma handoff"],
      timeLimit: 15,
      explanation:
        "Those are all real Lightfield capabilities or updates. The others belong to different product categories entirely.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a strong Lightfield-style CRM instinct. Which one?",
      items: [
        "Use conversation history to answer account questions with context",
        "Let workflows update records when customer signals warrant it",
        "Treat the CRM as a place reps manually reconstruct after every call",
        "Use citations or source-backed context when answering high-stakes questions",
      ],
      oddItem: "Treat the CRM as a place reps manually reconstruct after every call",
      explanation:
        "That is the old workflow Lightfield is explicitly trying to replace. The product exists to reduce reconstruction work and preserve context automatically.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "extensibility",
      prompt:
        "One of these is NOT a Lightfield capability or integration direction mentioned on the site or changelog. Which one?",
      items: [
        "Notion and Linear MCP connectors",
        "Outlook email and calendar support",
        "File uploads to account or opportunity records",
        "Cloud marketplace CPPO automation",
      ],
      oddItem: "Cloud marketplace CPPO automation",
      explanation:
        "The first three are real Lightfield capabilities or updates. CPPO automation belongs to cloud marketplace tooling, not Lightfield's CRM product surface.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Real Lightfield behavior or old-CRM fiction?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Pick the operator-grade move" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Name the exact Lightfield surface" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real platform capabilities" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the weak CRM instinct" },
  ],
};
