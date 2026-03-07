"use client";
import { ResultsPage } from "@/components/quiz";
import { windsurfConfig } from "@/quizzes/windsurf";

export default function Page() {
  return <ResultsPage config={windsurfConfig} />;
}
