"use client";
import { ResultsPage } from "@/components/quiz";
import { boltConfig } from "@/quizzes/bolt";

export default function Page() {
  return <ResultsPage config={boltConfig} />;
}
