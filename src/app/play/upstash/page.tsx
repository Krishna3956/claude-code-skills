"use client";

import { QuizPage } from "@/components/quiz";
import { upstashConfig } from "@/quizzes/upstash";

export default function Page() {
  return <QuizPage config={upstashConfig} />;
}
