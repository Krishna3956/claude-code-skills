import type { QuizConfig } from "@/components/quiz/types";

export const rotorisConfig: QuizConfig = {
  slug: "rotoris",
  toolName: "Rotoris",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "Just you vs. Rotoris trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#C9A45D",
  accentColorDim: "#AB8746",
  accentColorSubtle: "rgba(201,164,93,0.14)",
  bgColor: "linear-gradient(160deg, #070707 0%, #0E0C0A 48%, #15100A 100%)",
  bgElevated: "#141312",
  bgSurface: "#11100F",
  bgSurfaceLight: "#1C1916",
  textColor: "#F6F0E5",
  textSecondary: "#D2C7B4",
  textTertiary: "#AA9F8C",
  borderColor: "#3A3328",
  borderSubtle: "#2A251D",
  scorecardBg: "#0A0908",
  scorecardAccentColor: "#D9B06B",
  scorecardDivider: "#332B20",
  scorecardLabelColor: "#BFAF97",
  scorecardGridColor: "#332B20",
  logo: (
    <img
      src="/logos/rotoris.png"
      alt="Rotoris"
      width={44}
      height={44}
      style={{ borderRadius: 12, objectFit: "contain" }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/rotoris.png"
      alt="Rotoris"
      width={42}
      height={42}
      style={{ borderRadius: 12, objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "rotoris",
  dimensionLabels: {
    memory: "Brand Basics",
    orchestration: "Collections",
    automation: "Movement Details",
    extensibility: "Materials",
    workflows: "Order Journey",
    prompting: "Model Specs",
    bestPractices: "Buyer Accuracy",
  },
  archetypes: [
    {
      title: "Rotoris Connoisseur",
      emoji: "⌚",
      description:
        "You know Rotoris deeply across collections, complications, movements, and policy-level details.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Horology Insider",
      emoji: "🏆",
      description:
        "Strong command of Rotoris product language and model distinctions. Only a few expert details remain.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Collection Strategist",
      emoji: "🧠",
      description:
        "You understand the model lineup and core watch specs well, including key movement and size differences.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Watch Explorer",
      emoji: "📚",
      description:
        "You can navigate Rotoris confidently, with room to sharpen advanced detail recall.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Spec Reader",
      emoji: "🛠️",
      description:
        "You know the fundamentals and can compare models, but deeper movement and complication knowledge is still building.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Rising Enthusiast",
      emoji: "🌱",
      description:
        "You are getting familiar with Rotoris, but detailed product distinctions need more reps.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Tick",
      emoji: "✨",
      description:
        "Good start. You now have a baseline to explore Rotoris collections with more confidence.",
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
        "Rotoris describes itself as a modern mechanical watch brand rooted in India",
      isTrue: true,
      explanation:
        "Rotoris positioning on its website highlights modern mechanical watchmaking with an India-based identity.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "prompting",
      statement: "Every Rotoris watch listed on the site has a 42mm case size",
      isTrue: false,
      explanation:
        "Rotoris lineup includes multiple sizes such as 39.5mm (Arvion), 40mm (Monarch), and 42mm (Auriqua variants).",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "workflows",
      statement:
        "Rotoris states that watches are assembled after ordering and usually delivered in around 2-3 weeks",
      isTrue: true,
      explanation:
        "Rotoris shipping information notes build-after-order processing and a typical 2-3 week delivery window.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Rotoris says order cancellations are guaranteed even after the watch has already shipped",
      isTrue: false,
      explanation:
        "Rotoris cancellation policy states cancellations are possible before shipping, not as a guaranteed post-shipment path.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "extensibility",
      scenario:
        "You are comparing crystal choices for better scratch resistance. Which material aligns with Rotoris specs?",
      optionA: "Sapphire crystal",
      optionB: "Acrylic crystal",
      correct: "A",
      explanation:
        "Rotoris product messaging repeatedly calls out sapphire crystal across its watches.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "orchestration",
      scenario:
        "You want moonphase plus date plus power reserve in one Rotoris model. Which direction is better?",
      optionA: "Pick a Monarch variant",
      optionB: "Pick an Arvion variant",
      correct: "A",
      explanation:
        "Monarch is positioned with moonphase, date, and power reserve complications on its product pages.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "workflows",
      scenario:
        "A buyer asks when to request cancellation. Which guidance matches Rotoris policy?",
      optionA: "Cancel before shipment",
      optionB: "Cancel anytime after delivery starts",
      correct: "A",
      explanation:
        "Rotoris policy language states cancellation requests must happen before shipping.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "prompting",
      scenario: "What case size is listed for Auriqua Ocean Blue?",
      blank: "42mm",
      options: ["42mm", "36mm", "44mm"],
      explanation:
        "Auriqua Ocean Blue product short info lists a 42mm case size.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "orchestration",
      scenario: "Which Rotoris model line is positioned as a single-hand watch?",
      blank: "Arvion",
      options: ["Arvion", "Monarch", "Astonia Sports"],
      explanation:
        "Arvion product details position it around a single-hand concept.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "automation",
      scenario: "Which movement does Rotoris mention in Arvion FAQ content?",
      blank: "Seiko TMI VJ34",
      options: ["Seiko TMI VJ34", "Miyota 8215", "Sellita SW200"],
      explanation:
        "Arvion FAQ content references Seiko TMI VJ34 as its movement.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "orchestration",
      prompt: "Tap every feature Rotoris highlights for Monarch!",
      correctItems: ["Moonphase", "Date", "Power reserve", "40mm case"],
      wrongItems: ["Digital alarm", "GMT bezel", "Solar charging", "Chronograph pushers"],
      timeLimit: 15,
      explanation:
        "Monarch product content highlights moonphase, date, power reserve, and 40mm sizing. The wrong items are not listed Monarch features.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "extensibility",
      prompt: "Tap every Rotoris material or construction detail shown on product pages!",
      correctItems: [
        "Sapphire crystal",
        "316L stainless steel",
        "Exhibition caseback",
        "Manual winding on automatic models",
      ],
      wrongItems: ["Plastic case", "Acrylic crystal", "Silicon dial", "Carbon nanotube bezel"],
      timeLimit: 15,
      explanation:
        "Rotoris pages and FAQs call out sapphire crystal, 316L steel, exhibition caseback, and manual winding support on automatic models.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "prompting",
      prompt: "One model-size pairing below is incorrect. Which one?",
      items: [
        "Auriqua Ocean Blue - 42mm",
        "Monarch Silver Black - 40mm",
        "Arvion Burgundy Gold - 39.5mm",
        "Monarch Silver Black - 46mm",
      ],
      oddItem: "Monarch Silver Black - 46mm",
      explanation:
        "Monarch Silver Black is listed at 40mm, not 46mm.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "workflows",
      prompt: "One statement conflicts with Rotoris order/refund messaging. Which one?",
      items: [
        "Cancellation can be requested before shipping",
        "Refunds are initiated same working day once approved",
        "Watches are assembled after order",
        "All orders are guaranteed next-day delivery",
      ],
      oddItem: "All orders are guaranteed next-day delivery",
      explanation:
        "Rotoris states a made-after-order process with typical 2-3 week delivery, not guaranteed next-day shipping.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "automation",
      statement:
        "Auriqua FAQ content references an automatic movement code RSGA01 and mentions an exhibition caseback",
      isTrue: true,
      explanation:
        "Auriqua FAQ details include movement code RSGA01 and call out exhibition caseback viewing.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Real claim or fake flex?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Choose the smarter spec" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name that model detail" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Tap fast, think precise" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the mismatch" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Deep cut." },
  ],
};
