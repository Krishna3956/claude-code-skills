# How Well You Know — Session Memory & Context for Agent Handoff

*Created: March 7, 2025*
*Purpose: Complete context of all discussions, decisions, and reasoning so a new coding agent can pick up exactly where we left off.*

---

## Who Is the User

- **Name:** Krishna Goyal
- **Current job:** Works at Cisco (full-time). This project is a side project built on weekends/evenings
- **Other projects:** Built TrackMCP (trackmcp.com) — world's largest MCP marketplace (14,885+ MCP tools). Also sells YC batch analysis scorecards ($9 each, $1,499 pitch decks)
- **Tech stack comfort:** Next.js, React, Vercel, Supabase, Tailwind, Claude API. Comfortable shipping fast
- **Existing proof of concept:** Built a "How Well Do You Know Claude Code?" quiz game that got 380 plays organically. This is the seed for the entire business idea
- **Existing infrastructure:** Paid Vercel Pro ($20/mo) and paid Supabase Pro ($25/mo) accounts already active

---

## Key Files in the Workspace

| File | What It Is |
|------|-----------|
| `/Users/krgoyal/Desktop/YC/howwellyouknow-business-plan.md` | The WORKING document — 2,137 lines of iterative brainstorming, research, analysis, debate, and multiple rewrites. Contains all the raw thinking. NOT the clean plan |
| `/Users/krgoyal/Desktop/YC/howwellyouknow-final-plan.md` | The CLEAN final business plan — consolidated from all decisions. This is what a team reads. ~1,303 lines, 19 sections |
| `/Users/krgoyal/Desktop/YC/howwellyouknow-session-memory.md` | THIS file — the handoff document |

---

## What Happened in This Session (Chronological)

### Phase 1: Initial Research & Business Plan v1

**What we did:**
- Researched customer education market size, micro-learning platforms, competitors
- Identified the gap: enterprise LMS costs $10K+/year, nothing exists for mid-market ($49-149/mo)
- Built initial business plan with three delivery models (A: hosted page, B: embedded widget, C: hybrid)
- Chose Model C (Hybrid) as the approach
- Defined initial ICP: Head of CS at B2B SaaS (50-500 employees)

**Key decision:** The product should turn docs into interactive learning experiences, not just quizzes. Teaches first, then tests. This is the core differentiator.

### Phase 2: Complete Rewrite to v2

**What changed:**
- Reframed as a micro-learning pivot (not just a quiz tool)
- Added detailed landing page strategy, traffic funnel, ICP definition
- Added cold outreach messaging templates
- Added embed mechanics (iframe, hosted page, custom domain)
- Built out 4-phase execution plan

### Phase 3: Deep Competitive Research

**What we did:**
- Researched 25+ companies across 5 categories
- Categories: Interactive content/quiz builders, interactive demo platforms, customer education LMS, in-app onboarding, gamification/microlearning
- Found key data: involve.me does $24M revenue with 5 employees (proves unit economics), Skilljar acquired by Gainsight, WorkRamp acquired by Learning Pool

**Key finding:** Nobody occupies the exact intersection of teaches+tests, AI from docs, mid-market pricing, and embeddable. Every competitor misses at least 2 of these 4.

### Phase 4: Product Design Deep Dive

**What we did:**
- Detailed screen-by-screen walkthrough of a learning module (VWO example)
- Clarified that Challenge Mode and Learning Mode are ONE product with a toggle, not two separate modules
- Same content cards, different presentation order
- Designed card editor UI and dashboard concepts

**Key decision:** One set of content → two delivery modes. Company creates once, gets both `/play/company` (challenge) and `/learn/company` (learning) URLs automatically.

### Phase 5: Stress Testing the Idea

**What we analyzed:**
1. **Drop-off risk:** Will users complete a learn-then-test flow? Answer: Yes, because micro-learning (5 min) has 80%+ completion vs <12% for docs
2. **Docs usage:** Are docs used for education or just troubleshooting? Answer: Both, but education use cases exist (onboarding, certification, feature adoption)
3. **Will companies pay?** Honest answer: It's a vitamin for most, painkiller for some. The "some" are companies where churn from poor product understanding is a measurable cost
4. **Painkiller vs vitamin analysis:** Painkiller for companies with high onboarding costs, measurable churn from confusion, or compliance requirements

### Phase 6: Why 7taps Chose L&D Over Customer Education

**What we analyzed:**
- 7taps is the closest competitor (card-based microlearning) but chose employee L&D, not customer education
- 5 reasons: (1) L&D budgets are larger and more predictable, (2) L&D buyers have clearer authority, (3) compliance/mandatory training creates must-have demand, (4) L&D has established buying patterns, (5) customer education market is fragmented
- Bear case: 7taps saw customer education and rejected it — maybe they know something we don't
- Bull case: They chose L&D because it's easier to sell to, not because customer education doesn't work. Different market, different approach

**Key decision:** We acknowledge the risk but proceed because our approach (AI-powered, self-serve, $49-149/mo) is fundamentally different from what 7taps would have built for customer education.

### Phase 7: MVP Clarity — The Serial Entrepreneur Playbook

**The problem with the plan so far:**
- Too many modes, use cases, buyer personas, pricing tiers, features
- That's a Series A product, not an MVP
- A serial entrepreneur would say "pick ONE thing, prove it works"

**What we defined:**
- Exact features IN the MVP (game engine, scorecard, "Powered by" badge, homepage)
- Exact features NOT in the MVP (AI pipeline, dashboard, auth, editor, billing, embed, Learning Mode)
- 4 phases with kill criteria
- Decision frameworks for "should I build this?" and "should I keep going?"

### Phase 8: The "Traffic Goes Nowhere" Problem

**The problem:**
- Original Phase 1 focused on building games and distributing them
- But players who click "Powered by" and land on the homepage see... what? A pitch for a product that doesn't exist yet? A waitlist? There's nothing for them to DO
- Traffic → homepage → dead end

**The fix:**
- Homepage needs a clear offering: "Get Early Access" with pricing visible
- Mini-demo on homepage (3 cards, play inline, instant engagement)
- Cold outreach starts in parallel with distribution, not after
- Both channels run from Week 4 onward

### Phase 9: The Opinionated Rewrite (Serial Entrepreneur Voice)

**The big debate:**
- I (the AI) pushed hard for a "service-first" approach: sell done-for-you game creation at $500, prove revenue, then build SaaS
- User pushed back: doesn't want to look like a service company

**Where we agreed:**
1. Present as a product company from Day 1 (homepage = SaaS product)
2. Logo bar for credibility
3. Games grid with play buttons is the demo
4. Outreach emails use play data as social proof

**Where we disagreed (and the compromises):**

| Topic | User's View | My View | Resolution |
|-------|------------|---------|------------|
| Waitlist | Wants a waitlist to capture interest | Waitlist is a vanity metric; tests "will they type email?" not "will they pay?" | **Compromise:** "Get Early Access" with pricing visible. Captures email but person saw the price first. 10x more valuable than blind waitlist |
| Number of games | Wants 10-20 games | 7-8 is the sweet spot. Games 8-20 prove nothing new | **Compromise:** Build 7-8, add more IF creation is fast. Don't delay outreach for content |
| Quick homepage action | Wants users to "do something" on homepage | "Paste URL → preview" excites the founder, not visitors | **Compromise:** 3-card mini-demo on homepage. Zero friction, demonstrates product in 30 seconds |
| $500 done-for-you pricing on homepage | User hates it | I was wrong — $500 on homepage makes you look like a freelancer | **Agreement:** SaaS pricing on homepage ($49-149/mo). Manual delivery behind the scenes |
| Hypothesis testing order | User had a different order | Correct order: Play → Interest → Pay → Use → Retain (each depends on previous) | **Agreement:** Adopted correct order |

### Phase 10: Done-For-You Service Detail

**What we clarified:**
- The $500 done-for-you service is NOT on the homepage. It's what happens behind the scenes
- On the homepage: SaaS pricing ($49-149/mo)
- On the backend: you hand-build manually for the first 10-20 customers
- Customer thinks "AI generated this." Reality: you read their docs and hand-wrote 20 cards

**The value proposition:**
- Not "I built a quiz for you"
- Instead: "I can tell you which product features your customers don't understand — and give you a tool to fix it"
- The quiz is the mechanism. The insight is the value

### Phase 11: Technical Embedding Explanation

**What we clarified for Krishna's understanding:**
1. **Shared link** (default): Just a URL. `howwellyouknow.com/play/company`. 90% of early customers use this
2. **Iframe embed**: HTML snippet customer pastes on their site. Standard (Typeform, Calendly, YouTube all use this). Need to build `/embed/[slug]` route (stripped nav/footer)
3. **CNAME subdomain**: `learn.abc.com` → CNAME to your server. Vercel handles this natively. Phase 3-4
4. **Reverse proxy**: Customer wants game at `abc.com/path`. Customer configures their server. You just serve content. Phase 4, rare

### Phase 12: Final Plan v3 — The Compromise

**The final plan combines:**
- Product-first brand (Krishna's preference)
- Wizard of Oz manual delivery (my recommendation)
- 7-8 games (compromise)
- Early access with pricing visible (compromise)
- 3-card mini-demo on homepage (my suggestion, Krishna agreed)
- Cold outreach as primary revenue channel (my strong recommendation)
- Kill criteria at Week 8 (agreed)

### Phase 13: Document Creation & Rewrite

- Created `/Users/krgoyal/Desktop/YC/howwellyouknow-final-plan.md` — first version was ~500 lines, a compressed summary
- Created this file — session memory for handoff
- **User feedback:** "Still feels like the final plan is not in the shape. It's a little confusing. It talks about what we did wrong and all that bullshit. There are a lot more details that we discussed about each phase, what to do, how to do."
- **Complete rewrite:** Deleted the first version and rewrote from scratch. New version is **1,303 lines across 19 sections**. Includes:
  - Full screen-by-screen product walkthrough (TaskFlow example with ASCII wireframes)
  - VWO dashboard + card editor wireframes
  - Complete 5-category competitive landscape with 25+ companies and revenue data
  - Detailed 7taps comparison and why they chose L&D
  - Stress test with painkiller vs vitamin analysis
  - All 3 cold email templates + outreach cadence
  - Full homepage wireframe specification
  - 4 embedding methods with code examples
  - Detailed Phase 1-4 with response handling tables, what NOT to build, kill criteria
  - Technical architecture (Phase 1 and Phase 3 route maps)
  - Decision frameworks and week-by-week schedule
  - Cheat sheet
- **Removed:** All "What We Got Wrong" meta-commentary. The file is now purely forward-looking

---

## Critical Decisions Already Made (Do NOT Revisit)

These were debated extensively. A new agent should NOT reopen these discussions unless the user explicitly asks:

1. **Product-first brand, service backend.** Homepage = SaaS. Delivery = manual. Wizard of Oz
2. **"Get Early Access" with pricing visible, NOT a blind waitlist.** Price-qualified signups
3. **7-8 games, not 20.** 5 for traffic, 2-3 for outreach. More later if creation is fast
4. **3-card mini-demo on homepage, NOT "paste URL → preview."** Zero friction demonstration
5. **Cold outreach is the primary revenue channel.** Not organic. Not waitlist. Direct sales
6. **Kill criteria at Week 8.** 40 emails + 2K plays → 0 interest = pivot or kill
7. **Challenge Mode first, Learning Mode when a paying customer asks.** Don't build what nobody has requested
8. **$49/mo Pro, $149/mo Business.** Not $500 one-time on the homepage
9. **Dashboard is a mockup screenshot in Phase 1.** Don't build the actual dashboard until Phase 3
10. **AI generation pipeline is Phase 3.** Homepage SAYS "AI generates." Backend = you do it manually

---

## Important Strategic Notes (From Stress Testing)

### Messaging Pivot
During stress testing, we realized the positioning needed to shift:
- **Before:** "Turn your docs into a micro-learning experience" (implies docs = learning)
- **After:** "Turn your product into a 5-minute learning experience. We read your docs so your users don't have to."
- Docs are the INPUT source (raw material AI reads). The OUTPUT is a completely different format
- The input doesn't even need to be docs — could be blog posts, changelog, marketing pages, YouTube transcripts, or just a product URL

### The "Are We Making Them Do Something New?" Answer
No. Every B2B SaaS already does customer onboarding, docs, community content, marketing. They do it through boring docs, long videos, webinars nobody attends. We replace the delivery format, not the activity.

### Additional Revenue Streams (Discussed but Not Phase 1)
- **Sponsored games:** Companies pay to "own" a popular free game (e.g., howwellyouknow.com/figma sponsored by Figma)
- **Certification badges:** "Official" certification programs powered by the platform
- **Done-for-you premium:** $500-2,000 per hand-crafted experience (12-24hr delivery) — but NOT advertised on homepage

---

## What Has NOT Been Decided Yet

These are open items for the next session:

1. **Exact domain:** Is howwellyouknow.com registered? Available? Alternative domains?
2. **Exact game content:** The 20 cards per game need to be written. No content has been created yet (except the existing Claude Code game)
3. **Homepage copy:** The exact words, headlines, CTA text need to be written
4. **Dashboard mockup:** Needs to be designed in Figma or as a clean HTML page
5. **Scorecard design:** The shareable image format needs to be designed
6. **Email collection tool:** Airtable? Supabase table? Something else?
7. **Analytics setup:** Plausible vs Vercel Analytics — need to decide
8. **Cold outreach target list:** Specific companies to build games for and email
9. **Product Hunt launch strategy:** When to launch, which games to feature
10. **YC Startup School application:** Answers still need to be written (TODO item #5)
11. **Game selection for Tier 2-3:** Beyond the initial 7-8, which tools to build for next (HubSpot, Linear, Supabase, Slack, GitHub Copilot, Perplexity discussed as candidates)

---

## What the Existing Claude Code Game Looks Like

The proof of concept lives at a different path (Cursor for Product Managers project). Key details:
- Built in Next.js
- Card-based quiz with multiple game formats (truth or myth, this or that, speed round, scenarios)
- Has a scorecard page with results
- Got 380 plays organically
- Has "Powered by" branding and a Product Hunt badge
- The codebase is at `/Users/krgoyal/Desktop/Cursor for Product Managers/claude-code-skills/`
- This needs to be migrated/adapted to the new howwellyouknow.com domain and refactored to use JSON configs instead of hardcoded content

---

## Technical Notes for the Next Agent

### The Game Engine Refactor (Phase 1, First Task)
The current Claude Code game has hardcoded content. The new engine should:
1. Read from a JSON config file per game
2. Render the same UI/animations regardless of which game
3. Support all card types (lesson, truth-or-myth, this-or-that, speed, scenario)
4. Support theming (brand colors, logo per game)
5. Routes: `/play/[slug]` and `/embed/[slug]`

### The Homepage (Phase 1, Second Task)
- Hero with inline 3-card mini-demo (NOT a URL input)
- Logo bar (tools you've built games for)
- "How it Works" section with dashboard mockup screenshot
- Pricing table (Free / $49 Pro / $149 Business)
- "Get Early Access — 50% off" CTA → email collection with pricing context
- Separate `/play` route with grid of all games

### The Scorecard (Phase 1, Critical)
- Downloadable/shareable image
- Shows: score, archetype name, radar chart of strengths/weaknesses, company branding
- THIS is the viral mechanic. Non-negotiable. Must be optimized for LinkedIn/X sharing

### The "Powered by" Badge (Phase 1, Critical)
- Appears on every game page
- Links to homepage
- This is the organic growth loop. Every game play = a brand impression

---

## User's Communication Style & Preferences

- **Wants honest, opinionated answers.** "Don't be politically correct. Tell me what you actually think."
- **Thinks big but needs grounding.** Will propose building 20 things; needs to be focused on what matters NOW
- **Respects pushback.** Explicitly asked for co-founder-level disagreement. Changed his mind on several points when given strong arguments
- **Visual thinker.** Responds well to ASCII diagrams, tables, comparison charts
- **Moves fast.** Wants to start building this weekend. Doesn't want analysis paralysis
- **Sensitive about service framing.** Does NOT want to look like a freelancer or agency. Everything must feel like a product company
- **Working alongside a job.** At Cisco. Side project should be framed as weekend/personal time work, not "last week" (manager sees LinkedIn)

---

## Remaining TODO Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| 4 | Product Hunt research: identify top emerging technologies for open source games | Medium | Pending |
| 5 | Write YC Startup School application answers | High | Pending |

---

## Summary for the Next Agent

**You are picking up a project called "How Well You Know."** It's a B2B SaaS micro-learning platform. The strategy is fully decided. The user wants to START BUILDING.

**Read these files first:**
1. `/Users/krgoyal/Desktop/YC/howwellyouknow-final-plan.md` — the clean business plan (everything decided)
2. This file — for context on WHY decisions were made

**The immediate next step is:** Build Phase 1. Game engine + 7-8 games + homepage + scorecard + "Powered by" badge. All on howwellyouknow.com. Next.js on Vercel. The existing Claude Code game codebase is at `/Users/krgoyal/Desktop/Cursor for Product Managers/claude-code-skills/` and should be adapted/migrated.

**Do not:** Reopen strategic debates. Do not suggest changes to the plan unless the user asks. Do not propose building features marked as Phase 3+. Focus on Phase 1 execution.
