"use client";
import { QuizPage } from "@/components/quiz";
import { hygraphConfig } from "@/quizzes/hygraph";
export default function Page() { return <QuizPage config={hygraphConfig} />; }
