import { Dimension } from "./questions";

export type V3ChallengeType =
  | "truth_or_myth"
  | "this_or_that"
  | "quick_pick"
  | "speed_pick"
  | "rank_it";

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

export interface RankItChallenge {
  type: "rank_it";
  id: number;
  dimension: Dimension;
  prompt: string;
  correctOrder: string[];
  explanation: string;
}

export type V3Challenge =
  | TruthOrMythChallenge
  | ThisOrThatChallenge
  | QuickPickChallenge
  | SpeedPickChallenge
  | RankItChallenge;

export const v3challenges: V3Challenge[] = [
  // ── ROUND 1: TRUTH OR MYTH (5 questions) ─────────────────
  {
    type: "truth_or_myth",
    id: 1,
    dimension: "memory",
    statement: "CLAUDE.md loads automatically at the start of every session",
    isTrue: true,
    explanation: "It's Claude's persistent memory. Set it once, it's always there.",
  },
  {
    type: "truth_or_myth",
    id: 2,
    dimension: "orchestration",
    statement: "Subagents can see your entire conversation history",
    isTrue: false,
    explanation: "Nope — subagents run in isolated context. They can't see your chat.",
  },
  {
    type: "truth_or_myth",
    id: 3,
    dimension: "automation",
    statement: "Hooks can only run shell scripts",
    isTrue: false,
    explanation: "Three types: shell scripts, prompt-based, and agent-based. Way more than just shell.",
  },
  {
    type: "truth_or_myth",
    id: 4,
    dimension: "extensibility",
    statement: "MCP servers always need an internet connection",
    isTrue: false,
    explanation: "MCP servers run locally on your machine. No cloud needed.",
  },

  // ── ROUND 2: THIS OR THAT (4 questions) ──────────────────
  {
    type: "this_or_that",
    id: 5,
    dimension: "orchestration",
    scenario: "You need 3 Claude sessions working on different features simultaneously, communicating with each other.",
    optionA: "Subagents",
    optionB: "Agent Teams",
    correct: "B",
    explanation: "Agent teams = independent sessions that message each other. Subagents = a helper inside your session.",
  },
  {
    type: "this_or_that",
    id: 6,
    dimension: "automation",
    scenario: "Every time Claude edits a file, you want tests to run automatically. No exceptions.",
    optionA: "Hooks",
    optionB: "Skills",
    correct: "A",
    explanation: "Hooks are deterministic — they always fire. Skills rely on AI judgment.",
  },
  {
    type: "this_or_that",
    id: 7,
    dimension: "memory",
    scenario: "Your project instructions are massive. You want different rules for different folders.",
    optionA: "Rules files with paths",
    optionB: "Multiple CLAUDE.md files",
    correct: "A",
    explanation: "Rules in .claude/rules/ with paths frontmatter load conditionally per directory.",
  },

  // ── ROUND 3: QUICK PICK (3 questions) ────────────────────
  {
    type: "quick_pick",
    id: 8,
    dimension: "workflows",
    scenario: "You type /review in Claude Code and it runs your custom code review workflow. Where did you set this up?",
    blank: ".claude/commands/",
    options: [".claude/commands/", "CLAUDE.md", "Settings panel"],
    explanation: "Slash commands live in .claude/commands/ as markdown files. Filename = command name.",
  },
  {
    type: "quick_pick",
    id: 9,
    dimension: "automation",
    scenario: "Claude just wrote to a file. You want something to happen right after — automatically, every time. Which hook event?",
    blank: "PostToolUse",
    options: ["PostToolUse", "PreToolUse", "SessionStart"],
    explanation: "PostToolUse fires after any tool action. Perfect for auto-linting after writes.",
  },
  {
    type: "quick_pick",
    id: 10,
    dimension: "bestPractices",
    scenario: "Your Claude session is getting slow and responses are degrading. What's your best move?",
    blank: "Use /compact",
    options: ["Use /compact", "Restart your computer", "Reduce font size"],
    explanation: "/compact summarizes your conversation to free up context. The #1 fix.",
  },

  // ── ROUND 4: SPEED PICK (2 questions) ────────────────────
  {
    type: "speed_pick",
    id: 11,
    dimension: "extensibility",
    prompt: "Tap everything that's a real Claude Code feature!",
    correctItems: ["MCP Servers", "Plugins", "Skills", "Hooks", "Subagents", "Agent Teams"],
    wrongItems: ["Widgets", "Themes", "Macros", "App Store"],
    timeLimit: 12,
    explanation: "Claude Code extends via MCP, Plugins, Skills, Hooks, Subagents, and Agent Teams.",
  },
  {
    type: "speed_pick",
    id: 12,
    dimension: "prompting",
    prompt: "Tap every valid way to give Claude context!",
    correctItems: ["@filename", "@folder/", "@url", "CLAUDE.md"],
    wrongItems: ["#import", "$include", "drag & drop", "voice command"],
    timeLimit: 12,
    explanation: "@ references files, folders, and URLs. CLAUDE.md is persistent context.",
  },

  // ── ROUND 5: RANK IT (2 questions) ───────────────────────
  {
    type: "rank_it",
    id: 13,
    dimension: "bestPractices",
    prompt: "Rank these from first thing to set up → last thing in a new Claude Code project:",
    correctOrder: ["CLAUDE.md", "Custom slash commands", "MCP servers", "Agent teams"],
    explanation: "Start with CLAUDE.md (foundation), then commands (workflows), then MCP (integrations), then agent teams (advanced orchestration).",
  },
  {
    type: "rank_it",
    id: 14,
    dimension: "extensibility",
    prompt: "Rank MCP server scope from highest priority → lowest:",
    correctOrder: ["Local", "Project", "User"],
    explanation: "Local > Project > User. The most specific scope always wins, just like CSS specificity.",
  },

  // ── ROUND 6: FINAL (1 expert question) ───────────────────
  {
    type: "truth_or_myth",
    id: 15,
    dimension: "bestPractices",
    statement: "If your project CLAUDE.md and user CLAUDE.md disagree, Claude crashes",
    isTrue: false,
    explanation: "Claude reconciles conflicts intelligently. More specific instructions usually win. No crashes.",
  },
];

export const V3_ROUND_CONFIG = [
  { name: "Truth or Myth", icon: "01", ids: [1, 2, 3, 4], description: "Real feature or total BS?" },
  { name: "This or That", icon: "02", ids: [5, 6, 7], description: "Pick the right tool" },
  { name: "Quick Pick", icon: "03", ids: [8, 9, 10], description: "Name that feature" },
  { name: "Speed Round", icon: "04", ids: [11, 12], description: "Tap fast, think faster" },
  { name: "Rank It", icon: "05", ids: [13, 14], description: "Put it in order" },
  { name: "Final Boss", icon: "06", ids: [15], description: "One shot, expert level" },
];
