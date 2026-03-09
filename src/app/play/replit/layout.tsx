import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { replitConfig } from "@/quizzes/replit";

const canonicalUrl = "https://www.howwellyouknow.com/play/replit";
const description =
  "Replit power user? Browser IDE, AI features, and deployment in 6 rounds. Free quiz, no signup—get your shareable score in 3 min.";
const ogImageUrl =
  "/api/og?title=How+Replit+Are+You%3F&tool=Replit&slug=replit";

export const metadata: Metadata = {
  title: "How Replit Are You?",
  description,
  icons: { icon: "/logos/replit.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Replit Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Replit Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Replit Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={replitConfig}>{children}</QuizLayout>;
}
