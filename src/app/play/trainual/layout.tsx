import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { trainualConfig } from "@/quizzes/trainual";

const canonicalUrl = "https://www.howwellyouknow.com/play/trainual";
const description = "Think you know Trainual? Test onboarding, policy management, and training operations in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Trainual+Are+You%3F&tool=Trainual&slug=trainual";

export const metadata: Metadata = {
  title: "How Trainual Are You?",
  description,
  icons: { icon: "/logos/trainual.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Trainual Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Trainual Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Trainual Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={trainualConfig}>{children}</QuizLayout>;
}
