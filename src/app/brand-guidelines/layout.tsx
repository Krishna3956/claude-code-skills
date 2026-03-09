import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description:
    "Official How Well You Know brand assets, monogram variants, lockup designs, typography specs, and color palette. Download approved logos and brand materials.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.howwellyouknow.com/brand-guidelines",
  },
};

export default function BrandGuidelinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
