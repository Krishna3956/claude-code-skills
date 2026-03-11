"use client";

import { QuizPage } from "@/components/quiz";
import { vwoConfig } from "@/quizzes/vwo";

export default function Page() {
  return <QuizPage config={vwoConfig} />;
}
