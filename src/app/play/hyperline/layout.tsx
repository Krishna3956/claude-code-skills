import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { hyperlineConfig } from "@/quizzes/hyperline";

const canonicalUrl = "https://www.howwellyouknow.com/play/hyperline";
const description = "Think you know Hyperline? Test monetization architecture, entitlement sync, and lifecycle reliability in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Hyperline+Are+You%3F&tool=Hyperline&slug=hyperline";

export const metadata: Metadata = {
  title: "How Hyperline Are You?",
  description,
  icons: { icon: "/logos/hyperline.jpg" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Hyperline Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Hyperline Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Hyperline Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={hyperlineConfig}>{children}</QuizLayout>;
}
