"use client";
import { ResultsPage } from "@/components/quiz";
import { emergentConfig } from "@/quizzes/emergent";

export default function Page() {
  return <ResultsPage config={emergentConfig} />;
}
