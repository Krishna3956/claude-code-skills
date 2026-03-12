"use client";
import { QuizPage } from "@/components/quiz";
import { voiceflowConfig } from "@/quizzes/voiceflow";

export default function Page() {
  return <QuizPage config={voiceflowConfig} />;
}
