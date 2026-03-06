# How Well You Know — Final Execution Plan

*Last updated: March 7, 2025 | Status: Ready to build | Goal: $10K MRR in 10 months*
*Founder: Krishna Goyal (solo, side project alongside full-time job)*

---

## 1. What We're Building

**How Well You Know** turns product documentation into interactive micro-learning experiences for B2B SaaS companies. Not quizzes — learning games. Each experience teaches users through bite-sized lessons, then tests knowledge through gamified challenges, then delivers a shareable scorecard.

**One-liner:** "Turn your docs into 5-minute interactive challenges. Your users learn your product. You see what they don't understand."

**What it IS:**
- A micro-learning experience builder for B2B product education
- Card-based, mobile-first, gamified (points, streaks, scorecards)
- AI-powered: paste a docs URL → AI generates the challenge
- Embeddable: works in emails, docs sites, landing pages, anywhere

**What it is NOT:**
- NOT a generic quiz tool (Quizgecko, Revisely — for students)
- NOT an LMS (Skilljar, Thought Industries — $10K+/year enterprise)
- NOT an interactive demo tool (Navattic, Storylane — shows product, doesn't teach)
- NOT in-app onboarding (Userpilot, Appcues — tooltips inside the product)

**Positioning:** A lightweight, embeddable "Trailhead" any B2B SaaS can set up in 5 minutes. Skilljar charges $10K+/year. We deliver 80% of that value for $49-149/mo, powered by AI.

---

## 2. The Problem We Solve

B2B SaaS companies spend millions building products and writing docs. Nobody reads the docs. Users don't understand the product. They churn.

### Market Data

| Stat | Source |
|------|--------|
| 90% of companies see positive ROI from customer education | Forrester / Intellum |
| 6.2% revenue increase from formalized education | Forrester |
| 7.4% retention increase | Forrester |
| 7.1% lifetime value increase | Forrester |
| 11.6% customer satisfaction increase | Forrester |
| 6.1% decrease in support costs | Forrester |
| 131% more likely to buy after educational content | Conductor |
| 86% of customers stay if onboarding is good | Wyzowl |
| 50%+ of SaaS customers churn if they don't understand the product | Baremetrics |
| Cutting churn by 5% can double growth rate | Baremetrics |
| Trailhead: 40% engagement increase, 20% feature adoption boost | SaaS Designer |
| <12% completion rate on documentation sites | Industry average |
| 80%+ completion rate on micro-learning courses | Microlearning data |

### Who Already Pays for This Problem

| Company | What | Revenue / Funding | Price |
|---------|------|-------------------|-------|
| **Skilljar** | Customer education LMS | $33M raised, acquired by Gainsight (2025) | $10K+/year |
| **Thought Industries** | Customer training | ~$500M funding, ~$13.5M revenue | Enterprise |
| **WorkRamp** (YC) | Customer + employee education | $67.6M raised, acquired by Learning Pool | Enterprise |
| **involve.me** | Quiz/form builder for lead gen | **$24M revenue**, 5 employees, bootstrapped | $29-79/mo |
| **Kahoot!** | Gamified quiz platform | **$163.5M ARR** (before going private) | $17-59/user/mo |

### The Gap We Fill

Enterprise LMS costs $10K-50K+/year, takes months to set up, needs a content team. Mid-market B2B SaaS (50-500 employees) can't afford that. There's almost nothing between "we have docs" and "we need Skilljar." **We fill that gap.**

---

## 3. How the Product Works

### Two Modes, One Product

One set of content, two delivery modes controlled by a toggle. NOT two separate products — one experience with a switch.

| | Challenge Mode (⚡) | Learning Mode (💡) |
|---|---|---|
| **Shows first** | Question | Micro-lesson |
| **Shows second** | User answers | Question |
| **Shows third** | Explanation (teaches AFTER) | User answers |
| **Shows fourth** | — | Explanation |
| **Feel** | Game → surprise → learn | Study → test → confirm |
| **Best for** | Marketing, social, lead gen | Onboarding, training, CS |

**Challenge Mode** = the free viral game (what Claude Code quiz already is). Questions first, explanations after.
**Learning Mode** = the paid B2B product for customer onboarding. Teaches first, then tests.

**Why two modes?** Different user intent:
- **"Sent Here" users** (customer onboarding): WANT to learn → Learning Mode
- **"Discovered It" users** (organic/social): Want to PLAY A GAME → Challenge Mode

Both use the same content cards. Company creates once, gets both links:
- `howwellyouknow.com/play/[company]` (Challenge)
- `howwellyouknow.com/learn/[company]` (Learning)

### Card Types
1. **💡 Micro-lesson** — teaches ONE concept in 2-3 sentences
2. **⚡ Truth or Myth** — binary choice, reinforces what was taught
3. **🔀 This or That** — comparison between two features
4. **⏱ Speed Round** — rapid recall, timed (10 sec/question)
5. **🎭 Scenario** — apply knowledge to real situations
6. **🏆 Scorecard** — radar chart + archetype + share button

### Experience Structure (5-7 min)
```
Round 1: "Core Concepts" — 4-5 teach → test card pairs
Round 2: "Power Features" — 3-4 teach → test card pairs
Round 3: "Speed Round" — 8 rapid-fire questions, timed
Round 4: "Real Scenarios" — 3 practical application questions
→ Scorecard → Share → Lead capture (optional) → "Powered by" badge
```

### Screen-by-Screen Walkthrough (TaskFlow Example)

New user signed up for "TaskFlow." CS sends link: `learn.taskflow.com/getting-started`

**Welcome Card:**
```
┌─────────────────────────────────┐
│  🎯 How Well Do You Know        │
│     TaskFlow?                   │
│  Learn the essentials in        │
│  5 minutes. No docs needed.     │
│  ◻ 4 rounds  ◻ ~20 cards       │
│  [Start Learning →]             │
└─────────────────────────────────┘
```

**Micro-Lesson Card (TEACH):**
```
┌─────────────────────────────────┐
│  Round 1: Core Concepts   1/4   │
│  💡 Did you know?               │
│  TaskFlow's "Smart Assign"      │
│  automatically assigns tasks    │
│  to the team member with the    │
│  most availability.             │
│  [Got it →]                     │
└─────────────────────────────────┘
```
Short, one concept only. AI-generated from docs. 10-15 seconds to read.

**Challenge Card (TEST — Truth or Myth):**
```
┌─────────────────────────────────┐
│  ⚡ Truth or Myth?       +10pts │
│  "Smart Assign requires you     │
│   to manually check calendars." │
│  [TRUTH] [MYTH ✓]              │
│  ✅ Correct! Smart Assign       │
│  checks automatically.          │
│  [Next →]              🔥 1     │
└─────────────────────────────────┘
```
Immediately tests what they just learned. Instant feedback + points + streak.

**Challenge Card (TEST — This or That):**
```
┌─────────────────────────────────┐
│  🔀 This or That?       +10pts │
│  To auto-notify a reviewer      │
│  when a task moves to "Review": │
│  [A) Smart Assign]              │
│  [B) Workflows ✓]              │
│  ✅ Workflows handle automatic  │
│  actions. Smart Assign is for   │
│  task assignment.               │
└─────────────────────────────────┘
```

**Round Transition:**
```
┌─────────────────────────────────┐
│  🏆 Round 1 Complete!           │
│  Core Concepts: 3/4 correct     │
│  ✅ Smart Assign                │
│  ✅ Workflows                   │
│  ❌ Custom Fields (review this) │
│  [Continue to Round 2 →]        │
└─────────────────────────────────┘
```

**Speed Round (timed):**
```
┌─────────────────────────────────┐
│  ⏱ Speed Round!  8 sec left     │
│  ████████░░░░░░░░               │
│  What feature auto-assigns      │
│  tasks based on availability?   │
│  [Workflows] [Smart Assign ✓]  │
│  [Templates] [Triggers]         │
│              +10pts    🔥 5     │
└─────────────────────────────────┘
```

**Scenario (apply knowledge):**
```
┌─────────────────────────────────┐
│  🎭 Scenario                    │
│  "I want tasks to auto-assign   │
│  AND notify via Slack."         │
│  What TWO features to combine?  │
│  ☑ Smart Assign                 │
│  ☐ Templates                    │
│  ☑ Workflows (+ Slack trigger)  │
│              +20pts    🔥 7     │
└─────────────────────────────────┘
```

**Scorecard (THE PAYOFF):**
```
┌─────────────────────────────────┐
│  🏆 You scored 82/100!          │
│  You are: "The Quick Learner"   │
│     Concepts ████████░░ 80%     │
│     Features ██████████ 100%    │
│     Speed    ██████░░░░ 60%     │
│     Scenarios████████░░ 90%     │
│  📊 You outperformed 68% of     │
│     TaskFlow users              │
│  [Share on LinkedIn 📤]         │
│  [Retake Challenge 🔄]         │
│  ── Powered by HowWellYouKnow ─│
└─────────────────────────────────┘
```

### The CS Team Workflow

1. **Setup (5 min):** Paste docs URL → AI generates draft → review → publish
2. **Distribute:** Add link to onboarding emails (Day 1, Day 7, Day 30)
3. **Track:** Dashboard shows completion rates, avg score, weakest features, activation correlation
4. **Act on data:** "Nobody understands Workflows" → create targeted deep-dive → send to low scorers

### How This Beats Alternatives

| Today's approach | Problem | Our advantage |
|-----------------|---------|--------------|
| Docs site | <12% completion | 73%+ completion, interactive, 5 min |
| Video walkthroughs | 6-min avg watch on 20-min video | Every card is active — tap, choose, think |
| Live webinars | Scheduling hell, no data | Async, self-paced, tracks per-feature knowledge |
| In-app tooltips (Appcues) | Only works inside the app | Works in email, docs, landing pages — before they open the product |
| Full LMS (Skilljar) | $10K+/year, months to set up | $49-149/mo, 5-min setup, AI writes content |
| Quizzes (Typeform) | Tests only, doesn't teach | Teaches THEN tests, knowledge gap analytics |

### Design Principle
**Instagram Stories meets Duolingo:** Swipeable cards, mobile-first, tap to advance (Stories format) + points, streaks, immediate feedback, progress tracking (Duolingo mechanics) + product education content from AI.

### Product Design: Dashboard & Card Editor

**Dashboard (what VWO sees):**
```
┌──────────────────────────────────────────────────────┐
│  VWO Product Knowledge                     [Edit]    │
│  📊 245 plays  |  Avg score: 68/100  |  12 leads    │
│  Delivery Mode:                                      │
│  [⚡ Challenge (active)] [💡 Learning]               │
│  Challenge link: howwellyouknow.com/play/vwo         │
│  Learning link:  howwellyouknow.com/learn/vwo        │
│  [Edit Content]  [View Analytics]  [Embed Code]      │
└──────────────────────────────────────────────────────┘
```

**Card Editor:**
```
Card 1: A/B Testing Basics
  💡 Lesson: "VWO lets you compare two versions of a page..."
  ⚡ Question: "True or Myth: VWO requires code changes for A/B tests"
  ✅ Answer: Myth
  📝 Explanation: "VWO's visual editor is no-code."
[+ Add Card]  [Reorder]  [Delete]
```

Every card has lesson, question, answer, explanation. Same editor regardless of mode.

### What VWO Does With Both Links

| Use case | Mode | Where |
|----------|------|-------|
| Social media buzz | ⚡ Challenge | LinkedIn: "How well do you know VWO?" |
| Blog lead gen | ⚡ Challenge | Embed at end of blog posts |
| New customer onboarding | 💡 Learning | Day 1 welcome email |
| Support deflection | 💡 Learning | Help center: "New to heatmaps?" |
| Community engagement | ⚡ Challenge | Slack/Discord: "Friday challenge!" |

---

## 4. Who We Sell To (ICP)

### Company Profile
- **Type:** B2B SaaS
- **Size:** 50-500 employees
- **Has:** Public documentation, technical/developer product, CS team (3+ people) or DevRel team
- **Growing:** Recently raised funding or hiring CS/community roles
- **NOT:** Enterprise (1000+), consumer apps, non-SaaS

**Why this size?** Big enough to need customer education, too small for $10K+/year enterprise LMS. Have docs but no training content team. CS is stretched, needs scalable tools.

### Primary Buyers

| Title | Why They Care | Budget Authority |
|-------|--------------|-----------------|
| **Head of Customer Success** | Churn is their #1 KPI | Can approve $149/mo |
| **VP Customer Success** | Owns onboarding outcomes | Can approve without asking |
| **Head of Customer Education** | Literally their job. 30% of these teams are <12 months old | Dedicated budget |

### Secondary Buyers

| Title | Why They Care |
|-------|--------------|
| **DevRel Lead** | Needs engaging community content. Games > blog posts |
| **Head of Marketing** | Lead gen. Interactive content converts at 40%+ |
| **Community Manager** | Engagement driver. Leaderboards, challenges |
| **Founder / CEO** | At 50-100 person companies, they decide fast |

### Use Cases (Ordered by Value)

| # | Use Case | Who Buys | Where It Lives |
|---|----------|----------|---------------|
| 1 | **Customer Onboarding** (highest) | Head of CS | Onboarding emails, in-app page, customer portal |
| 2 | **Product Marketing / Lead Gen** | Marketing, DevRel | Landing pages, blog posts, social media, newsletters |
| 3 | **Documentation Enhancement** | Docs Lead, DevRel | End of docs sections ("Test your knowledge") |
| 4 | **Community Engagement** | Community Manager | Slack/Discord links, community forums |

### What is DevRel?

Developer Relations — a team (1-5 people) at dev-focused B2B SaaS companies (Stripe, Twilio, Vercel) that builds relationships with their developer community. Natural buyers because they constantly need engaging educational content. BUT: most companies in our ICP won't have a dedicated DevRel team unless they sell to developers. **DevRel is secondary. Head of CS is our #1 target.**

### Are We Making Them Do Something New?

**No.** Every B2B SaaS already does customer onboarding, docs, community content, marketing. They do it through boring docs, long videos, webinars nobody attends. We replace that with a 5-minute interactive learning experience that's fun and measurable.

---

## 5. Competitive Landscape (Deep Dive)

### Category 1: Interactive Content / Quiz Builders (Lead Gen)

| Company | Revenue | Pricing | Team | Key Detail |
|---------|---------|---------|------|-----------|
| **involve.me** | **$24M**, bootstrapped | $29-79/mo | **5 employees** | Proves unit economics |
| **Outgrow** | $7.3M | $14-600/mo | 66 | Interactive content for marketing |
| **Interact** | $3M ARR | $27-209/mo | 9 | Lead gen quiz maker, bootstrapped |
| **Typeform** | $141M | $25-83/mo | 500+ | Generic forms/surveys, 130K customers |
| **Marquiz** | Unknown | Pay-per-lead | Small | Lead gen quiz maker |
| **Riddle** | Unknown | $59-359/mo | Small | Quiz maker for publishers, bootstrapped |

**Our edge:** Generic lead gen quiz builders. None read docs to auto-generate, none teach, none have product education focus or B2B-specific analytics.

### Category 2: Interactive Demo Platforms (Pre-Sales)

| Company | Funding | Key Detail |
|---------|---------|-----------|
| **Navattic** (YC) | $5.6M | Interactive demos from screenshots |
| **Storylane** (YC) | Minimal | $1.9M revenue, 43 employees |
| **Arcade** | $21.7M (Kleiner Perkins) | Record-and-share demos |
| **Supademo** | Bootstrapped | Screenshot-based demos |

**Our edge:** Demos are **passive** (show product). We're **active** (teach + test). They're pre-sales → we're post-sales (onboarding, retention).

### Category 3: Customer Education LMS (Enterprise)

| Company | Pricing | Status |
|---------|---------|--------|
| **Skilljar** | $10K-50K+/year | Acquired by Gainsight (2025) |
| **Thought Industries** | Enterprise | $13.5M revenue, $500M funding |
| **WorkRamp** (YC) | Enterprise | $67.6M raised, acquired by Learning Pool |
| **Northpass** | Enterprise | Acquired by Gainsight (2023) |
| **Trainn** | ~$99/mo+ | Customer training for SaaS |

**Our edge:** $10K-50K+/year, months to implement, need content team. We offer 80% of value at 5% of cost. The consolidation (Gainsight acquiring TWO platforms) proves customer education is a must-have.

### Category 4: In-App Onboarding

| Company | Revenue/Funding | Key Detail |
|---------|----------------|-----------|
| **Whatfix** | $266M raised | Digital adoption, enterprise |
| **Appcues** | $16.7M revenue | In-app onboarding, $52.8M raised |
| **Pendo** | $100M+ ARR | Product analytics + guides, $356M raised |
| **Userpilot** | $5.98M raised | Product adoption platform |

**Our edge:** **In-app only** — can't embed in emails, docs, landing pages, social. We're **external and embeddable**. They teach HOW to click buttons → we teach WHY features exist and when to use them.

### Category 5: Gamification / Microlearning (L&D)

| Company | Revenue/Status | Key Detail |
|---------|---------------|-----------|
| **Kahoot!** | $163.5M ARR | Generic quiz for schools + corporate |
| **7taps** | Enterprise | Card-based microlearning for employee L&D |
| **OttoLearn** | $5-8/user/mo | Gamified microlearning |
| **Coursebox** | Small startup | AI course from docs — but full courses, not 5-min experiences |
| **Drimify** | $179-999/mo | General gamification platform, bootstrapped |

**Our edge:** Kahoot is generic. 7taps is for L&D. Coursebox builds full courses → we build 5-min embeddable micro-experiences.

### Competitive Position Map

```
                    TEACHES                    TESTS ONLY
    ENTERPRISE    Skilljar, WorkRamp          Kahoot!, 7taps
    ($10K+/yr)    Thought Industries          OttoLearn

                       |     ┌─────────────────┐
    MID-MARKET         |     │  HOW WELL YOU    │
    ($49-500/mo)       |     │  KNOW            │
                       |     │  Teaches + Tests  │
                       |     │  AI from docs    │
                       |     │  Embeddable      │
                       |     └─────────────────┘

    SMB / FREE    Coursebox               involve.me, Outgrow
                                          Typeform, Interact

    IN-APP ONLY   Whatfix, Pendo          Appcues, Userpilot

    PRE-SALES                             Navattic, Storylane, Arcade
```

### The 4 Things Nobody Else Does Together
1. **Teaches + Tests** (not just quizzes)
2. **AI from docs** (not manual content creation)
3. **Mid-market pricing** ($49-149/mo, not $10K/year)
4. **Embeddable anywhere** (emails, docs, landing pages — not in-app only)

Every competitor misses at least 2 of these 4.

### How We Compare to 7taps Specifically

7taps is the closest competitor in format. Key differences:

| | 7taps | How Well You Know |
|---|-------|-------------------|
| **Content creation** | Manual — you write every card | AI — paste docs URL → auto-generated |
| **Target audience** | Internal employee training (L&D) | External customer education (CS) |
| **Gamification** | Minimal (quiz cards, no points/streaks) | Core: points, streaks, speed rounds, archetypes, shareable scorecards |
| **Analytics** | Course completion, quiz scores | Per-feature knowledge gaps, radar charts, benchmarks |
| **Pricing** | Enterprise only (custom) | Self-serve from $49/mo |
| **Shareability** | Private (internal training) | Designed for sharing — branded scorecards on LinkedIn/X |
| **Distribution** | Link or LMS integration | Embed anywhere: email, docs, landing page, iframe |
| **Growth loop** | No viral mechanic | "Powered by" badge + shareable scorecards |

### Why 7taps Chose L&D Over Customer Education

5 reasons:
1. **L&D market is 100x bigger** — $391-445B global vs customer ed (no recognized category yet)
2. **L&D has a dedicated buyer with budget** — Head of L&D, CLO, HR Director. Customer ed often has no dedicated buyer at 50-500 companies
3. **L&D has mandatory use cases** — Compliance, legally required. Customer ed is "should do" not "must do"
4. **L&D learners are captive** — Employees are TOLD to complete training. Customers can close the tab
5. **L&D is enterprise-first** — 7taps sells to Cisco, J&J. Higher ACV ($10K-50K+)

**Why we still chose customer education:**
- L&D is CROWDED (hundreds of tools). Customer education below enterprise LMS has almost nobody
- Customer education is growing fast (Gainsight acquired Skilljar AND Northpass)
- Our gamified format is BUILT for voluntary learners — Claude Code game proves this (380 plays)
- Viral/shareable scorecards only work for customer-facing content, not internal L&D
- We don't need enterprise deals. involve.me proves $24M at mid-market pricing

### Honest Competitive Risks

| Risk | Threat Level | Why It Might Not Happen |
|------|-------------|------------------------|
| involve.me pivots to product education | High | They're focused on generic lead gen, product ed is a niche pivot |
| Skilljar/Gainsight goes downmarket ("Skilljar Lite") | Medium | Enterprise companies rarely go downmarket successfully |
| Navattic/Storylane adds teaching mode | Medium | Architecture built around screenshots, not text-based learning |
| New AI-native competitor appears | High | Speed to market is our defense |
| Coursebox adds embeddable micro-experiences | Low | They build full courses, different form factor |

---

## 6. Stress Test: Will This Actually Work?

### Painkiller vs Vitamin

- **Painkiller:** Company losing customers because they don't understand the product. CS team spending 10+ hours/week on manual onboarding calls. → They'll pay $149/mo instantly
- **Vitamin:** Company doing "fine" with docs and occasional webinars. → They'll think "cool" but won't pay

**Honest truth:** For most companies in our ICP, this is a vitamin. They'll only buy if:
1. They have a measurable churn/onboarding problem AND
2. They've already tried other solutions that aren't working AND
3. They have someone (Head of CS) who owns onboarding as a KPI

**Counter-argument:** involve.me does $24M selling GENERIC quizzes. Those are vitamins too. Marketers buy them because they marginally improve lead gen. CS teams will buy our tool because it marginally improves onboarding — IF we make it dead simple and prove ROI.

### What Must Be True for $10K MRR

1. Free games generate enough traffic to reach buyers (~5K-10K monthly visits from ~10 games)
2. Some % of visitors convert to early access signups (pricing visible → high-quality signal)
3. Cold outreach works as parallel channel (can't rely only on organic)
4. AI-generated content is good enough (validate by hand-building first, automate in Phase 3)
5. Companies see measurable impact ("73% completion vs 12% for docs" — need data from early customers)

### Updated Conviction Level

| Aspect | Confidence | Notes |
|--------|-----------|-------|
| Will end-users engage? | ✅ High | Proven: 380 plays on Claude Code game |
| Is the market real? | ✅ High | Acquisitions, revenue data, Forrester studies |
| Will companies pay? | ⚠️ Medium | Vitamin for most, painkiller for some |
| Can we reach $10K MRR? | ⚠️ Medium | Depends on cold outreach + finding right buyer |
| Is customer ed the right market? | ⚠️ Medium | More differentiated but riskier than L&D |
| Is the competitive moat strong? | ⚠️ Medium | Moat = brand + content library + distribution, not technology |

**Bottom line:** Viable side project with clear path to $10K MRR. Biggest risks: (1) buyer with budget exists at 50-500 SaaS, (2) free→paid conversion, (3) vitamin nature limits willingness to pay. Mitigation: aggressive cold outreach with pre-built experiences to validate buyer BEFORE building full platform.

---

## 7. Hypothesis Stack (Correct Order)

Each hypothesis depends on the previous one being true:

| # | Hypothesis | How to Test | Status |
|---|-----------|-------------|--------|
| 1 | **People play interactive product challenges voluntarily** | Publish games, measure plays | ✅ PROVEN (380 plays) |
| 2 | **Companies express interest when shown a game about THEIR product** | Cold outreach with pre-built game | ❓ NOT YET TESTED |
| 3 | **Companies will pay for this** | Quote price on call or show pricing on homepage | ❓ NOT YET TESTED |
| 4 | **Companies actually USE it (share/embed/integrate)** | Deliver to paying customer, track usage | ❓ NOT YET TESTED |
| 5 | **Companies retain and pay monthly** | Track churn after Month 1 | ❓ NOT YET TESTED |

**Why this order matters:**
- If #2 fails (nobody cares even with a game about their product), #3-5 are irrelevant
- If #2 passes but #3 fails, you have a free tool, not a business
- If #3 passes but #4 fails, you have one-time revenue but no retention

**Cold outreach tests #2 AND #3 simultaneously.** "Get Early Access" with pricing visible tests #2 for inbound. Both give answers in days, not months.

---

## 8. User Flows

### Flow 1: Organic Player → Potential Buyer
```
Reddit/LinkedIn post → plays game on howwellyouknow.com/play/chatgpt
→ plays 5-min challenge → scorecard → shares on social
→ sees "Powered by HowWellYouKnow" badge → clicks → homepage
→ plays 3-card mini-demo inline → sees pricing
→ "Get Early Access — 50% off" → submits work email (price-qualified)
→ We email personally → 15-min call → hand-build for them
```

### Flow 2: Cold Outreach → Paying Customer
```
Pre-build game for [Company] using public docs
→ Email Head of CS: "Built a 5-min challenge for [Company] → [link]"
→ They play. "This is cool."
→ Offer early access at $49-149/mo
→ 15-min call → understand use case
→ Hand-build customized version (Wizard of Oz)
→ Deliver: hosted page + analytics report (Loom/PDF)
→ Charge via Stripe payment link
```

### Flow 3: Inbound Early Access → Paying Customer
```
Someone lands on homepage (from "Powered by" badge, social, or search)
→ Plays 3-card mini-demo on homepage
→ Sees pricing → clicks "Get Early Access — 50% off"
→ Submits work email (after seeing pricing = high-quality)
→ We email: "Thanks. 15-min call?"
→ Call → understand needs → hand-build
→ Deliver + charge $49-149/mo via Stripe payment link
```

### Flow 4: What Paying Customers Actually Receive (Phase 1-2 — Wizard of Oz)

The homepage says "AI generates an interactive challenge from your docs." What actually happens:

1. Customer signs up for early access (or comes from cold outreach)
2. 15-min call. Understand their use case
3. **You read their docs. Hand-write 20 challenge cards. 2-4 hours**
4. Deploy as new JSON config: `howwellyouknow.com/play/[company]`
5. Send Loom walkthrough: "Here's your challenge. Here's how to share it"
6. After 1 week: send analytics (plays, avg score, weak features). PDF or Loom
7. Charge $49/mo or $149/mo via Stripe payment link

**They never know it's manual.** They think AI did it. This is how Zapier started (manual integrations), DoorDash (founders delivered food), Groupon (manual email blasts). Once it becomes painful (customer #10-15), you build the AI pipeline. By then you know what "good" looks like.

---

## 9. Pricing

### Pricing Tiers (Visible on Homepage from Day 1)

| Tier | Price | Includes |
|------|-------|---------|
| **Free** | $0 | 1 challenge, 10 cards, "Powered by" badge, community link only |
| **Pro** | $49/mo | 5 challenges, 25 cards each, custom branding, basic analytics, email support, hosted page |
| **Business** | $149/mo | Unlimited challenges, 25 cards each, custom branding, advanced analytics, embed code, priority support, lead capture |
| **Enterprise** | $499/mo *(Phase 4 only)* | SSO, custom domain, API access, dedicated support |

### Early Access Pricing

Founding members: 50% off → $25/mo Pro, $75/mo Business. Incentive for early adopters.

### Why "Get Early Access" with Pricing, Not a Blind Waitlist

- A plain waitlist email is worth ~$0. You don't know if they'd pay
- An email submitted AFTER seeing the price is worth ~$5-10. Self-selected knowing the cost
- You still don't charge yet (no Stripe). But signal quality is 10x higher
- When you email later: "You signed up for early access at $49/mo. Your account is ready" = warm conversion, not cold re-engagement
- Blind waitlists kill momentum — 500 signups, 5 convert. Avoid this

### Pricing Defense (For Sales Calls)

- **"What does it cost when a customer churns?"** At $100/mo ARPU, one saved customer = 5 months paid for
- **"What does CS spend on onboarding calls?"** CSM at $70K/year, 20% on basic onboarding = $14K/year. Our $49/mo tool saving 10% of those calls pays for itself in a month
- **"Your dev team's time isn't free."** 2 developer days at $80/hr = $1,280. We're cheaper than DIY

If they won't pay $49/mo, offer a free 2-week pilot. If they won't even pilot, they're not your customer.

### The Done-For-You Backend (Not Publicly Advertised)

For cold outreach targets and high-value customers, you manually build experiences. This is NOT on the pricing page. It's how you deliver behind the scenes.

| What They Get | Detail |
|--------------|--------|
| 20 challenge cards about their product | Hand-written from their docs |
| Branded design | Their logo, brand colors |
| Hosted page | `howwellyouknow.com/play/[company]` |
| Shareable scorecard | Branded downloadable image |
| Analytics report | Plays, avg score, weak features (PDF/Loom after 1 week) |
| 1 round of edits | Free revision |

**The real pitch isn't "I built a quiz for you." It's:** "I can tell you which product features your customers don't understand — and give you a tool to fix it." The quiz is the mechanism. The insight is the value.

### Why Pay vs DIY?

The Head of CS at a 200-person SaaS is not going to: code a quiz app, write 20 quality questions, design it, host it, build scorecard sharing, set up analytics, maintain it as the product changes.

| What they build themselves | What you deliver |
|---------------------------|-----------------|
| Google Form with 10 questions | Branded, gamified card-based experience |
| No analytics | "Your users don't understand Feature X" — actionable insight |
| One-time, forgotten | Ongoing hosting + quarterly updates |
| No shareability | Scorecard optimized for LinkedIn/X sharing |
| Looks like homework | Looks like a product. Polished. Professional |
| Takes dev team 2-3 days | Takes them 0 days |

### Revenue Projections

| Month | Free Users | Paid Users | MRR |
|-------|-----------|-----------|-----|
| 1-3 | 50 | 5 | $500 |
| 4-6 | 200 | 20 | $2,000 |
| 7-9 | 500 | 50 | $5,000 |
| 10-12 | 1,000 | 100 | $10,000 |

### Cost Structure

| Phase | Monthly Cost | Notes |
|-------|-------------|-------|
| Phase 1 (Weeks 1-3) | ~$1/mo | Domain only. Vercel Pro already paid ($20/mo). Manual creation |
| Phase 2 (Weeks 4-8) | ~$25-45/mo | Vercel Pro ($20), Supabase free, Claude API ($5-20) |
| Phase 3 (Months 3-6) | ~$85-115/mo | Supabase Pro ($25, already paid), Claude API ($20-50), Vercel ($20), Resend ($20) |
| At $10K MRR | ~$200-300/mo | + Stripe fees (2.9% = ~$300/mo). **97% margins** |

**Existing paid accounts:** Vercel Pro ($20/mo) ✅, Supabase Pro ($25/mo) ✅. Already covered.

---

## 10. Go-to-Market Strategy

### Core Principle

**Brand = Product Company from Day 1.** Homepage says "AI-powered SaaS platform." Nobody sees "$500 to build a quiz."
**Backend = Manual Service until it hurts.** First 10-20 customers get hand-built experiences. Wizard of Oz. Then automate.

### Three GTM Channels

#### Channel 1: Free Games Distribution (Awareness + Social Proof)

Publish free games for popular tools on relevant communities.

| Game | Distribution Channel | Purpose |
|------|---------------------|---------|
| Claude Code | r/ClaudeAI, r/ChatGPTPro, LinkedIn, X | Already proven (380 plays) |
| ChatGPT | r/ChatGPT (10M members), LinkedIn, X | Maximum traffic potential |
| Cursor | r/cursor, Hacker News, X | Dev community, trending tool |
| Figma | r/FigmaDesign, design Twitter, Dribbble | Designers love sharing scores |
| Notion | r/Notion, Notion community, LinkedIn | Active power user community |
| Postman | r/webdev, dev Twitter, Dev.to | Developer community |

Play counts and social shares become outreach collateral: "5,000 people played our challenges" is a strong opener in cold emails.

#### Channel 2: Cold Outreach (Revenue — PRIMARY CHANNEL)

Pre-build games for specific B2B SaaS companies. Email their Head of CS with a live game link.

**The full outbound email:**

> Subject: Built a 5-min product challenge for [Company] — check it out
>
> Hi [Name],
>
> We're building HowWellYouKnow — a platform that turns product docs into interactive challenges so your users actually learn your product.
>
> I created one for [Company]: howwellyouknow.com/play/[company]
>
> It covers [specific feature 1], [specific feature 2], and [specific feature 3]. Players score an average of 62% — which means even power users have feature blind spots.
>
> Some ways companies are using this:
> - **Onboarding:** "Learn [Product] in 5 minutes" in welcome emails
> - **Community:** "How well do you know [Product]?" as an engagement post
> - **Marketing:** Embed on blog or docs to drive feature awareness
>
> We're launching our self-serve platform soon. Would you want early access? Happy to customize this one with your branding and give you the analytics dashboard.
>
> Krishna
> HowWellYouKnow.com

**Note the framing:** "We're building a platform" and "Would you want early access?" — NOT "I'll build a quiz for you for $500."

**Alternative email angles:**

**Email 2 — "Your churn problem":**
> Subject: How [Company] customers learn your product
> Quick question: how do your new customers learn [Product] today? We're building a tool that turns product docs into 5-minute interactive learning experiences — like a mini Trailhead. Companies embed it in onboarding emails and docs. Worth a 15-min chat?

**Email 3 — "Nobody reads docs":**
> Subject: Your docs are great, but nobody reads them
> I was reading [Company]'s docs and they're genuinely well-written. But most users skim or skip entirely. What if they could learn key concepts in 5 min through an interactive game? I can build a prototype for [Product] in 24 hours. No cost, no commitment.

**Outreach cadence per prospect:**
1. Email 1 (Day 1) — Lead with pre-built game
2. LinkedIn connect + comment (Day 3)
3. Email 2 (Day 5) — Different angle ("nobody reads docs")
4. LinkedIn DM (Day 8) — Casual follow-up
5. Email 3 (Day 12) — Final attempt, offer free pilot

**Where to find prospects:**
- LinkedIn Sales Navigator: Title = "Customer Success" / "DevRel" / "Customer Education", Company 50-500, SaaS
- Product Hunt: Recent B2B SaaS launches (actively growing, need education tools)
- G2/Capterra: Companies with docs sites in Dev Tools, Productivity, Marketing Tech
- Your own games: Players who share scorecards might work at B2B SaaS companies. Check LinkedIn

#### Channel 3: Inbound via Homepage (High-Quality Leads)

Homepage mini-demo → pricing visible → "Get Early Access — 50% off" → email collection. Every signup is price-qualified.

### The Growth Loop

```
Free games → Players share scorecards → New players discover games
    ↓
"Powered by" badge → Some players visit homepage → Some sign up
    ↓
Early access + Cold outreach → Sales calls → Paying customers
    ↓
Paying customers embed games → Their users play → "Powered by" → More visitors
```

---

## 11. Homepage Design (Product-First)

```
┌──────────────────────────────────────────────────────────────┐
│  NAV: Logo | Play | Product | Pricing                        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  HERO: "Know your product. Prove it."                        │
│                                                              │
│  Turn your docs into 5-minute interactive challenges.        │
│  Your users learn your product. You see what they don't      │
│  understand.                                                 │
│                                                              │
│  [Try it — answer 3 questions →]  (mini-demo, NOT a URL box)│
│                                                              │
│      ┌──────────────────────────────────┐                    │
│      │  Mini-demo: 3 cards from the     │                    │
│      │  ChatGPT game. User plays        │                    │
│      │  inline. Gets a mini score.      │                    │
│      │  "Imagine this for YOUR product" │                    │
│      └──────────────────────────────────┘                    │
│                                                              │
│  After mini-demo completes:                                  │
│  "Want this for YOUR product?"                               │
│  [Get Early Access → $49/mo]                                 │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  LOGO BAR (tools you've built games for):                    │
│  Claude | ChatGPT | Cursor | Figma | Notion | VWO | Postman │
│  "Trusted by teams that use these tools"                     │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  HOW IT WORKS:                                               │
│  1. Paste your docs URL                                      │
│  2. AI generates an interactive challenge                    │
│  3. Share with customers or embed on your site               │
│  4. See analytics: scores, knowledge gaps, completion        │
│                                                              │
│  DASHBOARD SCREENSHOT (mockup — don't need to build it)      │
│  Shows: play count, avg score, per-question breakdown,       │
│  "Features your users struggle with" chart                   │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  PRICING:                                                    │
│  Free          | Pro $49/mo      | Business $149/mo          │
│  1 challenge   | 5 challenges    | Unlimited                 │
│  10 cards      | 25 cards each   | 25 cards each             │
│  Powered by    | Custom branding | Custom branding            │
│  badge         | Basic analytics | Advanced analytics         │
│  Community     | Email support   | Embed code                │
│  link only     | Hosted page     | Priority support           │
│                |                 | Lead capture               │
│                                                              │
│  [Get Early Access — 50% off for founding members]           │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  PLAY PAGE (separate /play route, linked from nav):          │
│  Grid of all games. Anyone can play. No signup.              │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │Claude    │ │ ChatGPT  │ │  Cursor  │ │  Figma   │       │
│  │ 2.4K     │ │ 1.8K     │ │  980     │ │  750     │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ Notion   │ │  VWO     │ │ Postman  │ │  Linear  │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Key Design Decisions

1. **Hero has a mini-demo, not a URL input box.** Visitor plays 3 cards inline → gets excited → THEN sees CTA. Excitement before the ask
2. **Pricing is visible.** Signals "real product" + every signup is from someone who SAW the price
3. **"Get Early Access — 50% off"** captures emails in context where person knows the price. Not a blind waitlist
4. **Dashboard screenshot is a MOCKUP.** Don't build the dashboard in Phase 1. Design in Figma or clean HTML. Standard pre-launch practice
5. **Logo bar = tools you built games FOR, not paying clients.** Common startup practice. If asked: "we've built challenges for these products" — true
6. **Games on separate /play page, not homepage.** Homepage = for BUYERS. /play page = for PLAYERS. Different audiences, different intent

---

## 12. How Embedding Works (Technical)

### Method 1: Shared Link (Phase 2 default — simplest)

`howwellyouknow.com/play/vwo` — Full-page experience. Company shares this URL in emails, Slack, LinkedIn, blog posts.

User clicks link → opens in new tab → plays → scorecard. **90% of early customers will use this.** Zero technical integration.

### Method 2: Iframe Embed (Phase 2-3)

Company wants the game INSIDE their website without user leaving:

```html
<iframe
  src="https://howwellyouknow.com/embed/vwo"
  width="100%" height="600" frameborder="0"
  style="border-radius: 12px; max-width: 800px;"
></iframe>
```

The `/embed/vwo` route serves the same game as `/play/vwo` but stripped of your header/footer. Game looks native on their site. This is how Typeform, Calendly, YouTube, Intercom, testimonial.io all work.

**Technical effort:** ~2-3 hours. Create `/embed/` route that renders game without site chrome.

### Method 3: Subdomain CNAME (Phase 3-4 — Business/Enterprise)

`learn.abc.com` → CNAME to howwellyouknow.com. Fully white-labeled.

```
DNS: learn.abc.com  CNAME → howwellyouknow.com
User visits learn.abc.com → DNS resolves to your server → serves their game
URL bar shows learn.abc.com, not your domain
```

This is how Notion, Webflow, Carrd, Ghost work. Vercel handles custom domains natively.

### Method 4: Reverse Proxy (Phase 4 — rare, for enterprise)

Company wants game at `abc.com/onboarding/learn` (path on their main domain). THEY configure their server to proxy to your embed URL.

```nginx
location /onboarding/learn {
    proxy_pass https://howwellyouknow.com/embed/abc;
}
```

Or in Vercel: `{"rewrites": [{"source": "/onboarding/learn", "destination": "https://howwellyouknow.com/embed/abc"}]}`

**The customer configures this, not you.** You just serve at `/embed/abc`. Only large companies need this.

### Summary: Which Method When

| Phase | Method | What you offer | Your effort |
|-------|--------|---------------|-------------|
| Phase 2 | Shared link | `howwellyouknow.com/play/vwo` | Zero |
| Phase 2 | Iframe embed | Paste this code on your site | 2-3 hours one-time |
| Phase 3 | Subdomain CNAME | Point `learn.abc.com` to us | Moderate (Vercel handles) |
| Phase 4 | Reverse proxy | Docs for customer to configure | You write docs only |

**Phase 2 = shared link only.** Add iframe when someone asks. Methods 3-4 are for later.

---

## 13. The 4-Phase Execution Plan

### PHASE 1: "Build the Engine + Games" (Weeks 1-3) — Revenue: $0

**Focus:** Build the game engine, create 7-8 games, build the homepage. Get everything live. No selling yet.

#### What to Build

| # | What | Time | Notes |
|---|------|------|-------|
| 1 | Game engine on howwellyouknow.com | 3 days | Next.js. JSON config. One engine, many games. Reuse Claude Code codebase |
| 2 | 7-8 games across categories | 8-10 days | Hand-written content. AI helps draft, you polish |
| 3 | Shareable scorecard (downloadable image) | 1 day | THE viral mechanic. Non-negotiable |
| 4 | "Powered by HowWellYouKnow" badge | 2 hours | On every game. Links to homepage |
| 5 | Homepage (product-first design) | 2 days | Hero + mini-demo + logos + pricing + early access CTA |
| 6 | Analytics (Plausible or Vercel) | 1 hour | Track plays, homepage visits, signup attempts |

#### The 7-8 Games

| # | Game | Category | Purpose |
|---|------|----------|---------|
| 1 | Claude Code | AI/Dev tools | Already built. Move to new domain |
| 2 | ChatGPT | AI | **TRAFFIC** — r/ChatGPT = 10M members |
| 3 | Cursor | Dev tools | **TRAFFIC** — trending, active community |
| 4 | Figma | Design | **TRAFFIC** — huge user base, designers share |
| 5 | Notion | Productivity | **TRAFFIC** — active r/Notion, tons of features |
| 6 | VWO | Analytics/CRO | **OUTREACH** — pre-build for cold email |
| 7 | Postman | Dev tools | **OUTREACH** — developer community |
| 8 | Hotjar / Linear / Loom | Pick one | **OUTREACH** — second cold email ammo |

**Games 1-5 = TRAFFIC** (popular tools, big communities).
**Games 6-8 = OUTREACH AMMO** (specific companies you'll email).

Games 6-8 double as cold outreach collateral — email VWO's Head of CS with a live game about their product already built.

**Why not 20 games?** The 13th game doesn't get you closer to revenue. It gets you closer to being a content site. After 8, you need to be SELLING. Add more games later while doing outreach.

#### What NOT to Build in Phase 1

| Feature | Why NOT |
|---------|---------|
| AI generation pipeline | Homepage SAYS "paste URL → AI generates." Backend = you generate manually. Wizard of Oz |
| Dashboard | Show a mockup screenshot. First customers get Loom/PDF analytics |
| Auth / user accounts | Nobody logs in. Early access signups go to spreadsheet/Airtable |
| Card editor | You edit for them |
| Stripe subscriptions | Early access payments via Stripe payment link. Manual |
| Embed code | Build when a paying customer asks |
| Learning Mode | Build when a paying customer asks |

**The homepage LOOKS like a fully-built product. Behind the scenes, it's you + a JSON config + manual delivery.**

#### Phase 1 Deliverable
A website that looks like a legit SaaS product with 7-8 playable games, pricing, early access signup, and a games page.

---

### PHASE 2: "Distribute + Sell" (Weeks 4-8) — Target: $200-750 MRR

**Focus:** Two parallel activities — 60% cold outreach (revenue), 40% game distribution (traffic/credibility).

#### DISTRIBUTION (the inbound engine)

Post each showcase game to its relevant community. Goal: play counts, social proof, and occasional inbound signups from "Powered by" clicks.

| Week | Game to Distribute | Where |
|------|-------------------|-------|
| Week 4 | Claude Code + ChatGPT | r/ClaudeAI, r/ChatGPT (10M members), LinkedIn, X |
| Week 5 | Cursor + Figma | r/cursor, Hacker News, r/FigmaDesign, design Twitter |
| Week 6 | Notion + Postman | r/Notion, r/webdev, Dev.to |
| Ongoing | Re-share best performers | Cross-post, engage in comments |

**Distribution targets by Week 8:**
- Total plays: 5,000+
- Scorecard shares on social: 100+
- Homepage visits from "Powered by": 500+
- Inbound early access signups: 20-50

Play counts and social shares become outreach collateral: "5,000 people played our challenges" is a strong line in cold emails.

#### OUTREACH (the revenue engine)

**Week 4-5: First 10 Cold Emails**

1. You already have games for VWO and Hotjar/Linear from Phase 1
2. Pick 8 more B2B SaaS companies (50-500 employees) with:
   - Good public documentation
   - Active user community (Slack, Discord, forum)
   - CS or marketing team (check LinkedIn)
3. Hand-build a game for each. 15-20 cards. 1-2 hours each (engine is solid now)
4. Publish: `howwellyouknow.com/play/[company]`
5. Email founder, Head of CS, or Head of Marketing

**Week 6-7: Iterate Based on Responses**

| Outcome | What It Means | What to Do |
|---------|--------------|------------|
| 3+ reply "this is cool, let's talk" | Buyer exists | Get on call. Offer early access at $49-149/mo. Hand-build their customized version |
| 3+ reply "cool but can't pay now" | Interested, no budget | Offer free 2-week pilot. Deliver manually. Convert later |
| Wrong persona responds (marketing, not CS) | Right product, wrong buyer targeted | Shift outreach to marketing leads |
| 0 replies from 10 emails | Email not landing or wrong ICP | Change subject lines, try different company sizes, try founders |
| "We'd use this for employee training" | The L&D market is pulling | Consider pivoting to L&D. Seriously |

**Week 8: Double Down on What's Working**

If outreach is getting replies:
- Increase to 10-15 emails/week
- Each email includes a pre-built game about THEIR product
- Build more games for outreach targets

If inbound signups are coming:
- Email each personally: "Thanks for signing up. 15 min call?"
- Get on calls. Understand needs. Hand-build
- Charge $49/mo from the start

#### Phase 2 Revenue Target
- 3-5 paying early access customers at $49-149/mo = $200-750 MRR
- 5,000+ total plays across all games
- 20-50 early access signups (inbound)
- 3+ positive cold outreach responses (calls booked)

Not $10K MRR yet. But PROOF: buyer exists, price works, you know what features they need.

#### Phase 2 Kill Criteria

- **40 outbound emails + 2,000 game plays → 0 positive responses AND 0 early access signups:** The buyer doesn't exist at this ICP. Pivot to different persona (marketing? DevRel?), company size (enterprise?), or market (L&D?)
- **People sign up but won't pay $49/mo:** Vitamin, not painkiller. Consider: free tier with "Powered by" growth loop, or pivot entirely
- **People keep asking for something you're not building** (e.g., "Can you just make a landing page?"): Listen. Build what they're asking for. The market is telling you something

---

### PHASE 3: "Build the Real Product" (Months 3-6) — Target: $3-8K MRR

**Prerequisite:** 5-10 paying customers from Phase 2. You've hand-built 15-20 games. You know what the buyer wants.

Now automate what you've been doing manually:

| What You Did Manually | What You Build |
|----------------------|----------------|
| Read docs, write cards by hand | AI reads docs URL → generates cards (Claude API) |
| Email Loom video with analytics | Dashboard with play counts, scores, completion |
| Edit cards from feedback | Self-serve card editor |
| Send Stripe payment links | Stripe checkout + subscription billing |
| Create JSON files per game | Self-serve: paste URL → generate → edit → publish |

#### Build for Everyone

| Feature | Why |
|---------|-----|
| AI auto-generation (URL → full game) | This IS the product. Makes it scalable |
| Auth (Clerk or NextAuth) | Users need accounts |
| Dashboard | List challenges, see analytics per challenge |
| Card editor | Edit AI-generated content. AI won't be perfect |
| Stripe payments (Free / $49 / $149) | The pricing already on homepage. Now real |
| "Powered by" badge on free tier | Organic growth loop |
| Analytics (plays, avg score, completion, per-question) | #1 feature customers asked for |
| Embed code (iframe) | If Phase 2 customers asked — likely |

#### Only Build if Phase 2 Customers Asked

| Feature | Build When... |
|---------|------------|
| Learning Mode (lesson → test toggle) | "I need this for onboarding, not just quizzes" |
| Lead capture (collect player emails) | "I want to know WHO played" |
| CRM export | "I need this in HubSpot/Salesforce" |
| Team seats / collaboration | "My CS team needs access too" |

#### Still Don't Build (Even in Phase 3)
Custom domains, SSO, API access, white-label. Enterprise features for Phase 4.

#### Phase 3 Revenue Target
- 10-15 manual customers retained at $49-149/mo = $500-2K MRR
- 20-40 new self-serve customers at $49-149/mo = $2K-6K MRR
- Free tier users generating "Powered by" traffic = new inbound funnel
- **Total: $3-8K MRR by Month 6**

---

### PHASE 4: "Scale to $10K MRR" (Months 6-10) — Target: $10K MRR

By now you know: which buyer converts, which company size pays, which pricing tier is popular, whether inbound or outbound is stronger, which features drive retention.

**Possible paths:**

**Path A: Self-serve wins.** 100 customers × $100/mo avg. Scale through "Powered by" viral loop, content marketing ("How [Company] reduced onboarding calls by 40%"), community distribution.

**Path B: Outbound wins.** 40 customers × $149/mo + ongoing outreach at 20 emails/week. Hire VA for content creation. Consider $499/mo enterprise tier.

**Path C: Hybrid.** 50 self-serve ($49) + 20 pro ($149) + 5 enterprise ($499) = ~$8K MRR. Close a few more at any tier.

Don't plan for Phase 4 now. Phase 2-3 data tells you which path you're on.

---

## 14. Technical Architecture

### Tech Stack

| Layer | Technology | Cost |
|-------|-----------|------|
| **Framework** | Next.js (App Router) | Free |
| **Hosting** | Vercel Pro | $20/mo (already paid) |
| **Database** | Supabase (Postgres) | $25/mo (already paid) |
| **AI** | Claude API (Sonnet/Opus) | ~$0.10-0.50 per generation |
| **Auth** | Clerk or NextAuth | Free tier → $25/mo at scale |
| **Payments** | Stripe | 2.9% + $0.30 per transaction |
| **Email** | Resend | Free → $20/mo |
| **Analytics** | Plausible or Vercel Analytics | Free → $9/mo |
| **Image Gen** | Canvas API or html-to-image | Free (for scorecards) |

### Architecture (Phase 1)

```
Next.js App
├── /play/[game-slug]     → Game engine, reads JSON config
├── /embed/[game-slug]    → Same game, no header/footer (for iframe)
├── /                     → Homepage (hero, mini-demo, pricing, CTA)
├── /play                 → Games grid page
├── /api/analytics        → Track plays (Vercel/Plausible)
└── /api/early-access     → Email collection (→ Airtable/Supabase)

JSON configs (per game):
├── /data/claude-code.json
├── /data/chatgpt.json
├── /data/cursor.json
└── ... (one per game)
```

### Architecture (Phase 3 — Self-Serve)

```
Next.js App
├── /play/[slug]          → Public game
├── /embed/[slug]         → Iframe version
├── /learn/[slug]         → Learning Mode
├── /dashboard            → Auth-protected user dashboard
├── /dashboard/[id]/edit  → Card editor
├── /dashboard/analytics  → Play data, scores, knowledge gaps
├── /api/generate         → Claude API: docs URL → cards
├── /api/stripe           → Webhook for subscriptions
└── Supabase
    ├── users table
    ├── challenges table (JSON content, settings)
    ├── plays table (scores, answers, timestamps)
    └── leads table (player emails if gated)
```

---

## 15. Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| Companies build their own | High | Our value = platform (analytics, embed, lead capture, maintenance). One game is easy; a system is not |
| Low willingness to pay | Medium | Free tier with badge = organic growth. Same model as testimonial.io |
| AI content quality | Medium | Teach + test format. Human-in-the-loop editing. Hand-craft for early customers |
| "Nice to have" not "must have" | High | Position as churn reduction (ties to revenue). Lead with ROI data |
| Small TAM below enterprise | Medium | Start dev tools → expand to all B2B SaaS. 30K+ companies with docs |
| No retention (one-play) | Medium | Companies embed permanently. New users keep playing. Monthly content refresh |
| Competitor enters | High | Speed to market. Build brand + content library early. Distribution is moat |

---

## 16. Decision Frameworks

### "Should I Build This?"

```
Is a PAYING customer (or 3+ serious prospects) asking for this?
  ├── YES → Build it next.
  └── NO → Don't build it.
        └── "But I think they'll need it!"
              └── Ask 5 customers if they'd pay for it.
                    ├── 3+ say yes with specifics → Build it.
                    └── <3 say yes → Don't build it. You're guessing.
```

### "Should I Keep Going or Pivot?" (Week 8 Checkpoint)

```
Outbound: 40+ emails sent. How many positive responses?
  ├── 5+  → Keep going. Scale outreach.
  ├── 1-4 → Promising but not strong. Iterate message/ICP. 4 more weeks.
  └── 0   → Pivot or kill.

Inbound: How many early access signups?
  ├── 50+ → Strong demand. Prioritize building self-serve.
  ├── 10-50 → Some interest. Focus on converting to paying.
  └── <10 → Homepage isn't converting. Rethink messaging or ICP.

Paying customers?
  ├── 3+ → Business is real. Keep going.
  ├── 1-2 → Promising. Understand why others didn't convert.
  └── 0  → After 8 weeks, 0 revenue? Serious pivot needed.
```

---

## 17. Week-by-Week Schedule

**Saturday (Week 1):**
1. Deploy howwellyouknow.com (Next.js on Vercel)
2. Build game engine (JSON config → rendered game, reuse Claude Code codebase)
3. Move Claude Code game to new domain
4. Start ChatGPT game content

**Sunday (Week 1):**
5. Finish ChatGPT game
6. Start Cursor game
7. Build homepage: hero + mini-demo + logo bar + "How it Works" + pricing + early access CTA
8. Design dashboard mockup screenshot (Figma or clean HTML)

**Week 2 (evenings):**
9. Finish Cursor game
10. Build Figma + Notion games
11. Add shareable scorecard (image download)
12. Add "Powered by" badge to all games

**Week 3 (evenings):**
13. Build VWO + Postman + 1 more outreach target game
14. Set up analytics (Plausible)
15. Polish homepage, test end-to-end
16. Set up early access email collection (Airtable or simple DB)

**Week 4 (distribution + outreach begin):**
17. Post Claude Code on r/ClaudeAI + LinkedIn
18. Post ChatGPT on r/ChatGPT + X
19. Send first 5 cold outreach emails (VWO, Postman, + 3 others)
20. Track: plays, homepage visits, signups, email responses

**Every week after (Weeks 5+):**
21. Distribute 1-2 games on relevant communities
22. Send 5-10 cold outreach emails with pre-built games
23. Get on calls with anyone who responds (inbound or outbound)
24. Hand-build for anyone who pays
25. Track: emails sent → replies → calls → paying customers

---

## 18. $10K MRR Timeline

| Scenario | Timeline |
|----------|----------|
| Optimistic | 8-10 months |
| Realistic | 12-15 months |
| Pessimistic | 18+ months or doesn't work |

The first $1K MRR is the hardest. Everything after compounds.

---

## 19. The Cheat Sheet

```
GOAL: $10K MRR

BRAND: Product company from Day 1.
BACKEND: Manual service until it hurts. Then automate.

PHASE 1 (Weeks 1-3): BUILD
  - Game engine + 7-8 games + scorecard + homepage
  - Homepage = product pitch, mini-demo, pricing, early access CTA
  - Games page = /play with all games, no signup required
  - Dashboard = mockup screenshot, not built
  - AI generation = doesn't exist yet, you generate manually
  - Revenue = $0. This phase is building the arsenal.

PHASE 2 (Weeks 4-8): DISTRIBUTE + SELL
  - Post showcase games on Reddit/LinkedIn/X → traffic + social proof
  - Cold outreach with pre-built games → revenue validation
  - Inbound early access signups from homepage → warm leads
  - Hand-build for first customers behind the scenes
  - Target: 3-5 paying customers, 5,000+ plays, 20-50 signups
  - KILL if 40 emails + 2K plays → 0 interest from anyone

PHASE 3 (Months 3-6): BUILD THE REAL PRODUCT
  - AI generation, auth, dashboard, editor, Stripe, analytics
  - Only build features Phase 2 customers asked for
  - Target: $3-8K MRR

PHASE 4 (Months 6-10): SCALE
  - Double down on whatever is working
  - Target: $10K MRR

PRICING (visible from Day 1):
  Free        1 challenge, 10 cards, "Powered by" badge
  $49/mo      5 challenges, 25 cards, branding, analytics
  $149/mo     Unlimited, embed, lead capture, priority support
  $499/mo     Enterprise (Phase 4): SSO, custom domain, API

HYPOTHESIS STACK:
  1. ✅ People play (proven: 380 plays)
  2. ❓ Companies express interest (test: outreach + inbound)
  3. ❓ Companies pay (test: price on homepage + sales calls)
  4. ❓ Companies use it (test: deliver + track usage)
  5. ❓ Companies retain (test: Month 2 churn)

THE KEY INSIGHT:
  The homepage says "AI-powered platform."
  The backend is you + Claude API + JSON configs.
  This isn't lying. It's launching before the product is ready.
  Every successful SaaS company did this.
```

---

**Stop planning. Start building. The plan is good enough.**
