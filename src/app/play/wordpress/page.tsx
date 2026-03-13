"use client";

import { QuizPage } from "@/components/quiz";
import { wordpressConfig } from "@/quizzes/wordpress";

export default function Page() {
  return <QuizPage config={wordpressConfig} />;
}
