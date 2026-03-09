import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { midjourneyConfig } from "@/quizzes/midjourney";

const canonicalUrl = "https://www.howwellyouknow.com/play/midjourney";
const description =
  "Midjourney prompts expert? Test parameters, styles, and Discord workflow in 6 rounds. Get your shareable scorecard in ~3 min.";
const ogImageUrl =
  "/api/og?title=How+Midjourney+Are+You%3F&tool=Midjourney&slug=midjourney";

export const metadata: Metadata = {
  title: "How Midjourney Are You?",
  description,
  icons: { icon: "/logos/midjourney.jpg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Midjourney Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Midjourney Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Midjourney Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={midjourneyConfig}>{children}</QuizLayout>;
}
