"use client";

import { ResultsPage } from "@/components/quiz";
import { axiomConfig } from "@/quizzes/axiom";

export default function Page() {
  return <ResultsPage config={axiomConfig} />;
}
