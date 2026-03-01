export interface Archetype {
  title: string;
  emoji: string;
  description: string;
  minScore: number;
  maxScore: number;
}

export const archetypes: Archetype[] = [
  {
    title: "Claude Whisperer",
    emoji: "🧙",
    description:
      "You speak fluent Claude. Subagents, hooks, agent teams — you orchestrate AI like a symphony conductor.",
    minScore: 90,
    maxScore: 100,
  },
  {
    title: "Agent Architect",
    emoji: "🏗️",
    description:
      "You design sophisticated Claude Code workflows. Your CLAUDE.md game is strong and your orchestration is sharp.",
    minScore: 80,
    maxScore: 89,
  },
  {
    title: "Vibe Commander",
    emoji: "🎯",
    description:
      "You know your way around Claude Code. A few advanced features to master and you'll be elite.",
    minScore: 70,
    maxScore: 79,
  },
  {
    title: "Prompt Pilot",
    emoji: "✈️",
    description:
      "Solid foundation. You can fly, but you haven't unlocked autopilot yet. The advanced features await.",
    minScore: 60,
    maxScore: 69,
  },
  {
    title: "Code Companion",
    emoji: "🤝",
    description:
      "You and Claude are getting to know each other. The good stuff is still ahead of you.",
    minScore: 50,
    maxScore: 59,
  },
  {
    title: "Terminal Tourist",
    emoji: "🗺️",
    description:
      "You've visited Claude Code, but haven't moved in yet. Time to explore the feature set.",
    minScore: 40,
    maxScore: 49,
  },
  {
    title: "Fresh Install",
    emoji: "🌱",
    description:
      "Everyone starts somewhere. You just discovered a universe of features waiting to be unlocked.",
    minScore: 0,
    maxScore: 39,
  },
];

export function getArchetype(score: number): Archetype {
  return (
    archetypes.find((a) => score >= a.minScore && score <= a.maxScore) ??
    archetypes[archetypes.length - 1]
  );
}
