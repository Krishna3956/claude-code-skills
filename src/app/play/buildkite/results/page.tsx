"use client";
import { ResultsPage } from "@/components/quiz";
import { buildkiteConfig } from "@/quizzes/buildkite";

export default function Page() {
  return <ResultsPage config={buildkiteConfig} />;
}
