"use client";

import { QuizPage } from "@/components/quiz";
import { calcomConfig } from "@/quizzes/calcom";

export default function Page() {
  return <QuizPage config={calcomConfig} />;
}
