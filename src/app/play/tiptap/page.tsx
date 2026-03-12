"use client";
import { QuizPage } from "@/components/quiz";
import { tiptapConfig } from "@/quizzes/tiptap";

export default function Page() {
  return <QuizPage config={tiptapConfig} />;
}
