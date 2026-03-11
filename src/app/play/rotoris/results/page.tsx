"use client";

import { ResultsPage } from "@/components/quiz";
import { rotorisConfig } from "@/quizzes/rotoris";

export default function Page() {
  return <ResultsPage config={rotorisConfig} />;
}
