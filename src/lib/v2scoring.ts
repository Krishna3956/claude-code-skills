import { Dimension, DIMENSION_LABELS } from "@/data/questions";
import { DimensionScore, QuizResult } from "./scoring";

export interface ChallengeResult {
  challengeId: number;
  earned: number; // 0 or 1
  possible: number; // always 1
  dimension: Dimension;
}

export function calculateV2Results(results: ChallengeResult[]): QuizResult {
  const dimensionPoints: Record<Dimension, { earned: number; possible: number }> = {
    memory: { earned: 0, possible: 0 },
    orchestration: { earned: 0, possible: 0 },
    automation: { earned: 0, possible: 0 },
    extensibility: { earned: 0, possible: 0 },
    workflows: { earned: 0, possible: 0 },
    prompting: { earned: 0, possible: 0 },
    bestPractices: { earned: 0, possible: 0 },
  };

  for (const r of results) {
    dimensionPoints[r.dimension].earned += r.earned;
    dimensionPoints[r.dimension].possible += r.possible;
  }

  const dimensions: DimensionScore[] = (Object.keys(dimensionPoints) as Dimension[]).map(
    (dim) => {
      const { earned, possible } = dimensionPoints[dim];
      return {
        dimension: dim,
        label: DIMENSION_LABELS[dim],
        score: possible > 0 ? Math.round((earned / possible) * 100) : 50,
        earned,
        possible,
      };
    }
  );

  const totalEarned = results.reduce((sum, r) => sum + r.earned, 0);
  const totalPossible = results.reduce((sum, r) => sum + r.possible, 0);
  const overallScore = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0;

  const percentile = generatePercentile(overallScore);

  return { overallScore, dimensions, percentile };
}

function generatePercentile(score: number): number {
  if (score >= 95) return 99;
  if (score >= 90) return 96;
  if (score >= 85) return 92;
  if (score >= 80) return 85;
  if (score >= 75) return 78;
  if (score >= 70) return 68;
  if (score >= 65) return 58;
  if (score >= 60) return 48;
  if (score >= 55) return 38;
  if (score >= 50) return 30;
  if (score >= 45) return 22;
  if (score >= 40) return 15;
  return 8;
}
