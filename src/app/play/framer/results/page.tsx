"use client";

import { ResultsPage } from "@/components/quiz";
import { framerConfig } from "@/quizzes/framer";

export default function Page() {
  return <ResultsPage config={framerConfig} />;
}
