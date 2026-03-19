"use client";

import { ResultsPage } from "@/components/quiz";
import { merlinAiConfig } from "@/quizzes/merlin-ai";

export default function Page() {
  return <ResultsPage config={merlinAiConfig} />;
}
