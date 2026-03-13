import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { shopifyConfig } from "@/quizzes/shopify";

const canonicalUrl = "https://www.howwellyouknow.com/play/shopify";
const description =
  "Think you know Shopify? Prove it. Markets, Flow, Hydrogen, Oxygen, metafields, metaobjects, Functions, and checkout extensibility in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Shopify+Are+You%3F&tool=Shopify&slug=shopify";

export const metadata: Metadata = {
  title: "How Shopify Are You?",
  description,
  icons: { icon: "/logos/shopify.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Shopify Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Shopify Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Shopify Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={shopifyConfig}>{children}</QuizLayout>;
}
