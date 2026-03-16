"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Download,
  FileSpreadsheet,
  ChevronDown,
  Check,
  BarChart3,
  TrendingDown,
  Calendar,
  Hash,
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

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

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
};

type QuestionRow = {
  id: string;
  round: string;
  prompt: string;
  dimension: string;
  accuracy: number;
  insight: string;
};

type QuizDataset = {
  id: string;
  name: string;
  dateRange: string;
  participants: Participant[];
  roundCompletion: Array<{ round: string; started: number; completed: number }>;
  dimensionMastery: Array<{ dimension: string; mastery: number }>;
  archetypeMix: Array<{ name: string; description: string; value: number; color: string }>;
  weakestQuestions: QuestionRow[];
  totalStarted: number;
  totalCompleted: number;
  averageScore: number;
  medianScore: number;
  averageTime: string;
  dropOffRound: string;
  biggestGap: string;
};

/* ------------------------------------------------------------------ */
/*  Design tokens                                                      */
/* ------------------------------------------------------------------ */

const T = {
  accent: "var(--m-accent)",
  accentHover: "var(--m-accent-hover)",
  accentLight: "var(--m-accent-light)",
  text: "var(--m-text)",
  textSec: "var(--m-text-secondary)",
  textTer: "var(--m-text-tertiary)",
  bg: "var(--m-bg)",
  bgSec: "var(--m-bg-secondary)",
  border: "var(--m-border)",
  borderSubtle: "var(--m-border-subtle)",
};

const HEX_ACCENT = "#635BFF";
const HEX_TEXT_TER = "#8898AA";
const HEX_BORDER = "#E3E8EE";

const CHART = {
  indigo: "#635BFF",
  teal: "#3ECFB4",
  blue: "#228BE6",
  amber: "#F59F00",
  rose: "#E8597A",
  slate: "#6C7A89",
  lavender: "#A78BFA",
};

const LOGIN_EMAIL = "demo@howwellyouknow.com";
const LOGIN_PASSWORD = "3956";
const STORAGE_KEY = "hwyk_airtablee_analytics_auth";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const quizDatasets: QuizDataset[] = [
  {
    id: "airtable-power-users",
    name: "Airtable Power Users Challenge",
    dateRange: "Mar 10 – 14, 2026",
    totalStarted: 1247,
    totalCompleted: 891,
    averageScore: 71,
    medianScore: 68,
    averageTime: "3m 28s",
    dropOffRound: "Speed Round",
    biggestGap: "Formulas & Logic",
    participants: [
      { name: "Lena Müller", email: "lena@basecamp.de", company: "Basecamp DE", score: 94, joinedAt: "2026-03-10 10:02", completedAt: "2026-03-10 10:05", completionSeconds: 178, archetype: "Base Architect", rank: 1 },
      { name: "Raj Patel", email: "raj@gridflow.io", company: "GridFlow", score: 89, joinedAt: "2026-03-10 10:15", completedAt: "2026-03-10 10:18", completionSeconds: 195, archetype: "Automation Engineer", rank: 2 },
      { name: "Sophie Chen", email: "sophie@stacklabs.com", company: "StackLabs", score: 83, joinedAt: "2026-03-10 11:30", completedAt: "2026-03-10 11:34", completionSeconds: 228, archetype: "Automation Engineer", rank: 3 },
      { name: "Marcus Johnson", email: "marcus@relayhq.co", company: "RelayHQ", score: 76, joinedAt: "2026-03-10 12:05", completedAt: "2026-03-10 12:09", completionSeconds: 264, archetype: "Power Builder", rank: 4 },
      { name: "Aisha Khan", email: "aisha@formcraft.io", company: "FormCraft", score: 72, joinedAt: "2026-03-10 13:22", completedAt: "2026-03-10 13:27", completionSeconds: 289, archetype: "Power Builder", rank: 5 },
      { name: "Tom Eriksson", email: "tom@viewpoint.se", company: "Viewpoint", score: 65, joinedAt: "2026-03-10 14:10", completedAt: "2026-03-10 14:16", completionSeconds: 332, archetype: "View Switcher", rank: 6 },
      { name: "Priya Nair", email: "priya@baseworks.in", company: "BaseWorks", score: 58, joinedAt: "2026-03-10 15:40", completedAt: "2026-03-10 15:46", completionSeconds: 378, archetype: "Table Maker", rank: 7 },
      { name: "Jake Williams", email: "jake@sheetshift.com", company: "SheetShift", score: 51, joinedAt: "2026-03-10 16:55", completedAt: "2026-03-10 17:02", completionSeconds: 412, archetype: "Spreadsheet Thinker", rank: 8 },
      { name: "Mei Lin", email: "mei@datacraft.sg", company: "DataCraft", score: 48, joinedAt: "2026-03-10 17:20", completedAt: "2026-03-10 17:27", completionSeconds: 435, archetype: "Spreadsheet Thinker", rank: 9 },
      { name: "Carlos Ruiz", email: "carlos@baseops.mx", company: "BaseOps", score: 44, joinedAt: "2026-03-11 09:05", completedAt: "2026-03-11 09:13", completionSeconds: 458, archetype: "First Base", rank: 10 },
    ],
    roundCompletion: [
      { round: "Truth or Myth", started: 1247, completed: 1247 },
      { round: "This or That", started: 1247, completed: 1197 },
      { round: "Quick Pick", started: 1197, completed: 1135 },
      { round: "Speed Round", started: 1135, completed: 986 },
      { round: "Odd One Out", started: 986, completed: 935 },
      { round: "Final Boss", started: 935, completed: 891 },
    ],
    dimensionMastery: [
      { dimension: "Data & Structure", mastery: 77 },
      { dimension: "Automations", mastery: 73 },
      { dimension: "Views & Interfaces", mastery: 75 },
      { dimension: "Integrations & API", mastery: 69 },
      { dimension: "Advanced Features", mastery: 72 },
      { dimension: "Formulas & Logic", mastery: 63 },
    ],
    archetypeMix: [
      { name: "Base Architect", description: "Deep platform knowledge — potential champion or beta tester", value: 10, color: CHART.indigo },
      { name: "Automation Engineer", description: "Strong on workflows — ready for advanced features", value: 18, color: CHART.teal },
      { name: "Power Builder", description: "Solid fundamentals — good candidate for enablement content", value: 24, color: CHART.blue },
      { name: "View Switcher", description: "Knows the basics — needs help with automations & formulas", value: 22, color: CHART.amber },
      { name: "Table Maker", description: "Early stage — high potential for onboarding campaigns", value: 15, color: CHART.rose },
      { name: "Spreadsheet Thinker", description: "Still thinks in spreadsheets — needs the \"why Airtable\" story", value: 8, color: CHART.slate },
      { name: "First Base", description: "Brand new — nurture sequence candidate", value: 3, color: CHART.lavender },
    ],
    weakestQuestions: [
      { id: "Q9", round: "Quick Pick", prompt: "Formula field using DATETIME_DIFF with NOW()", dimension: "Formulas & Logic", accuracy: 38, insight: "Users don't know formulas exist. Your onboarding should introduce a simple formula before this." },
      { id: "Q13", round: "Odd One Out", prompt: "What Airtable's API cannot do (schema changes)", dimension: "Integrations & API", accuracy: 44, insight: "Users confuse record operations with schema changes. Clarify API boundaries in your developer docs." },
      { id: "Q11", round: "Speed Round", prompt: "Identifying all real Airtable view types", dimension: "Views & Interfaces", accuracy: 51, insight: "Users know views exist but can't name them all. A \"views tour\" in onboarding would fix this." },
      { id: "Q6", round: "This or That", prompt: "Multi-step automation for status-triggered workflows", dimension: "Automations", accuracy: 56, insight: "Users understand triggers but not chained actions. Show multi-step automation templates." },
    ],
  },
  {
    id: "airtable-onboarding",
    name: "Airtable New User Onboarding",
    dateRange: "Mar 12 – 14, 2026",
    totalStarted: 834,
    totalCompleted: 612,
    averageScore: 62,
    medianScore: 59,
    averageTime: "4m 05s",
    dropOffRound: "Speed Round",
    biggestGap: "Formulas & Logic",
    participants: [
      { name: "Anna Berg", email: "anna@startupkit.no", company: "StartupKit", score: 88, joinedAt: "2026-03-12 09:10", completedAt: "2026-03-12 09:13", completionSeconds: 192, archetype: "Automation Engineer", rank: 1 },
      { name: "David Park", email: "david@flowbase.kr", company: "FlowBase", score: 79, joinedAt: "2026-03-12 09:30", completedAt: "2026-03-12 09:34", completionSeconds: 248, archetype: "Power Builder", rank: 2 },
      { name: "Maria Costa", email: "maria@tableops.pt", company: "TableOps", score: 68, joinedAt: "2026-03-12 10:45", completedAt: "2026-03-12 10:50", completionSeconds: 302, archetype: "View Switcher", rank: 3 },
      { name: "Chris Taylor", email: "chris@gridworks.au", company: "GridWorks", score: 61, joinedAt: "2026-03-12 11:20", completedAt: "2026-03-12 11:26", completionSeconds: 348, archetype: "View Switcher", rank: 4 },
      { name: "Yuki Tanaka", email: "yuki@baseflow.jp", company: "BaseFlow", score: 54, joinedAt: "2026-03-12 13:05", completedAt: "2026-03-12 13:11", completionSeconds: 385, archetype: "Table Maker", rank: 5 },
      { name: "Emma Wilson", email: "emma@newbase.uk", company: "NewBase", score: 47, joinedAt: "2026-03-12 14:30", completedAt: "2026-03-12 14:37", completionSeconds: 420, archetype: "Spreadsheet Thinker", rank: 6 },
    ],
    roundCompletion: [
      { round: "Truth or Myth", started: 834, completed: 834 },
      { round: "This or That", started: 834, completed: 784 },
      { round: "Quick Pick", started: 784, completed: 734 },
      { round: "Speed Round", started: 734, completed: 617 },
      { round: "Odd One Out", started: 617, completed: 584 },
      { round: "Final Boss", started: 584, completed: 550 },
    ],
    dimensionMastery: [
      { dimension: "Data & Structure", mastery: 70 }, { dimension: "Automations", mastery: 63 },
      { dimension: "Views & Interfaces", mastery: 69 }, { dimension: "Integrations & API", mastery: 58 },
      { dimension: "Advanced Features", mastery: 65 }, { dimension: "Formulas & Logic", mastery: 53 },
    ],
    archetypeMix: [
      { name: "Automation Engineer", description: "Strong on workflows", value: 8, color: CHART.indigo },
      { name: "Power Builder", description: "Solid fundamentals", value: 14, color: CHART.teal },
      { name: "View Switcher", description: "Knows the basics", value: 26, color: CHART.blue },
      { name: "Table Maker", description: "Early stage user", value: 28, color: CHART.amber },
      { name: "Spreadsheet Thinker", description: "Needs the \"why\" story", value: 18, color: CHART.rose },
      { name: "First Base", description: "Brand new", value: 6, color: CHART.slate },
    ],
    weakestQuestions: [
      { id: "Q4", round: "Truth or Myth", prompt: "Airtable has a full REST API for CRUD", dimension: "Integrations & API", accuracy: 32, insight: "New users don't know the API exists. Introduce it early with a simple read-only example." },
      { id: "Q9", round: "Quick Pick", prompt: "DATETIME_DIFF formula for elapsed time", dimension: "Formulas & Logic", accuracy: 35, insight: "Formulas feel intimidating. Start with IF() and CONCATENATE() before DATETIME_DIFF." },
      { id: "Q14", round: "Odd One Out", prompt: "Version History with branching doesn't exist", dimension: "Advanced Features", accuracy: 42, insight: "Users assume Git-like versioning. Clarify what revision history actually covers." },
      { id: "Q10", round: "Quick Pick", prompt: "Scripting actions inside Automations", dimension: "Automations", accuracy: 48, insight: "Scripting is too advanced for new users. Introduce it as a \"level 2\" concept." },
    ],
  },
  {
    id: "airtable-team-leads",
    name: "Airtable for Team Leads",
    dateRange: "Mar 14 – 16, 2026",
    totalStarted: 463,
    totalCompleted: 387,
    averageScore: 78,
    medianScore: 76,
    averageTime: "3m 12s",
    dropOffRound: "Speed Round",
    biggestGap: "Formulas & Logic",
    participants: [
      { name: "Nina Rossi", email: "nina@opsteam.it", company: "OpsTeam", score: 95, joinedAt: "2026-03-14 09:00", completedAt: "2026-03-14 09:03", completionSeconds: 168, archetype: "Base Architect", rank: 1 },
      { name: "Alex Rivera", email: "alex@leadgrid.mx", company: "LeadGrid", score: 87, joinedAt: "2026-03-14 09:20", completedAt: "2026-03-14 09:23", completionSeconds: 198, archetype: "Automation Engineer", rank: 2 },
      { name: "Kim Soo-jin", email: "kim@teamflow.kr", company: "TeamFlow", score: 82, joinedAt: "2026-03-14 10:10", completedAt: "2026-03-14 10:14", completionSeconds: 232, archetype: "Automation Engineer", rank: 3 },
      { name: "James O'Brien", email: "james@basepilot.ie", company: "BasePilot", score: 74, joinedAt: "2026-03-14 11:35", completedAt: "2026-03-14 11:40", completionSeconds: 275, archetype: "Power Builder", rank: 4 },
      { name: "Fatima Al-Rashid", email: "fatima@gridops.ae", company: "GridOps", score: 69, joinedAt: "2026-03-14 13:00", completedAt: "2026-03-14 13:05", completionSeconds: 308, archetype: "View Switcher", rank: 5 },
      { name: "Henrik Larsen", email: "henrik@basehub.dk", company: "BaseHub", score: 64, joinedAt: "2026-03-14 14:15", completedAt: "2026-03-14 14:20", completionSeconds: 335, archetype: "View Switcher", rank: 6 },
      { name: "Zara Ahmed", email: "zara@gridpilot.pk", company: "GridPilot", score: 59, joinedAt: "2026-03-14 15:30", completedAt: "2026-03-14 15:36", completionSeconds: 368, archetype: "Table Maker", rank: 7 },
    ],
    roundCompletion: [
      { round: "Truth or Myth", started: 463, completed: 463 },
      { round: "This or That", started: 463, completed: 454 },
      { round: "Quick Pick", started: 454, completed: 435 },
      { round: "Speed Round", started: 435, completed: 398 },
      { round: "Odd One Out", started: 398, completed: 380 },
      { round: "Final Boss", started: 380, completed: 366 },
    ],
    dimensionMastery: [
      { dimension: "Data & Structure", mastery: 84 }, { dimension: "Automations", mastery: 76 },
      { dimension: "Views & Interfaces", mastery: 87 }, { dimension: "Integrations & API", mastery: 78 },
      { dimension: "Advanced Features", mastery: 80 }, { dimension: "Formulas & Logic", mastery: 72 },
    ],
    archetypeMix: [
      { name: "Base Architect", description: "Deep platform knowledge", value: 15, color: CHART.indigo },
      { name: "Automation Engineer", description: "Strong on workflows", value: 28, color: CHART.teal },
      { name: "Power Builder", description: "Solid fundamentals", value: 29, color: CHART.blue },
      { name: "View Switcher", description: "Knows the basics", value: 18, color: CHART.amber },
      { name: "Table Maker", description: "Early stage", value: 7, color: CHART.rose },
      { name: "First Base", description: "Brand new", value: 3, color: CHART.slate },
    ],
    weakestQuestions: [
      { id: "Q6", round: "This or That", prompt: "Multi-step automation for status-triggered workflows", dimension: "Automations", accuracy: 52, insight: "Team leads understand triggers but not chained actions. Show real workflow templates." },
      { id: "Q9", round: "Quick Pick", prompt: "DATETIME_DIFF formula for elapsed time", dimension: "Formulas & Logic", accuracy: 48, insight: "Even experienced leads struggle with formulas. Provide a formula library." },
      { id: "Q13", round: "Odd One Out", prompt: "API schema changes vs record CRUD", dimension: "Integrations & API", accuracy: 55, insight: "Leads know the API exists but not its boundaries. Add a quick reference card." },
      { id: "Q10", round: "Quick Pick", prompt: "Scripting actions inside Automations", dimension: "Automations", accuracy: 58, insight: "Scripting is a power feature leads want but haven't tried. Offer a guided tutorial." },
    ],
  },
];

const exportLabels = [
  { id: "joined-participants", label: "Joined participants" },
  { id: "questions", label: "Questions" },
  { id: "replies", label: "Replies to questions" },
  { id: "results-per-participant", label: "Result per participant" },
  { id: "leaderboard", label: "Game leaderboard" },
] as const;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function fmt(n: number) { return n.toLocaleString(); }
function fmtSec(t: number) { return `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, "0")}s`; }
function pct(a: number, b: number) { return b > 0 ? Math.round((a / b) * 100) : 0; }

function toExcelHtml(rows: Array<Record<string, string | number>>) {
  const h = Object.keys(rows[0] ?? {});
  return `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="UTF-8"/></head><body><table><thead><tr>${h.map((k) => `<th>${k}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${h.map((k) => `<td>${String(r[k] ?? "")}</td>`).join("")}</tr>`).join("")}</tbody></table></body></html>`;
}

function triggerDownload(filename: string, rows: Array<Record<string, string | number>>) {
  const blob = new Blob([toExcelHtml(rows)], { type: "application/vnd.ms-excel;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
}

function buildExportRows(ds: QuizDataset) {
  return {
    "joined-participants": { filename: `hwyk_${ds.id}_participants.xls`, rows: ds.participants.map((p) => ({ Name: p.name, Email: p.email, Company: p.company, JoinedAt: p.joinedAt, CompletedAt: p.completedAt, Score: p.score, Archetype: p.archetype })) },
    questions: { filename: `hwyk_${ds.id}_questions.xls`, rows: ds.weakestQuestions.map((q) => ({ QuestionId: q.id, Round: q.round, Dimension: q.dimension, Prompt: q.prompt, AccuracyPercent: q.accuracy })) },
    replies: { filename: `hwyk_${ds.id}_replies.xls`, rows: ds.participants.flatMap((p, i) => ds.weakestQuestions.map((q, qi) => ({ Participant: p.email, QuestionId: q.id, Prompt: q.prompt, SubmittedAnswer: i + qi > 3 ? "Incorrect" : "Correct", Correct: i + qi <= 3 ? "Yes" : "No", SubmittedAt: p.completedAt }))) },
    "results-per-participant": { filename: `hwyk_${ds.id}_results.xls`, rows: ds.participants.map((p) => ({ Name: p.name, Email: p.email, Company: p.company, Score: p.score, CompletionTime: fmtSec(p.completionSeconds), Archetype: p.archetype })) },
    leaderboard: { filename: `hwyk_${ds.id}_leaderboard.xls`, rows: ds.participants.map((p) => ({ Rank: p.rank, Name: p.name, Company: p.company, Score: p.score, CompletionTime: fmtSec(p.completionSeconds), Archetype: p.archetype })) },
  };
}

/* ------------------------------------------------------------------ */
/*  Donut                                                              */
/* ------------------------------------------------------------------ */

function Donut({ value, label, sub, color }: { value: number; label: string; sub: string; color: string }) {
  const r = 38; const c = 2 * Math.PI * r; const offset = c - (Math.min(value, 100) / 100) * c;
  return (
    <div className="flex flex-1 items-center gap-5">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold" style={{ color: T.text }}>{label}</p>
        <p className="mt-1 text-[13px] leading-snug" style={{ color: T.textSec }}>{sub}</p>
      </div>
      <div className="relative flex-shrink-0">
        <svg width="88" height="88" viewBox="0 0 88 88"><circle cx="44" cy="44" r={r} fill="none" stroke={HEX_BORDER} strokeWidth="6" /><circle cx="44" cy="44" r={r} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset} transform="rotate(-90 44 44)" /></svg>
        <span className="absolute inset-0 flex items-center justify-center text-base font-bold" style={{ color: T.text }}>{value}%</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function AirtableeAnalyticsExperience() {
  const [authorized, setAuthorized] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizOpen, setQuizOpen] = useState(false);
  const [dateRange, setDateRange] = useState("all");
  const [dateOpen, setDateOpen] = useState(false);

  const DATE_OPTIONS = [
    { id: "7d", label: "Last 7 days" },
    { id: "14d", label: "Last 14 days" },
    { id: "30d", label: "Last 30 days" },
    { id: "90d", label: "Last 90 days" },
    { id: "all", label: "All time" },
  ] as const;
  const dateLabel = DATE_OPTIONS.find((d) => d.id === dateRange)?.label ?? "All time";

  const ds = quizDatasets[quizIdx];
  const exportMap = useMemo(() => buildExportRows(ds), [ds]);
  const stored = typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY) === "true";
  const authed = authorized || stored;
  const cr = pct(ds.totalCompleted, ds.totalStarted);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== LOGIN_EMAIL || password !== LOGIN_PASSWORD) { setError("Invalid credentials."); track("airtablee_analytics_login_failed"); return; }
    window.localStorage.setItem(STORAGE_KEY, "true"); setAuthorized(true); setError(""); track("airtablee_analytics_login_success");
  };

  const handleSignOut = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setAuthorized(false);
    window.location.reload();
  };

  const handleDownload = (id: keyof ReturnType<typeof buildExportRows>) => {
    const file = exportMap[id]; triggerDownload(file.filename, file.rows); setDownloadedId(id);
    setTimeout(() => setDownloadedId((c) => (c === id ? null : c)), 1800);
    track("airtablee_analytics_export_downloaded", { export_type: id, quiz: ds.id });
  };

  /* ---------- LOGIN ---------- */
  if (!authed) {
    return (
      <main className="flex min-h-screen items-center justify-center" style={{ background: T.bgSec, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <div className="w-full max-w-[380px]">
          <div className="mb-8 flex justify-center">
            <Image src="/logos/hwyk-lockup-transparent.png" alt="How Well You Know" width={200} height={44} />
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm" style={{ borderColor: T.border }}>
            <div className="mb-1 flex items-center justify-center gap-2.5">
              <img src="/logos/airtable.jpg" alt="Airtable" width={24} height={24} style={{ borderRadius: 5 }} />
              <h1 className="text-xl font-semibold" style={{ color: T.text }}>Airtable Analytics</h1>
            </div>
            <p className="mb-6 text-center text-sm" style={{ color: T.textTer }}>Sign in to view challenge analytics</p>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: T.textSec }}>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="demo@howwellyouknow.com" className="w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#635BFF]" style={{ borderColor: T.border, color: T.text }} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: T.textSec }}>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••" className="w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#635BFF]" style={{ borderColor: T.border, color: T.text }} />
              </div>
              {error ? <p className="text-sm" style={{ color: CHART.rose }}>{error}</p> : null}
              <button type="submit" className="w-full rounded-lg px-4 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90" style={{ background: T.accent }}>Sign in</button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  /* ---------- DASHBOARD ---------- */

  return (
    <main className="flex h-screen flex-col overflow-hidden" style={{ background: T.bg, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* ===== TOP NAV ===== */}
      <header className="flex h-14 flex-shrink-0 items-center justify-between border-b px-6" style={{ borderColor: T.border, background: T.bg }}>
        <Image src="/logos/hwyk-lockup-transparent.png" alt="How Well You Know" width={150} height={32} />
        <div className="flex items-center gap-3">
          <button onClick={() => { setIsExportOpen(true); track("airtablee_analytics_export_opened"); }} className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90" style={{ background: T.accent }}><Download size={15} />Export</button>
          <button onClick={handleSignOut} className="text-[13px] transition-colors hover:opacity-70" style={{ color: T.textTer }}>Sign out</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">

        {/* ===== LEFT SIDEBAR ===== */}
        <nav className="flex w-[200px] flex-shrink-0 flex-col border-r" style={{ borderColor: T.border, background: T.bg }}>
          <div className="mt-4 px-3">
            <div className="flex items-center gap-2.5 rounded-lg px-3 py-2" style={{ background: T.accentLight, color: T.accent }}>
              <BarChart3 size={18} />
              <span className="text-sm font-semibold">Analytics</span>
            </div>
            <button onClick={() => { setIsExportOpen(true); track("airtablee_analytics_export_opened"); }} className="mt-1 flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left transition-colors hover:bg-gray-50" style={{ color: T.textSec }}>
              <Download size={18} />
              <span className="text-sm">Export</span>
            </button>
          </div>
          <div className="flex-1" />
          <div className="border-t px-5 py-4" style={{ borderColor: T.border }}>
            <div className="flex items-center gap-2.5">
              <img src="/logos/airtable.jpg" alt="" width={22} height={22} style={{ borderRadius: 5 }} />
              <div>
                <p className="text-xs font-medium" style={{ color: T.text }}>Airtable</p>
                <p className="text-[11px]" style={{ color: T.textTer }}>Challenge analytics</p>
              </div>
            </div>
          </div>
        </nav>

        {/* ===== CONTENT ===== */}
        <div className="flex-1 overflow-y-auto" style={{ background: T.bgSec }}>
          <div className="px-8 py-7">

            <h1 className="mb-4 text-[28px] font-bold tracking-tight" style={{ color: T.text }}>Challenge overview</h1>

            {/* Toolbar: quiz selector + date range */}
            <div className="mb-6 flex items-center gap-3">
              {/* Quiz selector */}
              <div className="relative">
                <button onClick={() => { setQuizOpen(!quizOpen); setDateOpen(false); }} className="inline-flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50" style={{ borderColor: HEX_BORDER, color: T.text }}>
                  <img src="/logos/airtable.jpg" alt="" width={16} height={16} style={{ borderRadius: 3 }} />
                  {ds.name}
                  <ChevronDown size={14} className={`transition-transform ${quizOpen ? "rotate-180" : ""}`} style={{ color: HEX_TEXT_TER }} />
                </button>
                {quizOpen ? (
                  <div className="absolute left-0 top-full z-50 mt-1.5 w-80 rounded-xl border bg-white py-1 shadow-lg" style={{ borderColor: T.border }}>
                    {quizDatasets.map((q, i) => (
                      <button key={q.id} onClick={() => { setQuizIdx(i); setQuizOpen(false); }} className="flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors hover:bg-gray-50" style={{ color: i === quizIdx ? T.text : T.textSec, fontWeight: i === quizIdx ? 600 : 400 }}>
                        <span>{q.name}</span><span className="text-xs" style={{ color: T.textTer }}>{fmt(q.totalStarted)} participants</span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Date range selector */}
              <div className="relative">
                <button onClick={() => { setDateOpen(!dateOpen); setQuizOpen(false); }} className="inline-flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50" style={{ borderColor: HEX_BORDER, color: T.text }}>
                  <Calendar size={14} style={{ color: HEX_TEXT_TER }} />
                  {dateLabel}
                  <ChevronDown size={14} className={`transition-transform ${dateOpen ? "rotate-180" : ""}`} style={{ color: HEX_TEXT_TER }} />
                </button>
                {dateOpen ? (
                  <div className="absolute left-0 top-full z-50 mt-1.5 w-52 rounded-xl border bg-white py-1 shadow-lg" style={{ borderColor: T.border }}>
                    {DATE_OPTIONS.map((opt) => (
                      <button key={opt.id} onClick={() => { setDateRange(opt.id); setDateOpen(false); track("airtablee_analytics_date_range_changed", { range: opt.id }); }} className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-gray-50" style={{ color: dateRange === opt.id ? T.text : T.textSec, fontWeight: dateRange === opt.id ? 600 : 400 }}>
                        {opt.label}
                        {dateRange === opt.id ? <Check size={14} style={{ color: HEX_ACCENT }} /> : null}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <span className="text-[13px]" style={{ color: T.textTer }}>{ds.dateRange}</span>
            </div>

            {/* ROW 1: North star donuts */}
            <section className="mb-6 flex gap-6 rounded-xl bg-white px-7 py-6" style={{ border: `1px solid ${HEX_BORDER}` }}>
              <Donut value={cr} label="Completion rate" sub={`${fmt(ds.totalCompleted)} of ${fmt(ds.totalStarted)} finished the challenge.`} color={CHART.indigo} />
              <div className="w-px self-stretch" style={{ background: HEX_BORDER }} />
              <Donut value={ds.averageScore} label="Avg knowledge score" sub={`Average accuracy across all completions.`} color={CHART.teal} />
              <div className="w-px self-stretch" style={{ background: HEX_BORDER }} />
              <Donut value={pct(ds.totalStarted - ds.totalCompleted, ds.totalStarted)} label="Drop-off rate" sub={`${fmt(ds.totalStarted - ds.totalCompleted)} started but didn't finish.`} color={CHART.rose} />
            </section>

            {/* ROW 2: 4 stat cards */}
            <section className="mb-6 grid grid-cols-4 gap-4">
              {([
                ["Started", fmt(ds.totalStarted)],
                ["Completed", fmt(ds.totalCompleted)],
                ["Median score", `${ds.medianScore}/100`],
                ["Avg time", ds.averageTime],
              ] as const).map(([l, v]) => (
                <div key={l} className="rounded-xl bg-white px-5 py-5" style={{ border: `1px solid ${HEX_BORDER}` }}>
                  <p className="text-[13px] font-medium uppercase tracking-wider" style={{ color: T.textTer }}>{l}</p>
                  <p className="mt-2 text-[26px] font-bold tracking-tight" style={{ color: T.text }}>{v}</p>
                </div>
              ))}
            </section>

            {/* ROW 3: Two insight callouts */}
            <section className="mb-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl bg-white px-6 py-5" style={{ border: `1px solid ${HEX_BORDER}` }}>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: CHART.amber }} />
                  <p className="text-[15px] font-semibold" style={{ color: T.text }}>Biggest knowledge gap</p>
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: T.textSec }}>
                  Users struggle most with <strong style={{ color: T.text }}>{ds.biggestGap}</strong> — only {ds.dimensionMastery.find((d) => d.dimension === ds.biggestGap)?.mastery ?? "?"}% accuracy. This is where your docs, onboarding, or training needs the most work.
                </p>
              </div>
              <div className="rounded-xl bg-white px-6 py-5" style={{ border: `1px solid ${HEX_BORDER}` }}>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: CHART.rose }} />
                  <p className="text-[15px] font-semibold" style={{ color: T.text }}>Where people leave</p>
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: T.textSec }}>
                  Most drop-offs happen at <strong style={{ color: T.text }}>{ds.dropOffRound}</strong>. Consider whether that round is too hard, too long, or unclear for your audience.
                </p>
              </div>
            </section>

            {/* ROW 4: Knowledge chart (left) + Questions (right) */}
            <section className="mb-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl bg-white px-6 py-6" style={{ border: `1px solid ${HEX_BORDER}` }}>
                <p className="mb-1 text-[15px] font-semibold" style={{ color: T.text }}>Knowledge by product area</p>
                <p className="mb-5 text-sm" style={{ color: T.textSec }}>Accuracy per area. Shorter bars need more attention.</p>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ds.dimensionMastery} layout="vertical" margin={{ top: 0, right: 16, bottom: 0, left: 0 }}>
                      <CartesianGrid stroke={HEX_BORDER} horizontal={false} />
                      <XAxis type="number" domain={[0, 100]} tick={{ fill: HEX_TEXT_TER, fontSize: 12 }} axisLine={false} tickLine={false} unit="%" />
                      <YAxis dataKey="dimension" type="category" tick={{ fill: "#425466", fontSize: 13 }} axisLine={false} tickLine={false} width={130} />
                      <Tooltip formatter={(v: number) => `${v}%`} />
                      <Bar dataKey="mastery" radius={[0, 4, 4, 0]} barSize={20} fill={CHART.blue} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="rounded-xl bg-white px-6 py-6" style={{ border: `1px solid ${HEX_BORDER}` }}>
                <p className="mb-1 text-[15px] font-semibold" style={{ color: T.text }}>Questions with lowest accuracy</p>
                <p className="mb-4 text-sm" style={{ color: T.textSec }}>Actionable recommendations per question.</p>
                {ds.weakestQuestions.map((q) => (
                  <div key={q.id} className="border-b py-3.5 last:border-0" style={{ borderColor: T.borderSubtle }}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ background: CHART.blue }}>{q.accuracy}%</div>
                      <div className="min-w-0">
                        <p className="text-[14px] font-medium" style={{ color: T.text }}>{q.prompt}</p>
                        <p className="mt-0.5 text-[13px]" style={{ color: T.textTer }}>{q.dimension} · {q.round}</p>
                        <p className="mt-1.5 text-[13px] leading-snug" style={{ color: T.textSec }}>{q.insight}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ROW 5: Drop-off (left) + User segments (right) */}
            <section className="mb-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl bg-white px-6 py-6" style={{ border: `1px solid ${HEX_BORDER}` }}>
                <p className="mb-1 text-[15px] font-semibold" style={{ color: T.text }}>Drop-off by round</p>
                <p className="mb-5 text-sm" style={{ color: T.textSec }}>A steep drop between rounds signals friction.</p>
                {ds.roundCompletion.map((row) => {
                  const drop = row.started > 0 ? Math.round(((row.started - row.completed) / row.started) * 100) : 0;
                  const bad = drop > 10;
                  return (
                    <div key={row.round} className="mb-4 last:mb-0">
                      <div className="mb-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] font-medium" style={{ color: T.text }}>{row.round}</span>
                          {bad ? <span className="inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: "#EDF1F7", color: T.textSec }}><TrendingDown size={11} />{drop}% drop</span> : null}
                        </div>
                        <span className="text-[13px]" style={{ color: T.textTer }}>{fmt(row.completed)}/{fmt(row.started)}</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full" style={{ background: "#EDF1F7" }}>
                        <div className="h-full rounded-full transition-all" style={{ width: `${pct(row.completed, row.started)}%`, background: bad ? CHART.rose : CHART.teal }} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="rounded-xl bg-white px-6 py-6" style={{ border: `1px solid ${HEX_BORDER}` }}>
                <p className="mb-1 text-[15px] font-semibold" style={{ color: T.text }}>User segments</p>
                <p className="mb-4 text-sm" style={{ color: T.textSec }}>How participants are distributed by skill level.</p>
                <div className="mb-4 flex justify-center">
                  <div className="h-[160px] w-[160px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart><Pie data={ds.archetypeMix} dataKey="value" nameKey="name" innerRadius={40} outerRadius={68} paddingAngle={2} strokeWidth={0}>{ds.archetypeMix.map((s) => <Cell key={s.name} fill={s.color} />)}</Pie><Tooltip /></PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                {ds.archetypeMix.map((s) => (
                  <div key={s.name} className="flex items-center gap-2.5 border-b py-2.5 last:border-0" style={{ borderColor: T.borderSubtle }}>
                    <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ background: s.color }} />
                    <span className="flex-1 text-[14px]" style={{ color: T.text }}>{s.name}</span>
                    <span className="text-[14px] font-semibold" style={{ color: T.text }}>{s.value}%</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ROW 6: Leaderboard */}
            <section className="mb-6">
              <div className="overflow-hidden rounded-xl bg-white" style={{ border: `1px solid ${HEX_BORDER}` }}>
                <div className="flex items-center justify-between px-6 py-5">
                  <div>
                    <p className="text-[15px] font-semibold" style={{ color: T.text }}>Top performers</p>
                    <p className="mt-1 text-sm" style={{ color: T.textSec }}>Ranked by score. Top performers are candidates for beta programs and advocacy.</p>
                  </div>
                  <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: "#F0EEFF", color: CHART.indigo }}>{ds.participants.length} participants</span>
                </div>
                <table className="min-w-full">
                  <thead>
                    <tr style={{ background: T.bgSec }}>
                      <th className="w-16 px-5 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: T.textTer }}>#</th>
                      <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: T.textTer }}>Participant</th>
                      <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: T.textTer }}>Company</th>
                      <th className="w-[200px] px-5 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: T.textTer }}>Score</th>
                      <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: T.textTer }}>Time</th>
                      <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: T.textTer }}>Segment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ds.participants.map((p) => {
                      const medal = p.rank <= 3 ? [CHART.indigo, CHART.teal, CHART.blue][p.rank - 1] : null;
                      const initials = p.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
                      return (
                        <tr key={p.email} className="border-t transition-colors hover:bg-gray-50/50" style={{ borderColor: T.borderSubtle }}>
                          <td className="px-5 py-4">
                            {medal
                              ? <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: medal }}>{p.rank}</span>
                              : <span className="text-sm" style={{ color: T.textTer }}>{p.rank}</span>
                            }
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold" style={{ background: T.bgSec, color: T.textSec }}>{initials}</span>
                              <div>
                                <p className="text-sm font-medium" style={{ color: T.text }}>{p.name}</p>
                                <p className="text-xs" style={{ color: T.textTer }}>{p.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-sm" style={{ color: T.textSec }}>{p.company}</td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: "#EDF1F7" }}>
                                <div className="h-full rounded-full" style={{ width: `${p.score}%`, background: medal ? medal : CHART.blue }} />
                              </div>
                              <span className="w-10 text-right text-sm font-semibold" style={{ color: T.text }}>{p.score}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-sm" style={{ color: T.textSec }}>{fmtSec(p.completionSeconds)}</td>
                          <td className="px-5 py-4">
                            <span className="rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: T.bgSec, color: T.textSec }}>{p.archetype}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* ===== EXPORT MODAL ===== */}
      {isExportOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25" onClick={() => setIsExportOpen(false)}>
          <div className="w-full max-w-md rounded-2xl bg-white px-7 py-7 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-5 flex flex-col items-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full" style={{ background: T.accentLight }}>
                <Download size={20} style={{ color: T.accent }} />
              </div>
              <h2 className="text-lg font-semibold" style={{ color: T.text }}>Download exports</h2>
            </div>
            <div>
              {exportLabels.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-t py-3.5" style={{ borderColor: T.borderSubtle }}>
                  <span className="text-sm" style={{ color: T.textSec }}>{item.label}</span>
                  <button onClick={() => handleDownload(item.id)} className="inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors hover:bg-gray-50" style={{ borderColor: T.border, color: T.textSec, background: downloadedId === item.id ? T.accentLight : T.bg }}>
                    <FileSpreadsheet size={15} style={{ color: T.accent }} />{downloadedId === item.id ? <Check size={15} style={{ color: T.accent }} /> : "XLS"}
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-center">
              <button onClick={() => setIsExportOpen(false)} className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: T.accent }}>Close</button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
