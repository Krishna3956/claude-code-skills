"use client";
import { ResultsPage } from "@/components/quiz";
import { linearConfig } from "@/quizzes/linear";

export default function Page() {
  return <ResultsPage config={linearConfig} />;
}
