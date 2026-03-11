"use client";

import { ResultsPage } from "@/components/quiz";
import { splineConfig } from "@/quizzes/spline";

export default function Page() {
  return <ResultsPage config={splineConfig} />;
}
