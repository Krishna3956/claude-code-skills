import type { QuizConfig } from "@/components/quiz/types";

export const NeonConfig: QuizConfig = {
  slug: "neon",
  toolName: "Neon",
  tagline: "How well do you know Neon's serverless Postgres platform?",
  subtitle: "Just you vs. Neon challenge trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#00E599",
  accentColorDim: "#00C986",
  accentColorSubtle: "rgba(0,229,153,0.1)",
  bgColor: "linear-gradient(145deg, #F8FAFC 0%, #FFFFFF 55%, #F3F7FF 100%)",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EEF2F7",
  textColor: "#0F172A",
  textSecondary: "#334155",
  textTertiary: "#64748B",
  borderColor: "#D7E0EA",
  borderSubtle: "#E7EDF4",
  scorecardBg: "#111827",
  scorecardAccentColor: "#00E599",
  scorecardDivider: "#243247",
  scorecardLabelColor: "#AFC2DD",
  scorecardGridColor: "#243247",
  logo: (
    <img
      src="/logos/neon.png"
      alt="Neon"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 10 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/neon.png"
      alt="Neon"
      width={42}
      height={42}
      style={{ borderRadius: 10, objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "neon",
  dimensionLabels: {
  "memory": "Storage Architecture",
  "orchestration": "Autoscaling & Compute",
  "automation": "Branching & Workflows",
  "extensibility": "Extensions & Integrations",
  "workflows": "Developer Workflows",
  "prompting": "API & CLI",
  "bestPractices": "Security & Best Practices"
},
  archetypes: [
  {
    "title": "Neon Grandmaster",
    "emoji": "🏆",
    "description": "You can reason about Neon like a true power user under real constraints.",
    "minScore": 90,
    "maxScore": 100
  },
  {
    "title": "Workflow Architect",
    "emoji": "🧠",
    "description": "Strong command of advanced Neon workflows with only a few edge cases left.",
    "minScore": 80,
    "maxScore": 89
  },
  {
    "title": "Power Operator",
    "emoji": "⚡",
    "description": "You can execute reliably and make good product-level tradeoffs.",
    "minScore": 70,
    "maxScore": 79
  },
  {
    "title": "Skilled Builder",
    "emoji": "🛠️",
    "description": "Solid execution across core features, with room to sharpen advanced depth.",
    "minScore": 60,
    "maxScore": 69
  },
  {
    "title": "Practitioner",
    "emoji": "📈",
    "description": "You can ship practical outcomes and are leveling up fast.",
    "minScore": 50,
    "maxScore": 59
  },
  {
    "title": "Explorer",
    "emoji": "🌱",
    "description": "Great base. More repetition on edge cases will significantly raise your score.",
    "minScore": 40,
    "maxScore": 49
  },
  {
    "title": "First Steps",
    "emoji": "🚀",
    "description": "Strong start. Keep going and mastery is very reachable.",
    "minScore": 0,
    "maxScore": 39
  }
],
  challenges: [
    {
        type: "truth_or_myth",
        id: 1,
        dimension: "memory",
        statement: "When you create a new Neon branch, the entire database is physically duplicated to a new storage volume.",
        isTrue: false,
        explanation: "Neon uses copy-on-write storage. A new branch references existing data pages and only writes new pages when data is modified, so no full copy is made at branch creation time."
    },
    {
        type: "truth_or_myth",
        id: 2,
        dimension: "orchestration",
        statement: "Neon's autoscaling operates within a user-defined minimum and maximum compute range, and the maximum permitted autoscaling range is 8 CU.",
        isTrue: true,
        explanation: "Autoscaling is bounded by a user-set min and max. The difference between the maximum and minimum compute size cannot exceed 8 CU, regardless of the absolute values chosen."
    },
    {
        type: "truth_or_myth",
        id: 3,
        dimension: "bestPractices",
        statement: "Neon's instant restore operation merges the historical state with current data rather than overwriting the branch.",
        isTrue: false,
        explanation: "Instant restore is a complete overwrite. All data and schema on the branch are replaced with the contents from the selected historical point; no merge occurs."
    },
    {
        type: "truth_or_myth",
        id: 4,
        dimension: "workflows",
        statement: "Neon Auth stores user accounts, sessions, and auth configuration directly inside the Neon Postgres database under the neon_auth schema.",
        isTrue: true,
        explanation: "Neon Auth persists all authentication data in the neon_auth schema within your Neon database, making it queryable with SQL and compatible with Row Level Security policies."
    },
    {
        type: "this_or_that",
        id: 5,
        dimension: "automation",
        scenario: "You need near-zero downtime when migrating a large production Postgres database to Neon. Which migration method should you choose?",
        optionA: "pg_dump / pg_restore",
        optionB: "Logical Replication",
        correct: "B",
        explanation: "Logical Replication supports near-zero downtime for any database size by streaming changes continuously. pg_dump/restore requires the database to be offline during the restore phase."
    },
    {
        type: "this_or_that",
        id: 6,
        dimension: "prompting",
        scenario: "An AI agent needs to provision a temporary Neon database instantly without any human account creation or credit card entry. Which feature enables this?",
        optionA: "Neon API project creation endpoint",
        optionB: "Claimable Postgres (neon.new)",
        correct: "B",
        explanation: "Claimable Postgres provides an instant temporary database with a connection string autonomously, requiring no signup, account creation, or credit card from the end user."
    },
    {
        type: "this_or_that",
        id: 7,
        dimension: "bestPractices",
        scenario: "You want to test authentication changes including OAuth flows in a Vercel preview environment without touching production user data. What is the correct approach?",
        optionA: "Use a shared staging database with masked credentials",
        optionB: "Create a Neon branch per preview deployment with Neon Auth branching",
        correct: "B",
        explanation: "Neon Auth branches with the database, so each preview branch gets its own isolated auth environment. This lets you test real sign-up, login, and OAuth flows without affecting production."
    },
    {
        type: "quick_pick",
        id: 8,
        dimension: "orchestration",
        scenario: "On a 1 CU Neon compute, the connection pooler's default_pool_size is calculated as 90% of max_connections. Given that a 1 CU compute has 419 max_connections, the default_pool_size is ___.",
        blank: "377",
        options: [
            "419",
            "377",
            "104",
            "10000"
        ],
        explanation: "default_pool_size = 0.9 x max_connections. For 1 CU: 0.9 x 419 = 377.1, rounded to 377. This is the maximum active transactions per user per database through the pooler."
    },
    {
        type: "quick_pick",
        id: 9,
        dimension: "memory",
        scenario: "Neon's storage architecture separates compute from storage. The component that acts as a high-speed SSD cache for recently used data pages and serves them to Postgres compute is called the ___.",
        blank: "Pageserver",
        options: [
            "Safekeeper",
            "Pageserver",
            "WAL receiver",
            "Compute node"
        ],
        explanation: "The Pageserver runs on SSDs and acts as a high-speed cache for hot data pages, serving them to stateless Postgres compute nodes with minimal latency while cold data resides in object storage."
    },
    {
        type: "quick_pick",
        id: 10,
        dimension: "prompting",
        scenario: "The Neon API enforces a rate limit of ___ requests per minute globally, returning HTTP 429 when exceeded.",
        blank: "700",
        options: [
            "100",
            "700",
            "1000",
            "40"
        ],
        explanation: "The Neon API allows 700 requests per minute (approximately 11 per second) with a 40 requests per second burst limit per route. Exceeding this returns HTTP 429 Too Many Requests."
    },
    {
        type: "speed_pick",
        id: 11,
        dimension: "automation",
        prompt: "Select all items that are TRUE about Neon's instant restore (point-in-time restore) behavior.",
        correctItems: [
            "Restore is supported only for root branches, not child branches",
            "An automatic backup branch is created before the restore overwrites the branch",
            "Connections to the branch are temporarily interrupted during restore",
            "All databases on the branch are restored, not just one"
        ],
        wrongItems: [
            "Child branches can be restored to any point in their own history",
            "Restore merges historical state with current uncommitted changes",
            "The connection string changes after a restore completes"
        ],
        timeLimit: 15,
        explanation: "Instant restore only works on root branches, performs a full overwrite of all databases on that branch, auto-creates a backup branch, and temporarily interrupts connections while keeping the connection string stable."
    },
    {
        type: "speed_pick",
        id: 12,
        dimension: "extensibility",
        prompt: "Select all Postgres extensions that Neon explicitly supports in its extensions library.",
        correctItems: [
            "pgvector",
            "PostGIS",
            "TimescaleDB",
            "pgBouncer (connection pooling)"
        ],
        wrongItems: [
            "Oracle FDW",
            "pg_cron (not available on serverless compute)",
            "Citus (distributed Postgres sharding)"
        ],
        timeLimit: 15,
        explanation: "Neon's extensions library includes pgvector for AI embeddings, PostGIS for geospatial data, TimescaleDB for time-series, and uses pgBouncer for built-in connection pooling. Oracle FDW and Citus are not listed as supported."
    },
    {
        type: "odd_one_out",
        id: 13,
        dimension: "workflows",
        prompt: "Three of these are valid use cases for Neon database branching. Which one does NOT describe a branching workflow?",
        items: [
            "Creating an isolated branch per pull request for safe schema migration testing",
            "Spinning up a branch per Vercel preview deployment with matching auth state",
            "Increasing the max_connections limit by creating multiple branches",
            "Versioning agent database state with snapshots that sync code and data"
        ],
        oddItem: "Increasing the max_connections limit by creating multiple branches",
        explanation: "Branches are isolated database environments for development, testing, and versioning workflows. max_connections is determined by compute size, not by the number of branches. Creating more branches does not increase connection limits."
    },
    {
        type: "odd_one_out",
        id: 14,
        dimension: "bestPractices",
        prompt: "Three of these are compliance certifications or standards that Neon holds. Which one is NOT a Neon compliance certification?",
        items: [
            "SOC 2",
            "ISO 27001",
            "PCI DSS Level 1",
            "HIPAA"
        ],
        oddItem: "PCI DSS Level 1",
        explanation: "Neon holds SOC 2, ISO 27001, ISO 27701, HIPAA, GDPR, and CCPA compliance. PCI DSS Level 1 is not listed among Neon's certifications."
    },
    {
        type: "odd_one_out",
        id: 15,
        dimension: "prompting",
        prompt: "Three of these are valid Neon API key scopes. Which one is NOT a real Neon API key type?",
        items: [
            "Personal API Key",
            "Organization API Key",
            "Project-scoped API Key",
            "Branch-scoped API Key"
        ],
        oddItem: "Branch-scoped API Key",
        explanation: "Neon supports three API key types: Personal (all your projects), Organization (all projects in an org), and Project-scoped (single project only). There is no branch-scoped API key type."
    }
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
