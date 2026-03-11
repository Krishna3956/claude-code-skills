import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { rotorisConfig } from "@/quizzes/rotoris";

const canonicalUrl = "https://www.howwellyouknow.com/play/rotoris";
const description =
  "Think you know Rotoris? Test your knowledge on collections, complications, movements, and model specs in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Rotoris+Are+You%3F&tool=Rotoris&slug=rotoris";

export const metadata: Metadata = {
  title: "How Rotoris Are You?",
  description,
  icons: { icon: "/logos/rotoris.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Rotoris Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Rotoris Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Rotoris Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={rotorisConfig}>{children}</QuizLayout>;
}
