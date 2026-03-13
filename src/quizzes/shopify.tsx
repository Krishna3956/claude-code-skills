import type { QuizConfig } from "@/components/quiz/types";

const shopifyLogo = (
  <img
    src="/logos/shopify.svg"
    alt="Shopify"
    width={148}
    height={42}
    style={{ objectFit: "contain" }}
  />
);

export const shopifyConfig: QuizConfig = {
  slug: "shopify",
  toolName: "Shopify",
  tagline: "6 rounds. ~3 min. No admin access required.",
  subtitle: "Medium difficulty leaning sharp. Platform fluency, not theme-store trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#95BF47",
  accentColorDim: "#6F9D2C",
  accentColorSubtle: "rgba(149,191,71,0.12)",
  bgColor: "#F4F8EE",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EDF5DF",
  textColor: "#111827",
  textSecondary: "#4B5563",
  textTertiary: "#6B7280",
  borderColor: "#D7E4BC",
  borderSubtle: "#E7F0D8",
  scorecardBg: "#0F1F0F",
  scorecardAccentColor: "#C9F17D",
  scorecardDivider: "#294129",
  scorecardLabelColor: "#B5CAA5",
  scorecardGridColor: "#294129",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#D7E4BC",
  ctaTextColor: "#0F172A",
  logo: shopifyLogo,
  scorecardLogo: (
    <img
      src="/logos/shopify.svg"
      alt="Shopify"
      width={132}
      height={37}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "shopify",
  dimensionLabels: {
    memory: "Commerce Core",
    orchestration: "Store Architecture",
    automation: "Merchant Automation",
    extensibility: "Apps & APIs",
    workflows: "Catalog Operations",
    prompting: "Checkout & Content",
    bestPractices: "Production Judgment",
  },
  archetypes: [
    {
      title: "Platform Operator",
      emoji: "🛍️",
      description:
        "You understand Shopify as an operating system for storefronts, checkout, catalog, and merchant workflows rather than just a theme with products.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Commerce Architect",
      emoji: "🏗️",
      description:
        "You can make strong product and implementation decisions across content, checkout, data modeling, and international commerce.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Store Systems Builder",
      emoji: "⚙️",
      description:
        "You know the important Shopify surfaces. A few deeper calls around extensibility and operational discipline still separate you from top-tier fluency.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Merchant Engineer",
      emoji: "📦",
      description:
        "You can work productively in Shopify, though some of the platform-level distinctions still need sharper instincts.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Theme Tactician",
      emoji: "🎨",
      description:
        "You know how stores look and ship, but not every data, automation, or extensibility layer is fully mapped yet.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Catalog Handler",
      emoji: "🧾",
      description:
        "You have the basic shape of the platform, but your model is still more storefront-level than system-level.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Merchant",
      emoji: "🌱",
      description:
        "You know Shopify exists. The next layer is understanding how checkout, data modeling, automation, and markets fit together.",
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
        "Shopify Markets can localize a store across things like languages, international pricing, and market-specific domains or subfolders",
      isTrue: true,
      explanation:
        "Markets is the layer Shopify uses to shape localized buyer experiences across regions, URLs, and pricing contexts.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "automation",
      statement:
        "Cart and Checkout Validation Functions can enforce checkout rules server-side, including for express checkouts",
      isTrue: true,
      explanation:
        "Validation Functions run server-side in checkout and are the supported way to enforce these rules across supported checkout paths, including express checkouts.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "extensibility",
      statement:
        "Metaobjects are just another name for metafields, so there is no real difference between them",
      isTrue: false,
      explanation:
        "Metafields extend existing resources with custom fields. Metaobjects create standalone structured content types that can be referenced and reused.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "prompting",
      statement:
        "Checkout UI extensions can freely inject arbitrary HTML and override checkout CSS however the app wants",
      isTrue: false,
      explanation:
        "Checkout UI extensions run in a constrained sandbox with platform components and APIs, not full DOM or CSS takeover.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "extensibility",
      scenario:
        "You need reusable structured content for a headless storefront, and that content must be queriable cleanly instead of duplicated across products. Which move is stronger?",
      optionA: "Model it as metaobjects and expose storefront access intentionally where needed",
      optionB: "Scatter plain text blobs across product descriptions and parse them later",
      correct: "A",
      explanation:
        "Metaobjects are the right model for reusable structured content. If headless storefront access is needed, you expose that intentionally instead of relying on duplicated text.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "prompting",
      scenario:
        "A merchant needs custom behavior inside checkout. Which path is stronger?",
      optionA: "Use checkout extensibility like UI extensions or Functions",
      optionB: "Hack the checkout DOM directly with arbitrary scripts",
      correct: "A",
      explanation:
        "Shopify wants checkout customization to happen through supported extension surfaces, not brittle DOM hacks.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "workflows",
      scenario:
        "A merchant sells internationally and wants different buyer experiences by region. Which move is stronger?",
      optionA: "Use Shopify Markets to configure localized selling contexts",
      optionB: "Treat every country as one undifferentiated storefront forever",
      correct: "A",
      explanation:
        "Markets is the platform surface for regional selling differences, not an afterthought layered on later.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "extensibility",
      scenario:
        "Which Shopify surface is built for backend commerce logic like discounts and checkout validation?",
      blank: "Functions",
      options: ["Polaris", "Functions", "Markets"],
      explanation:
        "Functions is the backend extensibility layer for server-side commerce logic inside Shopify.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "memory",
      scenario:
        "Which Shopify product is the built-in hosting layer commonly paired with Hydrogen storefronts?",
      blank: "Oxygen",
      options: ["Oxygen", "Mechanic", "Polaris"],
      explanation:
        "Hydrogen handles the storefront app, and Oxygen is the built-in hosting layer used to deploy it.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "extensibility",
      scenario:
        "If app-owned metaobject entries need to be queryable through the Storefront API, which storefront access setting matters?",
      blank: "public_read",
      options: ["hidden", "public_read", "merchant_only"],
      explanation:
        "For app-owned metaobjects, storefront access is not open by default. `public_read` is the setting that exposes them to the Storefront API.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real Shopify extensibility or structured-data surface!",
      correctItems: ["Metafields", "Metaobjects", "Functions", "Checkout UI extensions"],
      wrongItems: ["Raw checkout DOM access", "Warehouse robots", "Video codecs", "Photoshop layers"],
      timeLimit: 15,
      explanation:
        "Those are real Shopify platform surfaces. The others are unrelated or explicitly unsupported.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "workflows",
      prompt: "Tap every thing that fits Shopify's international commerce story!",
      correctItems: ["Markets", "Localized domains", "International pricing", "Languages"],
      wrongItems: ["Kernel modules", "SMTP relays", "Spreadsheet macros", "Printer drivers"],
      timeLimit: 15,
      explanation:
        "International selling on Shopify is about localized buyer experience, not infrastructure trivia.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "bestPractices",
      prompt: "One of these is NOT a sound Shopify production instinct. Which one?",
      items: ["Use supported extension points", "Model reusable structured content", "Localize buyer experience intentionally", "Patch checkout with unsupported hacks"],
      oddItem: "Patch checkout with unsupported hacks",
      explanation:
        "That is the brittle path Shopify's platform model is explicitly designed to avoid.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "extensibility",
      prompt: "One of these is NOT a Shopify checkout customization surface. Which one?",
      items: ["Checkout UI extensions", "Functions", "Direct CSS overrides for checkout internals", "Validated extension targets"],
      oddItem: "Direct CSS overrides for checkout internals",
      explanation:
        "Shopify checkout customization is constrained and API-driven, not a free-for-all CSS surgery zone.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "orchestration",
      statement:
        "In Shopify, a region can belong to only one active market at a time rather than multiple active markets simultaneously",
      isTrue: true,
      explanation:
        "Shopify Markets treats active market coverage as mutually exclusive for a region, which matters for buyer experience design.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Platform fact check" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the stronger Shopify move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Framework, host, automation" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Commerce surfaces under pressure" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the unsupported move" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Market architecture." },
  ],
};
