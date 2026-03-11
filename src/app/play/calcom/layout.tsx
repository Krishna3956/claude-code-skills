import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { calcomConfig } from "@/quizzes/calcom";

const canonicalUrl = "https://www.howwellyouknow.com/play/calcom";
const description = "Think you know Cal.com? Test scheduling infrastructure and booking workflow knowledge in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Cal.com+Are+You%3F&tool=Cal.com&slug=calcom";

export const metadata: Metadata = {
  title: "How Cal.com Are You?",
  description,
  icons: { icon: "/logos/calcom.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Cal.com Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Cal.com Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Cal.com Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={calcomConfig}>{children}</QuizLayout>;
}
