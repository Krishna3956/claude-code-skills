import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Browse our interactive product challenges or head back to the homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div
      style={{
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        background: "var(--m-bg, #FFFFFF)",
        color: "var(--m-text, #0F172A)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p
          style={{
            fontSize: "5rem",
            fontWeight: 800,
            lineHeight: 1,
            color: "var(--m-accent, #635BFF)",
            marginBottom: "0.5rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--m-text-secondary, #64748B)",
            maxWidth: "28rem",
            margin: "0 auto 2rem",
            lineHeight: 1.6,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              background: "var(--m-accent, #635BFF)",
              color: "#FFFFFF",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Go home
          </Link>
          <Link
            href="/play"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              border: "1px solid var(--m-border, #E2E8F0)",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              color: "var(--m-text, #0F172A)",
            }}
          >
            Browse challenges
          </Link>
        </div>
      </div>
    </div>
  );
}
