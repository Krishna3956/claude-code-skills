"use client";
import { ResultsPage } from "@/components/quiz";
import { vercelConfig } from "@/quizzes/vercel";

export default function Page() {
  return <ResultsPage config={vercelConfig} />;
}
