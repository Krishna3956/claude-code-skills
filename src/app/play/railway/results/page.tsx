"use client";
import { ResultsPage } from "@/components/quiz";
import { RailwayConfig } from "@/quizzes/railway";

export default function Page() {
  return <ResultsPage config={RailwayConfig} />;
}
