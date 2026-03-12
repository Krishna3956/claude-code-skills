"use client";

import { ResultsPage } from "@/components/quiz";
import { convexConfig } from "@/quizzes/convex";

export default function Page() {
  return <ResultsPage config={convexConfig} />;
}
