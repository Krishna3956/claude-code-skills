import type { QuizConfig } from "@/components/quiz/types";

export const rotorisConfig: QuizConfig = {
  slug: "rotoris",
  toolName: "Rotoris",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "A luxury watch challenge inspired by Rotoris craftsmanship.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#D2AF6D",
  accentColorDim: "#B7924D",
  accentColorSubtle: "rgba(210,175,109,0.14)",
  bgColor: "radial-gradient(120% 120% at 12% 0%, #2A2115 0%, #110E0A 42%, #070605 100%)",
  bgElevated: "#14120F",
  bgSurface: "#12100D",
  bgSurfaceLight: "#1B1814",
  textColor: "#F6F0E5",
  textSecondary: "#D8CCB8",
  textTertiary: "#B4A58C",
  borderColor: "#3B3326",
  borderSubtle: "#2A241C",
  scorecardBg: "#0A0908",
  scorecardAccentColor: "#D7B475",
  scorecardDivider: "#362D21",
  scorecardLabelColor: "#C8B8A0",
  scorecardGridColor: "#362D21",
  navbarTheme: "dark",
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
    memory: "Brand Signature",
    orchestration: "Complications",
    automation: "Movement & Build",
    extensibility: "Materials & Finish",
    workflows: "Ownership Journey",
    prompting: "Model Precision",
    bestPractices: "Collector Judgment",
  },
  archetypes: [
    {
      title: "Rotoris Connoisseur",
      emoji: "⌚",
      description:
        "You read Rotoris like a collector: design language, movement details, complications, and ownership policies all click.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Horology Insider",
      emoji: "🏆",
      description:
        "You understand Rotoris beyond surface aesthetics and can clearly distinguish models and watchmaking choices.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Collection Strategist",
      emoji: "🧠",
      description:
        "Strong grasp of the lineup and key specs. A few advanced details separate you from full expert territory.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Watch Explorer",
      emoji: "📚",
      description:
        "You know the Rotoris story and major product differences, with room to sharpen deeper technical recall.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Spec Reader",
      emoji: "🛠️",
      description:
        "You can compare models confidently, but finer complication and movement details still need repetition.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Rising Enthusiast",
      emoji: "🌱",
      description:
        "You have the right foundation and can level up fast by spending more time with model-level detail.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Tick",
      emoji: "✨",
      description:
        "Good start. You now have a premium-basics lens for understanding Rotoris.",
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
        "Rotoris positions itself as a modern mechanical watch brand in India that blends timeless horology with modern design",
      isTrue: true,
      explanation:
        "This is core Rotoris brand positioning on the site, framing craftsmanship plus contemporary design language.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "extensibility",
      statement:
        "Rotoris product pages highlight sapphire crystal and 316L stainless steel as part of their premium build story",
      isTrue: true,
      explanation:
        "Those material callouts are repeatedly used to signal durability and elevated watch construction.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "Monarch is presented as a complication-forward model with moonphase, date, and power reserve",
      isTrue: true,
      explanation:
        "Rotoris positions Monarch around that multi-complication experience, distinct from simpler layouts.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Rotoris guarantees next-day delivery because every watch is pre-built and ready to ship",
      isTrue: false,
      explanation:
        "Rotoris states watches are assembled after order and typically delivered in around 2-3 weeks.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "orchestration",
      scenario:
        "A buyer wants a dial story with moonphase and power reserve. Which Rotoris direction is stronger?",
      optionA: "Monarch",
      optionB: "Arvion",
      correct: "A",
      explanation:
        "Monarch is the line Rotoris pairs with moonphase/date/power-reserve functionality.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "automation",
      scenario:
        "A collector values seeing movement mechanics through the back. Which detail should you point to?",
      optionA: "Exhibition caseback",
      optionB: "Sealed opaque back with no movement view",
      correct: "A",
      explanation:
        "Rotoris FAQ content for automatic models references exhibition caseback visibility.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "workflows",
      scenario:
        "A customer wants to cancel after placing an order. Which advice matches Rotoris policy?",
      optionA: "Request cancellation before shipping",
      optionB: "Cancel anytime after shipment starts",
      correct: "A",
      explanation:
        "Rotoris policy messaging states cancellation requests are accepted before shipping.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "prompting",
      scenario: "What case size is listed for Auriqua Ocean Blue?",
      blank: "42mm",
      options: ["42mm", "40mm", "36mm"],
      explanation:
        "Auriqua Ocean Blue is listed with a 42mm size in Rotoris product data.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "prompting",
      scenario: "Which Rotoris line is framed around a single-hand concept?",
      blank: "Arvion",
      options: ["Arvion", "Monarch", "Auriqua"],
      explanation:
        "Arvion product storytelling emphasizes the single-hand identity.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "automation",
      scenario: "Which movement is referenced in Arvion FAQ content?",
      blank: "Seiko TMI VJ34",
      options: ["Seiko TMI VJ34", "ETA 2824", "Miyota 9015"],
      explanation:
        "Arvion FAQ content names Seiko TMI VJ34.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "memory",
      prompt: "Tap every authentic Rotoris premium cue!",
      correctItems: [
        "Modern mechanical watch brand",
        "Timeless horology + modern design",
        "Sapphire crystal",
        "316L stainless steel",
      ],
      wrongItems: ["Plastic resin case", "Disposable quartz movement", "Digital smartwatch UI", "Rubberized toy bezel"],
      timeLimit: 15,
      explanation:
        "These cues match Rotoris' premium positioning language and product material claims.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "orchestration",
      prompt: "Tap every detail associated with Monarch on Rotoris pages!",
      correctItems: ["Moonphase", "Date", "Power reserve", "40mm"],
      wrongItems: ["Tourbillon", "GMT hand", "Solar charging", "Dive bezel"],
      timeLimit: 15,
      explanation:
        "Rotoris positions Monarch around moonphase/date/power-reserve and 40mm sizing, not those unrelated features.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "prompting",
      prompt: "One model-size pairing is wrong. Which one?",
      items: [
        "Auriqua Ocean Blue - 42mm",
        "Monarch Silver Black - 40mm",
        "Arvion Burgundy Gold - 39.5mm",
        "Monarch Silver Black - 46mm",
      ],
      oddItem: "Monarch Silver Black - 46mm",
      explanation:
        "Monarch Silver Black is listed at 40mm.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "workflows",
      prompt: "Which statement does NOT match Rotoris ownership policy messaging?",
      items: [
        "Cancellation is available before shipping",
        "Refunds are initiated on the same working day once approved",
        "Watches are assembled after order",
        "All orders are guaranteed next-day delivery",
      ],
      oddItem: "All orders are guaranteed next-day delivery",
      explanation:
        "Rotoris messaging indicates 2-3 week delivery due to post-order assembly.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "automation",
      statement:
        "Auriqua FAQ content references automatic movement code RSGA01 and mentions manual winding support",
      isTrue: true,
      explanation:
        "Rotoris Auriqua FAQ details include movement code RSGA01 and manual winding behavior.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Brand signal or false claim?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the luxury-correct answer" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Model-level precision" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Collector instincts only" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the mismatch" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "Deep-cut movement check" },
  ],
};
