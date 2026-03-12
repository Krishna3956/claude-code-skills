"use client";

import { ResultsPage } from "@/components/quiz";
import { commandbarConfig } from "@/quizzes/commandbar";

export default function Page() {
  return <ResultsPage config={commandbarConfig} />;
}
