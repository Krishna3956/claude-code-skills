import { Dimension } from "./questions";

export type ChallengeType =
  | "truth_or_myth"
  | "this_or_that"
  | "quick_pick"
  | "speed_pick"
  | "match_pairs";

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

export interface MatchPairsChallenge {
  type: "match_pairs";
  id: number;
  dimension: Dimension;
  pairs: { left: string; right: string }[];
  explanation: string;
}

export type Challenge =
  | TruthOrMythChallenge
  | ThisOrThatChallenge
  | QuickPickChallenge
  | SpeedPickChallenge
  | MatchPairsChallenge;

export const challenges: Challenge[] = [
  // ── ROUND 1: TRUTH OR MYTH ───────────────────────────────
  {
    type: "truth_or_myth",
    id: 1,
    dimension: "memory",
    statement: "CLAUDE.md loads automatically at the start of every session",
    isTrue: true,
    explanation: "It's Claude's persistent memory. Set it once, and it's always there.",
  },
  {
    type: "truth_or_myth",
    id: 2,
    dimension: "orchestration",
    statement: "Subagents can see your entire conversation history",
    isTrue: false,
    explanation: "Nope — subagents run in isolated context. They can't see your chat. That's the point.",
  },
  {
    type: "truth_or_myth",
    id: 3,
    dimension: "automation",
    statement: "Hooks can only run shell scripts",
    isTrue: false,
    explanation: "Three types: shell scripts, prompt-based (uses AI to decide), and agent-based (spins up a full agent).",
  },
  {
    type: "truth_or_myth",
    id: 4,
    dimension: "extensibility",
    statement: "MCP servers always need an internet connection",
    isTrue: false,
    explanation: "MCP servers run locally on your machine. No cloud, no internet required.",
  },
  {
    type: "truth_or_myth",
    id: 5,
    dimension: "workflows",
    statement: "You can create custom slash commands like /deploy in Claude Code",
    isTrue: true,
    explanation: "Drop a markdown file in .claude/commands/ and you've got a custom slash command. That easy.",
  },

  // ── ROUND 2: THIS OR THAT ────────────────────────────────
  {
    type: "this_or_that",
    id: 6,
    dimension: "orchestration",
    scenario: "You need 3 Claude sessions working on different features at the same time, talking to each other.",
    optionA: "Subagents",
    optionB: "Agent Teams",
    correct: "B",
    explanation: "Agent teams = independent sessions that message each other. Subagents = one helper inside your session.",
  },
  {
    type: "this_or_that",
    id: 7,
    dimension: "automation",
    scenario: "Every time Claude edits a file, you want tests to run automatically. No exceptions, no AI deciding.",
    optionA: "Hooks",
    optionB: "Skills",
    correct: "A",
    explanation: "Hooks are deterministic — they always fire. Skills rely on AI judgment, so they might not run.",
  },
  {
    type: "this_or_that",
    id: 8,
    dimension: "memory",
    scenario: "Your project instructions are getting massive. You want different rules for different folders.",
    optionA: "Rules files with paths",
    optionB: "Multiple CLAUDE.md files",
    correct: "A",
    explanation: "Rules in .claude/rules/ with paths frontmatter load conditionally — only when you're in that directory.",
  },
  {
    type: "this_or_that",
    id: 9,
    dimension: "extensibility",
    scenario: "You want Claude to pull tickets from your Jira board and update them.",
    optionA: "Paste Jira docs in CLAUDE.md",
    optionB: "Connect a Jira MCP server",
    correct: "B",
    explanation: "MCP gives Claude actual tools to interact with services. Pasting docs just gives it text to read.",
  },

  // ── ROUND 3: QUICK PICK (pick the right feature) ─────────
  {
    type: "quick_pick",
    id: 10,
    dimension: "workflows",
    scenario: "You type /review in Claude Code and it runs your custom code review workflow. Where did you set this up?",
    blank: ".claude/commands/",
    options: [".claude/commands/", "CLAUDE.md", "Settings panel"],
    explanation: "Slash commands live in .claude/commands/ as markdown files. The filename becomes the command.",
  },
  {
    type: "quick_pick",
    id: 11,
    dimension: "automation",
    scenario: "Claude just wrote to a file. You want something to happen right after — automatically, every time. Which hook event?",
    blank: "PostToolUse",
    options: ["PostToolUse", "PreToolUse", "SessionStart"],
    explanation: "PostToolUse fires after any tool action. Pair it with a file-write matcher and you've got auto-linting.",
  },
  {
    type: "quick_pick",
    id: 12,
    dimension: "bestPractices",
    scenario: "Your Claude session is getting slow and responses are degrading. What's your best move?",
    blank: "Use /compact",
    options: ["Use /compact", "Restart your computer", "Reduce font size"],
    explanation: "/compact summarizes your conversation to free up context. It's the #1 fix for degraded sessions.",
  },

  // ── ROUND 4: SPEED PICK ──────────────────────────────────
  {
    type: "speed_pick",
    id: 13,
    dimension: "extensibility",
    prompt: "Tap everything that's a real Claude Code feature!",
    correctItems: ["MCP Servers", "Plugins", "Skills", "Hooks", "Subagents", "Agent Teams"],
    wrongItems: ["Widgets", "Themes", "Macros", "App Store"],
    timeLimit: 12,
    explanation: "Claude Code extends via MCP, Plugins, Skills, Hooks, Subagents, and Agent Teams. No widgets or themes.",
  },
  {
    type: "speed_pick",
    id: 14,
    dimension: "prompting",
    prompt: "Tap every valid way to give Claude context!",
    correctItems: ["@filename", "@folder/", "@url", "CLAUDE.md"],
    wrongItems: ["#import", "$include", "drag & drop files", "voice command"],
    timeLimit: 12,
    explanation: "@ references files, folders, and URLs. CLAUDE.md is persistent context. No drag-drop or voice (yet).",
  },

  // ── ROUND 5: MATCH UP ────────────────────────────────────
  {
    type: "match_pairs",
    id: 15,
    dimension: "bestPractices",
    pairs: [
      { left: "Session getting slow", right: "/compact" },
      { left: "Same setup every time", right: "CLAUDE.md" },
      { left: "Talk to external APIs", right: "MCP server" },
      { left: "Auto-run after edits", right: "Hooks" },
    ],
    explanation: "Every pain point has a Claude Code fix. Knowing which one to reach for is the real skill.",
  },
  {
    type: "match_pairs",
    id: 16,
    dimension: "orchestration",
    pairs: [
      { left: "One-off isolated task", right: "Subagent" },
      { left: "Parallel teamwork", right: "Agent team" },
      { left: "Reusable workflow", right: "Skill" },
      { left: "Always-on rules", right: "CLAUDE.md" },
    ],
    explanation: "Different jobs, different tools. That's what makes Claude Code powerful — it has the right thing for each situation.",
  },

  // ── ROUND 6: FINAL ROUND ─────────────────────────────────
  {
    type: "truth_or_myth",
    id: 17,
    dimension: "bestPractices",
    statement: "If your project CLAUDE.md and user CLAUDE.md disagree, Claude crashes",
    isTrue: false,
    explanation: "Claude reconciles conflicts intelligently. More specific instructions usually win. No crashes, no errors.",
  },
  {
    type: "truth_or_myth",
    id: 18,
    dimension: "extensibility",
    statement: "Plugins from the marketplace are namespaced so they can't clash with your stuff",
    isTrue: true,
    explanation: "Plugin skills auto-namespace. /my-plugin:review won't clash with your /review. Clean separation.",
  },
];

export const ROUND_CONFIG = [
  { name: "Truth or Myth", icon: "⚡", ids: [1, 2, 3, 4, 5], description: "Real feature or total BS?" },
  { name: "This or That", icon: "🆚", ids: [6, 7, 8, 9], description: "Pick the right tool for the job" },
  { name: "Quick Pick", icon: "🎯", ids: [10, 11, 12], description: "Name that feature" },
  { name: "Speed Round", icon: "⏱️", ids: [13, 14], description: "Tap fast, think faster" },
  { name: "Match Up", icon: "🔗", ids: [15, 16], description: "Connect the dots" },
  { name: "Final Round", icon: "🏆", ids: [17, 18], description: "Expert level" },
];
