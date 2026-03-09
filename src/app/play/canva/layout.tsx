import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { canvaConfig } from "@/quizzes/canva";

const canonicalUrl = "https://www.howwellyouknow.com/play/canva";
const description =
  "Test your Canva design skills. Templates, layers, brand kits, and more in 6 quick rounds. No signup—get your shareable scorecard in 3 min.";
const ogImageUrl =
  "/api/og?title=How+Canva+Are+You%3F&tool=Canva&slug=canva";

export const metadata: Metadata = {
  title: "How Canva Are You?",
  description,
  icons: { icon: "/logos/canva.jpg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Canva Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Canva Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Canva Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={canvaConfig}>{children}</QuizLayout>;
}
