import type { QuizConfig } from "@/components/quiz/types";

export const resendConfig: QuizConfig = {
  slug: "resend",
  toolName: "Resend",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "Just you vs. developer email trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#111111",
  accentColorDim: "#000000",
  accentColorSubtle: "rgba(17,17,17,0.08)",
  bgColor: "linear-gradient(145deg, #F7F7F8 0%, #FBFBFC 55%, #F2F3F5 100%)",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#F3F4F6",
  textColor: "#101214",
  textSecondary: "#404750",
  textTertiary: "#6B7280",
  borderColor: "#D9DEE5",
  borderSubtle: "#E8ECF1",
  scorecardBg: "#0E1116",
  scorecardAccentColor: "#E5E7EB",
  scorecardDivider: "#2A2F39",
  scorecardLabelColor: "#AEB6C4",
  scorecardGridColor: "#2A2F39",
  logo: (
    <img
      src="/logos/resend.svg"
      alt="Resend"
      width={128}
      height={34}
      style={{ objectFit: "contain" }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/resend-icon.png"
      alt="Resend"
      width={40}
      height={40}
      style={{ borderRadius: 10, objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "resend",
  dimensionLabels: {
    memory: "API Basics",
    orchestration: "Domain Setup",
    automation: "Sending Flow",
    extensibility: "Endpoint Surface",
    workflows: "Deliverability Ops",
    prompting: "Header & Auth",
    bestPractices: "Rate Limit Strategy",
  },
  archetypes: [
    {
      title: "Inbox Reliability Lead",
      emoji: "🏆",
      description:
        "You know Resend deeply, from authentication and headers to domain setup, API limits, and production-safe sending patterns.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Delivery Architect",
      emoji: "🧠",
      description:
        "Strong command of the API surface and domain workflow. You can run Resend confidently in real production environments.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "API Operator",
      emoji: "⚙️",
      description:
        "You understand the core endpoints, limits, and setup steps well. A few advanced edge-case details are left.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Launch-Ready Sender",
      emoji: "🚀",
      description:
        "You have a practical grasp of sending flow and can ship. Next step is sharper mastery of response behavior and verification flow.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Email Builder",
      emoji: "📬",
      description:
        "Good fundamentals. You can navigate most Resend workflows with occasional help from the docs.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Delivery Explorer",
      emoji: "🌱",
      description:
        "You know the basics and now need stronger recall on API headers, endpoint families, and domain DNS lifecycle.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Send",
      emoji: "✨",
      description:
        "Great start. You now have a clear foundation to level up your Resend implementation fast.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "prompting",
      statement:
        "Resend requires a User-Agent header on API requests, and missing it can return 403",
      isTrue: true,
      explanation:
        "The API introduction explicitly says all requests must include User-Agent; requests without it are rejected with 403.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "bestPractices",
      statement:
        "The default Resend limit is 2 requests per second per team across all API keys",
      isTrue: true,
      explanation:
        "Resend documents a default team-wide limit of 2 requests/second, shared across keys for that team.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "memory",
      statement:
        "The Resend API supports plain HTTP as long as your API key is valid",
      isTrue: false,
      explanation:
        "The base URL docs call out HTTPS-only requests; HTTP is not supported.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "workflows",
      statement:
        "A missing User-Agent can produce error code 1010 even when the API key itself is valid",
      isTrue: true,
      explanation:
        "Resend documents this exact case in the introduction and links it to their 403/1010 guidance.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "automation",
      scenario:
        "You need to send one transactional email right now. Which endpoint family should you hit first?",
      optionA: "POST /emails",
      optionB: "POST /domains",
      correct: "A",
      explanation:
        "Email sending is handled by the Emails API. Domain endpoints are for sender domain setup and verification.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "orchestration",
      scenario:
        "You just connected a brand-new sender domain. What is the right next step before expecting healthy delivery?",
      optionA: "Create and verify the domain records",
      optionB: "Skip domain setup and only rotate API keys",
      correct: "A",
      explanation:
        "Resend's domain flow starts with creating a domain and setting DNS records (SPF/DKIM) before verified sending.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "bestPractices",
      scenario:
        "You keep hitting 429 while multiple services share one team. Which move aligns with Resend's model?",
      optionA: "Ask Resend to raise your trusted-sender limit",
      optionB: "Create more API keys and expect the team limit to disappear",
      correct: "A",
      explanation:
        "Rate limits are team-wide across keys, and Resend notes they can increase limits for trusted senders on request.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "prompting",
      scenario: "What is the exact auth header format used in Resend docs?",
      blank: "Authorization: Bearer re_xxxxxxxxx",
      options: [
        "Authorization: Bearer re_xxxxxxxxx",
        "X-API-Key: resend_xxxxxxxxx",
        "Authorization: Token rs_xxxxxxxxx",
      ],
      explanation:
        "The introduction shows Authorization with Bearer re_xxxxxxxxx as the authentication format.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "memory",
      scenario: "What base URL is documented for Resend API requests?",
      blank: "https://api.resend.com",
      options: [
        "https://api.resend.com",
        "https://resend.com/api/v1",
        "https://mail.resend.com",
      ],
      explanation:
        "The API intro lists https://api.resend.com as the base URL.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "automation",
      scenario: "Which response field is returned after a successful POST /emails request?",
      blank: "id",
      options: ["id", "smtp_password", "template_slug"],
      explanation:
        "The Send Email response example returns an id value for the created email send.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "workflows",
      prompt: "Tap every response code explicitly listed in Resend's introduction table!",
      correctItems: ["200", "400", "401", "403", "404", "429", "5xx"],
      wrongItems: ["201", "409", "451", "418"],
      timeLimit: 15,
      explanation:
        "The introduction table includes 200/400/401/403/404/429 and 5xx as the documented status set.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "orchestration",
      prompt: "Tap every DNS record type shown in the Create Domain response samples!",
      correctItems: ["SPF", "DKIM"],
      wrongItems: ["DMARC", "BIMI", "MX", "SRV"],
      timeLimit: 15,
      explanation:
        "The Create Domain examples repeatedly show SPF and DKIM records in the records array.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "extensibility",
      prompt: "One API reference family below is not part of Resend's documented endpoint groups. Which one?",
      items: ["Emails", "Broadcasts", "Contact Properties", "Invoices"],
      oddItem: "Invoices",
      explanation:
        "Resend docs include families like Emails, Broadcasts, Contacts, Segments, Domains, and Contact Properties, but not Invoices.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "prompting",
      prompt: "One header is NOT part of the common request setup shown in Resend docs. Which one?",
      items: [
        "Authorization: Bearer re_xxxxxxxxx",
        "Content-Type: application/json",
        "User-Agent: my-app/1.0",
        "X-Amz-Access-Key: ...",
      ],
      oddItem: "X-Amz-Access-Key: ...",
      explanation:
        "The docs use Authorization, Content-Type, and require User-Agent; X-Amz-Access-Key is not a Resend API header.",
    },
    {
      type: "odd_one_out",
      id: 15,
      dimension: "orchestration",
      prompt: "Final boss: one region is not listed in Resend's domain region options. Which one?",
      items: ["us-east-1", "eu-west-1", "ap-northeast-1", "us-west-2"],
      oddItem: "us-west-2",
      explanation:
        "Create Domain docs list us-east-1, eu-west-1, sa-east-1, and ap-northeast-1 as the possible region values.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Real feature or total BS?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the smarter move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name that feature" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Tap fast, think faster" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the fake" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Expert level." },
  ],
};
