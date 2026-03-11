"use client";

import { useState } from "react";
import { Mail, MessageSquare, Handshake, Clock } from "lucide-react";
import { validateEmail } from "@/lib/validate-email";
import { track } from "@/lib/analytics";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General question",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const emailResult = validateEmail(form.email);
    if (!emailResult.valid) {
      setError(emailResult.error ?? "Please enter a valid email");
      return;
    }
    if (!form.message.trim()) {
      setError("Please enter a message");
      return;
    }

    setLoading(true);

    const payload = {
      email: form.email.trim().toLowerCase(),
      name: form.name.trim(),
      subject: form.subject,
      message: form.message.trim(),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          access_key: "22f20653-5774-4a49-b57f-b713861e9f92",
          from_name: "HWYK Contact Form",
          subject: `[Contact] ${payload.subject}`,
        }),
      });
      if (!res.ok) {
        setError("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
      return;
    }

    fetch("/api/early-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source: `contact-${form.subject}` }),
    }).catch(() => {});

    track("contact_form_submit", { subject: form.subject });
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <section
        className="relative overflow-hidden py-20 md:py-32"
        style={{ background: "var(--m-bg)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 91, 255, 0.08), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-[600px] px-6 text-center">
          <div
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
            style={{ background: "var(--m-accent-light)" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--m-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1
            className="mb-3 text-2xl font-bold sm:text-3xl"
            style={{ color: "var(--m-text)" }}
          >
            Message sent.
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--m-text-secondary)" }}>
            We read every message and reply within 24 hours. Talk soon.
          </p>
        </div>
      </section>
    );
  }

  const inputStyle = {
    borderColor: "var(--m-border)",
    color: "var(--m-text)",
    background: "var(--m-bg)",
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28" style={{ background: "var(--m-bg)" }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 91, 255, 0.08), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-12 md:flex-row md:gap-16">
            {/* Left: intro + info cards */}
            <div className="flex-1">
              <span
                className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                style={{ background: "var(--m-accent-light)", color: "var(--m-accent)" }}
              >
                Contact
              </span>
              <h1
                className="mb-4 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                style={{ color: "var(--m-text)", lineHeight: "1.1" }}
              >
                We&apos;d love to hear from you
              </h1>
              <p
                className="mb-10 max-w-md text-base leading-relaxed"
                style={{ color: "var(--m-text-secondary)" }}
              >
                Whether you have a question about the product, want to explore a
                partnership, or just want to say hi. We&apos;re here.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: Mail,
                    title: "Email us",
                    desc: "hello@howwellyouknow.com",
                    href: "mailto:hello@howwellyouknow.com",
                  },
                  {
                    icon: Clock,
                    title: "Response time",
                    desc: "We reply within 24 hours",
                    href: null,
                  },
                  {
                    icon: MessageSquare,
                    title: "Quick call?",
                    desc: "Mention it in your message and we'll send a calendar link",
                    href: null,
                  },
                  {
                    icon: Handshake,
                    title: "Partnerships",
                    desc: "Integrations, co-marketing, or reseller. Let's talk",
                    href: null,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href
                    ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined }
                    : {};
                  return (
                    <Wrapper
                      key={item.title}
                      {...wrapperProps}
                      className="flex items-start gap-3 rounded-xl border p-4 transition-all hover:shadow-sm"
                      style={{ borderColor: "var(--m-border)", background: "var(--m-bg)" }}
                    >
                      <div
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: "var(--m-accent-light)" }}
                      >
                        <Icon size={16} style={{ color: "var(--m-accent)" }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "var(--m-text)" }}>
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "var(--m-text-tertiary)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Right: form */}
            <div className="w-full md:w-[480px] md:shrink-0">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border p-6 shadow-sm sm:p-8"
                style={{ borderColor: "var(--m-border)", background: "var(--m-bg)" }}
              >
                <h2
                  className="mb-1 text-lg font-bold"
                  style={{ color: "var(--m-text)" }}
                >
                  Send us a message
                </h2>
                <p className="mb-6 text-xs" style={{ color: "var(--m-text-tertiary)" }}>
                  We read every message and reply within 24 hours.
                </p>

                <div className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="mb-1.5 block text-xs font-medium"
                        style={{ color: "var(--m-text-secondary)" }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-11 w-full rounded-lg border px-4 text-sm outline-none transition-colors focus:ring-2"
                        style={{
                          ...inputStyle,
                          // @ts-expect-error CSS custom property
                          "--tw-ring-color": "var(--m-accent)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="mb-1.5 block text-xs font-medium"
                        style={{ color: "var(--m-text-secondary)" }}
                      >
                        Work email
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (error) setError("");
                        }}
                        className="h-11 w-full rounded-lg border px-4 text-sm outline-none transition-colors focus:ring-2"
                        style={{
                          ...inputStyle,
                          borderColor: error && !form.message ? "var(--m-border)" : error ? "var(--m-border)" : "var(--m-border)",
                          // @ts-expect-error CSS custom property
                          "--tw-ring-color": "var(--m-accent)",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="mb-1.5 block text-xs font-medium"
                      style={{ color: "var(--m-text-secondary)" }}
                    >
                      What&apos;s this about?
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="h-11 w-full rounded-lg border px-4 text-sm outline-none transition-colors focus:ring-2"
                      style={{
                        ...inputStyle,
                        // @ts-expect-error CSS custom property
                        "--tw-ring-color": "var(--m-accent)",
                      }}
                    >
                      <option>General question</option>
                      <option>I want to get started</option>
                      <option>Partnership or integration</option>
                      <option>Press inquiry</option>
                      <option>Something else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="mb-1.5 block text-xs font-medium"
                      style={{ color: "var(--m-text-secondary)" }}
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us what's on your mind..."
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (error) setError("");
                      }}
                      rows={4}
                      className="w-full rounded-lg border p-4 text-sm outline-none transition-colors focus:ring-2"
                      style={{
                        ...inputStyle,
                        // @ts-expect-error CSS custom property
                        "--tw-ring-color": "var(--m-accent)",
                      }}
                    />
                  </div>

                  {error && (
                    <p className="text-xs" style={{ color: "#EF4444" }}>{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="h-12 w-full rounded-lg text-sm font-semibold shadow-md transition-all hover:scale-[1.02] disabled:opacity-60"
                    style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
