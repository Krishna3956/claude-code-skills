"use client";
import { QuizPage } from "@/components/quiz";
import { midjourneyConfig } from "@/quizzes/midjourney";

export default function Page() {
  return <QuizPage config={midjourneyConfig} />;
}
