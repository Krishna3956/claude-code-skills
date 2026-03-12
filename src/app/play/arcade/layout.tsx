import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { arcadeConfig } from "@/quizzes/arcade";

const canonicalUrl = "https://www.howwellyouknow.com/play/arcade";
const description = "Think you know Arcade? Test secure agent tooling, action workflows, and integration controls in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Arcade+Are+You%3F&tool=Arcade&slug=arcade";

export const metadata: Metadata = {
  title: "How Arcade Are You?",
  description,
  icons: { icon: "/logos/arcade.webp" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Arcade Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Arcade Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Arcade Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={arcadeConfig}>{children}</QuizLayout>;
}
