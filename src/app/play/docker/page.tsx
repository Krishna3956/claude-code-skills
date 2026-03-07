"use client";
import { QuizPage } from "@/components/quiz";
import { dockerConfig } from "@/quizzes/docker";

export default function Page() {
  return <QuizPage config={dockerConfig} />;
}
