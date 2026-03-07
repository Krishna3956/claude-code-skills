"use client";
import { ResultsPage } from "@/components/quiz";
import { lovableConfig } from "@/quizzes/lovable";

export default function Page() {
  return <ResultsPage config={lovableConfig} />;
}
