"use client";

import { QuizPage } from "@/components/quiz";
import { globalpaymentsConfig } from "@/quizzes/globalpayments";

export default function Page() {
  return <QuizPage config={globalpaymentsConfig} />;
}
