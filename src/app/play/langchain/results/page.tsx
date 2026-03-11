"use client";

import { ResultsPage } from "@/components/quiz";
import { langchainConfig } from "@/quizzes/langchain";

export default function Page() {
  return <ResultsPage config={langchainConfig} />;
}
