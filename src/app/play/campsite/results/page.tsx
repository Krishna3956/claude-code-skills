"use client";

import { ResultsPage } from "@/components/quiz";
import { campsiteConfig } from "@/quizzes/campsite";

export default function Page() {
  return <ResultsPage config={campsiteConfig} />;
}
