"use client";

import { QuizPage } from "@/components/quiz";
import { commandbarConfig } from "@/quizzes/commandbar";

export default function Page() {
  return <QuizPage config={commandbarConfig} />;
}
