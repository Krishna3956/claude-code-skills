"use client";

import { ResultsPage } from "@/components/quiz";
import { skyflowConfig } from "@/quizzes/skyflow";

export default function Page() {
  return <ResultsPage config={skyflowConfig} />;
}
