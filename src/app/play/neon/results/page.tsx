"use client";
import { ResultsPage } from "@/components/quiz";
import { NeonConfig } from "@/quizzes/neon";

export default function Page() {
  return <ResultsPage config={NeonConfig} />;
}
