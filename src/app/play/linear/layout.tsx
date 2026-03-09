import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { linearConfig } from "@/quizzes/linear";

const canonicalUrl = "https://www.howwellyouknow.com/play/linear";
const description =
  "Linear power user? Cycles, issues, roadmap, and keyboard shortcuts in 6 rounds. Get your shareable scorecard in ~3 min. No signup.";
const ogImageUrl =
  "/api/og?title=How+Linear+Are+You%3F&tool=Linear&slug=linear";

export const metadata: Metadata = {
  title: "How Linear Are You?",
  description,
  icons: { icon: "/logos/linear.jpg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Linear Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Linear Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Linear Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={linearConfig}>{children}</QuizLayout>;
}
