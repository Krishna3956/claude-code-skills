import type { QuizConfig } from "@/components/quiz/types";

const clazarLogo = (
  <img
    src="/logos/clazar.png"
    alt="Clazar"
    width={156}
    height={38}
    style={{ objectFit: "contain" }}
  />
);

export const clazarConfig: QuizConfig = {
  slug: "clazar",
  toolName: "Clazar",
  tagline: "5 rounds. ~3 min. No marketplace console required.",
  subtitle:
    "Medium difficulty for serious cloud GTM operators. Private offers, CPPOs, co-sell orchestration, buyer tracking, and CRM-first marketplace workflows.",
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
      src="/logos/clazar.png"
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
        "You think across listings, offers, co-sell, buyer movement, and revenue systems as one operating layer. That is how strong marketplace teams actually run.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Marketplace Architect",
      emoji: "🏗️",
      description:
        "You understand the moving parts well: CPPOs, partner-sourced revenue, CRM sync, and the workflows that keep cloud pipeline from turning into manual chaos.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Revenue Motion Builder",
      emoji: "📈",
      description:
        "You have strong Clazar instincts. A few sharper calls around systems design and partner-led execution would move you into the top tier.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Marketplace Manager",
      emoji: "🧭",
      description:
        "You know the flow of cloud marketplace operations, though some of the deeper automation and attribution mechanics still need tightening.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Offer Runner",
      emoji: "📄",
      description:
        "You can get important workflows over the line, but the full multi-team operating model is not fully mapped yet.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Pipeline Chaser",
      emoji: "🏃",
      description:
        "You know the broad story, but the practical differences between listing, private offer, co-sell, and buyer visibility still blur together sometimes.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Marketplace Rep",
      emoji: "🌱",
      description:
        "You are early. The next layer is understanding how Clazar connects cloud marketplaces, CRM workflows, and partner motions into one system.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "memory",
      statement:
        "Clazar positions itself as a unified platform for listing, managing, and co-selling across AWS, Azure, and GCP marketplaces",
      isTrue: true,
      explanation:
        "That is the core product framing on their site: one cloud-sales operating layer across the major hyperscaler marketplaces.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "automation",
      statement:
        "Clazar only handles post-sale reporting, so private offers and co-sell workflows still have to be run manually outside the product",
      isTrue: false,
      explanation:
        "That is false. Clazar explicitly sells marketplace automation and co-sell automation, not just passive reporting after the fact.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "extensibility",
      scenario:
        "Your sales team already lives in Salesforce and wants to manage marketplace motions without context-switching. Which move is stronger?",
      optionA: "Use Clazar's Salesforce Experience so private offers and co-sell motion can stay CRM-native",
      optionB: "Force the team to manage everything in separate spreadsheets and paste status back into CRM later",
      correct: "A",
      explanation:
        "Clazar explicitly offers a Salesforce Experience because marketplace workflow adoption is much stronger when reps can operate where pipeline already lives.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "orchestration",
      scenario:
        "A partner-led deal needs a CPPO plus clean tracking across approval and closure. Which move is stronger?",
      optionA: "Treat the CPPO as an email-only side process disconnected from the rest of the deal",
      optionB: "Run the offer through a system that tracks, routes, and manages partner-linked marketplace workflow end to end",
      correct: "B",
      explanation:
        "CPPOs are exactly the sort of multi-step motion that break when they live only in inboxes. Clazar's value is operationalizing that flow, not just documenting it afterward.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "workflows",
      scenario:
        "Which Clazar feature is explicitly about understanding the buyer's path across the marketplace journey?",
      blank: "Buyer 360",
      options: ["Metering", "Buyer 360", "Trust Center"],
      explanation:
        "Buyer 360 is the buyer-journey visibility surface in Clazar's marketplace automation stack.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "prompting",
      scenario:
        "Which Clazar product surface is designed to automate co-sell from opportunity creation to closure?",
      blank: "Co-Sell Automation",
      options: ["Analytics", "Listing", "Co-Sell Automation"],
      explanation:
        "That is Clazar's direct product framing for partner and hyperscaler-driven co-sell execution.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "memory",
      prompt: "Tap every real Clazar marketplace-automation feature!",
      correctItems: ["Listing", "Offer Management", "Metering", "Buyer 360", "Analytics"],
      wrongItems: ["Design tokens", "Video rendering", "Payroll sync", "Warehouse routing"],
      timeLimit: 15,
      explanation:
        "Those are all real Clazar feature surfaces under marketplace automation. The others belong to unrelated systems.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "automation",
      prompt: "Tap every workflow Clazar is clearly built to reduce manual chaos around!",
      correctItems: ["Private offers", "CPPOs", "Co-sell execution", "Marketplace pipeline tracking"],
      wrongItems: ["Graphic design reviews", "Payroll approvals", "Laptop inventory", "Office seating"],
      timeLimit: 15,
      explanation:
        "Clazar is a cloud GTM operations system. Its strongest value comes from reducing manual coordination around marketplace and partner revenue workflows.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a strong Clazar-style cloud GTM instinct. Which one?",
      items: [
        "Keep CRM and marketplace workflow connected",
        "Track buyer progress and revenue motion in one system",
        "Let private offers and co-sell stages live in disconnected inbox threads forever",
        "Automate repetitive marketplace operations wherever possible",
      ],
      oddItem: "Let private offers and co-sell stages live in disconnected inbox threads forever",
      explanation:
        "That is the weak move. Clazar exists because manual email orchestration does not scale once cloud revenue becomes a real channel.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "extensibility",
      prompt:
        "One of these is NOT a Clazar enterprise or systems surface mentioned on their site. Which one?",
      items: [
        "Salesforce Experience",
        "Automation Builder",
        "API",
        "Native Figma plugin",
      ],
      oddItem: "Native Figma plugin",
      explanation:
        "Salesforce Experience, Automation Builder, and API are all real Clazar surfaces. A native Figma plugin is not part of this product shape.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Cloud GTM reality or made-up marketplace lore?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Pick the scalable operating move" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Name the exact Clazar surface" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real workflow categories" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the bad cloud-GTM instinct" },
  ],
};
