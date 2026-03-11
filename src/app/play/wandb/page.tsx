"use client";

import { QuizPage } from "@/components/quiz";
import { wandbConfig } from "@/quizzes/wandb";

export default function Page() {
  return <QuizPage config={wandbConfig} />;
}
