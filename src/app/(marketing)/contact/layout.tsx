import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Questions about How Well You Know, partnership ideas, or custom enterprise challenges? We reply within 24 hours.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/contact",
  },
  openGraph: {
    title: "Contact How Well You Know",
    description:
      "Questions about How Well You Know, partnership ideas, or custom enterprise challenges? We reply within 24 hours.",
    url: "https://www.howwellyouknow.com/contact",
  },
  twitter: {
    title: "Contact How Well You Know",
    description:
      "Questions, partnership ideas, or custom enterprise challenges? We reply within 24 hours.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
