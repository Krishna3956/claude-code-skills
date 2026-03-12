"use client";
import { QuizPage } from "@/components/quiz";
import { storyblokConfig } from "@/quizzes/storyblok";
export default function Page() { return <QuizPage config={storyblokConfig} />; }
