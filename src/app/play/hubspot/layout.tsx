import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { hubspotConfig } from "@/quizzes/hubspot";

export const metadata: Metadata = {
  title: "How HubSpot Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your HubSpot skills and get a shareable scorecard.",
  icons: { icon: "/logos/hubspot.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={hubspotConfig}>{children}</QuizLayout>;
}
