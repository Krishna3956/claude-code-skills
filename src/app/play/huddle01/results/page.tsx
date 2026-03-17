"use client";

import { ResultsPage } from "@/components/quiz";
import { huddle01Config } from "@/quizzes/huddle01";

export default function Page() {
  return <ResultsPage config={huddle01Config} />;
}
