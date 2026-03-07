import type { QuizConfig } from "@/components/quiz/types";

export const cursorConfig: QuizConfig = {
  slug: "cursor",
  toolName: "Cursor",
  tagline: "6 rounds. ~3 min. No IDE required.",
  subtitle: "Just you vs. Cursor trivia.",
  sansFont: "space-grotesk",
  serifFont: "playfair-display",
  accentColor: "#2D2D2D",
  accentColorDim: "#1A1A1A",
  accentColorSubtle: "rgba(45,45,45,0.06)",
  bgColor: "#F8F8F8",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EFEFEF",
  textColor: "#0A0A0A",
  textSecondary: "#4A4A4A",
  textTertiary: "#999999",
  borderColor: "#E0E0E0",
  borderSubtle: "#EFEFEF",
  scorecardBg: "#0A0A0A",
  scorecardAccentColor: "#A0A0A0",
  scorecardDivider: "#1A1A1A",
  scorecardLabelColor: "#888888",
  scorecardGridColor: "#1A1A1A",
  logo: (<img src="/logos/cursor.png" alt="Cursor" width={56} height={56} style={{ borderRadius: 12, objectFit: "contain" }} />),
  analyticsPrefix: "cursor",
  dimensionLabels: {
    memory: "Context & Rules",
    orchestration: "Agent & Multi-file",
    automation: "Productivity",
    extensibility: "Extensions & MCP",
    workflows: "Advanced Features",
    prompting: "Prompting",
    bestPractices: "Best Practices",
  },
  archetypes: [
    {
      title: "Cursor Virtuoso",
      emoji: "🎹",
      description:
        "You've mastered every corner of Cursor. Agents, rules, MCP servers, multi-file edits - you're running circles around everyone.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Code Architect",
      emoji: "🏗️",
      description:
        "You know how to get exactly what you want from Cursor. Your workflow is elite and you use features most people have never seen.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Power Editor",
      emoji: "⚡",
      description:
        "You're well beyond the basics. A few advanced features to explore and you'll be in the top tier.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Daily Driver",
      emoji: "🚗",
      description:
        "Cursor is part of your routine, but there's a whole world of features you haven't tapped into yet.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Tab Completer",
      emoji: "⇥",
      description:
        "You use Cursor for autocomplete and chat, and that's fine. But you're leaving a LOT of power on the table.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Window Shopper",
      emoji: "🪟",
      description:
        "You've tried Cursor but barely scratched the surface. The real features are waiting for you.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Install",
      emoji: "🌱",
      description:
        "Everyone starts somewhere. You just discovered that Cursor can do way more than autocomplete.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    // Round 1: Truth or Myth (ids 1-4)
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "memory",
      statement:
        "You can put a .cursorrules file in your project root and Cursor will automatically follow those instructions for every chat and edit in that project.",
      isTrue: true,
      explanation:
        "The .cursorrules file is a project-level config. Put coding standards, tech stack details, or conventions there and Cursor applies them automatically. No need to repeat yourself in every conversation.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "extensibility",
      statement:
        "MCP (Model Context Protocol) servers let Cursor connect to external tools like databases, APIs, and Figma, giving the AI access to live data and designs.",
      isTrue: true,
      explanation:
        "MCP servers extend Cursor's capabilities. You can connect to databases, fetch Figma designs, call APIs, and more. The AI can read and use that data in context. It's like giving Cursor superpowers.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "Agent mode can run terminal commands, create files, and make multi-file edits on its own - you just approve the plan and it executes.",
      isTrue: true,
      explanation:
        "Agent mode is the most autonomous option. It can run commands, create and edit files across your codebase, and work through multi-step tasks. You review and approve each step. Chat and Composer are more interactive.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "workflows",
      statement:
        "Cursor can only reference files you explicitly @ mention. It cannot search your codebase on its own.",
      isTrue: false,
      explanation:
        "Cursor indexes your codebase automatically. When you use @codebase, it searches across your project to find relevant files. You can also @ specific files, folders, docs, or @web for real-time search.",
    },

    // Round 2: This or That (ids 5-7)
    {
      type: "this_or_that",
      id: 5,
      dimension: "prompting",
      scenario:
        "You want Cursor to always use your team's coding style and never suggest certain patterns. What's the best approach?",
      optionA: "Add rules in .cursor/rules or .cursorrules",
      optionB: "Paste your style guide at the start of every chat",
      correct: "A",
      explanation:
        "Project rules in .cursorrules or .cursor/rules persist across all sessions. The AI reads them automatically. Pasting every time wastes context and is easy to forget.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "automation",
      scenario:
        "You need a quick inline edit to fix a function - change the logic, add a parameter, refactor a few lines.",
      optionA: "Open Composer and describe the change",
      optionB: "Select the code and press Cmd+K for inline edit",
      correct: "B",
      explanation:
        "Cmd+K (or Ctrl+K) is the inline edit shortcut. Select code, hit it, type your request, and get a focused edit right there. Composer is better for multi-file or larger refactors.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "orchestration",
      scenario:
        "You're debugging and want to show Cursor an error screenshot plus the relevant code. What's the best way?",
      optionA: "Describe the error in text and paste the stack trace",
      optionB: "Paste the screenshot into chat and @ the file with the error",
      correct: "B",
      explanation:
        "Cursor supports images in chat. Pasting a screenshot gives it the exact UI or error. Combining that with @file gives full context. Visual + code beats text-only every time.",
    },

    // Round 3: Quick Pick (ids 8-10)
    {
      type: "quick_pick",
      id: 8,
      dimension: "workflows",
      scenario:
        "You want Cursor to look up the latest React docs instead of relying on its training data. Which @ mention do you use?",
      blank: "@web",
      options: ["@web", "@docs", "@react", "@internet"],
      explanation:
        "@web performs real-time web search. Cursor fetches current docs, changelogs, and articles. @docs can point to specific documentation. For live, up-to-date info, @web is the move.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "automation",
      scenario:
        "You're getting long multi-line tab completions that sometimes feel overkill. What feature is Cursor using?",
      blank: "Multi-line tab completion",
      options: [
        "Multi-line tab completion",
        "Agent suggestions",
        "Composer preview",
        "Rule-based autocomplete",
      ],
      explanation:
        "Cursor's tab completion can suggest whole blocks - multiple lines, function bodies, even small snippets. It's smarter than single-token completion. You can accept, reject, or edit before applying.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "memory",
      scenario:
        "You have reusable context - a design system, API spec, or shared patterns - that you want available across many chats. What Cursor feature helps?",
      blank: "Notepads",
      options: ["Notepads", "Bookmarks", "Snippets", "Templates"],
      explanation:
        "Notepads let you save context (text, code, specs) and reference it in future chats. Pin a notepad and it stays in context. Great for design systems, API docs, or project conventions you refer to often.",
    },

    // Round 4: Speed Pick (ids 11-12)
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap everything you can reference with @ in Cursor chat!",
      correctItems: [
        "Files and folders",
        "Codebase search",
        "Web search",
        "Documentation",
      ],
      wrongItems: ["GitHub repos", "Slack channels", "Jira tickets", "Email"],
      timeLimit: 15,
      explanation:
        "@file, @folder, @codebase, @web, @docs - Cursor's @ system pulls in files, folders, codebase search results, web content, and docs. External tools like Slack or Jira need MCP servers.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "bestPractices",
      prompt: "Tap every real Cursor feature that improves your workflow!",
      correctItems: [
        "Privacy mode (disable indexing)",
        "Custom API keys",
        "Model selection",
        "YOLO mode (auto-approve)",
      ],
      wrongItems: [
        "Offline mode",
        "Plugin marketplace",
        "Team voice chat",
        "Built-in CI/CD",
      ],
      timeLimit: 15,
      explanation:
        "Privacy mode, custom API keys, model selection, and YOLO mode are real. Cursor needs internet, has extensions not a plugin marketplace, and doesn't have built-in voice or CI/CD.",
    },

    // Round 5: Odd One Out (ids 13-14)
    {
      type: "odd_one_out",
      id: 13,
      dimension: "orchestration",
      prompt:
        "One of these is NOT a real Cursor mode or interface. Which one?",
      items: ["Chat", "Composer", "Agent", "Terminal AI"],
      oddItem: "Terminal AI",
      explanation:
        "Chat, Composer, and Agent are real. Chat is conversational, Composer does multi-file edits, Agent runs autonomously with approvals. There's no separate 'Terminal AI' mode - the agent uses the terminal as a tool.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "workflows",
      prompt:
        "One of these is NOT something Cursor can do natively. Which one?",
      items: [
        "Paste and analyze screenshots",
        "Search the web in real time",
        "Run background agents while you code",
        "Push commits to GitHub",
      ],
      oddItem: "Push commits to GitHub",
      explanation:
        "Cursor can handle images, @web for live search, and background agents. It can run git commands in the terminal (with your approval), but it doesn't push commits directly - you approve terminal actions. The agent runs commands; you control what gets executed.",
    },

    // Round 6: Final Boss (id 15)
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "bestPractices",
      statement:
        "You can scope rules to specific file patterns - for example, one set of rules for *.tsx files and another for *.py - using the .cursor/rules directory.",
      isTrue: true,
      explanation:
        "The .cursor/rules directory supports glob-based rule files. Create rules that apply only to certain paths or file types. Frontend rules for React, backend rules for Python - each gets the right context without polluting the other.",
    },
  ],
  rounds: [
    {
      name: "Truth or Myth",
      icon: "⚡",
      ids: [1, 2, 3, 4],
      tagline: "Real feature or total BS?",
    },
    {
      name: "This or That",
      icon: "🆚",
      ids: [5, 6, 7],
      tagline: "Pick the smarter move",
    },
    {
      name: "Quick Pick",
      icon: "🎯",
      ids: [8, 9, 10],
      tagline: "Name that feature",
    },
    {
      name: "Speed Round",
      icon: "⏱️",
      ids: [11, 12],
      tagline: "Tap fast, think faster",
    },
    {
      name: "Odd One Out",
      icon: "👀",
      ids: [13, 14],
      tagline: "Spot the fake",
    },
    {
      name: "Final Boss",
      icon: "🏆",
      ids: [15],
      tagline: "One shot. Expert level.",
    },
  ],
};
