import { questions, Dimension, DIMENSION_LABELS } from "@/data/questions";

export interface DimensionScore {
  dimension: Dimension;
  label: string;
  score: number; // 0-100
  earned: number;
  possible: number;
}

export interface QuizResult {
  overallScore: number; // 0-100
  dimensions: DimensionScore[];
  percentile: number; // fake but plausible
}

export function calculateResults(answers: Record<number, number>): QuizResult {
  const dimensionPoints: Record<Dimension, { earned: number; possible: number }> = {
    memory: { earned: 0, possible: 0 },
    orchestration: { earned: 0, possible: 0 },
    automation: { earned: 0, possible: 0 },
    extensibility: { earned: 0, possible: 0 },
    workflows: { earned: 0, possible: 0 },
    prompting: { earned: 0, possible: 0 },
    bestPractices: { earned: 0, possible: 0 },
  };

  for (const q of questions) {
    const maxPoints = Math.max(...q.answers.map((a) => a.points));
    dimensionPoints[q.dimension].possible += maxPoints;

    const selectedIndex = answers[q.id];
    if (selectedIndex !== undefined && q.answers[selectedIndex]) {
      dimensionPoints[q.dimension].earned += q.answers[selectedIndex].points;
    }
  }

  const dimensions: DimensionScore[] = (Object.keys(dimensionPoints) as Dimension[]).map(
    (dim) => {
      const { earned, possible } = dimensionPoints[dim];
      return {
        dimension: dim,
        label: DIMENSION_LABELS[dim],
        score: possible > 0 ? Math.round((earned / possible) * 100) : 0,
        earned,
        possible,
      };
    }
  );

  const totalEarned = dimensions.reduce((sum, d) => sum + d.earned, 0);
  const totalPossible = dimensions.reduce((sum, d) => sum + d.possible, 0);
  const overallScore = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0;

  // Generate a plausible-feeling percentile based on score
  // Higher scores = rarer = higher percentile
  const percentile = generatePercentile(overallScore);

  return { overallScore, dimensions, percentile };
}

function generatePercentile(score: number): number {
  // Make it feel like a normal distribution centered around 55
  // So high scores feel rare and impressive
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
  if (score >= 35) return 10;
  if (score >= 30) return 6;
  return 3;
}

export function encodeResult(result: QuizResult): string {
  const scores = result.dimensions.map((d) => d.score).join(",");
  return `s=${result.overallScore}&d=${scores}&p=${result.percentile}`;
}

export function decodeResult(params: URLSearchParams): QuizResult | null {
  const s = params.get("s");
  const d = params.get("d");
  const p = params.get("p");

  if (!s || !d || !p) return null;

  const overallScore = parseInt(s, 10);
  const percentile = parseInt(p, 10);
  const scores = d.split(",").map((v) => parseInt(v, 10));

  const dims: Dimension[] = [
    "memory",
    "orchestration",
    "automation",
    "extensibility",
    "workflows",
    "prompting",
    "bestPractices",
  ];

  if (scores.length !== dims.length) return null;

  const dimensions: DimensionScore[] = dims.map((dim, i) => ({
    dimension: dim,
    label: DIMENSION_LABELS[dim],
    score: scores[i],
    earned: 0,
    possible: 0,
  }));

  return { overallScore, dimensions, percentile };
}
