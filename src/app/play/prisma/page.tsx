"use client";

import { QuizPage } from "@/components/quiz";
import { prismaConfig } from "@/quizzes/prisma";

export default function Page() {
  return <QuizPage config={prismaConfig} />;
}
