"use client";

import { ResultsPage } from "@/components/quiz";
import { globalpaymentsConfig } from "@/quizzes/globalpayments";

export default function Page() {
  return <ResultsPage config={globalpaymentsConfig} />;
}
