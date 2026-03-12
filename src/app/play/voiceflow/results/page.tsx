"use client";
import { ResultsPage } from "@/components/quiz";
import { voiceflowConfig } from "@/quizzes/voiceflow";

export default function Page() {
  return <ResultsPage config={voiceflowConfig} />;
}
