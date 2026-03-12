"use client";
import { ResultsPage } from "@/components/quiz";
import { gardenioConfig } from "@/quizzes/gardenio";

export default function Page() {
  return <ResultsPage config={gardenioConfig} />;
}
