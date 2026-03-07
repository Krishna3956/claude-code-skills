"use client";
import { ResultsPage } from "@/components/quiz";
import { figmaConfig } from "@/quizzes/figma";

export default function Page() {
  return <ResultsPage config={figmaConfig} />;
}
