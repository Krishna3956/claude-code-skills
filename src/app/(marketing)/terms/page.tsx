import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing your use of the How Well You Know platform, including interactive challenges, embeds, and analytics.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/terms",
  },
  openGraph: {
    title: "Terms of Service - How Well You Know",
    description:
      "Terms and conditions governing your use of the How Well You Know platform.",
    url: "https://www.howwellyouknow.com/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="py-16 md:py-20" style={{ background: "var(--m-bg)" }}>
      <div className="mx-auto max-w-[800px] px-6">
        <h1
          className="mb-2 text-3xl font-bold md:text-4xl"
          style={{ color: "var(--m-text)" }}
        >
          Terms of Service
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--m-text-tertiary)" }}>
          Last updated: March 8, 2026
        </p>

        <div
          className="flex flex-col gap-6 text-sm leading-relaxed"
          style={{ color: "var(--m-text-secondary)" }}
        >
          <p>
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using the
            howwellyouknow.com website (&quot;Service&quot;) operated by How Well You Know
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
          </p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>1. Acceptance of Terms</h2>
          <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part, you may not access the Service.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>2. Description of Service</h2>
          <p>How Well You Know creates interactive product knowledge challenges for B2B SaaS companies. Our Service includes: playing free interactive challenges on our website, creating custom challenges for your product (paid plans), analytics and reporting on challenge performance, and embeddable challenge widgets for your website.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>3. Accounts and Registration</h2>
          <p>When you create an account or sign up, you agree to: provide accurate, current, and complete information; maintain the security of your account credentials; accept responsibility for all activities under your account; and notify us immediately of any unauthorized use.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>4. Free and Paid Plans</h2>
          <p><strong>4.1 Free Plan:</strong> Our Free plan provides limited access to challenge creation. Free challenges display a &quot;Powered by How Well You Know&quot; badge that cannot be removed.</p>
          <p><strong>4.2 Paid Plans:</strong> Paid plans (Growth, Scale, Enterprise) are billed monthly. Prices are listed on our pricing page and may change with 30 days notice. You may cancel at any time, effective at the end of your current billing period.</p>
          <p><strong>4.3 Refunds:</strong> We offer a full refund within 14 days of your first payment if you&apos;re not satisfied. After 14 days, no refunds are provided for partial billing periods.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>5. User Content</h2>
          <p><strong>5.1 Your Content:</strong> You retain ownership of all content you create using our Service, including challenge questions, branding materials, and documentation you provide.</p>
          <p><strong>5.2 License to Us:</strong> By creating content on our platform, you grant us a non-exclusive, worldwide license to host, display, and distribute that content as part of the Service. This license terminates when you delete your content or close your account.</p>
          <p><strong>5.3 Player Data:</strong> Quiz responses and scores from players who take your challenges are considered your data. You are responsible for informing your players about data collection in accordance with applicable privacy laws.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>6. Acceptable Use</h2>
          <p>You agree not to: use the Service for any unlawful purpose; create challenges containing harmful, abusive, or misleading content; attempt to gain unauthorized access to our systems; scrape, copy, or redistribute our platform or content; misrepresent your identity or affiliation; or use the Service to send spam or unsolicited communications.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>7. Intellectual Property</h2>
          <p>The Service, including its design, code, features, and branding, is owned by How Well You Know and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our Service without our written permission.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>8. Disclaimer of Warranties</h2>
          <p>The Service is provided &quot;as is&quot; without warranties of any kind, whether express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or secure.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>9. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, How Well You Know shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability for any claim arising from the Service shall not exceed the amount you paid us in the 12 months preceding the claim.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>10. Termination</h2>
          <p>We may terminate or suspend your access to the Service at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or us. Upon termination, your right to use the Service ceases immediately. We will make your data available for export for 30 days after termination.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>11. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page and updating the &quot;Last updated&quot; date. Continued use after changes means you accept the new Terms.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>12. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.</p>

          <h2 className="text-lg font-semibold" style={{ color: "var(--m-text)" }}>13. Contact</h2>
          <p>If you have questions about these Terms: hello@howwellyouknow.com</p>
        </div>
      </div>
    </section>
  );
}
