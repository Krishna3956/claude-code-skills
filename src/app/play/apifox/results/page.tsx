"use client";
import { ResultsPage } from "@/components/quiz";
import { apifoxConfig } from "@/quizzes/apifox";
export default function Page() { return <ResultsPage config={apifoxConfig} />; }
