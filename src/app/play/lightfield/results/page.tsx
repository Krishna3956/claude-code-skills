"use client";

import { ResultsPage } from "@/components/quiz";
import { lightfieldConfig } from "@/quizzes/lightfield";

export default function Page() {
  return <ResultsPage config={lightfieldConfig} />;
}
