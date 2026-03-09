import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { obsidianConfig } from "@/quizzes/obsidian";

const canonicalUrl = "https://www.howwellyouknow.com/play/obsidian";
const description =
  "Obsidian vault master? Markdown, links, and knowledge graphs in 6 rounds. Take the 3-min quiz and get your shareable scorecard.";
const ogImageUrl =
  "/api/og?title=How+Obsidian+Are+You%3F&tool=Obsidian&slug=obsidian";

export const metadata: Metadata = {
  title: "How Obsidian Are You?",
  description,
  icons: { icon: "/logos/obsidian.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Obsidian Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Obsidian Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Obsidian Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={obsidianConfig}>{children}</QuizLayout>;
}
