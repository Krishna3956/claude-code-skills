"use client";

import { ResultsPage } from "@/components/quiz";
import { surfaceConfig } from "@/quizzes/surface";

export default function Page() {
  return <ResultsPage config={surfaceConfig} />;
}
