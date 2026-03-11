import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { snowflakeConfig } from "@/quizzes/snowflake";

const canonicalUrl = "https://www.howwellyouknow.com/play/snowflake";
const description =
  "Think you know Snowflake? Test warehouses, Time Travel, cloning, sharing, and CDC workflows in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Snowflake+Are+You%3F&tool=Snowflake&slug=snowflake";

export const metadata: Metadata = {
  title: "How Snowflake Are You?",
  description,
  icons: { icon: "/logos/snowflake.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Snowflake Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Snowflake Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Snowflake Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={snowflakeConfig}>{children}</QuizLayout>;
}

