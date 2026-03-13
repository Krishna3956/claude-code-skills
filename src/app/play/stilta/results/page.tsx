"use client";
import { ResultsPage } from "@/components/quiz";
import { stiltaConfig } from "@/quizzes/stilta";

export default function Page() {
  return <ResultsPage config={stiltaConfig} />;
}
