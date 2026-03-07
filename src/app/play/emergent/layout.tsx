import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { emergentConfig } from "@/quizzes/emergent";

export const metadata: Metadata = {
  title: "How Emergent Are You?",
  description:
    "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Emergent skills and get a shareable scorecard.",
  icons: { icon: "/logos/emergent.jpg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={emergentConfig}>{children}</QuizLayout>;
}
