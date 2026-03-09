import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { hubspotConfig } from "@/quizzes/hubspot";

const canonicalUrl = "https://www.howwellyouknow.com/play/hubspot";
const description =
  "HubSpot power user or rookie? 6 rounds test your CRM, marketing automation, and sales pipeline knowledge. Take the 3-min challenge now.";
const ogImageUrl =
  "/api/og?title=How+HubSpot+Are+You%3F&tool=HubSpot&slug=hubspot";

export const metadata: Metadata = {
  title: "How HubSpot Are You?",
  description,
  icons: { icon: "/logos/hubspot.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How HubSpot Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How HubSpot Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How HubSpot Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={hubspotConfig}>{children}</QuizLayout>;
}
