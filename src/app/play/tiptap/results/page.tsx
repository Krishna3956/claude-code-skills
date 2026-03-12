"use client";
import { ResultsPage } from "@/components/quiz";
import { tiptapConfig } from "@/quizzes/tiptap";

export default function Page() {
  return <ResultsPage config={tiptapConfig} />;
}
