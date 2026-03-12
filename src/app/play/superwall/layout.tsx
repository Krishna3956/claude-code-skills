import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { superwallConfig } from "@/quizzes/superwall";
const canonicalUrl = "https://www.howwellyouknow.com/play/superwall";
const description = "Think you know Superwall? Test paywall targeting, monetization experiments, and retention-aware optimization in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Superwall+Are+You%3F&tool=Superwall&slug=superwall";
export const metadata: Metadata = {
  title: "How Superwall Are You?", description, icons: { icon: "/logos/superwall.svg" }, alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Superwall Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Superwall Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Superwall Are You?", description, images: [ogImageUrl] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <QuizLayout config={superwallConfig}>{children}</QuizLayout>; }
