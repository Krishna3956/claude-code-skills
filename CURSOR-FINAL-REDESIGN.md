# HWYK Website Redesign - Stripe-Inspired Professional Overhaul

Paste this entire file as your first message in a new Cursor agent tab.
Read it fully before making any changes. Execute in the priority order listed.

---

## DESIGN PHILOSOPHY

Study stripe.com before you start. The key patterns:
- **Generous whitespace.** Stripe uses 120-160px vertical padding between sections, not 64-96px.
- **Typography hierarchy.** Hero headlines are massive (56-72px). Section headings are 36-48px. Body is 16-18px. There is CLEAR visual hierarchy.
- **Dark sections for emphasis.** Stripe uses dark navy/black background sections to break monotony and highlight key content (their stats, their enterprise section).
- **Real product visuals.** Every section has a visual: code snippets, dashboard previews, UI mockups. Never just text.
- **Subtle gradients.** Background gradients are barely visible (white to off-white, or dark to slightly-less-dark). Never garish.
- **Card depth.** Cards have subtle shadows + borders. On hover, shadow increases. Never flat.
- **Animations are minimal.** No bouncing, no excessive motion. Just gentle fade-ins on scroll.

---

## PRIORITY 0: CRITICAL BUG FIX - FadeIn Animation

The FadeIn component causes content to be invisible until user scrolls to it.
The hero section wraps content in FadeIn, but since FadeIn uses `whileInView`,
and the hero IS the viewport on load, it may not trigger properly.

File: `src/components/marketing/FadeIn.tsx`

Fix: The hero content should animate on mount, not on scroll. Change the component:

```tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

Key changes:
- `margin: '-50px'` replaced with `amount: 0.1` (triggers when 10% visible, not 50px before)
- Easing changed to a custom cubic bezier (smoother, more Stripe-like)
- Duration slightly longer (0.6s not 0.5s)
- Added className passthrough

ALSO: In the homepage hero, remove FadeIn wrappers from the hero section entirely.
The hero should be visible immediately on page load. Only use FadeIn for sections
BELOW the fold. Replace the hero FadeIn wrappers with plain divs:

```tsx
{/* HERO - no FadeIn, visible immediately */}
<section className="...">
  <div className="...">
    <div className="flex-1">  {/* was <FadeIn> */}
      ...
    </div>  {/* was </FadeIn> */}
    <div className="flex-1">  {/* was <FadeIn delay={0.2}> */}
      ...
    </div>
  </div>
</section>
```

BUT add a simple CSS animation to the hero instead:
```tsx
<div className="flex-1" style={{ animation: 'fadeInUp 0.8s ease-out both' }}>
```

Add to globals.css:
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
```

The right side of the hero should have `animation-delay: 0.2s`:
```tsx
<div className="flex-1" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
```

---

## PRIORITY 1: PRICING CHANGES

### New pricing (no discounts, no early access pricing)

File: `src/components/marketing/PricingCards.tsx`

Replace the TIERS array completely:

```ts
const TIERS: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "",
    tagline: "See what it's like",
    features: [
      "1 challenge",
      "10 cards per challenge",
      "All 5 challenge types",
      "Scoring and scorecard",
      "Shareable results",
      "Play count analytics",
    ],
    cta: "Start Free",
    ctaHref: "#early-access",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    tagline: "For growing teams",
    features: [
      "5 challenges",
      "25 cards per challenge",
      "All 5 challenge types",
      "Custom branding (logo + color)",
      "Removable 'Powered by' badge",
      "Hosted page",
      "Plays, avg score, completion rate",
      "AI content generation",
      "3 team seats",
      "CSV export",
      "Email support (48hr)",
    ],
    cta: "Get Started",
    ctaHref: "#early-access",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$199",
    period: "/mo",
    tagline: "For serious CS teams",
    features: [
      "Unlimited challenges",
      "25 cards per challenge",
      "Full brand kit (colors, fonts, logo)",
      "Removable 'Powered by' badge",
      "Hosted page + embed code",
      "Full analytics + knowledge gaps",
      "Lead capture (player emails)",
      "AI generation + custom prompts",
      "10 team seats",
      "CSV + API access",
      "Priority email (24hr)",
    ],
    cta: "Get Started",
    ctaHref: "#early-access",
  },
];
```

Remove the `originalPrice` field from the Tier interface entirely.
Remove ALL rendering of `originalPrice` and strikethrough pricing.

### Add annual/monthly toggle

The PricingCards component needs a billing toggle. Add it:

```tsx
interface PricingCardsProps {
  compact?: boolean;
}

export default function PricingCards({ compact }: PricingCardsProps) {
  const [annual, setAnnual] = useState(false);

  // Annual = 2 months free (10/12 = ~17% discount)
  const getPrice = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return "$0";
    if (annual) return `$${Math.round(monthlyPrice * 10 / 12)}`;
    return `$${monthlyPrice}`;
  };

  const getPeriod = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return "";
    return annual ? "/mo, billed annually" : "/mo";
  };
```

Add the toggle above the cards grid:
```tsx
{!compact && (
  <div className="mb-10 flex items-center justify-center gap-3">
    <span
      className="text-sm font-medium"
      style={{ color: annual ? 'var(--m-text-tertiary)' : 'var(--m-text)' }}
    >
      Monthly
    </span>
    <button
      onClick={() => setAnnual(!annual)}
      className="relative h-7 w-12 rounded-full transition-colors"
      style={{ background: annual ? 'var(--m-accent)' : 'var(--m-border)' }}
    >
      <div
        className="absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform"
        style={{ transform: annual ? 'translateX(22px)' : 'translateX(2px)' }}
      />
    </button>
    <span
      className="text-sm font-medium"
      style={{ color: annual ? 'var(--m-text)' : 'var(--m-text-tertiary)' }}
    >
      Annual
    </span>
    {annual && (
      <span
        className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
        style={{ background: 'var(--m-accent-light)', color: 'var(--m-accent)' }}
      >
        Save 17%
      </span>
    )}
  </div>
)}
```

Make PricingCards a client component: add `"use client";` at top and `import { useState } from "react";`.

The price display should use `getPrice()` and `getPeriod()` instead of hardcoded values.
For Free tier, always show $0. For Pro, show $99/mo or $83/mo billed annually.
For Business, show $199/mo or $166/mo billed annually.

### Update homepage pricing section copy

File: `src/app/(marketing)/page.tsx` - Pricing teaser section

Replace the heading and subheading:
```tsx
<h2>Starts at $99/mo. Free plan available.</h2>
<p>Start free with one challenge. Upgrade when you need branding, analytics, and lead capture.</p>
```

Remove the "50% off" and "founding members" language everywhere in the site.
Search for "50% off", "founding members", "half price", "early access is half that",
"lock in", and replace with straightforward language.

### Update CTA Section

File: `src/components/marketing/CTASection.tsx`

Replace the heading and body:
```tsx
<h2>Start building your first challenge</h2>
<p>
  Join the teams using interactive challenges to onboard customers,
  engage communities, and generate leads. Free to start. No credit card required.
</p>
```

Change the button text from "Get Early Access" to "Get Started".
Change the reassurance line to: "Free plan included. No credit card required."

---

## PRIORITY 2: REMOVE SKILLJAR MENTION

File: `src/app/(marketing)/page.tsx` - Comparison table section

Replace the heading and subheading:
```tsx
<h2>Not a quiz tool. Not an LMS. Something new.</h2>
<p>
  Enterprise education tools cost $10,000+/year and take months to deploy.
  We deliver the same value for a fraction of the cost, ready in minutes.
</p>
```

In the comparison table header, change "LMS (Skilljar)" to just "LMS".

Also check all other files for "Skilljar" mentions and remove them:
- `src/app/(marketing)/about/page.tsx` - change "Enterprise education tools like Skilljar cost $10,000+"
  to "Enterprise education tools cost $10,000+"
- Any other file that mentions Skilljar.

---

## PRIORITY 3: HOMEPAGE REDESIGN - STRIPE STYLE

### 3A. Hero Section

File: `src/app/(marketing)/page.tsx`

The hero needs to feel massive and confident, like stripe.com's hero.

```tsx
<section className="relative overflow-hidden" style={{ background: 'var(--m-bg)' }}>
  {/* Subtle gradient mesh background */}
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.08), transparent)',
    }}
  />
  <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 pb-24 pt-20 md:flex-row md:gap-16 md:pb-32 md:pt-28">
```

The headline should be even larger on desktop:
```tsx
<h1
  className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-[4.5rem]"
  style={{ color: 'var(--m-text)', lineHeight: '1.08' }}
>
```

### 3B. Hero Right Side - Embed a Live Mini Quiz

You said the fake scorecard looks weird. Replace the entire right side with
a LIVE embedded mini version of the actual quiz. This way visitors can
start playing RIGHT on the homepage.

Create a new component: `src/components/marketing/HeroQuiz.tsx`

This should be a simplified, self-contained 3-question quiz that:
- Shows in a card with a browser-chrome frame at the top
- Has tool selection pills (ChatGPT, Figma, Notion, Cursor)
- Shows one question at a time (Truth or Myth format)
- On completion, shows the score and a "Play the full challenge" button
- Uses the marketing CSS variables (--m-bg, --m-text, etc.) not the quiz ones

The component should look like a browser window:
```tsx
<div className="overflow-hidden rounded-2xl shadow-2xl"
  style={{ boxShadow: '0 25px 60px rgba(99, 102, 241, 0.12), 0 10px 30px rgba(0, 0, 0, 0.08)' }}>
  {/* Browser chrome */}
  <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#F1F5F9' }}>
    <div className="flex gap-1.5">
      <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
      <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
    </div>
    <div className="ml-2 flex-1 rounded-md px-3 py-1 text-[10px]"
      style={{ background: '#E2E8F0', color: '#94A3B8' }}>
      howwellyouknow.com/play/chatgpt
    </div>
  </div>
  {/* Quiz content */}
  <div className="p-6" style={{ background: 'var(--m-bg)' }}>
    {/* ... quiz UI here ... */}
  </div>
</div>
```

Use the SAME questions from MiniDemo.tsx but render them in a more compact format.
The key difference from MiniDemo: this one lives in the hero and doesn't navigate away.

Then in the homepage, replace the entire hero right-side (the dark scorecard div)
with `<HeroQuiz />`.

### 3C. Problem Stats Section - Make Numbers Dramatic

The stat cards (12%, 50%+, 73%) should be much more visually impactful.

Each stat card:
- Remove the top accent bar (too subtle)
- Make the number `text-6xl md:text-8xl font-black` (not text-5xl/text-7xl)
- Use a gradient from indigo to purple on the numbers
- Cards should have `rounded-2xl shadow-md` with a subtle hover lift
- Add a thin left border in accent color (4px, like Stripe's feature cards)

```tsx
<div className="relative rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md md:p-10"
  style={{ background: '#FFFFFF', borderLeft: '4px solid var(--m-accent)' }}>
  <p className="mb-3 text-6xl font-black md:text-8xl"
    style={{
      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: '1',
    }}>
    {item.stat}
  </p>
```

### 3D. "From Docs to Interactive Challenge" Section - Fix Layout

This section has layout issues (things merging). Redesign it:

Instead of a flex row with inline separator lines, use a clean 4-column grid with
numbered cards. Each step should be in its own card:

```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  {STEPS.map((step, i) => (
    <FadeIn key={step.title} delay={i * 0.1}>
      <div className="rounded-2xl border p-6 transition-shadow hover:shadow-md"
        style={{ background: 'var(--m-bg)', borderColor: 'var(--m-border)' }}>
        <div className="mb-4 flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold"
            style={{ background: 'var(--m-accent)', color: '#FFFFFF' }}>
            {i + 1}
          </div>
          <step.icon size={20} style={{ color: 'var(--m-accent)' }} />
        </div>
        <h3 className="mb-2 text-lg font-semibold" style={{ color: 'var(--m-text)' }}>
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--m-text-secondary)' }}>
          {step.desc}
        </p>
      </div>
    </FadeIn>
  ))}
</div>
```

Remove the broken dotted-line separators entirely. The card layout is cleaner.

Add a connecting horizontal line ABOVE the cards (desktop only) as a decorative element:
```tsx
<div className="mb-8 hidden items-center lg:flex">
  <div className="h-px flex-1" style={{ background: 'var(--m-border)' }} />
  <span className="px-4 text-xs font-medium uppercase tracking-wider"
    style={{ color: 'var(--m-text-tertiary)' }}>
    4 simple steps
  </span>
  <div className="h-px flex-1" style={{ background: 'var(--m-border)' }} />
</div>
```

### 3E. Comparison Table - Dark Background Section

Make the comparison section dark (like Stripe's enterprise section):

```tsx
<section className="py-20 md:py-28" style={{ background: '#0F172A' }}>
```

Change ALL text colors in this section:
- Heading: `color: '#FFFFFF'`
- Subheading: `color: '#94A3B8'`
- Table header cells: `color: '#94A3B8'`
- Regular table cells: `color: '#CBD5E1'`
- HWYK column header: `background: 'rgba(99, 102, 241, 0.15)'`, `color: '#A5B4FC'`
- HWYK column cells: `background: 'rgba(99, 102, 241, 0.08)'`, `color: '#A5B4FC'`, `font-bold`
- Table borders: `rgba(255, 255, 255, 0.08)` instead of `var(--m-border)`
- Row labels: `color: '#E2E8F0'`
- The table container: `rounded-xl border` with `borderColor: 'rgba(255,255,255,0.08)'`

### 3F. Use Cases Section

The use case cards on the homepage are fine but need bigger icons and hover effects.
See the UseCaseCard changes in Priority 5.

### 3G. Section Spacing (Stripe-level whitespace)

Update ALL section paddings to be more generous:
- Hero: `pb-24 pt-20 md:pb-32 md:pt-28` (handled above)
- Logo marquee: `py-14 md:py-20`
- Problem stats: `py-20 md:py-28`
- Mini demo: `py-20 md:py-28`
- How it works: `py-20 md:py-28`
- Use cases: `py-20 md:py-28`
- Comparison (dark): `py-20 md:py-28`
- Pricing teaser: `py-20 md:py-28`
- CTA: `py-24 md:py-32`

---

## PRIORITY 4: USE CASE PAGES - COMPLETE REDESIGN

The current use case pages (onboarding, community, marketing, documentation) are
walls of text. They look like blog posts, not product pages. Redesign them using
Stripe's use case page patterns.

### Stripe Use Case Page Structure:
1. **Hero with gradient background** - Bold headline + subheadline + CTA
2. **Feature blocks** - Alternating left/right layout with visual on one side, text on other
3. **Visual mockups** - CSS-generated UI mockups (not real images) showing the product in context
4. **Customer stories/social proof** - Quotes or case study snippets
5. **Bottom CTA** - Clean conversion section

### Template for ALL 4 use case pages:

Each use case page should follow this structure. I'll show the onboarding page
as an example; adapt for community, marketing, and documentation.

File: `src/app/(marketing)/use-cases/onboarding/page.tsx`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";

export const metadata: Metadata = {
  title: "Customer Onboarding - How Well You Know",
  description: "Onboard new customers in 3 minutes, not 3 weeks. Interactive challenges that replace onboarding calls.",
};

export default function OnboardingPage() {
  return (
    <>
      {/* HERO - gradient background */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 50%, #F8FAFC 100%)',
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-[720px] text-center">
            <FadeIn>
              <span
                className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                style={{ background: 'var(--m-accent-light)', color: 'var(--m-accent)' }}
              >
                Customer Onboarding
              </span>
              <h1
                className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
                style={{ color: 'var(--m-text)', lineHeight: '1.1' }}
              >
                Onboard new customers in 3 minutes, not 3 weeks
              </h1>
              <p
                className="mb-8 text-lg leading-relaxed"
                style={{ color: 'var(--m-text-secondary)' }}
              >
                Add an interactive challenge to your welcome email. Users learn your
                core features before they even open the app.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="#early-access"
                  className="rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02]"
                  style={{ background: 'var(--m-accent)' }}
                >
                  Get Started
                </Link>
                <Link
                  href="/play/notion"
                  className="rounded-lg border px-7 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02]"
                  style={{ color: 'var(--m-text)', borderColor: 'var(--m-border)' }}
                >
                  Try a live example
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROBLEM/SOLUTION - Alternating left-right blocks */}
      <section className="py-20 md:py-28" style={{ background: 'var(--m-bg)' }}>
        <div className="mx-auto max-w-[1200px] px-6">

          {/* Block 1: Problem - text left, visual right */}
          <FadeIn>
            <div className="mb-20 flex flex-col items-center gap-12 md:flex-row md:gap-16">
              <div className="flex-1">
                <span
                  className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--m-accent)' }}
                >
                  The Problem
                </span>
                <h2
                  className="mb-4 text-2xl font-bold md:text-3xl"
                  style={{ color: 'var(--m-text)' }}
                >
                  Your onboarding process is broken
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--m-text-secondary)' }}
                >
                  New customers sign up, skim your docs, miss your core features, and churn
                  within 90 days. Your CS team spends 10+ hours a week on repetitive onboarding
                  calls that cover the same basics every time.
                </p>
              </div>
              {/* Visual: CSS mockup of an email with a challenge link */}
              <div className="flex-1">
                <div
                  className="rounded-2xl border p-6 shadow-sm"
                  style={{ background: 'var(--m-bg)', borderColor: 'var(--m-border)' }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ background: '#EF4444' }} />
                    <div className="h-3 w-3 rounded-full" style={{ background: '#F59E0B' }} />
                    <div className="h-3 w-3 rounded-full" style={{ background: '#22C55E' }} />
                    <span className="ml-2 text-xs" style={{ color: 'var(--m-text-tertiary)' }}>
                      inbox
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-lg p-4" style={{ background: 'var(--m-bg-secondary)' }}>
                      <p className="text-xs font-medium" style={{ color: 'var(--m-text-tertiary)' }}>
                        From: your-app@company.com
                      </p>
                      <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--m-text)' }}>
                        Welcome! Learn [Product] in 3 minutes
                      </p>
                      <p className="mt-2 text-xs" style={{ color: 'var(--m-text-secondary)' }}>
                        Hey Sarah, before your first login, take this quick challenge
                        to get up to speed on the features that matter most...
                      </p>
                      <div
                        className="mt-3 inline-block rounded-lg px-4 py-2 text-xs font-semibold text-white"
                        style={{ background: 'var(--m-accent)' }}
                      >
                        Start the Challenge
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Block 2: Solution - visual left, text right */}
          <FadeIn>
            <div className="mb-20 flex flex-col items-center gap-12 md:flex-row-reverse md:gap-16">
              <div className="flex-1">
                <span
                  className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--m-accent)' }}
                >
                  The Solution
                </span>
                <h2
                  className="mb-4 text-2xl font-bold md:text-3xl"
                  style={{ color: 'var(--m-text)' }}
                >
                  Replace calls with interactive challenges
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--m-text-secondary)' }}
                >
                  Drop a "Learn [Product] in 3 minutes" link into your Day 1 welcome email.
                  Users play through 15 questions covering your core features. They learn by
                  doing, not by reading. At the end, you see exactly which features they
                  understood and which ones they missed.
                </p>
              </div>
              {/* Visual: CSS mockup of a scorecard */}
              <div className="flex-1">
                <div
                  className="rounded-2xl p-6 shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                  }}
                >
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-400">
                      Scorecard
                    </p>
                    <p className="mt-2 text-5xl font-extrabold" style={{ color: '#6366F1' }}>
                      72<span className="text-lg font-normal text-gray-400">/100</span>
                    </p>
                    <p className="mt-1 text-base font-semibold text-white">
                      The Quick Learner
                    </p>
                    <div className="mx-auto mt-4 max-w-[240px] space-y-2">
                      {[
                        { name: 'Core Features', pct: 90 },
                        { name: 'Workflows', pct: 45 },
                        { name: 'Integrations', pct: 70 },
                        { name: 'Advanced', pct: 35 },
                      ].map((skill) => (
                        <div key={skill.name} className="flex items-center gap-2">
                          <span className="w-20 text-right text-[10px] text-gray-400">
                            {skill.name}
                          </span>
                          <div
                            className="h-1.5 flex-1 overflow-hidden rounded-full"
                            style={{ background: 'rgba(255,255,255,0.1)' }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${skill.pct}%`,
                                background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-[10px] text-gray-500">
                      Focus area: Workflows needs attention
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* HOW IT WORKS - Steps with visual context */}
      <section className="py-20 md:py-28" style={{ background: 'var(--m-bg-secondary)' }}>
        <div className="mx-auto max-w-[800px] px-6">
          <FadeIn>
            <h2
              className="mb-12 text-center text-2xl font-bold md:text-3xl"
              style={{ color: 'var(--m-text)' }}
            >
              How CS teams use this
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {[
              { step: "1", title: "Setup (5 min)", desc: "Paste your docs URL. AI generates the challenge. Review and publish." },
              { step: "2", title: "Distribute", desc: "Add the link to your onboarding email sequence (Day 1, Day 7, Day 30)." },
              { step: "3", title: "Track", desc: "Dashboard shows completion rates, average scores, weakest features." },
              { step: "4", title: "Act", desc: "'Nobody understands Workflows' - create a targeted deep-dive, send to low scorers." },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div
                  className="flex gap-5 rounded-2xl border p-6 transition-shadow hover:shadow-md"
                  style={{ background: 'var(--m-bg)', borderColor: 'var(--m-border)' }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ background: 'var(--m-accent)' }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <p className="text-base font-semibold" style={{ color: 'var(--m-text)' }}>
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--m-text-secondary)' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE vs AFTER - Visual comparison */}
      <section className="py-20 md:py-28" style={{ background: 'var(--m-bg)' }}>
        <div className="mx-auto max-w-[800px] px-6">
          <FadeIn>
            <h2
              className="mb-8 text-center text-2xl font-bold md:text-3xl"
              style={{ color: 'var(--m-text)' }}
            >
              Before vs. After
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--m-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'var(--m-bg-secondary)' }}>
                    <th className="p-4 text-left font-semibold" style={{ color: 'var(--m-text-tertiary)' }}>
                      Before
                    </th>
                    <th className="p-4 text-left font-semibold" style={{ color: 'var(--m-accent)' }}>
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["45-min onboarding calls", "3-min self-serve challenge"],
                    ["\"Did you read the docs?\"", "\"You scored 72%. Here's what to review.\""],
                    ["No data on what users know", "Per-feature knowledge breakdown"],
                    ["Same walkthrough for every customer", "Automated, consistent, measurable"],
                  ].map(([before, after]) => (
                    <tr key={before} style={{ borderTop: '1px solid var(--m-border)' }}>
                      <td className="p-4" style={{ color: 'var(--m-text-secondary)' }}>{before}</td>
                      <td
                        className="p-4 font-medium"
                        style={{ color: 'var(--m-accent)', background: 'var(--m-accent-light)' }}
                      >
                        {after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection source="use-case-onboarding" />
    </>
  );
}
```

### Apply the same pattern to the other 3 use case pages:

**Community Engagement** (`use-cases/community/page.tsx`):
- Hero: "Give your community something to talk about"
- Visual mockup 1: A Slack channel mockup showing a challenge link being posted
  with reactions and replies. Build this with CSS divs styled like Slack messages.
- Visual mockup 2: A leaderboard showing usernames and scores
- Steps: Post in channel -> Users compete -> Scores shared -> Community grows

**Lead Generation** (`use-cases/marketing/page.tsx`):
- Hero: "Interactive content that actually converts"
- Visual mockup 1: A blog post mockup with an embedded challenge at the bottom
- Visual mockup 2: A lead capture form showing email + score data
- Steps: Embed on blog -> Visitors play -> Capture email -> Qualified lead

**Documentation** (`use-cases/documentation/page.tsx`):
- Hero: "Turn passive reading into active learning"
- Visual mockup 1: A docs page mockup with a "Test your knowledge" widget at the bottom
- Visual mockup 2: An analytics dashboard mockup showing which docs sections users struggle with
- Steps: Add widget to docs -> Users test themselves -> Track weak spots -> Update docs

For EACH use case page, the CSS mockups should be built entirely with HTML/CSS divs,
using the existing design system variables. NO image files needed.
These are purely illustrative UI mockups built with code.

---

## PRIORITY 5: PLAY PAGE REDESIGN - INTERACTIVE SPLIT LAYOUT

The current Play page is a grid of tiles. Nobody clicks tiles. Redesign it as an
interactive split-screen layout where users can browse AND play without leaving the page.

File: `src/app/(marketing)/play/page.tsx`

### New Layout: Left sidebar + Right embedded quiz

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QUIZ_LIST, CATEGORIES } from "@/lib/quiz-directory";
import { ExternalLink, Copy, Check } from "lucide-react";

export default function PlayDirectoryPage() {
  const [active, setActive] = useState("All");
  const [selectedQuiz, setSelectedQuiz] = useState(QUIZ_LIST[0]);
  const [copied, setCopied] = useState(false);

  const filtered =
    active === "All"
      ? QUIZ_LIST
      : QUIZ_LIST.filter((q) => q.category === active);

  const quizUrl = `https://howwellyouknow.com/play/${selectedQuiz.slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(quizUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen" style={{ background: 'var(--m-bg)' }}>
      <div className="mx-auto max-w-[1400px] px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="mb-2 text-3xl font-bold md:text-4xl"
            style={{ color: 'var(--m-text)' }}
          >
            Play a challenge
          </h1>
          <p className="text-base" style={{ color: 'var(--m-text-secondary)' }}>
            Pick a tool. 15 questions. 3 minutes. Get your skill profile.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="rounded-full px-4 py-2 text-sm font-medium transition-all"
              style={{
                background: active === cat ? 'var(--m-accent)' : 'var(--m-bg-secondary)',
                color: active === cat ? '#FFFFFF' : 'var(--m-text-secondary)',
                border: active === cat ? '1px solid var(--m-accent)' : '1px solid var(--m-border)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Split layout */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left: Scrollable list */}
          <div className="w-full lg:w-[340px] lg:shrink-0">
            <div
              className="flex flex-col gap-2 lg:max-h-[calc(100vh-220px)] lg:overflow-y-auto lg:pr-2"
            >
              {filtered.map((quiz) => (
                <button
                  key={quiz.slug}
                  onClick={() => setSelectedQuiz(quiz)}
                  className="flex items-center gap-3 rounded-xl border p-3 text-left transition-all"
                  style={{
                    background: selectedQuiz.slug === quiz.slug
                      ? 'var(--m-accent-light)'
                      : 'var(--m-bg)',
                    borderColor: selectedQuiz.slug === quiz.slug
                      ? 'var(--m-accent)'
                      : 'var(--m-border)',
                  }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: 'var(--m-bg-secondary)' }}>
                    <Image
                      src={`/logos/${quiz.logoFile}`}
                      alt={quiz.toolName}
                      width={24}
                      height={24}
                      className="rounded"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: selectedQuiz.slug === quiz.slug
                          ? 'var(--m-accent)'
                          : 'var(--m-text)',
                      }}
                    >
                      {quiz.toolName}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--m-text-tertiary)' }}>
                      15 questions - ~3 min
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Embedded quiz iframe */}
          <div className="flex-1">
            {/* URL bar + actions */}
            <div
              className="mb-4 flex items-center gap-3 rounded-xl border p-3"
              style={{ background: 'var(--m-bg-secondary)', borderColor: 'var(--m-border)' }}
            >
              <div
                className="flex-1 rounded-lg px-3 py-2 text-sm"
                style={{ background: 'var(--m-bg)', color: 'var(--m-text-secondary)', border: '1px solid var(--m-border)' }}
              >
                {quizUrl}
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-all hover:shadow-sm"
                style={{ borderColor: 'var(--m-border)', color: 'var(--m-text-secondary)' }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy URL"}
              </button>
              <Link
                href={`/play/${selectedQuiz.slug}`}
                target="_blank"
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-white transition-all hover:scale-[1.02]"
                style={{ background: 'var(--m-accent)' }}
              >
                <ExternalLink size={14} />
                Open Full
              </Link>
            </div>

            {/* Iframe */}
            <div
              className="overflow-hidden rounded-2xl border shadow-lg"
              style={{ borderColor: 'var(--m-border)' }}
            >
              <iframe
                key={selectedQuiz.slug}
                src={`/play/${selectedQuiz.slug}`}
                className="h-[600px] w-full lg:h-[calc(100vh-280px)]"
                style={{ border: 'none' }}
                title={`How well do you know ${selectedQuiz.toolName}?`}
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 rounded-2xl border p-8 text-center"
          style={{ background: 'var(--m-bg-secondary)', borderColor: 'var(--m-border)' }}
        >
          <h2 className="mb-2 text-xl font-bold md:text-2xl" style={{ color: 'var(--m-text)' }}>
            Want a challenge for YOUR product?
          </h2>
          <p className="mb-4 text-base" style={{ color: 'var(--m-text-secondary)' }}>
            We build interactive challenges for B2B SaaS teams.
          </p>
          <Link
            href="#early-access"
            className="inline-block rounded-lg px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
            style={{ background: 'var(--m-accent)' }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
```

Key features:
- **Left side**: Scrollable list of quiz tools (not a grid of tiles)
- **Right side**: Embedded iframe showing the actual quiz
- **URL bar**: Shows the quiz URL with a Copy button (demonstrates embed/share functionality)
- **Open Full**: Link to open the quiz in a new tab
- Clicking a different tool on the left instantly loads that quiz on the right
- On mobile, the left list collapses above the iframe

---

## PRIORITY 6: GLOBAL COMPONENT POLISH

### UseCaseCard improvements

File: `src/components/marketing/UseCaseCard.tsx`

- Icon container: `h-12 w-12 rounded-xl`
- Card: `rounded-2xl` not `rounded-xl`
- Title: `text-xl font-bold` not `text-lg font-semibold`
- Add left accent border on hover
- Card min-height for consistency

### Navbar

File: `src/components/marketing/Navbar.tsx`

- "Get Early Access" button text -> "Get Started"
- Button: add `shadow-sm`, `px-6 py-2.5`
- Logo: verify it's sharp. If blurry, increase to `width={180} height={32}`

### Footer

File: `src/components/marketing/Footer.tsx`

Fine as-is. Just verify the CTA links say "Get Started" not "Get Early Access".

---

## PRIORITY 7: FULL QA CHECKLIST

After ALL changes, go through this checklist:

### Homepage
- [ ] Hero content is visible immediately on page load (no FadeIn delay)
- [ ] Hero right side shows the live mini quiz in a browser frame
- [ ] Logo marquee is scrolling smoothly
- [ ] Stat numbers (12%, 50%+, 73%) are huge and have gradient text
- [ ] "From docs to interactive challenge" section has clean 4-column card grid (no overlapping)
- [ ] Dark comparison section has proper white text, no broken colors
- [ ] No mention of "Skilljar" anywhere
- [ ] No mention of "50% off", "founding members", "early access is half that"
- [ ] Pricing shows $99 and $199 (no strikethrough, no discount)
- [ ] CTA says "Get Started" not "Get Early Access"
- [ ] All FadeIn animations trigger properly (nothing invisible)
- [ ] Scroll through entire page - every section has generous whitespace

### Pricing Page
- [ ] Annual/monthly toggle works
- [ ] Annual shows ~17% discount
- [ ] Prices are $0 / $99 / $199 (monthly) or $0 / $83 / $166 (annual)
- [ ] No original/strikethrough prices shown
- [ ] FAQ accordion works

### Play Page
- [ ] Split layout: list on left, embedded quiz on right
- [ ] Clicking a different tool loads that quiz in the iframe
- [ ] Copy URL button works
- [ ] Open Full button opens in new tab
- [ ] On mobile: list above iframe, still functional

### Use Case Pages (all 4)
- [ ] Hero has gradient background with badge
- [ ] Alternating text/visual blocks (not walls of text)
- [ ] CSS mockups render correctly (email mockup, scorecard, etc.)
- [ ] Steps are in cards, not plain text
- [ ] Before vs After table has highlighted "After" column
- [ ] FadeIn animations work
- [ ] CTA at bottom

### All Pages
- [ ] No yellow accent color anywhere in UI (check CSS variables)
- [ ] If accent was changed to indigo, verify all buttons are readable (white text on indigo)
- [ ] All buttons say "Get Started" (not "Get Early Access")
- [ ] No em dashes in any copy
- [ ] Responsive: check at 375px, 768px, 1024px, 1440px widths
- [ ] No console errors
- [ ] No broken images
- [ ] All internal links work

---

## EXECUTION ORDER

1. Fix FadeIn bug (Priority 0) - takes 5 min, critical
2. Update pricing (Priority 1) - straightforward find/replace
3. Remove Skilljar (Priority 2) - quick search/replace
4. Homepage redesign (Priority 3) - biggest change, do section by section
5. Use case pages (Priority 4) - template one, then adapt 3 more
6. Play page (Priority 5) - new layout with iframe
7. Component polish (Priority 6) - quick tweaks
8. Full QA (Priority 7) - test everything

## RULES
- Do NOT use em dashes in any text
- Do NOT add new npm dependencies
- Do NOT change the quiz game pages (src/app/play/[slug]/page.tsx and src/components/quiz/*)
- Do NOT change routing structure
- Keep the existing CSS variable system
- Test on mobile after each major change
- If ANY section looks broken after a change, fix it before moving on
