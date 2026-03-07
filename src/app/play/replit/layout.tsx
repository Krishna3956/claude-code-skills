import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { replitConfig } from "@/quizzes/replit";

export const metadata: Metadata = {
  title: "How Replit Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your Replit skills and get a shareable scorecard.",
  icons: { icon: "/logos/replit.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={replitConfig}>{children}</QuizLayout>;
}
