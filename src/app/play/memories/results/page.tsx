"use client";

import { ResultsPage } from "@/components/quiz";
import { memoriesConfig } from "@/quizzes/memories";

export default function Page() {
  return <ResultsPage config={memoriesConfig} />;
}
