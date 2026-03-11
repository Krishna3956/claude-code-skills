"use client";

import { ResultsPage } from "@/components/quiz";
import { resendConfig } from "@/quizzes/resend";

export default function Page() {
  return <ResultsPage config={resendConfig} />;
}
