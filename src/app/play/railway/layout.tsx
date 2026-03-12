import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { RailwayConfig } from "@/quizzes/railway";

const canonicalUrl = "https://www.howwellyouknow.com/play/railway";
const description = "Think you know Railway? Test your real product depth in 6 rounds and get a shareable scorecard.";
const ogImageUrl = "/api/og?title=How+Railway+Are+You%3F&tool=Railway&slug=railway";

export const metadata: Metadata = {
  title: "How Railway Are You?",
  description,
  icons: { icon: "/logos/railway.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Railway Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Railway Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Railway Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={RailwayConfig}>{children}</QuizLayout>;
}
