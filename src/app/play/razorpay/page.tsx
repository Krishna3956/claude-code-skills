"use client";

import { QuizPage } from "@/components/quiz";
import { razorpayConfig } from "@/quizzes/razorpay";

export default function Page() {
  return <QuizPage config={razorpayConfig} />;
}
