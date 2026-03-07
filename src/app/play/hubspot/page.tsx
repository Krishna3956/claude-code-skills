"use client";
import { QuizPage } from "@/components/quiz";
import { hubspotConfig } from "@/quizzes/hubspot";

export default function Page() {
  return <QuizPage config={hubspotConfig} />;
}
