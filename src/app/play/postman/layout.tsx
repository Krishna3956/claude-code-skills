import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { postmanConfig } from "@/quizzes/postman";

export const metadata: Metadata = {
  title: "How Postman Are You?",
  description:
    "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Postman skills and get a shareable scorecard.",
  icons: { icon: "/logos/postman.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={postmanConfig}>{children}</QuizLayout>;
}
