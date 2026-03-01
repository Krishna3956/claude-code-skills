import { Dimension } from "./questions";

export type V4ChallengeType =
  | "truth_or_myth"
  | "this_or_that"
  | "quick_pick"
  | "speed_pick"
  | "odd_one_out";

export interface TruthOrMythChallenge {
  type: "truth_or_myth";
  id: number;
  dimension: Dimension;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface ThisOrThatChallenge {
  type: "this_or_that";
  id: number;
  dimension: Dimension;
  scenario: string;
  optionA: string;
  optionB: string;
  correct: "A" | "B";
  explanation: string;
}

export interface QuickPickChallenge {
  type: "quick_pick";
  id: number;
  dimension: Dimension;
  scenario: string;
  blank: string;
  options: string[];
  explanation: string;
}

export interface SpeedPickChallenge {
  type: "speed_pick";
  id: number;
  dimension: Dimension;
  prompt: string;
  correctItems: string[];
  wrongItems: string[];
  timeLimit: number;
  explanation: string;
}

export interface OddOneOutChallenge {
  type: "odd_one_out";
  id: number;
  dimension: Dimension;
  prompt: string;
  items: string[];
  oddItem: string;
  explanation: string;
}

export type V4Challenge =
  | TruthOrMythChallenge
  | ThisOrThatChallenge
  | QuickPickChallenge
  | SpeedPickChallenge
  | OddOneOutChallenge;

export const v4challenges: V4Challenge[] = [
  // ── ROUND 1: TRUTH OR MYTH (4) ───────────────────────────
  {
    type: "truth_or_myth",
    id: 1,
    dimension: "memory",
    statement: "CLAUDE.md is a file where you can save project instructions that Claude remembers across sessions",
    isTrue: true,
    explanation: "CLAUDE.md is Claude's persistent memory — write your coding standards, project context, or preferences there and Claude reads it every time.",
  },
  {
    type: "truth_or_myth",
    id: 2,
    dimension: "orchestration",
    statement: "Claude Code can spawn multiple sub-agents to work on tasks in parallel",
    isTrue: true,
    explanation: "Subagents are like mini-Claudes that handle specific tasks (like writing tests) while the main agent keeps working. Super useful for big tasks.",
  },
  {
    type: "truth_or_myth",
    id: 3,
    dimension: "automation",
    statement: "You can set up automatic actions that run every time Claude edits a file — like auto-formatting or running tests",
    isTrue: true,
    explanation: "These are called Hooks! You can trigger scripts automatically before or after Claude uses any tool. Great for linting, testing, etc.",
  },
  {
    type: "truth_or_myth",
    id: 4,
    dimension: "extensibility",
    statement: "MCP lets you connect Claude Code to external tools like databases, APIs, or even Figma",
    isTrue: true,
    explanation: "MCP (Model Context Protocol) servers are plugins that extend what Claude can do — connect to databases, search the web, read Figma designs, and more.",
  },

  // ── ROUND 2: THIS OR THAT (3) ────────────────────────────
  {
    type: "this_or_that",
    id: 5,
    dimension: "orchestration",
    scenario: "You want Claude to handle a quick side-task (like writing a test) without losing your current conversation flow.",
    optionA: "Subagent",
    optionB: "New chat session",
    correct: "A",
    explanation: "Subagents handle side-tasks independently and report back — no need to start a whole new session. It's like delegating to an assistant.",
  },
  {
    type: "this_or_that",
    id: 6,
    dimension: "automation",
    scenario: "You want to save your preferred coding style and project setup instructions so Claude always follows them.",
    optionA: "CLAUDE.md",
    optionB: "Tell Claude every time",
    correct: "A",
    explanation: "CLAUDE.md saves your instructions permanently. No need to repeat yourself — Claude reads it at the start of every session.",
  },
  {
    type: "this_or_that",
    id: 7,
    dimension: "memory",
    scenario: "You want Claude to run a custom code review workflow you've built, using a simple command.",
    optionA: "Custom slash commands",
    optionB: "Copy-paste a prompt every time",
    correct: "A",
    explanation: "Custom slash commands (stored in .claude/commands/) let you trigger reusable workflows with a simple /command. Way better than copy-pasting!",
  },

  // ── ROUND 3: QUICK PICK (3) ──────────────────────────────
  {
    type: "quick_pick",
    id: 8,
    dimension: "workflows",
    scenario: "You want Claude to reference a specific file in your project while chatting. How do you point it to the right file?",
    blank: "Type @ followed by the filename",
    options: ["Type @ followed by the filename", "Upload the file manually", "Describe the file contents"],
    explanation: "Just type @filename and Claude reads the file directly. You can also use @folder/ to reference entire directories!",
  },
  {
    type: "quick_pick",
    id: 9,
    dimension: "automation",
    scenario: "Your conversation with Claude is getting really long and slow. What's the quickest way to fix it?",
    blank: "Use the /compact command",
    options: ["Use the /compact command", "Close and reopen the app", "Delete old messages manually"],
    explanation: "/compact summarizes your entire conversation into a shorter version, freeing up context space. It's the #1 trick power users know.",
  },
  {
    type: "quick_pick",
    id: 10,
    dimension: "bestPractices",
    scenario: "You want Claude to automatically check your code for errors every time it writes to a file. What feature do you use?",
    blank: "Hooks",
    options: ["Hooks", "Bookmarks", "Alerts"],
    explanation: "Hooks are automated triggers — set one up to run your linter after every file write. It just works, every time, no prompting needed.",
  },

  // ── ROUND 4: SPEED PICK (2) ──────────────────────────────
  {
    type: "speed_pick",
    id: 11,
    dimension: "extensibility",
    prompt: "Tap everything that's a real Claude Code feature!",
    correctItems: ["CLAUDE.md", "Slash Commands", "Hooks", "MCP Servers", "Subagents"],
    wrongItems: ["Themes", "App Store", "Drag & Drop", "Voice Input"],
    timeLimit: 15,
    explanation: "CLAUDE.md, slash commands, hooks, MCP servers, and subagents are all real Claude Code features!",
  },
  {
    type: "speed_pick",
    id: 12,
    dimension: "prompting",
    prompt: "Tap every valid way to give Claude context!",
    correctItems: ["@filename", "@folder/", "Paste a URL", "CLAUDE.md"],
    wrongItems: ["Drag & drop files", "Voice memo", "Screenshot", "Emoji reactions"],
    timeLimit: 15,
    explanation: "You can reference files with @, paste URLs, and use CLAUDE.md for persistent context. Simple and powerful.",
  },

  // ── ROUND 5: ODD ONE OUT (2) ─────────────────────────────
  {
    type: "odd_one_out",
    id: 13,
    dimension: "bestPractices",
    prompt: "One of these is NOT a Claude Code feature. Which one?",
    items: ["CLAUDE.md", "/compact", "Copilot Chat", "Hooks"],
    oddItem: "Copilot Chat",
    explanation: "Copilot Chat is a GitHub Copilot feature. CLAUDE.md, /compact, and Hooks are all Claude Code.",
  },
  {
    type: "odd_one_out",
    id: 14,
    dimension: "extensibility",
    prompt: "One of these is NOT something you can put in CLAUDE.md. Which one?",
    items: ["Coding style preferences", "Project structure notes", "API keys and passwords", "Workflow instructions"],
    oddItem: "API keys and passwords",
    explanation: "Never put secrets in CLAUDE.md! It's for instructions, preferences, and context — not sensitive data. Use environment variables for secrets.",
  },

  // ── ROUND 6: FINAL (1) ───────────────────────────────────
  {
    type: "truth_or_myth",
    id: 15,
    dimension: "bestPractices",
    statement: "Claude Code works right in your terminal — no browser or separate app needed",
    isTrue: true,
    explanation: "Claude Code runs entirely in your terminal. Just type 'claude' and start coding. It reads your files, runs commands, and writes code — all from the command line.",
  },
];

export const V4_ROUND_CONFIG = [
  { name: "Truth or Myth", icon: "⚡", ids: [1, 2, 3, 4], tagline: "Real feature or total BS?" },
  { name: "This or That", icon: "🆚", ids: [5, 6, 7], tagline: "Pick the right tool" },
  { name: "Quick Pick", icon: "🎯", ids: [8, 9, 10], tagline: "Name that feature" },
  { name: "Speed Round", icon: "⏱️", ids: [11, 12], tagline: "Tap fast, think faster" },
  { name: "Odd One Out", icon: "👀", ids: [13, 14], tagline: "Spot the fake" },
  { name: "Final Boss", icon: "🏆", ids: [15], tagline: "One shot. Expert level." },
];
