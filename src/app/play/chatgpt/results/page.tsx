"use client";
import { ResultsPage } from "@/components/quiz";
import { chatgptConfig } from "@/quizzes/chatgpt";

export default function Page() {
  return <ResultsPage config={chatgptConfig} />;
}
