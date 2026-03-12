"use client";
import { ResultsPage } from "@/components/quiz";
import { sanityConfig } from "@/quizzes/sanity";

export default function Page() {
  return <ResultsPage config={sanityConfig} />;
}
