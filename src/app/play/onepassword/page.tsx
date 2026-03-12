"use client";
import { QuizPage } from "@/components/quiz";
import { onepasswordConfig } from "@/quizzes/onepassword";

export default function Page() {
  return <QuizPage config={onepasswordConfig} />;
}
