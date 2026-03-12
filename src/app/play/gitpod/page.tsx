"use client";
import { QuizPage } from "@/components/quiz";
import { gitpodConfig } from "@/quizzes/gitpod";
export default function Page() { return <QuizPage config={gitpodConfig} />; }
