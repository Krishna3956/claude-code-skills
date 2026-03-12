"use client";
import { ResultsPage } from "@/components/quiz";
import { onepasswordConfig } from "@/quizzes/onepassword";

export default function Page() {
  return <ResultsPage config={onepasswordConfig} />;
}
