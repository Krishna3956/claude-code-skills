import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { lightfieldConfig } from "@/quizzes/lightfield";

const canonicalUrl = "https://www.howwellyouknow.com/play/lightfield";
const description =
  "Think you know Lightfield? Prove it. AI-native CRM, customer memory, workflow builder, MCP connectors, Outlook sync, and record ops in 5 rounds.";
const ogImageUrl =
  "/api/og?title=How+Lightfield+Are+You%3F&tool=Lightfield&slug=lightfield";

export const metadata: Metadata = {
  title: "How Lightfield Are You?",
  description,
  icons: { icon: "/logos/lightfield.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Lightfield Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Lightfield Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Lightfield Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={lightfieldConfig}>{children}</QuizLayout>;
}
