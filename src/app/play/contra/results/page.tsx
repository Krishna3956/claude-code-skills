"use client";

import { ResultsPage } from "@/components/quiz";
import { contraConfig } from "@/quizzes/contra";

export default function Page() {
  return <ResultsPage config={contraConfig} />;
}
