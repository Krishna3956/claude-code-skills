"use client";
import { ResultsPage } from "@/components/quiz";
import { stiggConfig } from "@/quizzes/stigg";

export default function Page() {
  return <ResultsPage config={stiggConfig} />;
}
