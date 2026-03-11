"use client";

import { ResultsPage } from "@/components/quiz";
import { cluesoConfig } from "@/quizzes/clueso";

export default function Page() {
  return <ResultsPage config={cluesoConfig} />;
}
