"use client";

import { ResultsPage } from "@/components/quiz";
import { prismaConfig } from "@/quizzes/prisma";

export default function Page() {
  return <ResultsPage config={prismaConfig} />;
}
