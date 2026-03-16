"use client";

import { ResultsPage } from "@/components/quiz";
import { clazarConfig } from "@/quizzes/clazar";

export default function Page() {
  return <ResultsPage config={clazarConfig} />;
}
