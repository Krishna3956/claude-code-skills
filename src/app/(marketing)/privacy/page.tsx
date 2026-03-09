import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How How Well You Know collects, uses, and protects your data. We only collect email addresses when you opt in and quiz scores for analytics.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy - How Well You Know",
    description:
      "How How Well You Know collects, uses, and protects your data. We only collect email addresses when you opt in and quiz scores for analytics.",
    url: "https://www.howwellyouknow.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-20" style={{ background: "var(--m-bg)" }}>
      <div className="mx-auto max-w-[800px] px-6">
        <h1
          className="mb-2 text-3xl font-bold md:text-4xl"
          style={{ color: "var(--m-text)" }}
        >
          Privacy Policy
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--m-text-tertiary)" }}>
          Last updated: March 8, 2026
        </p>

        <div
          className="flex flex-col gap-6 text-sm leading-relaxed"
          style={{ color: "var(--m-text-secondary)" }}
        >
          <p>
            How Well You Know (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the howwellyouknow.com website.
            This page describes our policies on collecting, using, and disclosing personal
            data when you use our Service.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>
            1. Information We Collect
          </h2>
          <p>
            <strong>1.1 Information You Provide:</strong> Email address (when you sign up,
            submit a contact form, or unlock detailed quiz results), name and company information
            (when you fill out a contact form), quiz responses and scores (when you complete a challenge).
          </p>
          <p>
            <strong>1.2 Information Collected Automatically:</strong> Usage data (pages visited, quiz interactions,
            completion rates, scores), device information (browser type, operating system, screen size),
            IP address (anonymized for analytics), referral source (how you found our site).
          </p>
          <p>
            We use Vercel Analytics for website and product analytics. Vercel Analytics is
            privacy-friendly and does not use cookies for tracking.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5">
            <li>To provide and maintain our Service</li>
            <li>To send you product updates (only if you opted in)</li>
            <li>To analyze quiz completion patterns and improve our challenge formats</li>
            <li>To respond to your inquiries and support requests</li>
            <li>To detect and prevent abuse or fraud</li>
          </ul>
          <p>
            We do not sell your personal data. We do not share your email address with
            third parties for marketing purposes.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>
            3. Data Storage
          </h2>
          <ul className="list-disc pl-5">
            <li>Email addresses and form submissions are stored in Google Sheets (secured with access controls) and will migrate to a secured database as we scale.</li>
            <li>Quiz scores are encoded in URLs and stored locally in your browser. We do not store individual quiz results on our servers unless you submit your email to unlock detailed results.</li>
            <li>Analytics data is processed by Vercel Analytics per their privacy policy.</li>
          </ul>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>
            4. Data Retention
          </h2>
          <p>
            We retain your email address and associated data for as long as you have an
            active relationship with us. You can request deletion of your data at any time
            by emailing hello@howwellyouknow.com.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>
            5. Your Rights
          </h2>
          <ul className="list-disc pl-5">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p>To exercise any of these rights, email hello@howwellyouknow.com.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>
            6. Cookies
          </h2>
          <p>
            Our website uses minimal cookies: essential cookies for site functionality.
            No third-party tracking cookies. No advertising cookies.
            Vercel Analytics operates without cookies.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>
            7. Third-Party Services
          </h2>
          <p>
            We use the following third-party services: Vercel (hosting and analytics),
            Google Sheets (email storage, migrating to database), Resend (transactional email, when applicable).
            Each service has its own privacy policy governing its use of your data.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>
            8. Children&apos;s Privacy
          </h2>
          <p>
            Our Service is not directed at anyone under the age of 16. We do not knowingly
            collect personal data from children.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this policy from time to time. We will notify you of changes by
            posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>
            10. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy: hello@howwellyouknow.com
          </p>
        </div>
      </div>
    </section>
  );
}
