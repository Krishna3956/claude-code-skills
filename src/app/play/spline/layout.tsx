import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { splineConfig } from "@/quizzes/spline";

const canonicalUrl = "https://www.howwellyouknow.com/play/spline";
const description = "Think you know Spline? Test 3D web design and interactive scene workflow skills in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Spline+Are+You%3F&tool=Spline&slug=spline";

export const metadata: Metadata = {
  title: "How Spline Are You?",
  description,
  icons: { icon: "/logos/spline.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Spline Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Spline Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Spline Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={splineConfig}>{children}</QuizLayout>;
}
