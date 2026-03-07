"use client";
import { ResultsPage } from "@/components/quiz";
import { geminiConfig } from "@/quizzes/gemini";

export default function Page() {
  return <ResultsPage config={geminiConfig} />;
}
