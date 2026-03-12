"use client";
import { QuizPage } from "@/components/quiz";
import { incidentioConfig } from "@/quizzes/incidentio";

export default function Page() {
  return <QuizPage config={incidentioConfig} />;
}
