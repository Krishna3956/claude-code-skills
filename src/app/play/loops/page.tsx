"use client";

import { QuizPage } from "@/components/quiz";
import { loopsConfig } from "@/quizzes/loops";

export default function Page() {
  return <QuizPage config={loopsConfig} />;
}
