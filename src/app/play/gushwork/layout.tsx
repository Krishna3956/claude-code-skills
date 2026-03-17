import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { gushworkConfig } from "@/quizzes/gushwork";

const canonicalUrl = "https://www.howwellyouknow.com/play/gushwork";
const description =
  "Think you know Gushwork? Prove it. AI Feed, Brand Memory, qualified lead filtering, page creation, analytics, and AI-first CMS judgment in 5 rounds.";
const ogImageUrl = "/api/og?title=How+Gushwork+Are+You%3F&tool=Gushwork&slug=gushwork";

export const metadata: Metadata = {
  title: "How Gushwork Are You?",
  description,
  icons: { icon: "/logos/gushwork.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Gushwork Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Gushwork Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Gushwork Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={gushworkConfig}>{children}</QuizLayout>;
}
