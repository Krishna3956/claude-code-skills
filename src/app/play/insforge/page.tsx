"use client";

import { QuizPage } from "@/components/quiz";
import { insforgeConfig } from "@/quizzes/insforge";

export default function Page() {
  return <QuizPage config={insforgeConfig} />;
}
