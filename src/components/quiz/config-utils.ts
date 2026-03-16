import { HIDDEN_PLAY_SLUGS, QUIZ_LIST } from "@/lib/quiz-directory";
import type { Challenge, QuizConfig, QuizDifficultyOption, RoundConfig } from "./types";

const PLAY_DIRECTORY_SLUGS = new Set(
  QUIZ_LIST.filter((quiz) => !HIDDEN_PLAY_SLUGS.has(quiz.slug)).map((quiz) => quiz.slug)
);
const TARGET_ROUNDS = 5;
const TARGET_QUESTIONS_PER_ROUND = 2;

function normalizeTagline(tagline: string): string {
  return tagline.replace(/\b6 rounds\b/, "5 rounds");
}

function trimRounds(rounds: RoundConfig[]): RoundConfig[] {
  return rounds
    .filter((round) => round.name !== "Final Boss")
    .slice(0, TARGET_ROUNDS)
    .map((round) => ({
      ...round,
      ids: round.ids.slice(0, TARGET_QUESTIONS_PER_ROUND),
    }));
}

function trimChallenges(challenges: Challenge[], rounds: RoundConfig[]): Challenge[] {
  const allowedIds = new Set(rounds.flatMap((round) => round.ids));
  return challenges.filter((challenge) => allowedIds.has(challenge.id));
}

function trimVariant(option: QuizDifficultyOption): QuizDifficultyOption {
  const rounds = trimRounds(option.rounds);
  return {
    ...option,
    tagline: option.tagline ? normalizeTagline(option.tagline) : option.tagline,
    challenges: trimChallenges(option.challenges, rounds),
    rounds,
  };
}

export function normalizePlayDirectoryQuizConfig(config: QuizConfig): QuizConfig {
  if (!PLAY_DIRECTORY_SLUGS.has(config.slug)) return config;

  const rounds = trimRounds(config.rounds);

  return {
    ...config,
    tagline: normalizeTagline(config.tagline),
    challenges: trimChallenges(config.challenges, rounds),
    rounds,
    difficultyOptions: config.difficultyOptions?.map(trimVariant),
  };
}
