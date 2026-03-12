"use client";

import { QuizPage } from "@/components/quiz";
import { basedashConfig } from "@/quizzes/basedash";

export default function Page() {
  return <QuizPage config={basedashConfig} />;
}
