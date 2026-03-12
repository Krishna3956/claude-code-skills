"use client";

import { QuizPage } from "@/components/quiz";
import { depotConfig } from "@/quizzes/depot";

export default function Page() {
  return <QuizPage config={depotConfig} />;
}
