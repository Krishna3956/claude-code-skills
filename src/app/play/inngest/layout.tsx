import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { inngestConfig } from "@/quizzes/inngest";

const canonicalUrl = "https://www.howwellyouknow.com/play/inngest";
const description = "Event-driven durable workflows that execute multi-step logic reliably over time.";
const ogImageUrl = "/api/og?title=How+Inngest+Are+You%3F&tool=Inngest&slug=inngest";

export const metadata: Metadata = {
  title: "How Inngest Are You?",
  description,
  icons: { icon: "/logos/inngest.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Inngest Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Inngest Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Inngest Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={inngestConfig}>{children}</QuizLayout>;
}
