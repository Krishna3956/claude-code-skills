"use client";

import { ResultsPage } from "@/components/quiz";
import { arcadeConfig } from "@/quizzes/arcade";

export default function Page() {
  return <ResultsPage config={arcadeConfig} />;
}
