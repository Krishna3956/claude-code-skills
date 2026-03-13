import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { wordpressConfig } from "@/quizzes/wordpress";

const canonicalUrl = "https://www.howwellyouknow.com/play/wordpress";
const description =
  "Think you know WordPress? Prove it. Site Editor, theme.json, templates, REST API, patterns, and production-safe workflows in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+WordPress+Are+You%3F&tool=WordPress&slug=wordpress";

export const metadata: Metadata = {
  title: "How WordPress Are You?",
  description,
  icons: { icon: "/logos/wordpress.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How WordPress Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How WordPress Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How WordPress Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={wordpressConfig}>{children}</QuizLayout>;
}
