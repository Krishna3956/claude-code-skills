export type Dimension =
  | "memory"
  | "orchestration"
  | "automation"
  | "extensibility"
  | "workflows"
  | "prompting"
  | "bestPractices";

export const DIMENSION_LABELS: Record<Dimension, string> = {
  memory: "Memory & Context",
  orchestration: "Orchestration",
  automation: "Automation",
  extensibility: "Extensibility",
  workflows: "Workflows",
  prompting: "Prompting",
  bestPractices: "Best Practices",
};

export interface Answer {
  text: string;
  points: number; // 0-3
}

export interface Question {
  id: number;
  dimension: Dimension;
  difficulty: "easy" | "medium" | "hard" | "expert";
  question: string;
  answers: Answer[];
  explanation: string;
}

export const questions: Question[] = [
  // ── EASY (1-4) ──────────────────────────────────────────────
  {
    id: 1,
    dimension: "memory",
    difficulty: "easy",
    question:
      "You want Claude Code to always remember your project's coding conventions. Where do you put those instructions?",
    answers: [
      { text: "In a CLAUDE.md file at the project root", points: 3 },
      { text: "In a comment at the top of every file", points: 0 },
      { text: "Tell Claude at the start of every session", points: 1 },
      { text: "In your .gitignore", points: 0 },
    ],
    explanation:
      "CLAUDE.md is Claude Code's memory system. It loads automatically every session — no need to repeat yourself.",
  },
  {
    id: 2,
    dimension: "prompting",
    difficulty: "easy",
    question:
      'You need Claude to look at a specific file before making changes. What\'s the fastest way?',
    answers: [
      { text: 'Type "please read src/utils/auth.ts first"', points: 1 },
      { text: "Use @src/utils/auth.ts in your prompt", points: 3 },
      { text: "Copy-paste the file contents into the chat", points: 0 },
      { text: "Open the file in your editor and hope Claude notices", points: 0 },
    ],
    explanation:
      "The @ symbol lets you reference files, directories, and URLs directly. Claude reads them into context instantly.",
  },
  {
    id: 3,
    dimension: "bestPractices",
    difficulty: "easy",
    question:
      "You're starting a new project with Claude Code. What's the first thing you should set up?",
    answers: [
      { text: "Jump straight into coding", points: 0 },
      { text: "Create a CLAUDE.md with project context and conventions", points: 3 },
      { text: "Install every MCP server you can find", points: 0 },
      { text: "Set permission mode to YOLO", points: 1 },
    ],
    explanation:
      "A well-crafted CLAUDE.md is the foundation. It tells Claude your stack, conventions, and project structure from the first message.",
  },
  {
    id: 4,
    dimension: "workflows",
    difficulty: "easy",
    question:
      "You have a deployment script you run frequently with Claude. How do you make it a one-command action?",
    answers: [
      { text: "Create a slash command like /deploy", points: 3 },
      { text: 'Just type "deploy" every time', points: 0 },
      { text: "Add it to CLAUDE.md and ask Claude to run it", points: 1 },
      { text: "Create a bash alias outside Claude", points: 1 },
    ],
    explanation:
      "Slash commands let you create reusable prompts and workflows. Type /deploy and Claude knows exactly what to do.",
  },

  // ── MEDIUM (5-9) ────────────────────────────────────────────
  {
    id: 5,
    dimension: "orchestration",
    difficulty: "medium",
    question:
      "You need Claude to review 20 files for security issues without bloating your main conversation. What do you use?",
    answers: [
      { text: "Ask Claude to review them one by one in the main chat", points: 0 },
      { text: "Create a subagent to handle the review in isolated context", points: 3 },
      { text: "Open 20 separate Claude Code sessions", points: 0 },
      { text: "Put the task in CLAUDE.md", points: 1 },
    ],
    explanation:
      "Subagents run in isolated context and return summaries. Perfect for large tasks that would bloat your main conversation.",
  },
  {
    id: 6,
    dimension: "extensibility",
    difficulty: "medium",
    question:
      "You want Claude Code to interact with your company's Jira board. What feature connects Claude to external services?",
    answers: [
      { text: "CLAUDE.md with API instructions", points: 0 },
      { text: "A Hook that calls the Jira API", points: 1 },
      { text: "An MCP server for Jira", points: 3 },
      { text: "A custom slash command", points: 1 },
    ],
    explanation:
      "MCP (Model Context Protocol) connects Claude to external services and tools. It's the standard way to give Claude access to APIs, databases, and third-party services.",
  },
  {
    id: 7,
    dimension: "automation",
    difficulty: "medium",
    question:
      "You want to automatically run your linter every time Claude edits a file, without Claude deciding whether to run it. What do you use?",
    answers: [
      { text: 'Add "always run the linter after edits" to CLAUDE.md', points: 1 },
      { text: "A PostToolUse hook on file write tools", points: 3 },
      { text: "A skill that includes linting", points: 1 },
      { text: "A subagent dedicated to linting", points: 0 },
    ],
    explanation:
      "Hooks are deterministic scripts that run outside the AI loop. A PostToolUse hook on file writes guarantees the linter runs every time — no AI judgment needed.",
  },
  {
    id: 8,
    dimension: "memory",
    difficulty: "medium",
    question:
      "Your CLAUDE.md is 2000 lines long and Claude is starting to miss instructions. What's the best fix?",
    answers: [
      { text: "Delete the less important stuff", points: 1 },
      { text: "Split into .claude/rules/ files with paths frontmatter for conditional loading", points: 3 },
      { text: "Move everything into skills instead", points: 2 },
      { text: "Just make Claude re-read it", points: 0 },
    ],
    explanation:
      "Rules files in .claude/rules/ with paths frontmatter load conditionally — only when working in matching directories. This keeps context lean and relevant.",
  },
  {
    id: 9,
    dimension: "prompting",
    difficulty: "medium",
    question:
      "Claude made changes across 8 files but something broke. What's the best way to debug with Claude?",
    answers: [
      { text: "Undo everything and start over", points: 0 },
      { text: "Ask Claude to run the tests, show the error, and fix it iteratively", points: 3 },
      { text: "Copy the error into a new session", points: 1 },
      { text: "Manually read every changed file", points: 0 },
    ],
    explanation:
      "The best debugging loop: run tests → show Claude the error → let it fix → verify. Keep Claude in the loop with real feedback, not guesses.",
  },

  // ── HARD (10-14) ────────────────────────────────────────────
  {
    id: 10,
    dimension: "orchestration",
    difficulty: "hard",
    question:
      "What's the key difference between a subagent and an agent team?",
    answers: [
      { text: "Subagents are faster, agent teams are slower", points: 0 },
      { text: "Subagents run inside your session; agent teams are independent sessions that communicate via messages", points: 3 },
      { text: "Agent teams can use MCP, subagents cannot", points: 0 },
      { text: "They're the same thing with different names", points: 0 },
    ],
    explanation:
      "Subagents run inside your session and report back. Agent teams are fully independent Claude Code sessions that coordinate via peer-to-peer messaging — true parallel work.",
  },
  {
    id: 11,
    dimension: "automation",
    difficulty: "hard",
    question:
      "You want a hook that checks if a file contains secrets before Claude commits. Which hook event and action do you use?",
    answers: [
      { text: "PreToolUse on Bash with a shell script that scans for secrets", points: 3 },
      { text: "PostToolUse on Write with a prompt-based check", points: 1 },
      { text: "SessionEnd with a cleanup script", points: 0 },
      { text: "PromptSubmit with a regex filter", points: 1 },
    ],
    explanation:
      "PreToolUse hooks can inspect tool inputs and return allow/deny decisions. A shell script scanning for secrets on commit-related bash commands prevents leaks deterministically.",
  },
  {
    id: 12,
    dimension: "workflows",
    difficulty: "hard",
    question:
      "You built a skill that generates API documentation. Where should supporting template files live?",
    answers: [
      { text: "Anywhere in the project", points: 0 },
      { text: "In a directory next to the SKILL.md file", points: 3 },
      { text: "Inlined in the SKILL.md itself", points: 1 },
      { text: "In CLAUDE.md", points: 0 },
    ],
    explanation:
      "Skills support a directory for supporting files. Put templates, examples, and config next to your SKILL.md — Claude can access them when the skill is invoked.",
  },
  {
    id: 13,
    dimension: "extensibility",
    difficulty: "hard",
    question:
      "Three MCP servers with the same name are configured at local, project, and user level. Which one wins?",
    answers: [
      { text: "User level (most global)", points: 0 },
      { text: "Project level (most specific to the project)", points: 0 },
      { text: "Local level takes highest priority", points: 3 },
      { text: "They all merge together", points: 0 },
    ],
    explanation:
      "MCP scope priority: local > project > user. The most local definition wins, just like CSS specificity.",
  },
  {
    id: 14,
    dimension: "bestPractices",
    difficulty: "hard",
    question:
      "Claude's responses are getting slower and less accurate mid-session. What's likely happening and what's the best fix?",
    answers: [
      { text: "The API is rate-limited — wait and retry", points: 0 },
      { text: "Context window is filling up — use /compact or spawn a subagent for remaining work", points: 3 },
      { text: "Your internet connection is slow", points: 0 },
      { text: "Claude is getting tired — restart the session", points: 1 },
    ],
    explanation:
      "Context bloat is the #1 cause of degraded performance. /compact summarizes the conversation, and subagents run in fresh context — both prevent the window from overflowing.",
  },

  // ── EXPERT (15-18) ──────────────────────────────────────────
  {
    id: 15,
    dimension: "automation",
    difficulty: "expert",
    question:
      "What are the three types of hook implementations Claude Code supports?",
    answers: [
      { text: "Shell scripts, prompt-based hooks, and agent-based hooks", points: 3 },
      { text: "JavaScript, Python, and TypeScript hooks", points: 0 },
      { text: "Pre-hooks, post-hooks, and side-hooks", points: 0 },
      { text: "Sync hooks, async hooks, and streaming hooks", points: 0 },
    ],
    explanation:
      "Shell script hooks run deterministic commands. Prompt-based hooks use a Claude model to evaluate conditions. Agent-based hooks spin up a full agent for complex decisions.",
  },
  {
    id: 16,
    dimension: "orchestration",
    difficulty: "expert",
    question:
      "When creating a subagent, you can set `permissionMode`, `maxTurns`, and preloaded skills. What happens differently with preloaded skills vs regular skill discovery?",
    answers: [
      { text: "Preloaded skills are cached, regular ones are not", points: 0 },
      { text: "Full skill content is injected at startup, not just descriptions", points: 3 },
      { text: "Preloaded skills run faster", points: 0 },
      { text: "No difference — it's just a convenience", points: 0 },
    ],
    explanation:
      "In regular sessions, only skill descriptions load into context. With preloaded skills on subagents, the FULL skill content is injected at startup — the subagent has everything it needs from the start.",
  },
  {
    id: 17,
    dimension: "extensibility",
    difficulty: "expert",
    question:
      "You install a plugin from a marketplace. How are its skills namespaced to avoid conflicts with your project's skills?",
    answers: [
      { text: "They're not — you have to rename conflicts manually", points: 0 },
      { text: "Plugin skills are automatically namespaced with the plugin name prefix", points: 3 },
      { text: "Plugins can't have skills, only MCP servers", points: 0 },
      { text: "The user is prompted to resolve conflicts at install time", points: 1 },
    ],
    explanation:
      "Plugin skills are automatically namespaced to prevent conflicts. You invoke them as /my-plugin:skill-name — clean separation from your own project skills.",
  },
  {
    id: 18,
    dimension: "bestPractices",
    difficulty: "expert",
    question:
      "You're designing a Claude Code setup for a team. CLAUDE.md instructions at different levels conflict. How does Claude resolve this?",
    answers: [
      { text: "Throws an error and asks you to fix it", points: 0 },
      { text: "Last-loaded file wins", points: 0 },
      { text: "Uses judgment — more specific instructions typically take precedence", points: 3 },
      { text: "User-level always overrides project-level", points: 0 },
    ],
    explanation:
      "CLAUDE.md files are additive — all levels load simultaneously. When instructions conflict, Claude uses judgment to reconcile, with more specific instructions typically winning. It's intelligent merging, not rigid overriding.",
  },
];
