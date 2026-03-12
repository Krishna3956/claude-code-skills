import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { tallyConfig } from "@/quizzes/tally";

const canonicalUrl = "https://www.howwellyouknow.com/play/tally";
const description = "Form builder for fast data collection with logic and integration-friendly workflows.";
const ogImageUrl = "/api/og?title=How+Tally+Are+You%3F&tool=Tally&slug=tally";

export const metadata: Metadata = {
  title: "How Tally Are You?",
  description,
  icons: { icon: "/logos/tally.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Tally Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Tally Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Tally Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={tallyConfig}>{children}</QuizLayout>;
}
