import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { sanityConfig } from "@/quizzes/sanity";

const canonicalUrl = "https://www.howwellyouknow.com/play/sanity";
const description =
  "Think you know Sanity? Test GROQ, Portable Text, schema design, and content platform engineering in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Sanity+Are+You%3F&tool=Sanity&slug=sanity";

export const metadata: Metadata = {
  title: "How Sanity Are You?",
  description,
  icons: { icon: "/logos/sanity.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Sanity Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Sanity Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Sanity Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={sanityConfig}>{children}</QuizLayout>;
}
