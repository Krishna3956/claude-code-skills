import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { smallstepConfig } from "@/quizzes/smallstep";
const canonicalUrl = "https://www.howwellyouknow.com/play/smallstep";
const description = "Think you know Smallstep? Test certificate lifecycle, trust boundaries, and machine identity ops in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Smallstep+Are+You%3F&tool=Smallstep&slug=smallstep";
export const metadata: Metadata = {
  title: "How Smallstep Are You?", description, icons: { icon: "/logos/smallstep.png" }, alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Smallstep Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Smallstep Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Smallstep Are You?", description, images: [ogImageUrl] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <QuizLayout config={smallstepConfig}>{children}</QuizLayout>; }
