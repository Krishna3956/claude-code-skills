import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { boltConfig } from "@/quizzes/bolt";

export const metadata: Metadata = {
  title: "How Bolt.new Are You?",
  description:
    "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Bolt.new skills and get a shareable scorecard.",
  icons: { icon: "/logos/bolt.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={boltConfig}>{children}</QuizLayout>;
}
