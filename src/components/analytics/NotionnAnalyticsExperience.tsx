"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Download,
  Lock,
  Trophy,
  Users,
  Gauge,
  Clock3,
  Target,
  Brain,
  X,
  FileSpreadsheet,
  TrendingUp,
  CircleAlert,
  CheckCircle2,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { track } from "@/lib/analytics";

type Participant = {
  name: string;
  email: string;
  company: string;
  score: number;
  completedAt: string;
  joinedAt: string;
  completionSeconds: number;
  archetype: string;
  rank: number;
  dimensions: {
    databases: number;
    aiFeatures: number;
    automations: number;
    integrations: number;
    advancedFeatures: number;
  };
};

type QuestionRow = {
  id: string;
  round: string;
  prompt: string;
  dimension: string;
  accuracy: number;
  skipRate: number;
  action: string;
};

const LOGIN_EMAIL = "demo@howweelyouknow.com";
const LOGIN_PASSWORD = "3956";
const STORAGE_KEY = "hwyk_notionn_analytics_auth";

const participants: Participant[] = [
  {
    name: "Aarav Shah",
    email: "aarav@northstarhq.com",
    company: "NorthstarHQ",
    score: 96,
    joinedAt: "2026-03-15 09:04",
    completedAt: "2026-03-15 09:07",
    completionSeconds: 185,
    archetype: "Notion Ninja",
    rank: 1,
    dimensions: { databases: 98, aiFeatures: 92, automations: 100, integrations: 94, advancedFeatures: 96 },
  },
  {
    name: "Priya Mehta",
    email: "priya@looplane.ai",
    company: "Looplane",
    score: 91,
    joinedAt: "2026-03-15 09:12",
    completedAt: "2026-03-15 09:15",
    completionSeconds: 202,
    archetype: "Notion Ninja",
    rank: 2,
    dimensions: { databases: 90, aiFeatures: 96, automations: 84, integrations: 89, advancedFeatures: 94 },
  },
  {
    name: "Nikhil Rao",
    email: "nikhil@craftstack.io",
    company: "Craftstack",
    score: 88,
    joinedAt: "2026-03-15 10:22",
    completedAt: "2026-03-15 10:26",
    completionSeconds: 235,
    archetype: "System Architect",
    rank: 3,
    dimensions: { databases: 92, aiFeatures: 81, automations: 85, integrations: 87, advancedFeatures: 93 },
  },
  {
    name: "Sarah Lee",
    email: "sarah@risecrm.com",
    company: "RiseCRM",
    score: 79,
    joinedAt: "2026-03-15 11:40",
    completedAt: "2026-03-15 11:45",
    completionSeconds: 279,
    archetype: "Power Organizer",
    rank: 4,
    dimensions: { databases: 82, aiFeatures: 76, automations: 68, integrations: 74, advancedFeatures: 83 },
  },
  {
    name: "Miguel Santos",
    email: "miguel@relaygrid.io",
    company: "RelayGrid",
    score: 74,
    joinedAt: "2026-03-15 12:02",
    completedAt: "2026-03-15 12:07",
    completionSeconds: 301,
    archetype: "Power Organizer",
    rank: 5,
    dimensions: { databases: 80, aiFeatures: 70, automations: 61, integrations: 72, advancedFeatures: 79 },
  },
  {
    name: "Emily Chen",
    email: "emily@mergepad.com",
    company: "MergePad",
    score: 69,
    joinedAt: "2026-03-15 12:25",
    completedAt: "2026-03-15 12:31",
    completionSeconds: 338,
    archetype: "Page Builder",
    rank: 6,
    dimensions: { databases: 72, aiFeatures: 77, automations: 54, integrations: 65, advancedFeatures: 71 },
  },
  {
    name: "Jordan Kim",
    email: "jordan@atlasops.io",
    company: "AtlasOps",
    score: 63,
    joinedAt: "2026-03-15 13:44",
    completedAt: "2026-03-15 13:50",
    completionSeconds: 362,
    archetype: "Page Builder",
    rank: 7,
    dimensions: { databases: 68, aiFeatures: 66, automations: 48, integrations: 59, advancedFeatures: 65 },
  },
  {
    name: "Riya Kapoor",
    email: "riya@stackpilot.co",
    company: "StackPilot",
    score: 58,
    joinedAt: "2026-03-15 14:18",
    completedAt: "2026-03-15 14:24",
    completionSeconds: 395,
    archetype: "Note Taker",
    rank: 8,
    dimensions: { databases: 62, aiFeatures: 61, automations: 42, integrations: 53, advancedFeatures: 60 },
  },
];

const scoreDistribution = [
  { band: "90-100", players: 2 },
  { band: "80-89", players: 1 },
  { band: "70-79", players: 2 },
  { band: "60-69", players: 2 },
  { band: "50-59", players: 1 },
  { band: "<50", players: 0 },
];

const roundCompletion = [
  { round: "Truth or Myth", completion: 100 },
  { round: "This or That", completion: 95 },
  { round: "Quick Pick", completion: 92 },
  { round: "Speed Round", completion: 81 },
  { round: "Odd One Out", completion: 77 },
  { round: "Final Boss", completion: 74 },
];

const masteryByDimension = [
  { dimension: "Databases", mastery: 80, benchmark: 74 },
  { dimension: "AI Features", mastery: 77, benchmark: 68 },
  { dimension: "Automations", mastery: 68, benchmark: 63 },
  { dimension: "Integrations", mastery: 74, benchmark: 69 },
  { dimension: "Advanced Features", mastery: 80, benchmark: 72 },
];

const archetypeMix = [
  { name: "Notion Ninja", value: 25, color: "#111827" },
  { name: "System Architect", value: 12, color: "#4F46E5" },
  { name: "Power Organizer", value: 25, color: "#0EA5E9" },
  { name: "Page Builder", value: 25, color: "#F59E0B" },
  { name: "Note Taker", value: 13, color: "#F97316" },
];

const hardestQuestions: QuestionRow[] = [
  {
    id: "Q9",
    round: "Quick Pick",
    prompt: "Default template for every new Content Calendar entry",
    dimension: "Automations",
    accuracy: 41,
    skipRate: 9,
    action: "Players know templates exist, but not where automation begins. Add a setup walkthrough.",
  },
  {
    id: "Q13",
    round: "Odd One Out",
    prompt: "What Notion AI cannot do natively",
    dimension: "Advanced Features",
    accuracy: 46,
    skipRate: 7,
    action: "Confusion between AI and workflows. Clarify native AI vs automation boundaries.",
  },
  {
    id: "Q11",
    round: "Speed Round",
    prompt: "Real Notion database views",
    dimension: "Integrations",
    accuracy: 52,
    skipRate: 18,
    action: "Speed round drop-off suggests interface stress. Strong candidate for a slower demo variant.",
  },
  {
    id: "Q8",
    round: "Quick Pick",
    prompt: "Feature for deadline formulas with color-coded urgency",
    dimension: "Advanced Features",
    accuracy: 57,
    skipRate: 11,
    action: "Formula literacy is weaker than general page usage. Good upsell story for advanced onboarding.",
  },
];

const exportLabels = [
  { id: "joined-participants", label: "Joined participants" },
  { id: "questions", label: "Questions" },
  { id: "replies", label: "Replies to questions" },
  { id: "results-per-participant", label: "Result per participant" },
  { id: "leaderboard", label: "Game leaderboard" },
] as const;

function formatSeconds(total: number) {
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
}

function toExcelHtml(rows: Array<Record<string, string | number>>) {
  const headers = Object.keys(rows[0] ?? {});
  const headerRow = headers.map((header) => `<th>${header}</th>`).join("");
  const bodyRows = rows
    .map((row) => `<tr>${headers.map((header) => `<td>${String(row[header] ?? "")}</td>`).join("")}</tr>`)
    .join("");

  return `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
      <head>
        <meta charset="UTF-8" />
      </head>
      <body>
        <table>
          <thead><tr>${headerRow}</tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </body>
    </html>
  `;
}

function triggerDownload(filename: string, rows: Array<Record<string, string | number>>) {
  const blob = new Blob([toExcelHtml(rows)], { type: "application/vnd.ms-excel;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

function buildExportRows() {
  const joinedParticipants = participants.map((player) => ({
    Name: player.name,
    Email: player.email,
    Company: player.company,
    JoinedAt: player.joinedAt,
    CompletedAt: player.completedAt,
    Score: player.score,
    Archetype: player.archetype,
  }));

  const questions = hardestQuestions.map((question) => ({
    QuestionId: question.id,
    Round: question.round,
    Dimension: question.dimension,
    Prompt: question.prompt,
    AccuracyPercent: question.accuracy,
    SkipRatePercent: question.skipRate,
  }));

  const replies = participants.flatMap((player, index) =>
    hardestQuestions.map((question, questionIndex) => ({
      Participant: player.email,
      QuestionId: question.id,
      Prompt: question.prompt,
      SubmittedAnswer: index + questionIndex > 3 ? "Incorrect option" : "Correct option",
      Correct: index + questionIndex <= 3 ? "Yes" : "No",
      SubmittedAt: player.completedAt,
    })),
  );

  const resultsPerParticipant = participants.map((player) => ({
    Participant: player.email,
    Name: player.name,
    Company: player.company,
    Score: player.score,
    CompletionTime: formatSeconds(player.completionSeconds),
    Archetype: player.archetype,
    Databases: player.dimensions.databases,
    AIFeatures: player.dimensions.aiFeatures,
    Automations: player.dimensions.automations,
    Integrations: player.dimensions.integrations,
    AdvancedFeatures: player.dimensions.advancedFeatures,
  }));

  const leaderboard = participants.map((player) => ({
    Rank: player.rank,
    Name: player.name,
    Company: player.company,
    Score: player.score,
    CompletionTime: formatSeconds(player.completionSeconds),
    Archetype: player.archetype,
  }));

  return {
    "joined-participants": { filename: "howwellyouknow_joined_participants.xls", rows: joinedParticipants },
    questions: { filename: "howwellyouknow_questions.xls", rows: questions },
    replies: { filename: "howwellyouknow_replies_to_questions.xls", rows: replies },
    "results-per-participant": { filename: "howwellyouknow_results_per_participant.xls", rows: resultsPerParticipant },
    leaderboard: { filename: "howwellyouknow_game_leaderboard.xls", rows: leaderboard },
  };
}

function StatCard({
  icon,
  label,
  value,
  helper,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div
      className="rounded-[28px] border p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
      style={{ background: "rgba(255,255,255,0.92)", borderColor: "rgba(226,232,240,0.9)" }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: "#EEF2FF", color: "#4338CA" }}>
        {icon}
      </div>
      <p className="text-sm" style={{ color: "#64748B" }}>{label}</p>
      <p className="mt-1 text-3xl font-semibold tracking-[-0.03em]" style={{ color: "#0F172A" }}>{value}</p>
      <p className="mt-3 text-sm leading-6" style={{ color: "#475569" }}>{helper}</p>
    </div>
  );
}

export default function NotionnAnalyticsExperience() {
  const exportMap = useMemo(() => buildExportRows(), []);
  const [authorized, setAuthorized] = useState(false);
  const [email, setEmail] = useState(LOGIN_EMAIL);
  const [password, setPassword] = useState(LOGIN_PASSWORD);
  const [error, setError] = useState("");
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const storedAuthorization =
    typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY) === "true";
  const isAuthorized = authorized || storedAuthorization;

  const totalParticipants = 756;
  const totalCompleted = 410;
  const completionRate = Math.round((totalCompleted / totalParticipants) * 100);
  const averageScore = 74;
  const averageTime = "3m 41s";
  const topInsight = "Automations is the clearest knowledge gap. It trails overall mastery by 12 points.";

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email !== LOGIN_EMAIL || password !== LOGIN_PASSWORD) {
      setError("Use the demo credentials shared for the sales walkthrough.");
      track("notionn_analytics_login_failed");
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, "true");
    setAuthorized(true);
    setError("");
    track("notionn_analytics_login_success");
  };

  const handleDownload = (id: keyof ReturnType<typeof buildExportRows>) => {
    const file = exportMap[id];
    triggerDownload(file.filename, file.rows);
    setDownloadedId(id);
    setTimeout(() => setDownloadedId((current) => (current === id ? null : current)), 1800);
    track("notionn_analytics_export_downloaded", { export_type: id });
  };

  if (!isAuthorized) {
    return (
      <main
        className="min-h-screen px-4 py-8 sm:px-6 lg:px-8"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(99,102,241,0.16), transparent 34%), radial-gradient(circle at top right, rgba(14,165,233,0.14), transparent 28%), linear-gradient(180deg, #F8FAFC 0%, #EEF2FF 100%)",
        }}
      >
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
          <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-[36px] border p-7 sm:p-10" style={{ background: "rgba(255,255,255,0.86)", borderColor: "rgba(255,255,255,0.8)", boxShadow: "0 28px 100px rgba(15,23,42,0.10)" }}>
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-[18px]" style={{ background: "#FFFFFF", boxShadow: "0 16px 40px rgba(15,23,42,0.08)" }}>
                  <Image src="/logos/notion.png" alt="Notion" width={34} height={34} />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.28em]" style={{ color: "#6366F1" }}>Demo analytics</p>
                  <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-[3.2rem]" style={{ color: "#0F172A" }}>
                    Show customers the story behind the score.
                  </h1>
                </div>
              </div>

              <p className="max-w-2xl text-base leading-8 sm:text-lg" style={{ color: "#334155" }}>
                This view is designed for How Well You Know, not for event polling. It highlights what matters for product education:
                who started, who finished, what feature concepts landed, where users dropped, and which players turned into champions.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border p-5" style={{ borderColor: "#E2E8F0", background: "#FFFFFF" }}>
                  <p className="text-sm" style={{ color: "#64748B" }}>Knowledge signals</p>
                  <p className="mt-2 text-lg font-semibold" style={{ color: "#0F172A" }}>Per-feature mastery</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: "#475569" }}>Tie weak questions back to docs, onboarding flows, and launch education.</p>
                </div>
                <div className="rounded-[24px] border p-5" style={{ borderColor: "#E2E8F0", background: "#FFFFFF" }}>
                  <p className="text-sm" style={{ color: "#64748B" }}>Behavior signals</p>
                  <p className="mt-2 text-lg font-semibold" style={{ color: "#0F172A" }}>Round drop-off</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: "#475569" }}>See where challenge length, difficulty, or UI friction starts hurting completion.</p>
                </div>
                <div className="rounded-[24px] border p-5" style={{ borderColor: "#E2E8F0", background: "#FFFFFF" }}>
                  <p className="text-sm" style={{ color: "#64748B" }}>Community signals</p>
                  <p className="mt-2 text-lg font-semibold" style={{ color: "#0F172A" }}>Leaderboard momentum</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: "#475569" }}>Top scorers become advocates, beta candidates, and easy follow-up conversations.</p>
                </div>
              </div>
            </section>

            <section className="rounded-[36px] border p-7 sm:p-8" style={{ background: "#0F172A", borderColor: "rgba(255,255,255,0.12)", boxShadow: "0 28px 100px rgba(15,23,42,0.24)" }}>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(99,102,241,0.18)", color: "#C7D2FE" }}>
                  <Lock size={22} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em]" style={{ color: "#A5B4FC" }}>Protected access</p>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em]" style={{ color: "#F8FAFC" }}>Analytics login</h2>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleLogin}>
                <label className="block">
                  <span className="mb-2 block text-sm" style={{ color: "#CBD5E1" }}>Email</span>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-2xl border px-4 py-3 outline-none transition"
                    style={{ background: "rgba(15,23,42,0.72)", borderColor: "#334155", color: "#F8FAFC" }}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm" style={{ color: "#CBD5E1" }}>Password</span>
                  <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    className="w-full rounded-2xl border px-4 py-3 outline-none transition"
                    style={{ background: "rgba(15,23,42,0.72)", borderColor: "#334155", color: "#F8FAFC" }}
                  />
                </label>

                {error ? (
                  <div className="rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(248,113,113,0.35)", background: "rgba(127,29,29,0.28)", color: "#FECACA" }}>
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="w-full rounded-2xl px-4 py-3.5 text-base font-semibold transition hover:translate-y-[-1px]"
                  style={{ background: "linear-gradient(135deg, #818CF8 0%, #38BDF8 100%)", color: "#0F172A" }}
                >
                  Open analytics dashboard
                </button>
              </form>

              <div className="mt-8 rounded-[28px] border p-5" style={{ borderColor: "#334155", background: "rgba(15,23,42,0.54)" }}>
                <p className="text-xs uppercase tracking-[0.24em]" style={{ color: "#94A3B8" }}>Demo credentials</p>
                <p className="mt-3 text-sm" style={{ color: "#E2E8F0" }}>{LOGIN_EMAIL}</p>
                <p className="mt-1 text-sm" style={{ color: "#E2E8F0" }}>{LOGIN_PASSWORD}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen px-4 py-6 sm:px-6 lg:px-8"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(59,130,246,0.10), transparent 25%), radial-gradient(circle at 80% 0%, rgba(99,102,241,0.14), transparent 22%), linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 45%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[32px] border px-6 py-6 sm:px-8 sm:py-7" style={{ background: "rgba(255,255,255,0.84)", borderColor: "rgba(226,232,240,0.8)", boxShadow: "0 30px 120px rgba(15,23,42,0.10)" }}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[22px]" style={{ background: "#FFFFFF", boxShadow: "0 16px 50px rgba(15,23,42,0.08)" }}>
                <Image src="/logos/notion.png" alt="Notion" width={40} height={40} />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em]" style={{ color: "#4F46E5" }}>How Well You Know analytics</p>
                <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-[3.35rem]" style={{ color: "#0F172A" }}>
                  Notionn challenge performance
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7" style={{ color: "#475569" }}>
                  A product education dashboard focused on comprehension, drop-off, and competitive energy, so a customer can see both learning outcomes and community pull.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setIsExportOpen(true);
                  track("notionn_analytics_export_opened");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition hover:translate-y-[-1px]"
                style={{ background: "#111827", color: "#F8FAFC" }}
              >
                <Download size={16} />
                Export analytics
              </button>
              <button
                onClick={() => {
                  window.localStorage.removeItem(STORAGE_KEY);
                  setAuthorized(false);
                }}
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-semibold"
                style={{ borderColor: "#CBD5E1", color: "#334155", background: "#FFFFFF" }}
              >
                Sign out
              </button>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard icon={<Users size={20} />} label="Joined participants" value={String(totalParticipants)} helper={`${totalCompleted} completed the full challenge. This is built to mirror the customer story you want to tell.`} />
          <StatCard icon={<Target size={20} />} label="Completion rate" value={`${completionRate}%`} helper="Strong for a multi-round learning experience. The early rounds keep momentum high before the speed round dip." />
          <StatCard icon={<Gauge size={20} />} label="Average score" value={`${averageScore}/100`} helper="A healthy mean for a challenge that teaches and tests. It signals room for education without feeling demoralizing." />
          <StatCard icon={<Clock3 size={20} />} label="Average finish time" value={averageTime} helper="Fast enough for onboarding emails, launch campaigns, and community drops without heavy friction." />
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[30px] border p-6" style={{ background: "rgba(255,255,255,0.90)", borderColor: "#E2E8F0", boxShadow: "0 22px 70px rgba(15,23,42,0.08)" }}>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em]" style={{ color: "#6366F1" }}>Comprehension</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]" style={{ color: "#0F172A" }}>Feature mastery vs benchmark</h2>
              </div>
              <div className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "#EEF2FF", color: "#4338CA" }}>
                Focus: product education
              </div>
            </div>
            <div className="h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={masteryByDimension} layout="vertical" margin={{ top: 8, right: 18, bottom: 8, left: 10 }}>
                  <CartesianGrid stroke="#E2E8F0" strokeDasharray="4 4" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "#64748B", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis dataKey="dimension" type="category" tick={{ fill: "#0F172A", fontSize: 12 }} axisLine={false} tickLine={false} width={118} />
                  <Tooltip cursor={{ fill: "rgba(99,102,241,0.06)" }} />
                  <Bar dataKey="benchmark" fill="#CBD5E1" radius={[999, 999, 999, 999]} />
                  <Bar dataKey="mastery" fill="#4F46E5" radius={[999, 999, 999, 999]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 rounded-[24px] border px-4 py-4" style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl" style={{ background: "#EEF2FF", color: "#4338CA" }}>
                  <Brain size={18} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#0F172A" }}>Why this matters for HWYK</p>
                  <p className="mt-1 text-sm leading-6" style={{ color: "#475569" }}>
                    This is the core differentiator: not just who clicked, but which product concepts are understood well enough to predict better onboarding, enablement, and follow-up content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[30px] border p-6" style={{ background: "rgba(255,255,255,0.90)", borderColor: "#E2E8F0", boxShadow: "0 22px 70px rgba(15,23,42,0.08)" }}>
              <p className="text-sm font-medium uppercase tracking-[0.22em]" style={{ color: "#6366F1" }}>Drop-off</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]" style={{ color: "#0F172A" }}>Round completion curve</h2>
              <div className="mt-5 space-y-4">
                {roundCompletion.map((row) => (
                  <div key={row.round}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span style={{ color: "#334155" }}>{row.round}</span>
                      <span className="font-semibold" style={{ color: "#0F172A" }}>{row.completion}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full" style={{ background: "#E2E8F0" }}>
                      <div className="h-full rounded-full" style={{ width: `${row.completion}%`, background: row.completion < 82 ? "#F59E0B" : "#4F46E5" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border p-6" style={{ background: "#111827", borderColor: "rgba(255,255,255,0.08)", boxShadow: "0 22px 70px rgba(15,23,42,0.16)" }}>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: "rgba(245,158,11,0.16)", color: "#FCD34D" }}>
                  <CircleAlert size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em]" style={{ color: "#FCD34D" }}>Top insight</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]" style={{ color: "#F8FAFC" }}>{topInsight}</h2>
                  <p className="mt-3 text-sm leading-6" style={{ color: "#CBD5E1" }}>
                    That gives you a clear customer-facing narrative: the game does not just engage, it reveals where onboarding content should go next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[30px] border p-6" style={{ background: "rgba(255,255,255,0.90)", borderColor: "#E2E8F0", boxShadow: "0 22px 70px rgba(15,23,42,0.08)" }}>
            <p className="text-sm font-medium uppercase tracking-[0.22em]" style={{ color: "#6366F1" }}>Scores</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]" style={{ color: "#0F172A" }}>Distribution of final scores</h2>
            <div className="mt-4 h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scoreDistribution} margin={{ top: 16, right: 12, left: -16, bottom: 4 }}>
                  <CartesianGrid stroke="#E2E8F0" strokeDasharray="4 4" vertical={false} />
                  <XAxis dataKey="band" tick={{ fill: "#64748B", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#64748B", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="players" radius={[14, 14, 0, 0]}>
                    {scoreDistribution.map((entry) => (
                      <Cell key={entry.band} fill={entry.band === "70-79" || entry.band === "90-100" ? "#4F46E5" : "#93C5FD"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm leading-6" style={{ color: "#475569" }}>
              This is a better sales demo metric than raw pageviews, because it shows whether the challenge is appropriately calibrated for education, not just gamification.
            </p>
          </div>

          <div className="rounded-[30px] border p-6" style={{ background: "rgba(255,255,255,0.90)", borderColor: "#E2E8F0", boxShadow: "0 22px 70px rgba(15,23,42,0.08)" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em]" style={{ color: "#6366F1" }}>Question analytics</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]" style={{ color: "#0F172A" }}>Hardest concepts right now</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "#ECFDF5", color: "#047857" }}>
                <TrendingUp size={14} />
                Actionable
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[24px] border" style={{ borderColor: "#E2E8F0" }}>
              <table className="min-w-full divide-y" style={{ borderColor: "#E2E8F0" }}>
                <thead style={{ background: "#F8FAFC" }}>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#64748B" }}>Question</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#64748B" }}>Accuracy</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#64748B" }}>What to do</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: "#E2E8F0" }}>
                  {hardestQuestions.map((question) => (
                    <tr key={question.id}>
                      <td className="px-4 py-4 align-top">
                        <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{question.id} · {question.round}</p>
                        <p className="mt-1 text-sm leading-6" style={{ color: "#475569" }}>{question.prompt}</p>
                      </td>
                      <td className="px-4 py-4 align-top">
                        <p className="text-xl font-semibold" style={{ color: question.accuracy < 50 ? "#DC2626" : "#D97706" }}>{question.accuracy}%</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em]" style={{ color: "#94A3B8" }}>{question.dimension}</p>
                      </td>
                      <td className="px-4 py-4 align-top text-sm leading-6" style={{ color: "#475569" }}>
                        {question.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[0.68fr_1.32fr]">
          <div className="rounded-[30px] border p-6" style={{ background: "rgba(255,255,255,0.90)", borderColor: "#E2E8F0", boxShadow: "0 22px 70px rgba(15,23,42,0.08)" }}>
            <p className="text-sm font-medium uppercase tracking-[0.22em]" style={{ color: "#6366F1" }}>Player mix</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]" style={{ color: "#0F172A" }}>Archetype spread</h2>
            <div className="mt-4 h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={archetypeMix} dataKey="value" nameKey="name" innerRadius={62} outerRadius={96} paddingAngle={3}>
                    {archetypeMix.map((slice) => (
                      <Cell key={slice.name} fill={slice.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {archetypeMix.map((slice) => (
                <div key={slice.name} className="flex items-center justify-between rounded-2xl px-3 py-2" style={{ background: "#F8FAFC" }}>
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full" style={{ background: slice.color }} />
                    <span className="text-sm" style={{ color: "#334155" }}>{slice.name}</span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "#0F172A" }}>{slice.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border p-6" style={{ background: "rgba(255,255,255,0.90)", borderColor: "#E2E8F0", boxShadow: "0 22px 70px rgba(15,23,42,0.08)" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em]" style={{ color: "#6366F1" }}>Competitive layer</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]" style={{ color: "#0F172A" }}>Game leaderboard</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "#FFF7ED", color: "#C2410C" }}>
                <Trophy size={14} />
                Community-ready
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[24px] border" style={{ borderColor: "#E2E8F0" }}>
              <table className="min-w-full divide-y" style={{ borderColor: "#E2E8F0" }}>
                <thead style={{ background: "#F8FAFC" }}>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#64748B" }}>Rank</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#64748B" }}>Player</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#64748B" }}>Score</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#64748B" }}>Time</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#64748B" }}>Archetype</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: "#E2E8F0" }}>
                  {participants.map((player) => (
                    <tr key={player.email}>
                      <td className="px-4 py-4 text-sm font-semibold" style={{ color: "#0F172A" }}>#{player.rank}</td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{player.name}</p>
                        <p className="text-sm" style={{ color: "#64748B" }}>{player.company}</p>
                      </td>
                      <td className="px-4 py-4">
                        <div className="inline-flex rounded-full px-3 py-1 text-sm font-semibold" style={{ background: "#EEF2FF", color: "#4338CA" }}>
                          {player.score}/100
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm" style={{ color: "#334155" }}>{formatSeconds(player.completionSeconds)}</td>
                      <td className="px-4 py-4 text-sm" style={{ color: "#334155" }}>{player.archetype}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[30px] border p-6" style={{ background: "rgba(255,255,255,0.90)", borderColor: "#E2E8F0", boxShadow: "0 22px 70px rgba(15,23,42,0.08)" }}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em]" style={{ color: "#6366F1" }}>Why these analytics belong in HWYK</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]" style={{ color: "#0F172A" }}>Built around product learning outcomes</h2>
            </div>
            <div className="rounded-[24px] border px-4 py-3 text-sm leading-6 lg:max-w-xl" style={{ borderColor: "#E2E8F0", background: "#F8FAFC", color: "#475569" }}>
              The most important analytics for this product are not event-style engagement counts alone. They are the ones that let a customer improve onboarding, docs, launch education, and community programming from what users actually understood.
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border p-5" style={{ borderColor: "#E2E8F0", background: "#FFFFFF" }}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: "#ECFDF5", color: "#059669" }}>
                <CheckCircle2 size={18} />
              </div>
              <p className="font-semibold" style={{ color: "#0F172A" }}>Comprehension over vanity</p>
              <p className="mt-2 text-sm leading-6" style={{ color: "#475569" }}>Per-question and per-dimension accuracy tell a customer whether the challenge taught the intended concepts.</p>
            </div>
            <div className="rounded-[24px] border p-5" style={{ borderColor: "#E2E8F0", background: "#FFFFFF" }}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: "#EFF6FF", color: "#2563EB" }}>
                <Gauge size={18} />
              </div>
              <p className="font-semibold" style={{ color: "#0F172A" }}>Friction visibility</p>
              <p className="mt-2 text-sm leading-6" style={{ color: "#475569" }}>Round completion reveals whether challenge design, not content, is causing people to fall off before the finish line.</p>
            </div>
            <div className="rounded-[24px] border p-5" style={{ borderColor: "#E2E8F0", background: "#FFFFFF" }}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: "#FFF7ED", color: "#EA580C" }}>
                <Trophy size={18} />
              </div>
              <p className="font-semibold" style={{ color: "#0F172A" }}>Advocacy signals</p>
              <p className="mt-2 text-sm leading-6" style={{ color: "#475569" }}>Leaderboard and participant-level exports help identify power users for follow-ups, betas, and community activation.</p>
            </div>
          </div>
        </section>

        {isExportOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm">
            <div className="w-full max-w-4xl rounded-[34px] border px-6 py-7 sm:px-10 sm:py-9" style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 38px 120px rgba(15,23,42,0.20)" }}>
              <div className="flex items-start justify-between gap-4">
                <div className="mx-auto flex flex-col items-center text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full" style={{ background: "#EEF2FF" }}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px]" style={{ background: "#4F46E5", color: "#FFFFFF" }}>
                      <Download size={26} />
                    </div>
                  </div>
                  <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em]" style={{ color: "#1E293B" }}>Download exports</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7" style={{ color: "#64748B" }}>
                    Export the datasets a customer actually expects from How Well You Know: participant lists, question performance, answer-level replies, participant results, and the game leaderboard.
                  </p>
                </div>
                <button
                  onClick={() => setIsExportOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border"
                  style={{ borderColor: "#E2E8F0", color: "#475569" }}
                  aria-label="Close exports"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-8 space-y-4">
                {exportLabels.map((item) => (
                  <div key={item.id} className="flex flex-col gap-3 rounded-[24px] border px-5 py-4 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "#E2E8F0", background: "#FFFFFF" }}>
                    <div>
                      <p className="text-lg font-medium" style={{ color: "#334155" }}>{item.label}</p>
                      <p className="mt-1 text-sm" style={{ color: "#94A3B8" }}>Dummy export file for the sales walkthrough</p>
                    </div>
                    <button
                      onClick={() => handleDownload(item.id)}
                      className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-lg font-medium transition hover:translate-y-[-1px]"
                      style={{ borderColor: "#E2E8F0", color: "#334155", background: downloadedId === item.id ? "#ECFDF5" : "#FFFFFF" }}
                    >
                      <FileSpreadsheet size={20} color="#16A34A" />
                      {downloadedId === item.id ? "Downloaded" : "XLS"}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setIsExportOpen(false)}
                  className="rounded-2xl border px-6 py-3 text-base font-medium"
                  style={{ borderColor: "#D7DEE7", color: "#2563EB", background: "#FFFFFF" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
