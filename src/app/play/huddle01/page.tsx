"use client";

import { QuizPage } from "@/components/quiz";
import { huddle01Config } from "@/quizzes/huddle01";

export default function Page() {
  return <QuizPage config={huddle01Config} />;
}
