# How Well You Know - Complete Website Specification

*Everything needed to design and build howwellyouknow.com. Sitemap, content, design system, pricing, CTAs, legal pages, dashboard mockup, and AI coding agent prompt.*

*Created: March 8, 2026*

---

## TABLE OF CONTENTS

1. Sitemap & Page Hierarchy
2. Navigation Structure
3. Design System
4. Pricing Plans (Detailed)
5. Homepage (/)
6. Play Directory (/play)
7. How It Works (/how-it-works)
8. Use Cases (/use-cases + 4 sub-pages)
9. Pricing Page (/pricing)
10. About (/about)
11. Contact (/contact)
12. Privacy Policy (/privacy)
13. Terms of Service (/terms)
14. Dashboard Mockup Spec
15. SEO & Meta Tags Per Page
16. Pencil.dev Wireframe Prompt
17. Master Prompt for AI Coding Agent

---

## 1. Sitemap & Page Hierarchy

```
howwellyouknow.com/
|
+-- / ............................ Homepage (conversion-focused landing page)
|
+-- /play ........................ Games Directory (grid of all 25 quizzes)
|   +-- /play/chatgpt ........... Individual quiz page (already built)
|   +-- /play/cursor ............ Individual quiz page (already built)
|   +-- /play/[slug] ............ (25 quizzes total, all built)
|   +-- /play/[slug]/results .... Results page per quiz (already built)
|
+-- /how-it-works ............... Product explainer (the "product page")
|
+-- /use-cases .................. Use case overview (4 cards linking to sub-pages)
|   +-- /use-cases/onboarding ... Customer onboarding deep-dive
|   +-- /use-cases/community .... Community engagement deep-dive
|   +-- /use-cases/marketing .... Lead generation deep-dive
|   +-- /use-cases/documentation  Documentation enhancement deep-dive
|
+-- /pricing .................... Pricing page with comparison table + FAQ
|
+-- /about ...................... Company story, mission, founder
|
+-- /contact .................... Contact form + email + social links
|
+-- /privacy .................... Privacy Policy
|
+-- /terms ...................... Terms of Service
|
+-- /brand ...................... Brand guidelines (already exists)
```

**Total new pages to build: 12** (Homepage, Play directory, How It Works, Use Cases overview + 4 sub-pages, Pricing, About, Contact, Privacy, Terms)

**Already built: 50+ pages** (25 quiz pages + 25 results pages + brand pages)

### Why These Pages and Not More

- **No blog yet.** Blog is a Phase 3 content marketing play. Right now you need a conversion site, not a content site. Adding a blog with zero posts looks worse than no blog at all.
- **No login/signup page.** No auth yet. Early access goes to email capture.
- **No docs/help center.** No self-serve customers yet. Support is personal email.
- **No changelog.** Save for when you have a product people use regularly.
- **No careers page.** Solo founder. Not hiring.

---

## 2. Navigation Structure

### Top Navigation (Desktop)

```
[Logo: How Well You Know]     Play    How It Works    Use Cases    Pricing    [Get Early Access - button]
```

- **Logo** links to /
- **Play** links to /play
- **How It Works** links to /how-it-works
- **Use Cases** opens a dropdown with 4 items: Customer Onboarding, Community Engagement, Lead Generation, Documentation
- **Pricing** links to /pricing
- **Get Early Access** is the primary CTA button (accent color, filled). Links to /pricing#early-access

5 nav items + 1 CTA button. Clean. No clutter.

### Top Navigation (Mobile)

```
[Logo]                                    [hamburger menu]
```

Hamburger opens a full-screen overlay with all nav items + CTA button.

### Footer

```
Product                    Use Cases                 Company               Legal
--------                   ---------                 -------               -----
Play Quizzes               Customer Onboarding       About                 Privacy Policy
How It Works               Community Engagement      Contact               Terms of Service
Pricing                    Lead Generation            Brand Guidelines
                           Documentation

[Logo]
"Interactive product challenges for B2B SaaS teams."

[Twitter/X icon]  [LinkedIn icon]  [Email icon]

(c) 2026 How Well You Know. All rights reserved.
```

### CTA Strategy Across the Site

| Page | Primary CTA | Secondary CTA |
|------|-------------|---------------|
| Homepage | "Get Early Access" (email capture) | "Play a Quiz" (links to /play) |
| Play Directory | "Play Now" per quiz card | "Want this for your product?" (links to /pricing) |
| How It Works | "Get Early Access" | "See it in action" (links to /play) |
| Use Cases (each) | "Get Early Access" | "Try a live example" (links to relevant quiz) |
| Pricing | "Get Early Access" per tier | "Play a free quiz" |
| About | "Get Early Access" | None |
| Contact | "Send Message" (form submit) | None |

**One consistent primary CTA across the whole site: "Get Early Access."** Every page drives toward it.

---

## 3. Design System

### The Vibe

Clean, white, modern SaaS. Think Linear, Vercel, Cal.com, Resend. Not playful or colorful. The quizzes themselves are colorful and branded per tool. The marketing site should feel like the serious platform behind those quizzes.

**Reference sites to study:**
- **Linear.app** -- Clean, sharp typography, minimal
- **Cal.com** -- Open source SaaS, clean pricing page, modern layout
- **Resend.com** -- Developer-focused, clean white, great spacing
- **Senja.io** -- Testimonial SaaS, great homepage flow, clean pricing
- **Dub.co** -- Link management SaaS, beautiful minimal design

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#FFFFFF` | Page background |
| `--bg-secondary` | `#F8FAFC` | Alternating sections, card backgrounds |
| `--bg-tertiary` | `#F1F5F9` | Subtle backgrounds, hover states |
| `--text-primary` | `#0F172A` | Headlines, body text |
| `--text-secondary` | `#475569` | Subheadings, descriptions |
| `--text-tertiary` | `#94A3B8` | Captions, labels, metadata |
| `--accent` | `#6366F1` | CTAs, links, highlights (Indigo 500) |
| `--accent-hover` | `#4F46E5` | Button hover state (Indigo 600) |
| `--accent-light` | `#EEF2FF` | Accent backgrounds, tags (Indigo 50) |
| `--border` | `#E2E8F0` | Card borders, dividers |
| `--border-subtle` | `#F1F5F9` | Very subtle borders |

Why indigo? It sits between blue (trust, SaaS) and purple (creativity, AI). Different from the typical blue every B2B tool uses. Stands out without being weird.

### Typography

| Element | Font | Weight | Size (desktop / mobile) |
|---------|------|--------|------------------------|
| H1 (page titles) | Inter | 700 (Bold) | 48px / 32px |
| H2 (section titles) | Inter | 600 (Semibold) | 36px / 28px |
| H3 (card titles) | Inter | 600 (Semibold) | 24px / 20px |
| Body | Inter | 400 (Regular) | 18px / 16px |
| Small / Labels | Inter | 500 (Medium) | 14px / 14px |
| Buttons | Inter | 600 (Semibold) | 16px / 16px |

Why Inter? Most widely used SaaS font. Linear, Vercel, Cal.com, Resend all use it. Your quiz engine uses various fonts per brand, but the marketing site should feel unified and professional.

### Spacing

- Section padding: 80px vertical desktop, 48px mobile
- Content max-width: 1200px, centered
- Card padding: 24px-32px
- Element gap: 16px-24px
- Between sections: 80px-120px desktop

### Components

**Buttons:**
- Primary: Indigo filled, white text, 12px horizontal padding, 48px height, rounded-lg (8px)
- Secondary: White with border, dark text, same dimensions
- Ghost: No border, text-only with hover underline

**Cards:**
- White background, 1px border (#E2E8F0), rounded-xl (12px), subtle shadow on hover
- No heavy shadows. Modern SaaS cards are flat with thin borders.

**Badges/Tags:**
- Small pill shapes, accent-light background, accent text, rounded-full

### Animations

- Subtle fade-in on scroll (IntersectionObserver, not heavy libraries)
- Button hover: slight scale (1.02) + color shift
- Card hover: subtle shadow increase + slight lift (translateY -2px)
- No parallax, no auto-playing videos, no heavy animations. Speed matters more.

---

## 4. Pricing Plans (Detailed)

### The Three Tiers

| | Free | Pro ($49/mo) | Business ($149/mo) |
|---|---|---|---|
| **Tagline** | "See what it's like" | "For growing teams" | "For serious CS teams" |
| **Challenges** | 1 | 5 | Unlimited |
| **Cards per challenge** | 10 | 25 | 25 |
| **Challenge types** | All 5 types | All 5 types | All 5 types |
| **Scoring & scorecard** | Yes | Yes | Yes |
| **Shareable results** | Yes | Yes | Yes |
| **"Powered by" badge** | Always shown | Removable | Removable |
| **Custom branding** | No (HWYK branding) | Logo + accent color | Full brand kit (colors, fonts, logo) |
| **Hosted page** | Community link only | howwellyouknow.com/play/you | howwellyouknow.com/play/you |
| **Embed code (iframe)** | No | No | Yes |
| **Player analytics** | Play count only | Plays, avg score, completion rate | Full: per-question breakdown, knowledge gaps, dimension heatmap |
| **Lead capture** | No | No | Yes (collect player emails) |
| **AI content generation** | No | "Paste URL" auto-generate | "Paste URL" auto-generate + custom prompts |
| **Email support** | Community only | Email, 48hr response | Priority email, 24hr response |
| **Team seats** | 1 | 3 | 10 |
| **Export data** | No | CSV export | CSV + API access |
| **Custom domain** | No | No | No (Enterprise add-on) |

### Enterprise ($499/mo, by request only)

Not shown as a full column. Shown as a line below the pricing table:

> "Need SSO, custom domains, API access, or a dedicated account manager? Talk to us about Enterprise." [Contact Sales]

### Early Access Pricing

Founding members get 50% off for life:
- Pro: **$25/mo** (instead of $49)
- Business: **$75/mo** (instead of $149)

This is the hook. "Get Early Access" means "lock in half price before we launch publicly."

### Why This Structure

1. **Free tier = growth loop.** Free users create quizzes with "Powered by" badges. Their players see the badge, visit the site, some convert. This is how Senja, testimonial.to, and Tally.so grew.
2. **Pro = entry point.** $49/mo is low enough that a Head of CS can expense without approval. 5 challenges is enough for a real onboarding program.
3. **Business = money maker.** $149/mo is where embed, lead capture, and full analytics live. These features make it sticky for serious CS teams.
4. **Three tiers max.** Research consistently shows 3 tiers convert better than 4. The middle tier (Pro) should be highlighted as "Most Popular."

---

## 5. Homepage (/)

The homepage has one job: convert visitors into early access signups. Every section moves them closer to that action.

### Section 1: Hero

**Layout:** Left-aligned text, right side shows a visual (scorecard mockup or animated quiz card preview). White background.

**Headline:**
```
Your users don't read your docs.
Make them play instead.
```

**Subheadline:**
```
Over half of SaaS customers churn because they never really learned the product.
We turn your documentation into 3-minute interactive challenges that actually stick.
Your users learn. You see exactly where they get confused.
```

**CTA buttons:**
```
[Get Early Access - 50% off]     [Play a live example ->]
```

- Primary button links to #early-access (pricing section lower on page)
- Secondary button links to /play/chatgpt (a specific quiz, not the directory, so they immediately experience the product rather than browse a list)

**Below buttons, small social proof line:**
```
25 interactive challenges live  ·  Covering ChatGPT, Figma, Notion, and 22 more products
```

**Right side visual:** A real scorecard screenshot (use the ChatGPT or Figma scorecard). Show the radar chart, the archetype title, the score. This is more compelling than a quiz card mockup because it shows the OUTPUT, the thing that gets shared. Add a subtle floating animation (gentle up-down bob). Rotate between 2-3 different tool scorecards with a crossfade every 4 seconds.

**Why a scorecard instead of a quiz card:** Visitors land cold. A quiz card shows a question they don't care about. A scorecard shows the end result: a beautiful branded radar chart, a fun archetype title, share buttons. It sparks curiosity ("I want to see MY score") and shows the sharing mechanic that makes this a growth engine.

### Section 2: Logo Bar (Scrolling Marquee)

**Layout:** Full-width, light gray background (#F8FAFC). Centered. Infinite horizontal scroll animation (CSS marquee, not a carousel library).

**Copy above the logos:**
```
Interactive challenges covering 25 products and counting
```

Show ALL 25 tool logos in a continuously scrolling marquee. Logos should be grayscale by default, with a subtle color-on-hover effect. Desktop: single row, smooth infinite scroll. Mobile: same, slightly faster.

Logos to include (in this order, mixing categories for visual variety):
ChatGPT, Figma, Cursor, Notion, Vercel, Slack, HubSpot, Claude Code, Postman, Linear, Docker, Canva, Zapier, Perplexity, Obsidian, Windsurf, GitHub Copilot, Loom, Airtable, Gemini, Midjourney, Replit, Bolt.new, Lovable, Emergent

Use actual tool logos from `/public/logos/`.

**Why this works:** This is NOT a "trusted by" bar. You are not claiming these companies are customers. The copy says "challenges covering 25 products." That's factually true. But visually, a scrolling logo bar triggers the same trust signal in a visitor's brain as a customer logo bar does. Every SaaS company from Stripe to Linear uses this pattern. When a visitor sees ChatGPT, Figma, Notion logos scrolling past, they think "this platform works with serious products." That's the feeling you want.

**If anyone asks:** "We've built interactive challenges about these products. Companies can use our platform to create similar challenges for their own product." 100% true.

### Section 3: The Problem (Pain Before Solution)

**Layout:** White background. Three stat blocks in a row (desktop) or stacked (mobile). Each block has a large stat number, a bold title, and 2-3 lines of body copy.

**Heading:**
```
The onboarding problem nobody talks about
```

**Stat Block 1:**
```
12%
That's how many people finish reading your docs.

Your team spent months writing documentation. Your users skim the first
paragraph and close the tab. Features sit unused. Support tickets pile up
asking questions your docs already answer.
```

**Stat Block 2:**
```
50%+
SaaS customers who churn never understood the product.

Live onboarding calls eat 10+ hours a week from your CS team. Webinars
get 15% attendance. Tutorial videos average 6 minutes watched out of 20.
None of it is measurable.
```

**Stat Block 3:**
```
73%
Completion rate on interactive micro-learning.

When learning feels like a game, people finish it. 15 questions,
3 minutes, a shareable scorecard at the end. Your users actually learn
your product, and you get data on exactly what they missed.
```

These stat blocks replace the old "Social Proof / Numbers" section (which showed feature counts like "5 challenge types"). Pain-driven stats are more persuasive than product feature counts.

### Section 4: Mini Demo (Interactive)

**Layout:** Centered, contained in an elevated card on light gray background (#F8FAFC). This is the "try before you buy" moment.

**Heading:**
```
See what it feels like. Takes 30 seconds.
```

**Subheading:**
```
This is exactly what your customers would experience.
Pick a tool. Answer 3 questions. See your mini score.
```

**UX Flow (be specific for the coding agent):**

1. Show 4 tool logo pills in a row: ChatGPT, Figma, Notion, Cursor. Each pill is the tool logo + name. Unselected = gray border. Selected = accent border + light accent background.
2. User taps a pill. Below it, a card area animates in (fade + slide up).
3. Card 1: Truth or Myth question from that tool's quiz config. Statement + two buttons (Truth / Myth). User taps one. Correct = green flash + "Correct!" Incorrect = red flash + correct answer shown. Auto-advance after 1.5 seconds.
4. Card 2: This or That question. Same pattern.
5. Card 3: Quick Pick question (4 options). Same pattern.
6. After card 3: Results card slides in. Shows "You got X/3" with a small progress ring. Below it:

```
That was 30 seconds. The full experience is 3 minutes,
15 questions, and a detailed skill profile.

[Play the full challenge ->]     [Get this for your product ->]
```

- "Play the full challenge" links to /play/[selected-tool-slug]
- "Get this for your product" links to #early-access

Pull the 3 questions directly from the corresponding quiz config file (e.g., import challenges[0], challenges[4], challenges[7] from src/quizzes/chatgpt.tsx). This way the demo uses real content, not placeholder questions.

**Why a mini demo and not a video or URL input:**
- No dashboard to record a Loom of yet. Video is passive. People skip it.
- A "paste URL" input promises something you can't deliver yet (Wizard of Oz behind the scenes). Broken or fake flows kill trust.
- A 3-card inline demo is real, interactive, takes 30 seconds. The visitor literally experiences the product format. This converts better than any screenshot or video.

### Section 5: How It Works

**Layout:** White background. 4 steps in a horizontal row (desktop) or vertical stack (mobile). Each step has a numbered circle, icon, title, and one-line description. Connect steps with a subtle dotted line or arrow.

**Heading:**
```
From docs to interactive challenge in minutes
```

| Step | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | Link icon | Paste your docs URL | Drop in any documentation page, help article, or product page. Our AI reads it and pulls out the key concepts. |
| 2 | Sparkle icon | AI builds the challenge | 15 questions across 6 rounds. Truth or Myth, This or That, Speed Round, and more. Review and edit before publishing. |
| 3 | Share icon | Share or embed anywhere | Get a hosted link for emails and Slack, or embed directly in your docs site and onboarding flow. |
| 4 | Chart icon | See what they learned | Track scores, completion rates, and exactly which product features your users struggle with. Act on the data. |

**Below the 4 steps, show a dashboard mockup screenshot.** (See Section 14 for the mockup spec.) Frame it in a subtle browser chrome. Add a caption: "See which features your users struggle with."

### Section 6: Use Cases (4 Cards)

**Layout:** White background. 4 cards in a 2x2 grid.

**Heading:**
```
Built for the teams that own customer success
```

**Card 1: Customer Onboarding**
- Icon: Graduation cap
- Title: Customer Onboarding
- Body: Add a "Learn [Product] in 3 minutes" link to your welcome email sequence. New users finish onboarding before they open your app.
- Link: Learn more -> /use-cases/onboarding

**Card 2: Community Engagement**
- Icon: Users/group icon
- Title: Community Engagement
- Body: Drop a "How well do you know [Product]?" challenge in Slack or Discord. Watch your community light up with shared scores and friendly competition.
- Link: Learn more -> /use-cases/community

**Card 3: Lead Generation**
- Icon: Magnet icon
- Title: Lead Generation
- Body: Embed an interactive challenge on your blog or landing page. Visitors play, learn, and convert into leads who already understand your product.
- Link: Learn more -> /use-cases/marketing

**Card 4: Documentation**
- Icon: Book icon
- Title: Documentation Enhancement
- Body: Add "Test your knowledge" at the end of any docs section. Turn passive reading into active learning with instant feedback.
- Link: Learn more -> /use-cases/documentation

### Section 7: What Makes This Different

**Layout:** Light gray background (#F8FAFC). Comparison table with HWYK column highlighted in accent.

**Heading:**
```
Not a quiz tool. Not an LMS. Something new.
```

**Subheading:**
```
Skilljar costs $10,000/year and takes months to set up.
We deliver 80% of that value for $49/mo, ready in minutes.
```

| | Docs/Wiki | Videos | Webinars | LMS (Skilljar) | **How Well You Know** |
|---|---|---|---|---|---|
| Setup time | Weeks | Days | Hours (recurring) | Months | **Minutes** |
| Completion rate | ~12% | ~30% | ~15% | ~40% | **73%+** |
| Teaches AND tests | No | No | Sometimes | Yes | **Yes** |
| Per-feature analytics | No | No | No | Basic | **Detailed** |
| Works in emails, docs, Slack | Partially | No | No | No | **Yes** |
| Price | Free (internal time) | Free (internal time) | Free (internal time) | $10K+/year | **$49-149/mo** |

Highlight the HWYK column with a subtle accent background. Make the column header bold with a small badge: "You are here."

*Note: Once you have real customer stories, replace this table with a before/after case study. "Company X reduced onboarding calls by 40% in 3 weeks." A single real testimonial beats any comparison table.*

### Section 8: Pricing Teaser

**Layout:** White background. NOT a full pricing table (that's on /pricing). Just a compact teaser that communicates the price point and the early access deal.

**Heading:**
```
Starts at $49/mo. Early access is half that.
```

**Layout:** Three small cards in a row, minimal, showing just the tier name and price:

```
Free                    Pro $49/mo               Business $149/mo
1 challenge             5 challenges              Unlimited
Powered by badge        Custom branding           Full analytics + embed
[Start Free]            [Most Popular]            [For serious teams]
```

**Below the cards, the hook:**
```
Founding members lock in 50% off for life. $25/mo for Pro. $75/mo for Business.
We're only opening this to a small group.
[See full pricing ->] (links to /pricing)
```

Why a teaser and not the full pricing table? The homepage is already long. Repeating the full /pricing page here adds scroll depth without adding conversion power. The visitor who needs to compare features in detail will click through to /pricing. The visitor who just needs to know the price range gets it from this compact section.

### Section 9: Early Access CTA (The Conversion Point)

**Layout:** White background, centered, clean. This is where the email form lives. Anchor: #early-access

**Heading:**
```
Get early access. Lock in 50% off.
```

**Subheading:**
```
We're opening up the platform to a small group of founding members.
You'll get to create challenges for your own product, full analytics,
and priority support. Founding members pay half price. Forever.
```

**Form:**
```
[Work email address]  [Get Early Access]
```

**Below the form:**
```
100% free to try. No credit card required. Unsubscribe anytime.
```

What happens after submission: Email goes to Google Sheets (same system already built). You reply personally within 24 hours with a Calendly link for a 15-min call.

### Section 10: Footer

Standard footer as defined in the navigation section above.

---

## 6. Play Directory (/play)

This page shows all 25 quizzes in a browsable grid. It already exists conceptually (users access quizzes via direct links), but needs a proper directory page.

### Hero

```
Heading: Play a challenge
Subheading: Pick a tool. 15 questions. 3 minutes. Get your skill profile.
```

### Filter Bar (optional, nice-to-have)

```
All    AI Tools    Dev Tools    Design    Productivity    Marketing
```

**Categories:**

| Category | Tools |
|----------|-------|
| AI Tools | ChatGPT, Claude Code, Gemini, Perplexity, Midjourney |
| Dev Tools | Cursor, Windsurf, GitHub Copilot, Vercel, Postman, Docker, Replit, Bolt.new, Lovable |
| Design | Figma, Canva |
| Productivity | Notion, Slack, Loom, Obsidian, Airtable, Zapier, Linear |
| Marketing | HubSpot, Emergent |

### Quiz Card Layout

Cards in a 3-column grid (desktop) or 1-column (mobile). Each card:

```
+---------------------------+
|  [Tool Logo]              |
|                           |
|  How ChatGPT Are You?     |
|  15 questions · ~3 min    |
|                           |
|  [Play Now ->]            |
+---------------------------+
```

- White card with thin border
- Tool logo at top (from /public/logos/)
- Title format: "How [Tool] Are You?"
- Metadata: "15 questions · ~3 min"
- Play button links to /play/[slug]

### Bottom CTA

```
Want a challenge for YOUR product?
We build interactive challenges for B2B SaaS teams.
[Get Early Access ->]
```

---

## 7. How It Works (/how-it-works)

This is the "product page." It explains what the product does, how it works, and what makes it different. For visitors who want more detail before signing up.

### Section 1: Hero

```
Heading: Turn your docs into a 3-minute challenge
Subheading: Your users learn your product through interactive rounds, scored
questions, and shareable scorecards. You get analytics on exactly what they
know and what they missed.
```

### Section 2: The 5 Challenge Types

Show each type with a visual card mockup and description.

**Heading:**
```
5 ways to test product knowledge
```

**Truth or Myth**
A bold claim about your product. Is it real or made up? Tests whether users know your product's actual capabilities. Visual: card with a statement + "Truth" / "Myth" buttons.

**This or That**
"To do X, would you use Feature A or Feature B?" Tests whether users know which feature solves which problem. Visual: card with scenario + two feature options.

**Quick Pick**
Name that feature. Identify the right tool for the job. Classic knowledge check with a twist. Visual: card with question + 4 answer options.

**Odd One Out**
Three real features and one fake. Can your users spot the impostor? Tests depth of product familiarity. Visual: card with 4 items, one highlighted as wrong.

**Speed Round**
8 seconds per question. Tests recall under pressure. This is where the game feeling kicks in. Visual: card with timer bar + quick question.

### Section 3: The Experience Flow

**Heading:**
```
What your users see
```

Horizontal timeline or step diagram:

1. **Welcome** - Tool branding, round count, estimated time. One tap to start.
2. **6 rounds** - Each round has a different challenge format. Difficulty escalates.
3. **Scorecard** - Overall score, archetype title, radar chart across 7 skill dimensions, share buttons.

### Section 4: The Scorecard

**Heading:**
```
Shareable proof of product knowledge
```

Show a real scorecard screenshot (ChatGPT or Figma). Annotate it with callouts:

- **Score:** 0-100 overall rating
- **Archetype:** Fun, shareable title based on score range ("The Power User," "The Curious Explorer")
- **Radar chart:** 7 dimensions showing strengths and weaknesses
- **Dimension bars:** Individual scores per knowledge area
- **Share buttons:** Pre-filled text for X and LinkedIn
- **Download:** PNG image optimized for social media

```
Every scorecard doubles as free marketing.
When users share their results, their network discovers your product.
```

### Section 5: What You Get as a Business

**Heading:**
```
Built for customer success teams
```

| Feature | Description |
|---------|-------------|
| AI-generated content | Paste a docs URL. Our AI reads it and generates 15 questions across 6 rounds. You review and publish. |
| Per-question analytics | See which questions users get wrong most often. That tells you which features need better education. |
| Completion tracking | Know how many users start vs. finish. Track drop-off points. |
| Knowledge gap reports | "68% of your users don't understand Feature X." Actionable data for your CS team. |
| Branded experience | Your logo, your colors, your fonts. It looks like you built it. |
| Embed anywhere | Hosted page, iframe embed, or link in emails. Works in onboarding sequences, help centers, community channels. |

### Section 6: CTA

```
Ready to see what your customers don't know about your product?
[Get Early Access - 50% off]
```

---

## 8. Use Cases (/use-cases)

### Overview Page (/use-cases)

**Hero:**
```
Heading: One product, four ways to use it
Subheading: Customer onboarding, community engagement, lead generation, or
documentation. Pick the use case that matters most to your team.
```

4 cards (same as homepage Section 6), each linking to a dedicated sub-page.

---

### /use-cases/onboarding

**Hero:**
```
Heading: Onboard new customers in 3 minutes, not 3 weeks
Subheading: Add an interactive challenge to your welcome email. Users learn your
core features before they even open the app.
```

**The problem:**

New customers sign up, skim your docs, don't understand your product, and churn within 90 days. Your CS team spends 10+ hours a week on repetitive onboarding calls that cover the same basics every time.

**The solution:**

Drop a "Learn [Product] in 3 minutes" link into your Day 1 welcome email. New users play through 15 questions covering your core features. They learn by doing, not by reading. At the end, you see exactly which features they understood and which ones they missed.

**How CS teams actually use this:**

1. **Setup (5 min):** Paste your docs URL. AI generates the challenge. Review and publish.
2. **Distribute:** Add the link to your onboarding email sequence (Day 1, Day 7, Day 30).
3. **Track:** Dashboard shows completion rates, average scores, weakest features.
4. **Act:** "Nobody understands Workflows" -> create a targeted deep-dive -> send to low scorers.

**Before vs. After:**

| Before | After |
|--------|-------|
| 45-min onboarding calls | 3-min self-serve challenge |
| "Did you read the docs?" | "You scored 72%. Here's what to review." |
| No data on what users know | Per-feature knowledge breakdown |
| Same walkthrough for every customer | Automated, consistent, measurable |

**CTA:**
```
Stop repeating yourself. Start measuring what your customers actually know.
[Get Early Access]    [Try a live example -> /play/notion]
```

---

### /use-cases/community

**Hero:**
```
Heading: Give your community something to talk about
Subheading: "How well do you know [Product]?" is the post your Slack channel,
Discord, or subreddit has been waiting for.
```

**The problem:**

Community channels go quiet. Engagement posts get stale. "Share your setup" and "What's your favorite feature?" only work so many times.

**The solution:**

Post an interactive challenge. Users compete for high scores, share their results, debate answers, and tag friends to beat their score. It's content that creates conversations on its own.

**What this looks like in practice:**

- **Slack:** "#general: Friday challenge! How well do you know [Product]? My score: 78%. Beat me."
- **Discord:** Pin a challenge in #welcome. New members play it to learn the product.
- **Reddit/X:** "Nobody has scored above 90% yet. Prove us wrong." (Drives traffic AND engagement)
- **Newsletter:** "This week's challenge: Power Features edition. Average score: 62%."

**CTA:**
```
Turn your community from passive to competitive.
[Get Early Access]    [Try a live example -> /play/slack]
```

---

### /use-cases/marketing

**Hero:**
```
Heading: Interactive content that actually converts
Subheading: Embed a product challenge on your blog or landing page. Visitors play,
learn, and convert into leads who already understand your product.
```

**The problem:**

Blog posts get traffic but don't convert. Gated PDFs feel outdated. Webinar signups drop off before the event. Your marketing team needs interactive content that captures attention AND generates leads.

**The solution:**

Embed an interactive challenge at the end of a blog post or on a landing page. Readers play through 15 questions about your product. At the end, they submit their email to see detailed results. You get a lead who already understands your product.

**Why this works:**

- Interactive content gets 2x more engagement than static content (DemandGen Report)
- Players spend 3+ minutes actively thinking about your product features
- The scorecard creates a natural share moment (free distribution)
- Email capture happens AFTER engagement, not before. Higher quality leads.

**CTA:**
```
Turn your content into a lead generation engine.
[Get Early Access]    [Try a live example -> /play/hubspot]
```

---

### /use-cases/documentation

**Hero:**
```
Heading: Find out if your docs actually work
Subheading: Add a "How well did you understand this?" challenge at the end of any
docs section. Turn passive reading into active learning.
```

**The problem:**

You write great documentation. Nobody reads it to the end. Even the users who do can't remember what they learned 10 minutes later. There's no way to know if your docs are actually teaching anything.

**The solution:**

Add an iframe embed or link at the end of any docs section. Users take a quick challenge on what they just read. They get instant feedback on what they understood. You get data on which sections are confusing.

**The data angle:**

If 80% of users get Question 7 wrong, that tells you something specific: the section on Workflows needs rewriting. No survey, no feedback form, no guessing. Direct signal from user behavior.

**CTA:**
```
Find out if your docs are actually working.
[Get Early Access]    [Try a live example -> /play/docker]
```

---

## 9. Pricing Page (/pricing)

### Hero

```
Heading: Simple pricing that grows with you
Subheading: Start free. Upgrade when your team needs analytics, branding, and lead capture.
```

### Pricing Table

3 cards side by side. Pro highlighted with "Most Popular" badge. Use exact tier details from Section 4.

Each card format:
```
[Tier name]
[Price] /month
[Tagline]
---
Feature list (checkmarks)
---
[CTA button]
```

CTAs per tier:
- Free: "Start Free"
- Pro: "Get Early Access - $25/mo" (show $49 crossed out)
- Business: "Get Early Access - $75/mo" (show $149 crossed out)

### Early Access Banner

Between pricing table and FAQ:

```
Early access pricing: 50% off for life

We're opening up to a small group of founding members.
Lock in half price before we launch publicly. Limited spots.

[Work email]  [Get Early Access]

No credit card required. You'll get a personal onboarding
call and we'll build your first challenge together.
```

### FAQ Section

**Q: Can I try it before I pay?**
Yes. The Free plan gives you 1 challenge with 10 cards. Play any of our 25 live quizzes to see the full experience. No signup required.

**Q: What happens when I sign up for early access?**
You'll get a personal email from our team within 24 hours. We'll hop on a quick call to understand your use case, then build your first challenge together. Early access members get white-glove onboarding.

**Q: How does AI content generation work?**
Paste a URL to your documentation. Our AI reads it and generates 15 questions across 6 different challenge formats. You review, edit, and publish. Most challenges are ready in under 10 minutes.

**Q: Can I embed challenges on my website?**
Yes. Business plan members get an iframe embed code that works on any website, docs site, or help center. Takes about 2 minutes to set up.

**Q: What analytics do I get?**
Free plan shows play count. Pro shows completion rate, average score, and score distribution. Business shows per-question breakdown, knowledge gap reports, and player-level data.

**Q: Can I remove the "Powered by" badge?**
Yes, on Pro and Business plans.

**Q: Do you offer annual billing?**
Not yet. We'll introduce annual plans with a discount once we launch publicly.

**Q: What if I need SSO, custom domains, or API access?**
Contact us about Enterprise pricing. We'll build a custom plan for teams that need advanced features.

---

## 10. About (/about)

### Hero

```
Heading: We're building the fastest way to teach product knowledge
```

### Body Copy

How Well You Know started with an experiment. We built an interactive challenge about Claude Code and posted it in a developer community. 380 people played it in the first week.

Not a huge number. But think about what it means: people voluntarily spent 3 minutes learning about a developer tool through a game. Nobody made them. They chose to. Compare that to the average docs page, where only 12% of readers make it to the end.

That gap is what we're building for. B2B software companies spend months writing documentation that nobody finishes. Enterprise education tools like Skilljar cost $10,000+ per year and take months to deploy. On the other end, there's nothing. Just docs, videos, and webinars.

We fill that gap. Paste a docs URL, get an interactive challenge in minutes. Your users learn through 5 different question formats across 6 rounds. They get a shareable scorecard. You get data on exactly which features they understand and which they don't.

Since that first experiment, we've built 25 interactive challenges covering tools like ChatGPT, Figma, Notion, Cursor, Slack, Docker, and more. We're now opening the platform so any B2B SaaS team can create challenges for their own product.

We're building this for customer success teams, DevRel teams, and anyone who's tired of hearing "I didn't know your product could do that" from users who've been paying for months.

### The Founder

```
Krishna Goyal
Builder. Previously created TrackMCP (trackmcp.com), the world's largest MCP
marketplace with 14,800+ tools indexed. Obsessed with making complex products
easier to learn. Based in the Bay Area.

[LinkedIn icon]  [X/Twitter icon]
```

### CTA

```
We're looking for 10 founding design partners to shape the product.
You'll get early access, 50% off for life, and a direct line to the founder.
[Get Early Access]
```

---

## 11. Contact (/contact)

### Layout

Simple, clean. Left side has contact info, right side has a form.

### Heading

```
Let's talk
```

### Subheading

```
Questions about the product, partnership ideas, or just want to say hi.
We read every message and reply within 24 hours.
```

### Left Column

```
Email: hello@howwellyouknow.com
Twitter/X: @howwellyouknow
LinkedIn: /company/howwellyouknow
```

### Right Column (Form)

```
Name                           [text input]
Work email                     [email input]
What's this about?             [dropdown]
  - General question
  - I want early access
  - Partnership or integration
  - Press inquiry
  - Something else
Message                        [textarea]

[Send Message]
```

Form submissions go to Google Sheets or email forward (Resend/Formspree).

---

## 12. Privacy Policy (/privacy)

```
Privacy Policy
Last updated: March 8, 2026

How Well You Know ("we", "us", "our") operates the howwellyouknow.com website.
This page describes our policies on collecting, using, and disclosing personal
data when you use our Service.

1. Information We Collect

1.1 Information You Provide
- Email address (when you sign up for early access, submit a contact form,
  or unlock detailed quiz results)
- Name and company information (when you fill out a contact form)
- Quiz responses and scores (when you complete a challenge)

1.2 Information Collected Automatically
- Usage data: pages visited, quiz interactions, completion rates, scores
- Device information: browser type, operating system, screen size
- IP address (anonymized for analytics)
- Referral source (how you found our site)

We use Vercel Analytics for website and product analytics. Vercel Analytics is
privacy-friendly and does not use cookies for tracking.

2. How We Use Your Information

- To provide and maintain our Service
- To send you product updates and early access information (only if you opted in)
- To analyze quiz completion patterns and improve our challenge formats
- To respond to your inquiries and support requests
- To detect and prevent abuse or fraud

We do not sell your personal data. We do not share your email address with
third parties for marketing purposes.

3. Data Storage

- Email addresses and form submissions are stored in Google Sheets (secured
  with access controls) and will migrate to a secured database as we scale.
- Quiz scores are encoded in URLs and stored locally in your browser. We do
  not store individual quiz results on our servers unless you submit your email
  to unlock detailed results.
- Analytics data is processed by Vercel Analytics per their privacy policy.

4. Data Retention

We retain your email address and associated data for as long as you have an
active relationship with us. You can request deletion of your data at any time
by emailing hello@howwellyouknow.com.

5. Your Rights

You have the right to:
- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data
- Opt out of marketing communications at any time

To exercise any of these rights, email hello@howwellyouknow.com.

6. Cookies

Our website uses minimal cookies:
- Essential cookies for site functionality
- No third-party tracking cookies
- No advertising cookies

Vercel Analytics operates without cookies.

7. Third-Party Services

We use the following third-party services:
- Vercel (hosting and analytics)
- Google Sheets (email storage, migrating to database)
- Resend (transactional email, when applicable)

Each service has its own privacy policy governing its use of your data.

8. Children's Privacy

Our Service is not directed at anyone under the age of 16. We do not knowingly
collect personal data from children.

9. Changes to This Privacy Policy

We may update this policy from time to time. We will notify you of changes by
posting the new policy on this page and updating the "Last updated" date.

10. Contact Us

If you have questions about this Privacy Policy:
Email: hello@howwellyouknow.com
```

---

## 13. Terms of Service (/terms)

```
Terms of Service
Last updated: March 8, 2026

Please read these Terms of Service ("Terms") carefully before using the
howwellyouknow.com website ("Service") operated by How Well You Know
("we", "us", "our").

1. Acceptance of Terms

By accessing or using our Service, you agree to be bound by these Terms.
If you disagree with any part, you may not access the Service.

2. Description of Service

How Well You Know creates interactive product knowledge challenges for
B2B SaaS companies. Our Service includes:
- Playing free interactive challenges on our website
- Creating custom challenges for your product (paid plans)
- Analytics and reporting on challenge performance
- Embeddable challenge widgets for your website

3. Accounts and Registration

When you create an account or sign up for early access, you agree to:
- Provide accurate, current, and complete information
- Maintain the security of your account credentials
- Accept responsibility for all activities under your account
- Notify us immediately of any unauthorized use

4. Free and Paid Plans

4.1 Free Plan
Our Free plan provides limited access to challenge creation. Free challenges
display a "Powered by How Well You Know" badge that cannot be removed.

4.2 Paid Plans
Paid plans (Pro, Business, Enterprise) are billed monthly. Prices are listed
on our pricing page and may change with 30 days notice. You may cancel at any
time, effective at the end of your current billing period.

4.3 Refunds
We offer a full refund within 14 days of your first payment if you're not
satisfied. After 14 days, no refunds are provided for partial billing periods.

5. User Content

5.1 Your Content
You retain ownership of all content you create using our Service, including
challenge questions, branding materials, and documentation you provide.

5.2 License to Us
By creating content on our platform, you grant us a non-exclusive, worldwide
license to host, display, and distribute that content as part of the Service.
This license terminates when you delete your content or close your account.

5.3 Player Data
Quiz responses and scores from players who take your challenges are considered
your data. You are responsible for informing your players about data collection
in accordance with applicable privacy laws.

6. Acceptable Use

You agree not to:
- Use the Service for any unlawful purpose
- Create challenges containing harmful, abusive, or misleading content
- Attempt to gain unauthorized access to our systems
- Scrape, copy, or redistribute our platform or content
- Misrepresent your identity or affiliation
- Use the Service to send spam or unsolicited communications

7. Intellectual Property

The Service, including its design, code, features, and branding, is owned by
How Well You Know and protected by intellectual property laws. The challenge
format, scoring system, and platform design are our proprietary technology.

You may not copy, modify, distribute, or create derivative works based on our
Service without our written permission.

8. Disclaimer of Warranties

The Service is provided "as is" without warranties of any kind, whether express
or implied. We do not guarantee that the Service will be uninterrupted,
error-free, or secure.

9. Limitation of Liability

To the maximum extent permitted by law, How Well You Know shall not be liable
for any indirect, incidental, special, or consequential damages arising from
your use of the Service.

Our total liability for any claim arising from the Service shall not exceed
the amount you paid us in the 12 months preceding the claim.

10. Termination

We may terminate or suspend your access to the Service at any time, without
notice, for conduct that we believe violates these Terms or is harmful to
other users or us.

Upon termination, your right to use the Service ceases immediately. We will
make your data available for export for 30 days after termination.

11. Changes to Terms

We reserve the right to modify these Terms at any time. We will notify users
of material changes by posting the updated Terms on this page and updating
the "Last updated" date. Continued use after changes means you accept the
new Terms.

12. Governing Law

These Terms shall be governed by and construed in accordance with the laws
of the State of California, United States, without regard to its conflict
of law provisions.

13. Contact

If you have questions about these Terms:
Email: hello@howwellyouknow.com
```

---

## 14. Dashboard Mockup Spec

You need a dashboard screenshot for the homepage ("How It Works" section) and the /how-it-works page. You do NOT need to build a real dashboard. You need a static image that looks like one.

Create this in Figma, v0.dev, Lovable, or as a clean HTML page and screenshot it.

### What the Dashboard Mockup Should Show

```
+------------------------------------------------------------------------+
|  Sidebar (dark)              Main Content                               |
|  ==============              ============                               |
|  [HWYK Logo]                                                           |
|                              Dashboard                                  |
|  Dashboard (active)                                                    |
|  Challenges                  +----------+ +----------+ +----------+    |
|  Analytics                   | 2,847    | | 73%      | | 64/100   |    |
|  Settings                    | Plays    | | Complete | | Avg Score |    |
|                              +----------+ +----------+ +----------+    |
|                                                                        |
|                              Your Challenges                            |
|                              +------------------------------------+    |
|                              | [Figma logo] Figma Product Quiz    |    |
|                              | 1,204 plays . 71% completion       |    |
|                              | Published . Last updated 2d ago    |    |
|                              | [Edit] [View Analytics] [Share]    |    |
|                              +------------------------------------+    |
|                              | [Notion logo] Notion Onboarding    |    |
|                              | 847 plays . 68% completion         |    |
|                              | Published . Last updated 5d ago    |    |
|                              | [Edit] [View Analytics] [Share]    |    |
|                              +------------------------------------+    |
|                                                                        |
|                              Knowledge Gaps                             |
|                              "Features your users struggle with"        |
|                              +------------------------------------+    |
|                              | Workflows      ####...... 38%      |    |
|                              | Automations    #####..... 45%      |    |
|                              | Integrations   ######.... 58%      |    |
|                              | Core Features  ########.. 82%      |    |
|                              +------------------------------------+    |
+------------------------------------------------------------------------+
```

### Key Elements

1. **Summary stats at top** - plays, completion rate, avg score (3 cards)
2. **Challenge list** - with logos, play counts, quick actions
3. **Knowledge gap chart** - horizontal bars showing weakest areas
4. **Clean sidebar nav** - Dashboard, Challenges, Analytics, Settings
5. **Light theme** - white cards on very light gray, Inter font, indigo accent for active states

### How to Use the Mockup

- Homepage: show it below the "How It Works" 4-step section with a subtle browser chrome frame around it and a caption: "See which features your users struggle with."
- /how-it-works: show it in the "What You Get as a Business" section.
- Add a slight perspective tilt (3D transform) and a soft shadow to make it feel like a product screenshot, not a flat image.

---

## 15. SEO & Meta Tags Per Page

### Global Defaults

- **Site name:** How Well You Know
- **Default OG image:** Create a 1200x630 image with the HWYK logo, tagline, and a grid of 6-8 tool logos. Use this as fallback for any page without a custom OG image.
- **Twitter card type:** summary_large_image
- **Favicon:** Use the HWYK logo mark (not the full lockup)

### Per-Page Meta Tags

| Page | Title Tag | Meta Description | OG Title | OG Description |
|------|-----------|-----------------|----------|---------------|
| / | How Well You Know - Interactive Product Challenges for B2B SaaS | Turn your product docs into 3-minute interactive challenges. Your customers learn your product. You see what they don't understand. | How Well You Know | Turn docs into interactive challenges. Your users learn. You get data. |
| /play | Play a Challenge - How Well You Know | Test your knowledge of ChatGPT, Figma, Notion, Cursor and 21 more tools. 15 questions, 3 minutes, shareable scorecard. | Play a Challenge | 25 interactive product challenges. Pick a tool. Test your knowledge. |
| /how-it-works | How It Works - How Well You Know | Paste your docs URL. AI generates 15 questions across 6 round types. Share or embed anywhere. Track what your users learn. | How It Works | From docs to interactive challenge in minutes. See how it works. |
| /use-cases | Use Cases - How Well You Know | Customer onboarding, community engagement, lead generation, and documentation. Four ways to use interactive product challenges. | Use Cases | One product, four ways to use it. |
| /use-cases/onboarding | Customer Onboarding - How Well You Know | Onboard new customers in 3 minutes instead of 3 weeks. Interactive challenges in your welcome email sequence. | Customer Onboarding | Onboard new customers in 3 minutes, not 3 weeks. |
| /use-cases/community | Community Engagement - How Well You Know | "How well do you know [Product]?" Drop an interactive challenge in Slack, Discord, or your newsletter. | Community Engagement | Give your community something to talk about. |
| /use-cases/marketing | Lead Generation - How Well You Know | Embed interactive product challenges on your blog or landing page. Capture qualified leads who already understand your product. | Lead Generation | Interactive content that actually converts. |
| /use-cases/documentation | Documentation - How Well You Know | Add "Test your knowledge" at the end of any docs section. Find out if your documentation is actually teaching anything. | Documentation | Find out if your docs actually work. |
| /pricing | Pricing - How Well You Know | Free, Pro ($49/mo), and Business ($149/mo). Start free. Upgrade when your team needs analytics, branding, and lead capture. | Pricing | Simple pricing that grows with you. Start free. |
| /about | About - How Well You Know | We're building the fastest way to teach product knowledge. Interactive challenges for B2B SaaS, powered by AI. | About Us | The fastest way to teach product knowledge. |
| /contact | Contact - How Well You Know | Questions, partnerships, or early access. We read every message and reply within 24 hours. | Contact Us | Let's talk. |
| /privacy | Privacy Policy - How Well You Know | How we collect, use, and protect your data on howwellyouknow.com. | Privacy Policy | How we handle your data. |
| /terms | Terms of Service - How Well You Know | Terms governing your use of the How Well You Know platform and services. | Terms of Service | Terms of Service for How Well You Know. |

### Structured Data (Schema.org)

Add JSON-LD to the homepage:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "How Well You Know",
  "description": "AI-powered interactive product challenges for B2B SaaS customer education",
  "url": "https://howwellyouknow.com",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "0",
    "highPrice": "149",
    "priceCurrency": "USD"
  }
}
```

Add FAQ schema to the /pricing page (use the FAQ content from Section 9).

---

## 16. Pencil.dev Wireframe Prompt

Copy-paste this into Pencil.dev (or any AI wireframe tool like Relume, Figma AI, or v0.dev) to generate wireframes for each page.

### Homepage Wireframe Prompt

```
Design a modern, clean SaaS homepage for "How Well You Know" - a B2B platform
that turns product documentation into interactive 3-minute challenges for
customer education.

Design style: Clean white background, minimal, similar to Linear.app or
Resend.com. Font: Inter. Accent color: Indigo (#6366F1). No heavy shadows.
Thin borders on cards.

The homepage has these sections in order:

1. HERO (above the fold)
   - Left side: Large headline "Your users don't read your docs. Make them
     play instead." Subheading about churn from poor product understanding,
     and turning docs into challenges. Two buttons: "Get Early Access - 50%
     off" (filled indigo) and "Play a live example" (outlined). Small text
     line: "25 interactive challenges live . Covering ChatGPT, Figma, Notion,
     and 22 more products"
   - Right side: A real scorecard screenshot showing a radar chart, archetype
     title, and score. Floating with subtle shadow and gentle bob animation.
     Rotate between 2-3 tool brand scorecards with crossfade.

2. LOGO BAR (scrolling marquee)
   - Light gray background. Heading: "Interactive challenges covering 25
     products and counting". All 25 tool logos in a continuously scrolling
     horizontal marquee. Logos grayscale, color on hover.

3. THE PROBLEM (pain before solution)
   - White background. Heading: "The onboarding problem nobody talks about."
     3 stat blocks in a row, each with a large number (12%, 50%+, 73%),
     bold subtitle, and 2-3 lines of body text explaining the pain point.

4. MINI DEMO (interactive)
   - Elevated card on light gray background. Heading: "See what it feels
     like. Takes 30 seconds." 4 tool logo pills to select from. Below: inline
     quiz card area. User answers 3 questions. Gets mini result + two CTAs:
     "Play the full challenge" and "Get this for your product."

5. HOW IT WORKS
   - White background. Heading: "From docs to interactive challenge in
     minutes." 4 numbered steps in a row with icons, connected by dotted
     lines: Paste URL, AI builds, Share/embed, See analytics. Below: a
     dashboard mockup screenshot in browser chrome, slightly tilted in 3D.

6. USE CASES
   - White background. 2x2 grid of cards. Each card has an icon, title
     (Customer Onboarding / Community Engagement / Lead Generation /
     Documentation), short description, and "Learn more" link.

7. COMPARISON TABLE
   - Light gray background. Table comparing Docs, Videos, Webinars, LMS,
     and How Well You Know across 6 dimensions. HWYK column highlighted
     with accent background.

8. PRICING TEASER
   - White background. Heading: "Starts at $49/mo. Early access is half
     that." 3 minimal cards (Free / Pro / Business) with just tier name,
     price, and 2 key features each. Below: "50% off for life" hook and
     link to full pricing page.

9. EARLY ACCESS CTA
   - White background, centered. Heading: "Get early access. Lock in 50%
     off." Email input + button. Reassurance text below.

10. FOOTER
    - 4-column footer: Product, Use Cases, Company, Legal. Logo, tagline,
      social icons, copyright.
```

### Pricing Page Wireframe Prompt

```
Design a pricing page for "How Well You Know" SaaS platform.

Style: Clean white, Inter font, Indigo (#6366F1) accent. Similar to Cal.com
or Linear pricing pages.

Sections:
1. Hero: "Simple pricing that grows with you" heading + subheading
2. 3 pricing cards side by side: Free, Pro $49/mo (Most Popular badge),
   Business $149/mo. Each card shows price, tagline, feature list with
   checkmarks, and CTA button. Pro card slightly elevated with accent border.
3. Enterprise line below: "Need SSO, custom domains, API? Contact Sales."
4. Early access banner: 50% off for life, email capture form.
5. FAQ section: 8 questions in accordion format.
6. Footer.
```

### Play Directory Wireframe Prompt

```
Design a quiz directory page for "How Well You Know."

Style: Clean white, grid layout, similar to Product Hunt or a card grid.

Sections:
1. Hero: "Play a challenge" heading + subheading
2. Filter bar: All / AI Tools / Dev Tools / Design / Productivity / Marketing
3. 3-column card grid (25 cards total). Each card: tool logo at top, quiz
   title "How [Tool] Are You?", metadata "15 questions . ~3 min", and
   "Play Now" button. White cards with thin border, hover shadow.
4. Bottom CTA: "Want this for your product?" with Get Early Access button.
5. Footer.
```

---

## 17. Master Prompt for AI Coding Agent

Copy this entire section and paste it as the first prompt when you start a new coding session to build the website.

---

### THE PROMPT

```
You are building the marketing website for "How Well You Know" - a B2B SaaS
platform that turns product documentation into interactive 3-minute challenges.

IMPORTANT CONTEXT:
- The quiz engine, 25 quizzes, scoring, scorecards, email gate, and analytics
  are ALREADY BUILT and working in production.
- The existing codebase is a Next.js app deployed on Vercel.
- You are ONLY building the marketing pages (homepage, play directory, how it
  works, use cases, pricing, about, contact, privacy, terms).
- Do NOT touch any files in src/components/quiz/, src/quizzes/, or
  src/app/play/[slug]/. Those are production code.

TECH STACK (already in use, do not change):
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Vercel Analytics (@vercel/analytics)
- Framer Motion (already installed, use for subtle animations)
- Deployed on Vercel

ADDITIONAL PACKAGES TO INSTALL:
- lucide-react (for icons)
- Do NOT install any CSS framework other than Tailwind.
- Do NOT install a component library like shadcn/ui or Material UI. Build
  components from scratch with Tailwind. Keep it minimal.

DESIGN SYSTEM:
- Background: #FFFFFF (primary), #F8FAFC (secondary), #F1F5F9 (tertiary)
- Text: #0F172A (primary), #475569 (secondary), #94A3B8 (tertiary)
- Accent: #6366F1 (Indigo 500), hover: #4F46E5, light: #EEF2FF
- Borders: #E2E8F0, subtle: #F1F5F9
- Font: Inter (all weights 400-700). Already available via Google Fonts or
  Next.js font optimization.
- Max content width: 1200px, centered
- Section padding: 80px vertical (desktop), 48px (mobile)
- Cards: white, 1px border, rounded-xl, subtle hover shadow
- Buttons: Primary (indigo filled, white text, rounded-lg, h-12),
  Secondary (white, border, dark text)
- Animations: Subtle fade-in on scroll only. No parallax. No heavy animation
  libraries. Use IntersectionObserver or Framer Motion sparingly.

FILE STRUCTURE FOR NEW PAGES:

src/
  app/
    page.tsx .................. Homepage (REPLACE the current "Coming Soon")
    play/
      page.tsx ................ Play Directory (NEW - grid of all quizzes)
    how-it-works/
      page.tsx ................ How It Works page (NEW)
    use-cases/
      page.tsx ................ Use Cases overview (NEW)
      onboarding/page.tsx ..... Onboarding use case (NEW)
      community/page.tsx ...... Community use case (NEW)
      marketing/page.tsx ...... Marketing use case (NEW)
      documentation/page.tsx .. Documentation use case (NEW)
    pricing/
      page.tsx ................ Pricing page (NEW)
    about/
      page.tsx ................ About page (NEW)
    contact/
      page.tsx ................ Contact page (NEW)
    privacy/
      page.tsx ................ Privacy Policy (NEW)
    terms/
      page.tsx ................ Terms of Service (NEW)
  components/
    marketing/ ................ NEW folder for marketing site components
      Navbar.tsx .............. Shared navigation
      Footer.tsx .............. Shared footer
      CTASection.tsx .......... Reusable "Get Early Access" CTA with email form
      PricingCards.tsx ......... Reusable pricing cards (used on homepage + /pricing)
      LogoMarquee.tsx ......... Infinite scrolling logo bar (CSS animation, 25 logos, grayscale with color-on-hover)
      MiniDemo.tsx ............ Interactive 3-card demo for homepage
      QuizCard.tsx ............ Card for play directory grid
      UseCaseCard.tsx ......... Card for use cases section

SHARED LAYOUT:
- Create src/app/(marketing)/layout.tsx that wraps all marketing pages with
  the Navbar and Footer.
- Quiz pages (src/app/play/[slug]/) should NOT use this layout. They have
  their own QuizLayout already.
- The /play directory page (src/app/play/page.tsx) SHOULD use the marketing
  layout.

NAVIGATION:
- Desktop: [Logo] Play | How It Works | Use Cases (dropdown) | Pricing | [Get Early Access - button]
- Mobile: [Logo] [hamburger] -> full-screen overlay
- Logo links to /
- "Get Early Access" button links to /pricing#early-access
- Use Cases dropdown items: Customer Onboarding, Community Engagement, Lead Generation, Documentation
- Sticky header with white background and subtle bottom border on scroll

FOOTER:
- 4 columns: Product (Play Quizzes, How It Works, Pricing), Use Cases (4 items),
  Company (About, Contact, Brand Guidelines), Legal (Privacy, Terms)
- Logo + tagline + social icons (X, LinkedIn, Email) + copyright

CRITICAL RULES:
1. Do NOT use em dashes anywhere in the copy. Use commas, periods, or rewrite
   the sentence instead.
2. All copy must sound human-written, not AI-generated. Short sentences.
   Direct language. No corporate fluff.
3. Do NOT add emojis to any page content.
4. Every page must be fully responsive (mobile-first).
5. Every page must have proper meta tags (title, description, OG tags).
   See the SEO section of the WEBSITE-SPEC.md file for exact values.
6. The email capture form on the homepage and pricing page should POST to
   /api/early-access (create this API route). It should append to Google
   Sheets using the same pattern as the existing email capture in the quiz
   results page. Include fields: timestamp, email, source (homepage/pricing),
   user agent.
7. Use the existing email validation from src/lib/validate-email.ts for all
   email inputs.
8. Images: Use next/image for all images. Tool logos are in /public/logos/.
9. The mini demo on the homepage should use real question data from one of
   the existing quiz configs (import from src/quizzes/chatgpt.tsx or similar).
   Show 3 cards inline. Make it interactive.
10. Add Vercel Analytics tracking events: "homepage_visit", "early_access_signup",
    "pricing_view", "contact_form_submit", "play_directory_view".
11. HOMEPAGE SECTION ORDER (critical, do not rearrange): Hero -> Logo Marquee ->
    Problem (pain stats) -> Mini Demo -> How It Works -> Use Cases -> Comparison
    Table -> Pricing Teaser -> Early Access CTA -> Footer. Pain comes BEFORE the
    solution. Do not move the Problem section after How It Works.
12. LOGO MARQUEE: Use pure CSS animation (translateX keyframes), not a JS carousel
    library. Duplicate the logo list to create seamless infinite scroll. All 25
    logos. Grayscale filter by default, full color on hover. The heading above is
    "Interactive challenges covering 25 products and counting" - NOT "trusted by"
    or "our customers." These are products you built challenges ABOUT, not clients.
13. HERO RIGHT SIDE: Show a real scorecard screenshot (ChatGPT or Figma), not a
    quiz card mockup. The scorecard shows the OUTPUT (radar chart, archetype,
    score) which is more visually compelling and sparks curiosity. Use
    next/image with the actual scorecard PNG from the results page. Add subtle
    floating animation (CSS keyframes, gentle 8px up-down bob, 3s duration).
```

### QUIZ DATA FOR PLAY DIRECTORY

```
The play directory needs to show all 25 quizzes. Import the config from each
quiz file to get the tool name, slug, and logo. The quiz configs are at:

src/quizzes/airtable.tsx
src/quizzes/bolt.tsx
src/quizzes/canva.tsx
src/quizzes/chatgpt.tsx
src/quizzes/claude-code.tsx
src/quizzes/cursor.tsx
src/quizzes/docker.tsx
src/quizzes/emergent.tsx
src/quizzes/figma.tsx
src/quizzes/gemini.tsx
src/quizzes/github-copilot.tsx
src/quizzes/hubspot.tsx
src/quizzes/linear.tsx
src/quizzes/loom.tsx
src/quizzes/lovable.tsx
src/quizzes/midjourney.tsx
src/quizzes/notion.tsx
src/quizzes/obsidian.tsx
src/quizzes/perplexity.tsx
src/quizzes/postman.tsx
src/quizzes/replit.tsx
src/quizzes/slack.tsx
src/quizzes/vercel.tsx
src/quizzes/windsurf.tsx
src/quizzes/zapier.tsx

Each config exports: slug, toolName, logo (JSX), accentColor.

For the play directory, create a central array that maps:
{ slug, toolName, category }

Categories:
- AI Tools: chatgpt, claude-code, gemini, perplexity, midjourney
- Dev Tools: cursor, windsurf, github-copilot, vercel, postman, docker, replit, bolt, lovable
- Design: figma, canva
- Productivity: notion, slack, loom, obsidian, airtable, zapier, linear
- Marketing: hubspot, emergent
```

### PAGE CONTENT

```
All page content (headlines, body copy, CTAs, FAQ answers, legal text) is
defined in the WEBSITE-SPEC.md file in the project root. Read sections 5-13
of that file for the exact copy for each page. Do not improvise or rewrite
the copy. Use it as written.
```

### EARLY ACCESS API ROUTE

```
Create src/app/api/early-access/route.ts

This route should:
1. Accept POST with { email, source }
2. Validate email using the existing validateEmail function
3. Append a row to Google Sheets: timestamp, email, source, user agent
4. Use the same Google Sheets API pattern as the existing quiz email capture
   (check src/app/api/ for the existing implementation)
5. Return { success: true } or { error: "message" }
6. Rate limit: max 3 submissions per IP per hour (simple in-memory map is fine)
```

### BUILD ORDER

```
Build in this order:
1. Shared components first: Navbar, Footer, CTASection, PricingCards
2. Marketing layout wrapper
3. Homepage (highest priority - this is what "Powered by" badges link to)
4. Play directory
5. Pricing page
6. How It Works
7. Use Cases (overview + 4 sub-pages)
8. About
9. Contact
10. Privacy + Terms (simple text pages, lowest priority)
11. Early access API route
12. SEO meta tags for all pages
```
