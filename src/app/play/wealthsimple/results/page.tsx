"use client";
import { ResultsPage } from "@/components/quiz";
import { wealthsimpleConfig } from "@/quizzes/wealthsimple";

export default function Page() {
  return <ResultsPage config={wealthsimpleConfig} />;
}
