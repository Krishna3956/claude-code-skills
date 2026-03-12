import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { depotConfig } from "@/quizzes/depot";

const canonicalUrl = "https://www.howwellyouknow.com/play/depot";
const description = "Build infrastructure for faster container and CI workflows with caching patterns.";
const ogImageUrl = "/api/og?title=How+Depot+Are+You%3F&tool=Depot&slug=depot";

export const metadata: Metadata = {
  title: "How Depot Are You?",
  description,
  icons: { icon: "/logos/depot.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Depot Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Depot Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Depot Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={depotConfig}>{children}</QuizLayout>;
}
