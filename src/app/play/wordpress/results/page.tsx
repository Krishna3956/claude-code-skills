"use client";

import { ResultsPage } from "@/components/quiz";
import { wordpressConfig } from "@/quizzes/wordpress";

export default function Page() {
  return <ResultsPage config={wordpressConfig} />;
}
