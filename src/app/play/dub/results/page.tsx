"use client";

import { ResultsPage } from "@/components/quiz";
import { dubConfig } from "@/quizzes/dub";

export default function Page() {
  return <ResultsPage config={dubConfig} />;
}
