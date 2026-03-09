import type { QuizConfig } from "@/components/quiz/types";

export const openclawConfig: QuizConfig = {
  slug: "openclaw",
  toolName: "OpenClaw",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "Just you vs. OpenClaw trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#FF173D",
  accentColorDim: "#D61032",
  accentColorSubtle: "rgba(255,23,61,0.08)",
  bgColor: "#F7F8FA",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EEF1F5",
  textColor: "#101820",
  textSecondary: "#465363",
  textTertiary: "#7A8898",
  borderColor: "#D7DEE6",
  borderSubtle: "#E8EDF3",
  scorecardBg: "#101820",
  scorecardDivider: "#243447",
  scorecardLabelColor: "#94A3B8",
  scorecardGridColor: "#243447",
  logo: (
    <div style={{ paddingTop: 10, paddingBottom: 4 }}>
      <img
        src="/logos/openclaw-wordmark.png"
        alt="OpenClaw"
        width={136}
        height={40}
        style={{ objectFit: "contain" }}
      />
    </div>
  ),
  scorecardLogo: (
    <img
      src="/logos/openclaw-mascot.png"
      alt="OpenClaw"
      width={42}
      height={42}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "openclaw",
  dimensionLabels: {
    memory: "Gateway & Memory",
    orchestration: "Agent Routing",
    automation: "Automation Flows",
    extensibility: "Integrations",
    workflows: "Channels & Sessions",
    prompting: "Prompt Craft",
    bestPractices: "Ops & Security",
  },
  archetypes: [
    {
      title: "Claw Commander",
      emoji: "🦞",
      description:
        "You understand OpenClaw deeply. Gateway setup, routing, memory, and operations all look natural to you.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Workflow Captain",
      emoji: "🧭",
      description:
        "You can run OpenClaw confidently across channels and assistants. You are close to expert-level operations.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Routing Strategist",
      emoji: "🧠",
      description:
        "You already think in terms of agent routing and session design. A few advanced details will level you up fast.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Automation Builder",
      emoji: "⚙️",
      description:
        "You know the core product flow and can automate useful tasks. Keep sharpening your memory and integration patterns.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Channel Operator",
      emoji: "📬",
      description:
        "You can get OpenClaw running and productive, but you are not fully using routing and long-term context yet.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Claw Learner",
      emoji: "🌊",
      description:
        "You know the basics and can move around the product, but the advanced capabilities are still mostly untapped.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Ping",
      emoji: "🌱",
      description:
        "Great start. You just opened the door to a powerful multi-channel AI workflow platform.",
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
        "OpenClaw keeps long-term memory as plain files in your workspace, including daily memory files and an optional MEMORY.md for persistent context",
      isTrue: true,
      explanation:
        "OpenClaw memory is file-based, not hidden in a proprietary store. That keeps context inspectable, portable, and versionable with your normal workflow.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "workflows",
      statement:
        "Direct chats and group chats in OpenClaw share the same default session context",
      isTrue: false,
      explanation:
        "By default, direct chats map to a shared main session while group chats get isolated sessions. That helps keep collaborative contexts separate from personal context.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "OpenClaw can route incoming conversations to different assistants based on channel and participant rules",
      isTrue: true,
      explanation:
        "OpenClaw supports multi-agent routing, so you can steer different conversations to the assistant that best fits each context.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "OpenClaw only runs on macOS and does not support Linux or WSL",
      isTrue: false,
      explanation:
        "OpenClaw supports macOS, Linux, and WSL2. Teams can run it on different environments as long as the required dependencies are present.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "orchestration",
      scenario:
        "You want separate assistants for your support inbox and your private chats. Which setup is better?",
      optionA: "Use channel and participant-based routing rules",
      optionB: "Use one assistant for everything and rely on long prompts",
      correct: "A",
      explanation:
        "Routing rules are explicit and predictable. They reduce cross-context mistakes and keep each assistant focused on the right job.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "automation",
      scenario:
        "You need a repeated follow-up action every day at a fixed time. What should you use in OpenClaw?",
      optionA: "Cron and wake-up automation",
      optionB: "Manual reminders in chat",
      correct: "A",
      explanation:
        "Scheduled automation is reliable and repeatable. Cron and wake-up flows remove manual overhead for recurring tasks.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "extensibility",
      scenario:
        "You need OpenClaw to work with multiple model providers and APIs over time. What is the stronger approach?",
      optionA: "Hardcode one provider path everywhere",
      optionB: "Use provider abstractions and integration configs",
      correct: "B",
      explanation:
        "Provider abstraction keeps your stack flexible. You can swap providers or models without rewriting every workflow.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "Where should you put durable, always-on context you want the assistant to load repeatedly?",
      blank: "MEMORY.md",
      options: ["MEMORY.md", "package-lock.json", "README.old"],
      explanation:
        "MEMORY.md is the canonical place for durable context. Daily memory files can capture session updates while MEMORY.md stays as persistent guidance.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "workflows",
      scenario:
        "Which command starts the OpenClaw gateway process in the foreground?",
      blank: "openclaw gateway",
      options: ["openclaw gateway", "openclaw init --gateway", "openclaw serve-chat"],
      explanation:
        "The gateway command is the runtime entry point. It owns sessions and brokered communication across channels and assistants.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "automation",
      scenario:
        "Which capability is designed for recurring time-based execution in OpenClaw?",
      blank: "Cron scheduling",
      options: ["Cron scheduling", "Manual slash commands only", "Static routing tables"],
      explanation:
        "Cron scheduling is built for recurring actions. It is the right primitive for repeatable timed workflows.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "workflows",
      prompt: "Tap every channel officially listed in OpenClaw docs or README!",
      correctItems: ["WhatsApp", "Telegram", "Slack", "Discord", "Signal"],
      wrongItems: ["Snapchat", "LinkedIn DM", "SMS Carrier", "Reddit Chat"],
      timeLimit: 15,
      explanation:
        "WhatsApp, Telegram, Slack, Discord, and Signal are official channels. The others are not official OpenClaw channels.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "extensibility",
      prompt: "Tap every real OpenClaw capability!",
      correctItems: ["Browser control", "Canvas", "Session tools", "Webhooks", "Cron"],
      wrongItems: ["Kubernetes operator", "Built-in payment gateway", "Native CRM suite", "Figma editor"],
      timeLimit: 15,
      explanation:
        "OpenClaw includes browser control, canvas, session tooling, webhooks, and cron support. It is not a payment system, CRM, or design editor.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "prompting",
      prompt: "One of these is NOT a supported OpenClaw slash command area. Which one?",
      items: ["/agent", "/session", "/memory", "/podcast"],
      oddItem: "/podcast",
      explanation:
        "Agent, session, and memory command groups are part of OpenClaw workflows. There is no official podcast command area.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "One of these is NOT a practical OpenClaw operations pattern. Which one?",
      items: [
        "Use onboarding wizard for first setup",
        "Use pairing policies for channel safety",
        "Keep memory files in version control",
        "Store all secrets directly in chat messages",
      ],
      oddItem: "Store all secrets directly in chat messages",
      explanation:
        "Secret handling should stay in proper env and secret storage workflows. Chat messages are not the right place for sensitive credentials.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "prompting",
      statement:
        "When a gateway token is configured, OpenClaw can reject websocket connects that do not include the matching token",
      isTrue: true,
      explanation:
        "Gateway token enforcement is a core hardening control. It ensures only authorized clients can attach to the gateway socket.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Real feature or total BS?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the smarter move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name that feature" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Tap fast, think faster" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the fake" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Expert level." },
  ],
};
