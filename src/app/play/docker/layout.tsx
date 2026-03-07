import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { dockerConfig } from "@/quizzes/docker";

export const metadata: Metadata = {
  title: "How Docker Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your Docker skills and get a shareable scorecard.",
  icons: { icon: "/logos/docker.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={dockerConfig}>{children}</QuizLayout>;
}
