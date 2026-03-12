"use client";
import { ResultsPage } from "@/components/quiz";
import { workosConfig } from "@/quizzes/workos";

export default function Page() {
  return <ResultsPage config={workosConfig} />;
}
