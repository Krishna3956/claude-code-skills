"use client";

import { QuizPage } from "@/components/quiz";
import { shopifyConfig } from "@/quizzes/shopify";

export default function Page() {
  return <QuizPage config={shopifyConfig} />;
}
