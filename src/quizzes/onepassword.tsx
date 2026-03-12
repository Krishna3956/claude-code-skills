import type { QuizConfig } from "@/components/quiz/types";

export const onepasswordConfig: QuizConfig = {
  slug: "onepassword",
  toolName: "1Password",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle:
    "Think you know 1Password? Test vault architecture, access control, secrets automation, and zero-trust credential management.",
  sansFont: "inter",
  serifFont: "instrument-serif",
  accentColor: "#0572EC",
  accentColorDim: "#0460CC",
  accentColorSubtle: "rgba(5,114,236,0.10)",
  bgColor: "linear-gradient(145deg, #0A1020 0%, #0F1830 55%, #142040 100%)",
  bgElevated: "#182438",
  bgSurface: "#1C2840",
  bgSurfaceLight: "#223050",
  textColor: "#E5EEF8",
  textSecondary: "#A0B8D8",
  textTertiary: "#7090B8",
  borderColor: "#253848",
  borderSubtle: "#1E3040",
  scorecardBg: "#080E18",
  scorecardAccentColor: "#60A8FF",
  scorecardDivider: "#1A3050",
  scorecardLabelColor: "#88B0D8",
  scorecardGridColor: "#1A3050",
  navbarTheme: "dark",
  logo: (
    <img
      src="/logos/onepassword.svg"
      alt="1Password"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/onepassword.svg"
      alt="1Password"
      width={42}
      height={42}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  analyticsPrefix: "onepassword",
  dimensionLabels: {
    memory: "Vault Architecture",
    orchestration: "Access Control",
    automation: "Secrets Automation",
    extensibility: "Integration Surface",
    workflows: "Security Ops",
    prompting: "Feature Recall",
    bestPractices: "Zero-Trust Discipline",
  },
  archetypes: [
    {
      title: "1Password Grandmaster",
      emoji: "🏆",
      description:
        "You architect zero-trust credential workflows with deep vault, SCIM, and secrets automation mastery.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Security Architect",
      emoji: "🧠",
      description:
        "Strong command of vault policies, service accounts, and enterprise provisioning.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Power Admin",
      emoji: "⚡",
      description:
        "You manage team credentials and secrets pipelines with confidence.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Skilled Operator",
      emoji: "🛠️",
      description:
        "Solid password management fundamentals with room for deeper automation knowledge.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Practitioner",
      emoji: "📈",
      description:
        "You use 1Password effectively for personal and team security.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Explorer",
      emoji: "🌱",
      description:
        "Good start. More reps on vault design and secrets automation will help.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Steps",
      emoji: "🚀",
      description:
        "Clear path to enterprise-grade credential management.",
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
        "1Password's Secret Key combined with the account password creates a two-secret derivation model where neither 1Password servers nor an attacker with just the password can decrypt vault data",
      isTrue: true,
      explanation:
        "The two-secret model means 1Password never has enough information to decrypt your data.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "automation",
      statement:
        "1Password Connect Server allows applications to programmatically retrieve secrets from vaults via a REST API without exposing master credentials to the application",
      isTrue: true,
      explanation:
        "Connect Server provides API-based secrets access for CI/CD and infrastructure.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "1Password SCIM bridge enables automated user provisioning and deprovisioning synced with identity providers like Okta and Azure AD",
      isTrue: true,
      explanation:
        "SCIM bridge automates lifecycle management for enterprise deployments.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Sharing a vault password via email is an acceptable way to onboard new team members to shared 1Password vaults",
      isTrue: false,
      explanation:
        "1Password uses invitation-based provisioning with SRP verification, never password sharing.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "automation",
      scenario:
        "Your CI/CD pipeline needs database credentials. Better secrets strategy?",
      optionA: "Use 1Password Connect or CLI to inject secrets at runtime",
      optionB: "Hardcode credentials in environment variables checked into source control",
      correct: "A",
      explanation:
        "Runtime secret injection prevents credential exposure in repos.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "orchestration",
      scenario:
        "You need to offboard an employee immediately. Better approach?",
      optionA:
        "Deprovision via SCIM bridge which automatically revokes vault access",
      optionB: "Manually check each shared vault and remove the user",
      correct: "A",
      explanation:
        "SCIM deprovisioning is instant and comprehensive.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "workflows",
      scenario: "For team credential sharing, what's stronger?",
      optionA: "Shared vaults with role-based access and item-level permissions",
      optionB: "Shared spreadsheet with passwords distributed via email",
      correct: "A",
      explanation:
        "Vault-based sharing with RBAC provides audit trails and access control.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "1Password's second factor that combines with your password for encryption key derivation:",
      blank: "Secret Key",
      options: ["Secret Key", "TOTP Code", "Recovery Key"],
      explanation:
        "The Secret Key is unique to your device and required for key derivation.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "extensibility",
      scenario:
        "1Password service for programmatic secrets access in infrastructure:",
      blank: "Connect Server",
      options: ["Connect Server", "Vault Proxy", "Key Broker"],
      explanation:
        "Connect Server provides REST API access to vault items.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "automation",
      scenario:
        "Protocol used by 1Password for automated identity provider user sync:",
      blank: "SCIM",
      options: ["SCIM", "SAML", "OAuth"],
      explanation:
        "SCIM handles user provisioning/deprovisioning from IdPs.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real 1Password concept!",
      correctItems: ["Secret Key", "Connect Server", "SCIM bridge", "Watchtower"],
      wrongItems: ["Docker Swarm", "Redis Sentinel", "Kafka Topics", "gRPC streams"],
      timeLimit: 15,
      explanation: "These are real 1Password features and concepts.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "workflows",
      prompt: "Tap every strong credential security practice!",
      correctItems: [
        "Unique passwords per service",
        "Vault-based team sharing",
        "SCIM provisioning",
        "Secret rotation",
      ],
      wrongItems: [
        "Password reuse",
        "Email-shared credentials",
        "Plaintext env files",
        "No MFA",
      ],
      timeLimit: 15,
      explanation: "Strong credential security requires zero-trust practices.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "automation",
      prompt: "One is NOT a 1Password enterprise feature. Which one?",
      items: ["SCIM bridge", "Connect Server", "Watchtower", "Kubernetes autoscaler"],
      oddItem: "Kubernetes autoscaler",
      explanation:
        "SCIM bridge, Connect Server, and Watchtower are 1Password features. Kubernetes autoscaler is unrelated infrastructure.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "Which practice creates the biggest security risk?",
      items: [
        "Secret Key + password derivation",
        "Vault-based access control",
        "SCIM deprovisioning",
        "Storing passwords in a shared plaintext document",
      ],
      oddItem: "Storing passwords in a shared plaintext document",
      explanation:
        "Plaintext document sharing eliminates encryption and access control.",
    },
    {
      type: "odd_one_out",
      id: 15,
      dimension: "orchestration",
      prompt: "Final boss: weakest credential management strategy?",
      items: [
        "Zero-knowledge encryption",
        "SCIM-based lifecycle management",
        "Runtime secret injection",
        "Hardcoded credentials in source code with no rotation",
      ],
      oddItem: "Hardcoded credentials in source code with no rotation",
      explanation:
        "Hardcoded credentials in repos are persistent, exposed, and unrotated—maximum risk.",
    },
  ],
  rounds: [
    {
      name: "Truth or Myth",
      icon: "?",
      ids: [1, 2, 3, 4],
      tagline: "Real feature or total BS?",
    },
    {
      name: "This or That",
      icon: "vs",
      ids: [5, 6, 7],
      tagline: "Pick the smarter move",
    },
    {
      name: "Quick Pick",
      icon: ">>",
      ids: [8, 9, 10],
      tagline: "Name that feature",
    },
    {
      name: "Speed Round",
      icon: "::",
      ids: [11, 12],
      tagline: "Tap fast, think faster",
    },
    {
      name: "Odd One Out",
      icon: "//",
      ids: [13, 14],
      tagline: "Spot the fake",
    },
    {
      name: "Final Boss",
      icon: "*",
      ids: [15],
      tagline: "One shot. Expert level.",
    },
  ],
};
