"use client";

import { ResultsPage } from "@/components/quiz";
import { scribeConfig } from "@/quizzes/scribe";

export default function Page() {
  return <ResultsPage config={scribeConfig} />;
}
