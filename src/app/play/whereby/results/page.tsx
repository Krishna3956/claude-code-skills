"use client";
import { ResultsPage } from "@/components/quiz";
import { wherebyConfig } from "@/quizzes/whereby";

export default function Page() {
  return <ResultsPage config={wherebyConfig} />;
}
