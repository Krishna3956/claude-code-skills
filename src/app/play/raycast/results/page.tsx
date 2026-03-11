"use client";

import { ResultsPage } from "@/components/quiz";
import { raycastConfig } from "@/quizzes/raycast";

export default function Page() {
  return <ResultsPage config={raycastConfig} />;
}
