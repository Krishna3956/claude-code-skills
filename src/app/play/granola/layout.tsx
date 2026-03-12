import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { granolaConfig } from "@/quizzes/granola";

const canonicalUrl = "https://www.howwellyouknow.com/play/granola";
const description = "Think you know Granola? Test AI note workflows, meeting memory, and follow-through systems in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Granola+Are+You%3F&tool=Granola&slug=granola";

export const metadata: Metadata = {
  title: "How Granola Are You?",
  description,
  icons: { icon: "/logos/granola.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Granola Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Granola Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Granola Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={granolaConfig}>{children}</QuizLayout>;
}
