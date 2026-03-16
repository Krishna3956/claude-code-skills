import type { QuizConfig } from "@/components/quiz/types";

const clazarLogo = (
  <img
    src="/logos/clazar.svg"
    alt="Clazar"
    width={156}
    height={38}
    style={{ objectFit: "contain" }}
  />
);

export const clazarConfig: QuizConfig = {
  slug: "clazar",
  toolName: "Clazar",
  tagline: "5 rounds. ~3 min. No cloud-marketplace login required.",
  subtitle:
    "Built for operators who actually run marketplace revenue. CPPOs, co-sell execution, Buyer 360, Salesforce-native workflow, and cross-cloud offer ops.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#FF7748",
  accentColorDim: "#E05D2F",
  accentColorSubtle: "rgba(255,119,72,0.12)",
  bgColor: "#FFF8F4",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#FFF0E8",
  textColor: "#111827",
  textSecondary: "#4B5563",
  textTertiary: "#6B7280",
  borderColor: "#F7C7B6",
  borderSubtle: "#FDE6DD",
  scorecardBg: "#1F1511",
  scorecardAccentColor: "#FF9A72",
  scorecardDivider: "#4D3329",
  scorecardLabelColor: "#E9C9BC",
  scorecardGridColor: "#4D3329",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#F7C7B6",
  ctaTextColor: "#FFFFFF",
  logo: clazarLogo,
  scorecardLogo: (
    <img
      src="/logos/clazar.svg"
      alt="Clazar"
      width={142}
      height={34}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "clazar",
  dimensionLabels: {
    memory: "Marketplace Core",
    orchestration: "Offer Ops",
    automation: "Co-Sell Flow",
    extensibility: "CRM Surface",
    workflows: "Buyer Journey",
    prompting: "Partner Motion",
    bestPractices: "Cloud GTM Judgment",
  },
  archetypes: [
    {
      title: "Cloud GTM Operator",
      emoji: "☁️",
      description:
        "You think in partner, marketplace, CRM, and revenue-system handoffs as one motion. That is how serious marketplace teams actually operate.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Marketplace Architect",
      emoji: "🏗️",
      description:
        "You have strong command of CPPOs, co-sell, buyer tracking, and CRM-native execution. A few sharper calls move you into operator-top-tier territory.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Revenue Motion Builder",
      emoji: "📈",
      description:
        "You understand the mechanics well. The next step is tightening how partner-sourced pipeline, private offers, and systems orchestration fit together.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Marketplace Manager",
      emoji: "🧭",
      description:
        "You know the flow, though some of the harder operator distinctions across co-sell, buyer visibility, and execution surfaces still blur occasionally.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Offer Runner",
      emoji: "📄",
      description:
        "You can get deals over the line, but the full cloud-revenue operating model has not become second nature yet.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Pipeline Chaser",
      emoji: "🏃",
      description:
        "You know the broad categories, but the difference between systems of record and systems of coordination still needs sharpening.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Marketplace Rep",
      emoji: "🌱",
      description:
        "You are early. The next layer is understanding how Clazar ties listings, offers, co-sell, and CRM execution into one operating system.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "orchestration",
      statement:
        "Clazar is a unified platform for listing, managing, and co-selling across AWS, Azure, and GCP marketplaces",
      isTrue: true,
      explanation:
        "That is core to the product framing. The value is not just single-cloud tooling, but a unified operating layer across hyperscaler marketplaces.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "workflows",
      statement:
        "Buyer 360 is basically a post-close dashboard, so it is not meant to help teams reason about active buyer progression during marketplace deals",
      isTrue: false,
      explanation:
        "That is false. Buyer 360 is positioned around buyer visibility and journey context, which matters before the deal is closed, not just after it.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "extensibility",
      scenario:
        "Your sellers refuse to leave Salesforce just to manage private offers and marketplace status. Which move is stronger?",
      optionA: "Adopt Clazar's Salesforce Experience so marketplace execution stays inside the CRM surface reps already use",
      optionB: "Keep CRM as a summary system and run the real workflow in inboxes plus a side spreadsheet",
      correct: "A",
      explanation:
        "Clazar explicitly offers Salesforce Experience because operator-grade adoption happens when marketplace execution stays CRM-native rather than detached from pipeline.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "automation",
      scenario:
        "A deal depends on partner participation, a private offer, and clean co-sell reporting. Which move is stronger?",
      optionA: "Break the motion across email threads, partner notes, and manual status updates after the fact",
      optionB: "Run the workflow through a system built to coordinate co-sell, approval steps, and marketplace execution end to end",
      correct: "B",
      explanation:
        "This is exactly where Clazar is strongest. The hard part is not knowing the terms; it is keeping the motion operationally coherent across teams and systems.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "prompting",
      scenario:
        "Which Clazar surface is specifically framed around automating partner and hyperscaler co-sell motion from opportunity creation to closure?",
      blank: "Co-Sell Automation",
      options: ["Buyer 360", "Co-Sell Automation", "Metering"],
      explanation:
        "That is the exact product surface. Clazar separates co-sell orchestration from broader marketplace management because it is a distinct operational motion.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "workflows",
      scenario:
        "Which Clazar feature is explicitly about seeing the buyer's marketplace journey, not just internal team status?",
      blank: "Buyer 360",
      options: ["Offer Management", "Analytics", "Buyer 360"],
      explanation:
        "Buyer 360 is the buyer-context layer. It is not just internal workflow telemetry; it is intended to help teams understand the buyer path itself.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "memory",
      prompt: "Tap every real Clazar product surface or feature family!",
      correctItems: ["Listing", "Offer Management", "Metering", "Buyer 360", "Analytics"],
      wrongItems: ["Feature flag SDK", "Warehouse routing", "GPU scheduler", "Design system tokens"],
      timeLimit: 15,
      explanation:
        "Those are the real marketplace-automation surfaces Clazar calls out. The others belong to entirely different categories of software.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "bestPractices",
      prompt: "Tap every workflow a serious Clazar operator should want out of email-chaos mode!",
      correctItems: ["Private offers", "CPPOs", "Co-sell execution", "Marketplace pipeline tracking"],
      wrongItems: ["Laptop procurement", "Office seating", "Graphic design reviews", "Payroll approvals"],
      timeLimit: 15,
      explanation:
        "Clazar's value is strongest where revenue teams are otherwise stitching together partner-led cloud workflows manually.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a serious cloud-marketplace operating instinct. Which one?",
      items: [
        "Keep CRM and marketplace workflow connected",
        "Track buyer movement and offer execution in one system",
        "Let CPPO and private-offer status live in disconnected inbox threads forever",
        "Automate repetitive marketplace handoffs wherever possible",
      ],
      oddItem: "Let CPPO and private-offer status live in disconnected inbox threads forever",
      explanation:
        "That is the weak move. Clazar exists because high-value marketplace motions break down when they remain email-native and system-disconnected.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "extensibility",
      prompt:
        "One of these is NOT a Clazar enterprise or integration surface mentioned on the site. Which one?",
      items: [
        "Salesforce Experience",
        "Automation Builder",
        "API",
        "Mobile MDM console",
      ],
      oddItem: "Mobile MDM console",
      explanation:
        "Salesforce Experience, Automation Builder, and API are all real Clazar surfaces. A mobile-device-management console is not part of this product.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Operator reality or marketplace fiction?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Choose the scalable execution move" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Name the exact Clazar surface" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real operating categories" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the weak marketplace instinct" },
  ],
};
