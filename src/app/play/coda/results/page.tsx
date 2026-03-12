"use client";

import { ResultsPage } from "@/components/quiz";
import { codaConfig } from "@/quizzes/coda";

export default function Page() {
  return <ResultsPage config={codaConfig} />;
}
