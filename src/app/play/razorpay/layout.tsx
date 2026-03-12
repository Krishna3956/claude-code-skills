import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { razorpayConfig } from "@/quizzes/razorpay";

const canonicalUrl = "https://www.howwellyouknow.com/play/razorpay";
const description =
  "Think you know Razorpay? Test payment orders, signatures, capture flows, and production-grade integration behavior.";
const ogImageUrl = "/api/og?title=How+Razorpay+Are+You%3F&tool=Razorpay&slug=razorpay";

export const metadata: Metadata = {
  title: "How Razorpay Are You?",
  description,
  icons: { icon: "/logos/razorpay.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Razorpay Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Razorpay Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Razorpay Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={razorpayConfig}>{children}</QuizLayout>;
}
