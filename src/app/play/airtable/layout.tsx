import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { airtableConfig } from "@/quizzes/airtable";

export const metadata: Metadata = {
  title: "How Airtable Are You?",
  description:
    "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Airtable skills and get a shareable scorecard.",
  icons: { icon: "/logos/airtable.jpg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={airtableConfig}>{children}</QuizLayout>;
}
