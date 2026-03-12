"use client";
import { ResultsPage } from "@/components/quiz";
import { camundaConfig } from "@/quizzes/camunda";
export default function Page() { return <ResultsPage config={camundaConfig} />; }
