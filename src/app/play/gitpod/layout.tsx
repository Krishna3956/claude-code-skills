import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { gitpodConfig } from "@/quizzes/gitpod";
const canonicalUrl = "https://www.howwellyouknow.com/play/gitpod";
const description = "Think you know Gitpod? Test reproducible cloud dev environments, prebuilds, and team workflow discipline in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Gitpod+Are+You%3F&tool=Gitpod&slug=gitpod";
export const metadata: Metadata = {
  title: "How Gitpod Are You?", description, icons: { icon: "/logos/gitpod.png" }, alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Gitpod Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Gitpod Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Gitpod Are You?", description, images: [ogImageUrl] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <QuizLayout config={gitpodConfig}>{children}</QuizLayout>; }
