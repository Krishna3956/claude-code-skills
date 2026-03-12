"use client";
import { QuizPage } from "@/components/quiz";
import { safetycultureConfig } from "@/quizzes/safetyculture";

export default function Page() {
  return <QuizPage config={safetycultureConfig} />;
}
