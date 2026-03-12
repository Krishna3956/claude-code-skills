"use client";

import { QuizPage } from "@/components/quiz";
import { inngestConfig } from "@/quizzes/inngest";

export default function Page() {
  return <QuizPage config={inngestConfig} />;
}
