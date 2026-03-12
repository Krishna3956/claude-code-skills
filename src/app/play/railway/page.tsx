"use client";
import { QuizPage } from "@/components/quiz";
import { RailwayConfig } from "@/quizzes/railway";

export default function Page() {
  return <QuizPage config={RailwayConfig} />;
}
