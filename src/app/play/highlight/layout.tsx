import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { highlightConfig } from "@/quizzes/highlight";

const canonicalUrl = "https://www.howwellyouknow.com/play/highlight";
const description = "Think you know highlight.io? Test replay, errors, traces, and observability workflows in 6 rounds.";
const ogImageUrl = "/api/og?title=How+highlight.io+Are+You%3F&tool=highlight.io&slug=highlight";

export const metadata: Metadata = {
  title: "How highlight.io Are You?",
  description,
  icons: { icon: "/logos/highlight.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How highlight.io Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How highlight.io Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How highlight.io Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={highlightConfig}>{children}</QuizLayout>;
}
