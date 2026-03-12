import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { triggerdevConfig } from "@/quizzes/triggerdev";

const canonicalUrl = "https://www.howwellyouknow.com/play/triggerdev";
const description = "Background job workflows with retries, schedules, and execution visibility for developers.";
const ogImageUrl = "/api/og?title=How+Trigger.dev+Are+You%3F&tool=Trigger.dev&slug=triggerdev";

export const metadata: Metadata = {
  title: "How Trigger.dev Are You?",
  description,
  icons: { icon: "/logos/triggerdev.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Trigger.dev Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Trigger.dev Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Trigger.dev Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={triggerdevConfig}>{children}</QuizLayout>;
}
