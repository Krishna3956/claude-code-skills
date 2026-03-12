"use client";

import { ResultsPage } from "@/components/quiz";
import { tallyConfig } from "@/quizzes/tally";

export default function Page() {
  return <ResultsPage config={tallyConfig} />;
}
