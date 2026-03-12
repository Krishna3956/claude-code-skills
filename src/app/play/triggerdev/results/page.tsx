"use client";

import { ResultsPage } from "@/components/quiz";
import { triggerdevConfig } from "@/quizzes/triggerdev";

export default function Page() {
  return <ResultsPage config={triggerdevConfig} />;
}
