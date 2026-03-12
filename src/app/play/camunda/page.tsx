"use client";
import { QuizPage } from "@/components/quiz";
import { camundaConfig } from "@/quizzes/camunda";
export default function Page() { return <QuizPage config={camundaConfig} />; }
