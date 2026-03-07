"use client";
import { ResultsPage } from "@/components/quiz";
import { canvaConfig } from "@/quizzes/canva";

export default function Page() {
  return <ResultsPage config={canvaConfig} />;
}
