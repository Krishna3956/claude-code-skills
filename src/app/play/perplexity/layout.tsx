import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { perplexityConfig } from "@/quizzes/perplexity";

const canonicalUrl = "https://www.howwellyouknow.com/play/perplexity";
const description =
  "Perplexity AI expert? Test search, citations, and research workflow knowledge in 6 rounds. Free quiz—get your scorecard in 3 min.";
const ogImageUrl =
  "/api/og?title=How+Perplexity+Are+You%3F&tool=Perplexity&slug=perplexity";

export const metadata: Metadata = {
  title: "How Perplexity Are You?",
  description,
  icons: { icon: "/logos/perplexity.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Perplexity Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Perplexity Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Perplexity Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={perplexityConfig}>{children}</QuizLayout>;
}
