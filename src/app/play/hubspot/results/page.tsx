"use client";
import { ResultsPage } from "@/components/quiz";
import { hubspotConfig } from "@/quizzes/hubspot";

export default function Page() {
  return <ResultsPage config={hubspotConfig} />;
}
