import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { vercelConfig } from "@/quizzes/vercel";

export const metadata: Metadata = {
  title: "How Vercel Are You?",
  description: "6 rounds. ~3 min. No signup. Test your Vercel skills and get a shareable scorecard.",
  icons: { icon: "/logos/vercel.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={vercelConfig}>{children}</QuizLayout>;
}
