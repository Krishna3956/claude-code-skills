import type { QuizConfig } from "@/components/quiz/types";

export const raycastConfig: QuizConfig = {
  slug: "raycast",
  toolName: "Raycast",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "Just you vs. Raycast productivity trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#FF6363",
  accentColorDim: "#E55454",
  accentColorSubtle: "rgba(255,99,99,0.12)",
  bgColor: "linear-gradient(145deg, #121217 0%, #171821 55%, #1C1E29 100%)",
  bgElevated: "#1E202B",
  bgSurface: "#171922",
  bgSurfaceLight: "#242735",
  textColor: "#F3F5FF",
  textSecondary: "#C1C7DE",
  textTertiary: "#9098B7",
  borderColor: "#33384D",
  borderSubtle: "#2A2E41",
  scorecardBg: "#10131E",
  scorecardAccentColor: "#FF8A8A",
  scorecardDivider: "#2B3146",
  scorecardLabelColor: "#A6B1D4",
  scorecardGridColor: "#2B3146",
  logo: (
    <img
      src="/logos/raycast.svg"
      alt="Raycast"
      width={44}
      height={44}
      style={{ objectFit: "contain" }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/raycast.svg"
      alt="Raycast"
      width={42}
      height={42}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "raycast",
  dimensionLabels: {
    memory: "Launcher Basics",
    orchestration: "Extension Platform",
    automation: "Snippets & Quicklinks",
    extensibility: "Developer API",
    workflows: "Search Flow",
    prompting: "Command Recall",
    bestPractices: "Permissions & Setup",
  },
  archetypes: [
    {
      title: "Raycast Grandmaster",
      emoji: "🏆",
      description:
        "You know Raycast deeply, from launcher workflow to extension architecture and advanced command behavior.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Workflow Architect",
      emoji: "🧠",
      description:
        "Strong command of Raycast fundamentals and extension logic, with only edge-case details left to master.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Launcher Strategist",
      emoji: "⚡",
      description:
        "You can operate Raycast confidently for serious productivity work and make good setup decisions.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Command Operator",
      emoji: "🛠️",
      description:
        "Solid execution across core commands, snippets, and quicklinks, with room to sharpen advanced details.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Power User in Progress",
      emoji: "📈",
      description:
        "You know the core surfaces and can move quickly, but some deeper platform details are still forming.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Productivity Explorer",
      emoji: "🌱",
      description:
        "Great baseline. You already understand the value and can level up quickly with a bit more practice.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Shortcut",
      emoji: "🚀",
      description:
        "Good start. You now have a clear foundation to use Raycast much more effectively.",
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
        "A single Quicklink can be parameterized with dynamic placeholders, so one command can run many different searches",
      isTrue: true,
      explanation:
        "Quicklinks support dynamic placeholders, which is exactly how one Quicklink template can handle many query variations.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "memory",
      statement:
        "With Quick Search enabled, selected text from the active app is passed to the first Quicklink argument",
      isTrue: true,
      explanation:
        "That is the Quick Search behavior documented in Raycast's quicklinks flow.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "extensibility",
      statement:
        "Raycast extensions are built with React, TypeScript, and Node, with built-in UI components available out of the box",
      isTrue: true,
      explanation:
        "The developer docs explicitly call out this stack plus native UI primitives for extension UIs.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Quick Search for Quicklinks can pass selected text without any special permissions",
      isTrue: false,
      explanation:
        "Quick Search requires Accessibility permissions to read selected text from the active app.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "workflows",
      scenario:
        "You want fast access to a saved web search directly from Raycast root search. Which setup is better?",
      optionA: "Create a Quicklink",
      optionB: "Create a Snippet",
      correct: "A",
      explanation:
        "Quicklinks are built for launching links and parameterized searches from root search.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "automation",
      scenario:
        "You repeatedly type the same intro paragraph in emails. Which tool fits better?",
      optionA: "Quicklinks",
      optionB: "Snippets",
      correct: "B",
      explanation:
        "Snippets are meant for reusable text with optional keyword expansion.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "orchestration",
      scenario:
        "You built a useful extension and want others to install it. What's the intended path?",
      optionA: "Publish to the Raycast Store",
      optionB: "Keep it local only in your snippets library",
      correct: "A",
      explanation:
        "Raycast's developer flow explicitly supports publishing extensions to the Store.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "prompting",
      scenario:
        "Which command is used to create a new snippet in Raycast?",
      blank: "Create Snippet",
      options: ["Create Snippet", "Build Snippet", "New Text Macro"],
      explanation:
        "The manual names Create Snippet as the command to store a new snippet.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "automation",
      scenario:
        "What is the documented snippet character limit in Raycast?",
      blank: "65,536",
      options: ["65,536", "10,000", "256,000"],
      explanation:
        "Raycast's snippets page states a 65,536 character limit.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "workflows",
      scenario:
        "Which command creates a new Quicklink entry in Raycast?",
      blank: "Create Quicklink",
      options: ["Create Quicklink", "Add Hyperlink", "New Root Link"],
      explanation:
        "Raycast documents Create Quicklink as the command for creating quicklinks.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "memory",
      prompt: "Tap every platform currently listed in Raycast docs!",
      correctItems: ["Mac", "Windows", "iOS"],
      wrongItems: ["Linux", "Android", "ChromeOS", "watchOS"],
      timeLimit: 15,
      explanation:
        "The manual currently lists Mac, Windows, and iOS as available platforms.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "extensibility",
      prompt: "Tap every developer technology explicitly mentioned for Raycast extensions!",
      correctItems: ["React", "TypeScript", "Node"],
      wrongItems: ["Vue", "Rust", "SwiftUI", "Django"],
      timeLimit: 15,
      explanation:
        "Raycast developers page names React, TypeScript, and Node.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "automation",
      prompt: "One action does NOT match snippets documentation. Which one?",
      items: [
        "Auto-expand text by keyword",
        "Create Snippet command",
        "Search Snippets command",
        "Deploy extension binaries to Store",
      ],
      oddItem: "Deploy extension binaries to Store",
      explanation:
        "Publishing extensions belongs to developer workflows, not snippets behavior.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "One permission pairing is wrong. Which one?",
      items: [
        "Quick Search - Accessibility permissions",
        "Auto Fill from browser tab - Automation permissions",
        "Extension publishing - Accessibility permissions",
        "Selected text handoff - Accessibility permissions",
      ],
      oddItem: "Extension publishing - Accessibility permissions",
      explanation:
        "Accessibility and Automation permissions are tied to input/browser automation features, not store publishing.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "orchestration",
      statement:
        "Raycast's developer experience includes built-in UI components and a Store publishing flow",
      isTrue: true,
      explanation:
        "Both are explicitly presented in Raycast's developer materials.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Core facts or fake claims?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Choose the stronger Raycast move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Exact command and limit recall" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Fast platform and stack checks" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the mismatch" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One-shot architecture check" },
  ],
};
