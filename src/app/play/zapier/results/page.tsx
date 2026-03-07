"use client";
import { ResultsPage } from "@/components/quiz";
import { zapierConfig } from "@/quizzes/zapier";

export default function Page() {
  return <ResultsPage config={zapierConfig} />;
}
