"use client";

import { QuizPage } from "@/components/quiz";
import { contraConfig } from "@/quizzes/contra";

export default function Page() {
  return <QuizPage config={contraConfig} />;
}
