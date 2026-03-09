import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { githubCopilotConfig } from "@/quizzes/github-copilot";

const canonicalUrl = "https://www.howwellyouknow.com/play/github-copilot";
const description =
  "GitHub Copilot expert? AI pair programming, completions, and chat across 6 rounds. Free quiz—get your shareable scorecard in 3 min.";
const ogImageUrl =
  "/api/og?title=How+GitHub+Copilot+Are+You%3F&tool=GitHub+Copilot&slug=github-copilot";

export const metadata: Metadata = {
  title: "How GitHub Copilot Are You?",
  description,
  icons: { icon: "/logos/github-copilot.jpg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How GitHub Copilot Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How GitHub Copilot Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How GitHub Copilot Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={githubCopilotConfig}>{children}</QuizLayout>;
}
