"use client";
import { ResultsPage } from "@/components/quiz";
import { obsidianConfig } from "@/quizzes/obsidian";

export default function Page() {
  return <ResultsPage config={obsidianConfig} />;
}
