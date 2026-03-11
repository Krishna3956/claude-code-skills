import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { cluesoConfig } from "@/quizzes/clueso";

const canonicalUrl = "https://www.howwellyouknow.com/play/clueso";
const description =
  "Think you know Clueso? Test project setup, Article Copilot, translation rules, clip constraints, and SSO in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Clueso+Are+You%3F&tool=Clueso&slug=clueso";

export const metadata: Metadata = {
  title: "How Clueso Are You?",
  description,
  icons: { icon: "/logos/clueso.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Clueso Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Clueso Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Clueso Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={cluesoConfig}>{children}</QuizLayout>;
}
