"use client";
import { QuizPage } from "@/components/quiz";
import { apifoxConfig } from "@/quizzes/apifox";
export default function Page() { return <QuizPage config={apifoxConfig} />; }
