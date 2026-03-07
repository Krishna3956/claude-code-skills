"use client";
import { QuizPage } from "@/components/quiz";
import { chatgptConfig } from "@/quizzes/chatgpt";

export default function Page() {
  return <QuizPage config={chatgptConfig} />;
}
