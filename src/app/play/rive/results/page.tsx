"use client";

import { ResultsPage } from "@/components/quiz";
import { riveConfig } from "@/quizzes/rive";

export default function Page() {
  return <ResultsPage config={riveConfig} />;
}
