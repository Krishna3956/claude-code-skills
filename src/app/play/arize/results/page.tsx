"use client";

import { ResultsPage } from "@/components/quiz";
import { arizeConfig } from "@/quizzes/arize";

export default function Page() {
  return <ResultsPage config={arizeConfig} />;
}
