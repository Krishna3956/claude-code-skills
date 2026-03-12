import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { campsiteConfig } from "@/quizzes/campsite";

const canonicalUrl = "https://www.howwellyouknow.com/play/campsite";
const description = "Think you know Campsite? Test distributed team communication and async collaboration workflows in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Campsite+Are+You%3F&tool=Campsite&slug=campsite";

export const metadata: Metadata = {
  title: "How Campsite Are You?",
  description,
  icons: { icon: "/logos/campsite.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Campsite Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Campsite Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Campsite Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={campsiteConfig}>{children}</QuizLayout>;
}
