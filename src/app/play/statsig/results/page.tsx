"use client";
import { ResultsPage } from "@/components/quiz";
import { statsigConfig } from "@/quizzes/statsig";

export default function Page() {
  return <ResultsPage config={statsigConfig} />;
}
