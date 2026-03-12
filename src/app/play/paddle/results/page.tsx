"use client";
import { ResultsPage } from "@/components/quiz";
import { paddleConfig } from "@/quizzes/paddle";

export default function Page() {
  return <ResultsPage config={paddleConfig} />;
}
