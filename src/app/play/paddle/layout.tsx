import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { paddleConfig } from "@/quizzes/paddle";

const canonicalUrl = "https://www.howwellyouknow.com/play/paddle";
const description = "Think you know Paddle? Test Merchant of Record, subscription lifecycle, and billing reliability in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Paddle+Are+You%3F&tool=Paddle&slug=paddle";

export const metadata: Metadata = {
  title: "How Paddle Are You?",
  description,
  icons: { icon: "/logos/paddle.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Paddle Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Paddle Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Paddle Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={paddleConfig}>{children}</QuizLayout>;
}
