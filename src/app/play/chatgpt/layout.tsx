import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { chatgptConfig } from "@/quizzes/chatgpt";

export const metadata: Metadata = {
  title: "How ChatGPT Are You?",
  description: "6 rounds. ~3 min. No signup. Test your ChatGPT skills and get a shareable scorecard.",
  icons: { icon: "/logos/chatgpt.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={chatgptConfig}>{children}</QuizLayout>;
}
