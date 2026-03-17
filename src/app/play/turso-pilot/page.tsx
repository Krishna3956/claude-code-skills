"use client";

import { QuizPage } from "@/components/quiz";
import { tursoPilotConfig } from "@/quizzes/turso-pilot";

export default function Page() {
  return <QuizPage config={tursoPilotConfig} />;
}
