"use client";
import { ResultsPage } from "@/components/quiz";
import { postmanConfig } from "@/quizzes/postman";

export default function Page() {
  return <ResultsPage config={postmanConfig} />;
}
