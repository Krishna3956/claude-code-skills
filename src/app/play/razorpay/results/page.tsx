"use client";

import { ResultsPage } from "@/components/quiz";
import { razorpayConfig } from "@/quizzes/razorpay";

export default function Page() {
  return <ResultsPage config={razorpayConfig} />;
}
