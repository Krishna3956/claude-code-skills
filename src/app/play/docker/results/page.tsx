"use client";
import { ResultsPage } from "@/components/quiz";
import { dockerConfig } from "@/quizzes/docker";

export default function Page() {
  return <ResultsPage config={dockerConfig} />;
}
