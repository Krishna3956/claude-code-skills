import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { wherebyConfig } from "@/quizzes/whereby";

const canonicalUrl = "https://www.howwellyouknow.com/play/whereby";
const description = "Think you know Whereby? Test embedded video rooms, access flows, and meeting operations in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Whereby+Are+You%3F&tool=Whereby&slug=whereby";

export const metadata: Metadata = {
  title: "How Whereby Are You?",
  description,
  icons: { icon: "/logos/whereby.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Whereby Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Whereby Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Whereby Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={wherebyConfig}>{children}</QuizLayout>;
}
