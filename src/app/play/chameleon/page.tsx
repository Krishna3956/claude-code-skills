"use client";

import { QuizPage } from "@/components/quiz";
import { chameleonConfig } from "@/quizzes/chameleon";

export default function Page() {
  return <QuizPage config={chameleonConfig} />;
}
