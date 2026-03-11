"use client";

import { ResultsPage } from "@/components/quiz";
import { calcomConfig } from "@/quizzes/calcom";

export default function Page() {
  return <ResultsPage config={calcomConfig} />;
}
