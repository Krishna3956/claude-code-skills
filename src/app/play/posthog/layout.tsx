import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { posthogConfig } from "@/quizzes/posthog";

const canonicalUrl = "https://www.howwellyouknow.com/play/posthog";
const description = "Think you know PostHog? Test instrumentation, flags, replay, and analytics discipline in 6 rounds.";
const ogImageUrl = "/api/og?title=How+PostHog+Are+You%3F&tool=PostHog&slug=posthog";

export const metadata: Metadata = {
  title: "How PostHog Are You?",
  description,
  icons: { icon: "/logos/posthog.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How PostHog Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How PostHog Are You?" }] },
  twitter: { card: "summary_large_image", title: "How PostHog Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={posthogConfig}>{children}</QuizLayout>;
}
