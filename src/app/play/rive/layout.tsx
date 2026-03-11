import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { riveConfig } from "@/quizzes/rive";

const canonicalUrl = "https://www.howwellyouknow.com/play/rive";
const description = "Think you know Rive? Test interactive animation workflow and runtime concepts in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Rive+Are+You%3F&tool=Rive&slug=rive";

export const metadata: Metadata = {
  title: "How Rive Are You?",
  description,
  icons: { icon: "/logos/rive.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Rive Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Rive Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Rive Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={riveConfig}>{children}</QuizLayout>;
}
