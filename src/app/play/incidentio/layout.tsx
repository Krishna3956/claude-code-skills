import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { incidentioConfig } from "@/quizzes/incidentio";

const canonicalUrl = "https://www.howwellyouknow.com/play/incidentio";
const description = "Think you know Incident.io? Test incident response operations, escalation, and postmortem rigor in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Incident.io+Are+You%3F&tool=Incident.io&slug=incidentio";

export const metadata: Metadata = {
  title: "How Incident.io Are You?",
  description,
  icons: { icon: "/logos/incidentio.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Incident.io Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Incident.io Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Incident.io Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={incidentioConfig}>{children}</QuizLayout>;
}
