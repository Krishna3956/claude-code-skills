import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { onepasswordConfig } from "@/quizzes/onepassword";

const canonicalUrl = "https://www.howwellyouknow.com/play/onepassword";
const description =
  "Think you know 1Password? Test password security, vault architecture, secrets automation, and zero-trust credential management in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+1Password+Are+You%3F&tool=1Password&slug=onepassword";

export const metadata: Metadata = {
  title: "How 1Password Are You?",
  description,
  icons: { icon: "/logos/onepassword.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How 1Password Are You?",
    description,
    url: canonicalUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "How 1Password Are You?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How 1Password Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={onepasswordConfig}>{children}</QuizLayout>;
}
