"use client";
import { ResultsPage } from "@/components/quiz";
import { posthogConfig } from "@/quizzes/posthog";

export default function Page() {
  return <ResultsPage config={posthogConfig} />;
}
