"use client";

import { QuizPage } from "@/components/quiz";
import { guruConfig } from "@/quizzes/guru";

export default function Page() {
  return <QuizPage config={guruConfig} />;
}
