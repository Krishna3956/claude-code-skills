import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { resendConfig } from "@/quizzes/resend";

const canonicalUrl = "https://www.howwellyouknow.com/play/resend";
const description =
  "Think you know Resend? Test headers, auth, domains, rate limits, and API flow in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Resend+Are+You%3F&tool=Resend&slug=resend";

export const metadata: Metadata = {
  title: "How Resend Are You?",
  description,
  icons: { icon: "/logos/resend-icon.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Resend Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Resend Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Resend Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={resendConfig}>{children}</QuizLayout>;
}
