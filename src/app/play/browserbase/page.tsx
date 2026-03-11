"use client";

import { QuizPage } from "@/components/quiz";
import { browserbaseConfig } from "@/quizzes/browserbase";

export default function Page() {
  return <QuizPage config={browserbaseConfig} />;
}
