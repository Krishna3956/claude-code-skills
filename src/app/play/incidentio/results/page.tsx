"use client";
import { ResultsPage } from "@/components/quiz";
import { incidentioConfig } from "@/quizzes/incidentio";

export default function Page() {
  return <ResultsPage config={incidentioConfig} />;
}
