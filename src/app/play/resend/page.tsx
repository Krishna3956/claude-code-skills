"use client";

import { QuizPage } from "@/components/quiz";
import { resendConfig } from "@/quizzes/resend";

export default function Page() {
  return <QuizPage config={resendConfig} />;
}
