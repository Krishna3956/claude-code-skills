import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { planetscaleConfig } from "@/quizzes/planetscale";

const canonicalUrl = "https://www.howwellyouknow.com/play/planetscale";
const description = "Think you know PlanetScale? Test branching, Vitess, migrations, and production DB workflows in 6 rounds.";
const ogImageUrl = "/api/og?title=How+PlanetScale+Are+You%3F&tool=PlanetScale&slug=planetscale";

export const metadata: Metadata = {
  title: "How PlanetScale Are You?",
  description,
  icons: { icon: "/logos/planetscale.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How PlanetScale Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How PlanetScale Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How PlanetScale Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={planetscaleConfig}>{children}</QuizLayout>;
}
