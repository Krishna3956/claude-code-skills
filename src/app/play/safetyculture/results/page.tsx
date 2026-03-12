"use client";
import { ResultsPage } from "@/components/quiz";
import { safetycultureConfig } from "@/quizzes/safetyculture";

export default function Page() {
  return <ResultsPage config={safetycultureConfig} />;
}
