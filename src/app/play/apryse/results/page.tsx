"use client";
import { ResultsPage } from "@/components/quiz";
import { apryseConfig } from "@/quizzes/apryse";

export default function Page() {
  return <ResultsPage config={apryseConfig} />;
}
