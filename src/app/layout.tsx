import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.howwellyouknow.com"),
  applicationName: "How Well You Know",
  title: {
    default: "How Well You Know - Interactive Product Challenges for B2B SaaS",
    template: "%s | How Well You Know",
  },
  description:
    "Turn your product docs into 3-minute interactive challenges. Your customers learn your product. You see what they don't understand.",
  keywords: [
    "product knowledge",
    "interactive challenges",
    "B2B SaaS",
    "customer education",
    "product onboarding",
    "micro-learning",
    "product adoption",
    "customer training",
    "knowledge assessment",
    "interactive quizzes",
  ],
  authors: [{ name: "How Well You Know" }],
  creator: "How Well You Know",
  publisher: "How Well You Know",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "How Well You Know - Interactive Product Challenges for B2B SaaS",
    description:
      "Turn your product docs into 3-minute interactive challenges. Your customers learn your product. You see what they don't understand.",
    url: "https://www.howwellyouknow.com",
    siteName: "How Well You Know",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "How Well You Know - Interactive Product Challenges for B2B SaaS",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "How Well You Know - Interactive Product Challenges for B2B SaaS",
    description:
      "Turn your product docs into 3-minute interactive challenges. Your customers learn your product. You see what they don't understand.",
    images: ["/apple-touch-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.howwellyouknow.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "How Well You Know",
              alternateName: ["HWYK", "HowWellYouKnow"],
              url: "https://www.howwellyouknow.com",
              description:
                "Interactive product challenges for B2B SaaS customer education",
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
