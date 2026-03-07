"use client";
import { ResultsPage } from "@/components/quiz";
import { loomConfig } from "@/quizzes/loom";

export default function Page() {
  return <ResultsPage config={loomConfig} />;
}
