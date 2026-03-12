"use client";

import { ResultsPage } from "@/components/quiz";
import { highlightConfig } from "@/quizzes/highlight";

export default function Page() {
  return <ResultsPage config={highlightConfig} />;
}
