"use client";
import { ResultsPage } from "@/components/quiz";
import { slackConfig } from "@/quizzes/slack";

export default function Page() {
  return <ResultsPage config={slackConfig} />;
}
