import type { QuizConfig } from "@/components/quiz/types";

const globalPaymentsLogo = (
  <img
    src="/logos/globalpayments.svg"
    alt="Global Payments"
    width={190}
    height={18}
    style={{ objectFit: "contain" }}
  />
);

export const globalpaymentsConfig: QuizConfig = {
  slug: "globalpayments",
  toolName: "Global Payments",
  tagline: "5 rounds. ~3 min. No payment gateway cutover required.",
  subtitle:
    "Built for power users of the API stack. Access tokens, tokenization modes, 3DS/auth flows, idempotency, and real payments-ops judgment.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#262AFF",
  accentColorDim: "#1B1EC6",
  accentColorSubtle: "rgba(38,42,255,0.10)",
  bgColor: "#F7F8FF",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EEF0FF",
  textColor: "#171923",
  textSecondary: "#4A4F63",
  textTertiary: "#6E748C",
  borderColor: "#D7DBFF",
  borderSubtle: "#E8EAFF",
  scorecardBg: "#121638",
  scorecardAccentColor: "#7F93FF",
  scorecardDivider: "#333B76",
  scorecardLabelColor: "#D5DBFF",
  scorecardGridColor: "#333B76",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#D7DBFF",
  ctaTextColor: "#FFFFFF",
  logo: globalPaymentsLogo,
  scorecardLogo: (
    <img
      src="/logos/globalpayments.svg"
      alt="Global Payments"
      width={172}
      height={16}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "globalpayments",
  dimensionLabels: {
    memory: "Tokenization",
    orchestration: "Auth Flows",
    automation: "Access Control",
    extensibility: "API Surface",
    workflows: "Payment Ops",
    prompting: "Integration Choices",
    bestPractices: "Payments Judgment",
  },
  archetypes: [
    {
      title: "Payments API Operator",
      emoji: "💳",
      description:
        "You think in permissions, token lifecycles, auth flows, and transaction safety, not just checkout buttons. That is real Global Payments fluency.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Gateway Architect",
      emoji: "🏗️",
      description:
        "You understand how tokenization, authentication, and transaction controls fit together across the platform. A few sharper calls would put you at expert level.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Payments Integrator",
      emoji: "⚙️",
      description:
        "You are making solid implementation decisions. The remaining gap is mostly around the trickier platform boundaries and risk controls.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Checkout Builder",
      emoji: "🧭",
      description:
        "You know the platform well enough to ship, though some of the more technical access-token and authentication distinctions still need tightening.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Payment Flow Owner",
      emoji: "🛒",
      description:
        "You understand the broad flow, but some of the API-specific mechanics are still more familiar than truly sharp.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Spec Reader",
      emoji: "📘",
      description:
        "You have the right instincts, but your model still feels closer to documentation recall than operator-level decision making.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Merchant App",
      emoji: "🌱",
      description:
        "You are early. The next layer is understanding how Global Payments ties access control, tokenization, authentication, and transaction execution together.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "automation",
      statement:
        "Access tokens are required to execute API actions, and the bearer token's authority is determined by the associated merchant, accounts, and app permissions",
      isTrue: true,
      explanation:
        "That is exactly how the access-token docs frame it. The token is not globally magical; its reach is constrained by the app and account permissions behind it.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "memory",
      statement:
        "A restricted access token is meant to be the long-lived server-side token you keep around for recurring transaction processing",
      isTrue: false,
      explanation:
        "That is false. The docs position restricted tokens for Hosted Fields or Drop-in UI to create a single-use payment token, not as a general-purpose permanent server credential.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "prompting",
      scenario:
        "You are wiring a browser checkout with Hosted Fields and want the client side to create a temporary payment token safely. Which move is stronger?",
      optionA: "Create a restricted access token and use a SINGLE payment-method token flow",
      optionB: "Expose your broad server-side bearer token and default to a permanent MULTIPLE payment-method token",
      correct: "A",
      explanation:
        "The docs are explicit here: restricted access tokens and SINGLE usage mode are the intended fit for Hosted Fields or Drop-in UI token creation.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "memory",
      scenario:
        "Both the card number and a network token are available on a stored payment method, and you want transaction processing to prefer the network token. Which move is stronger?",
      optionA: "Use USE_CARD_NUMBER",
      optionB: "Use USE_NETWORK_TOKEN",
      correct: "B",
      explanation:
        "That is exactly what USE_NETWORK_TOKEN is for. USE_CARD_NUMBER is the opposite preference when both are available.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "extensibility",
      scenario:
        "Which header is specifically used to prevent duplicate submission of the same action value within the last 24 hours?",
      blank: "X-GP-Idempotency",
      options: ["X-GP-Version", "X-GP-Idempotency", "X-GP-Nonce"],
      explanation:
        "The docs call out X-GP-Idempotency for duplicate protection across repeated submissions of the same action within a 24-hour window.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "automation",
      scenario:
        "Which grant_type must be used when creating an access token with app credentials?",
      blank: "client_credentials",
      options: ["authorization_code", "client_credentials", "merchant_session"],
      explanation:
        "The access-token endpoint requires client_credentials. That is the OAuth-specific value documented for the app's own resources.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "workflows",
      prompt: "Tap every real Global Payments payment or operations surface called out in the docs!",
      correctItems: ["Hosted Fields", "Drop-in UI", "Payment Scheduler", "Account Updater", "Dynamic Currency Conversion"],
      wrongItems: ["Seat inventory", "Warehouse routing", "Feature flags", "Email deliverability"],
      timeLimit: 15,
      explanation:
        "Those are all real Global Payments surfaces from the docs and developer portal. The others are unrelated product categories.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "orchestration",
      prompt: "Tap every value or concept that is explicitly real in the authentication and access-token specs!",
      correctItems: ["CP", "CNP", "1_HOUR", "30_MINUTES", "SHA512(NONCEAPP-KEY)"],
      wrongItems: ["RECURRING_ONLY", "12_DAYS", "PANLESS_MODE", "APPROVAL_COOKIE"],
      timeLimit: 15,
      explanation:
        "CP and CNP are real auth channels, 1_HOUR and 30_MINUTES are real token expiry intervals, and the secret is documented as SHA512(NONCEAPP-KEY).",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a correct Global Payments authentication or request-shaping instinct. Which one?",
      items: [
        "Amounts are represented in the lowest denomination with no decimal point",
        "Merchant country is sent as ISO-3166-1 alpha-2",
        "European merchants should expect amount to matter for SCA",
        "Amounts should always be sent in major units with a decimal for readability",
      ],
      oddItem: "Amounts should always be sent in major units with a decimal for readability",
      explanation:
        "That is the wrong move. The docs specify lowest denomination and no decimal point, and they explicitly note amount requirements for SCA contexts.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "extensibility",
      prompt:
        "One of these is NOT a documented permission example on the access-token resource. Which one?",
      items: [
        "TRN_POST_Authorize",
        "AUT_POST_Check_Availability",
        "VER_POST_Verify",
        "TRN_POST_Split_Tender",
      ],
      oddItem: "TRN_POST_Split_Tender",
      explanation:
        "The first three are real examples from the permissions list. TRN_POST_Split_Tender is not one of the documented sample permissions there.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Real platform mechanics or payments folklore?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Choose the production-safe integration move" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Name the exact header or auth setting" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real product and spec terms" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the implementation mistake" },
  ],
};
