import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { stiggConfig } from "@/quizzes/stigg";

const canonicalUrl = "https://www.howwellyouknow.com/play/stigg";
const description = "Think you know Stigg? Test entitlements, usage monetization, and pricing-control reliability in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Stigg+Are+You%3F&tool=Stigg&slug=stigg";

export const metadata: Metadata = {
  title: "How Stigg Are You?",
  description,
  icons: { icon: "/logos/stigg.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Stigg Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Stigg Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Stigg Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={stiggConfig}>{children}</QuizLayout>;
}
