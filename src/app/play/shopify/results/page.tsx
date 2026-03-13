"use client";

import { ResultsPage } from "@/components/quiz";
import { shopifyConfig } from "@/quizzes/shopify";

export default function Page() {
  return <ResultsPage config={shopifyConfig} />;
}
