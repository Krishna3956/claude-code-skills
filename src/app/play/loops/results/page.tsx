"use client";

import { ResultsPage } from "@/components/quiz";
import { loopsConfig } from "@/quizzes/loops";

export default function Page() {
  return <ResultsPage config={loopsConfig} />;
}
