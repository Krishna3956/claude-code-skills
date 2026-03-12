"use client";
import { ResultsPage } from "@/components/quiz";
import { expoConfig } from "@/quizzes/expo";

export default function Page() {
  return <ResultsPage config={expoConfig} />;
}
