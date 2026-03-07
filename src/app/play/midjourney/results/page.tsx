"use client";
import { ResultsPage } from "@/components/quiz";
import { midjourneyConfig } from "@/quizzes/midjourney";

export default function Page() {
  return <ResultsPage config={midjourneyConfig} />;
}
