"use client";
import { ResultsPage } from "@/components/quiz";
import { openclawConfig } from "@/quizzes/openclaw";

export default function Page() {
  return <ResultsPage config={openclawConfig} />;
}
