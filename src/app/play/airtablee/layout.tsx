import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { airtableConfig } from "@/quizzes/airtable";

const canonicalUrl = "https://www.howwellyouknow.com/play/airtablee";
const description =
  "Master Airtable? Prove it. 6 rounds covering bases, automations, views, and integrations. Get your shareable scorecard in ~3 minutes.";
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
  return (
    <QuizLayout config={{ ...airtableConfig, slug: "airtablee", analyticsPrefix: "airtablee" }}>
      {children}
    </QuizLayout>
  );
}
