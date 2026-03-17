"use client";

import { ResultsPage } from "@/components/quiz";
import { gushworkConfig } from "@/quizzes/gushwork";

export default function Page() {
  return <ResultsPage config={gushworkConfig} />;
}
