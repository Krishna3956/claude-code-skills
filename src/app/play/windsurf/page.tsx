"use client";
import { QuizPage } from "@/components/quiz";
import { windsurfConfig } from "@/quizzes/windsurf";

export default function Page() {
  return <QuizPage config={windsurfConfig} />;
}
