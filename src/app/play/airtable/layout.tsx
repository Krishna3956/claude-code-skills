import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { airtableConfig } from "@/quizzes/airtable";

const canonicalUrl = "https://www.howwellyouknow.com/play/airtable";
const description =
  "Airtable wizard? Prove it. Bases, views, automations, and linked records in 6 rounds. Take the 3-min quiz and share your scorecard.";
const ogImageUrl =
  "/api/og?title=How+Airtable+Are+You%3F&tool=Airtable&slug=airtable";

export const metadata: Metadata = {
  title: "How Airtable Are You?",
  description,
  icons: { icon: "/logos/airtable.jpg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Airtable Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Airtable Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Airtable Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={airtableConfig}>{children}</QuizLayout>;
}
