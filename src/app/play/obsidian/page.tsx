"use client";
import { QuizPage } from "@/components/quiz";
import { obsidianConfig } from "@/quizzes/obsidian";

export default function Page() {
  return <QuizPage config={obsidianConfig} />;
}
