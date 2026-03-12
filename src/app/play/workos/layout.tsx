import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { workosConfig } from "@/quizzes/workos";

const canonicalUrl = "https://www.howwellyouknow.com/play/workos";
const description = "Think you know WorkOS? Test SSO, SCIM, enterprise identity workflows, and security posture in 6 rounds.";
const ogImageUrl = "/api/og?title=How+WorkOS+Are+You%3F&tool=WorkOS&slug=workos";

export const metadata: Metadata = {
  title: "How WorkOS Are You?",
  description,
  icons: { icon: "/logos/workos.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How WorkOS Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How WorkOS Are You?" }] },
  twitter: { card: "summary_large_image", title: "How WorkOS Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={workosConfig}>{children}</QuizLayout>;
}
