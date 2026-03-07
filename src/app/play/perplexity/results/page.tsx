"use client";
import { ResultsPage } from "@/components/quiz";
import { perplexityConfig } from "@/quizzes/perplexity";

export default function Page() {
  return <ResultsPage config={perplexityConfig} />;
}
