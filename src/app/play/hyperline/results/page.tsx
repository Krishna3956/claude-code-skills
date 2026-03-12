"use client";
import { ResultsPage } from "@/components/quiz";
import { hyperlineConfig } from "@/quizzes/hyperline";

export default function Page() {
  return <ResultsPage config={hyperlineConfig} />;
}
