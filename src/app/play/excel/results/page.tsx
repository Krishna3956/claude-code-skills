"use client";
import { ResultsPage } from "@/components/quiz";
import { excelConfig } from "@/quizzes/excel";

export default function Page() {
  return <ResultsPage config={excelConfig} />;
}
