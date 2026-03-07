"use client";
import { QuizPage } from "@/components/quiz";
import { slackConfig } from "@/quizzes/slack";

export default function Page() {
  return <QuizPage config={slackConfig} />;
}
