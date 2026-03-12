"use client";
import { ResultsPage } from "@/components/quiz";
import { hygraphConfig } from "@/quizzes/hygraph";
export default function Page() { return <ResultsPage config={hygraphConfig} />; }
