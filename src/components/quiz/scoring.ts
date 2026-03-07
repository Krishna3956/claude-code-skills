import type { Dimension, DimensionScore, QuizResult, ChallengeResult, QuizConfig } from "./types";

const ALL_DIMS: Dimension[] = [
  "memory",
  "orchestration",
  "automation",
  "extensibility",
  "workflows",
  "prompting",
  "bestPractices",
];

export function calculateResults(results: ChallengeResult[], config: QuizConfig): QuizResult {
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

  const dimensions: DimensionScore[] = (Object.keys(dimensionPoints) as Dimension[])
    .filter((dim) => dimensionPoints[dim].possible > 0)
    .map((dim) => {
      const { earned, possible } = dimensionPoints[dim];
      return {
        dimension: dim,
        label: config.dimensionLabels[dim],
        score: Math.round((earned / possible) * 100),
        earned,
        possible,
      };
    });

  const totalEarned = results.reduce((sum, r) => sum + r.earned, 0);
  const totalPossible = results.reduce((sum, r) => sum + r.possible, 0);
  const overallScore = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0;

  return { overallScore, dimensions, percentile: generatePercentile(overallScore) };
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

const SALT = "hwyk_2024";

function computeChecksum(payload: string): string {
  let h = 0;
  const str = payload + SALT;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return (h >>> 0).toString(36);
}

function toBase64Url(str: string): string {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(str: string): string {
  let b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4) b64 += "=";
  return atob(b64);
}

export function encodeResult(result: QuizResult): string {
  const payload = JSON.stringify({
    s: result.overallScore,
    k: result.dimensions.map((d) => d.dimension),
    d: result.dimensions.map((d) => d.score),
    p: result.percentile,
  });
  const encoded = toBase64Url(payload);
  const checksum = computeChecksum(payload);
  return `r=${encoded}.${checksum}`;
}

export function decodeResult(params: URLSearchParams, config: QuizConfig): QuizResult | null {
  const r = params.get("r");
  if (r) {
    try {
      const [encoded, checksum] = r.split(".");
      if (!encoded || !checksum) return null;
      const payload = fromBase64Url(encoded);
      if (computeChecksum(payload) !== checksum) return null;
      const data = JSON.parse(payload);
      const overallScore = data.s as number;
      const percentile = data.p as number;
      const scores = data.d as number[];

      if (typeof overallScore !== "number" || Number.isNaN(overallScore)) return null;
      if (typeof percentile !== "number" || Number.isNaN(percentile)) return null;
      if (!Array.isArray(scores) || scores.some((v) => typeof v !== "number" || Number.isNaN(v))) return null;

      const keys: Dimension[] | undefined = data.k;
      if (keys && Array.isArray(keys)) {
        if (keys.length !== scores.length) return null;
        if (keys.some((k) => !ALL_DIMS.includes(k))) return null;
        const dimensions: DimensionScore[] = keys.map((dim, i) => ({
          dimension: dim,
          label: config.dimensionLabels[dim],
          score: scores[i],
          earned: 0,
          possible: 0,
        }));
        return { overallScore, dimensions, percentile };
      }

      if (scores.length !== ALL_DIMS.length) return null;
      const dimensions: DimensionScore[] = ALL_DIMS.map((dim, i) => ({
        dimension: dim,
        label: config.dimensionLabels[dim],
        score: scores[i],
        earned: 0,
        possible: 0,
      }));
      return { overallScore, dimensions, percentile };
    } catch {
      return null;
    }
  }

  const s = params.get("s");
  const d = params.get("d");
  const p = params.get("p");
  if (!s || !d || !p) return null;
  const overallScore = parseInt(s, 10);
  const percentile = parseInt(p, 10);
  const scores = d.split(",").map((v) => parseInt(v, 10));
  if (Number.isNaN(overallScore) || Number.isNaN(percentile)) return null;
  if (scores.length !== ALL_DIMS.length || scores.some(Number.isNaN)) return null;
  const dimensions: DimensionScore[] = ALL_DIMS.map((dim, i) => ({
    dimension: dim,
    label: config.dimensionLabels[dim],
    score: scores[i],
    earned: 0,
    possible: 0,
  }));
  return { overallScore, dimensions, percentile };
}

export function getArchetype(score: number, config: QuizConfig) {
  return (
    config.archetypes.find((a) => score >= a.minScore && score <= a.maxScore) ??
    config.archetypes[config.archetypes.length - 1]
  );
}
