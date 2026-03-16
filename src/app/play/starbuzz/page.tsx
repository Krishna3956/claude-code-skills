"use client";

import { QuizPage } from "@/components/quiz";
import { starbuzzConfig } from "@/quizzes/starbuzz";

export default function Page() {
  return <QuizPage config={starbuzzConfig} />;
}
