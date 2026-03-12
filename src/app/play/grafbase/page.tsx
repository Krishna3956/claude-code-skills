"use client";

import { QuizPage } from "@/components/quiz";
import { grafbaseConfig } from "@/quizzes/grafbase";

export default function Page() {
  return <QuizPage config={grafbaseConfig} />;
}
