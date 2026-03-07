"use client";
import { ResultsPage } from "@/components/quiz";
import { cursorConfig } from "@/quizzes/cursor";

export default function Page() {
  return <ResultsPage config={cursorConfig} />;
}
