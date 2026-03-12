"use client";

import { QuizPage } from "@/components/quiz";
import { dubConfig } from "@/quizzes/dub";

export default function Page() {
  return <QuizPage config={dubConfig} />;
}
