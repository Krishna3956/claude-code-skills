"use client";

import { QuizPage } from "@/components/quiz";
import { lightfieldConfig } from "@/quizzes/lightfield";

export default function Page() {
  return <QuizPage config={lightfieldConfig} />;
}
