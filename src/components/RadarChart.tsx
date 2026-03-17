"use client";

import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import type { DimensionScore } from "@/components/quiz/types";

interface Props {
  dimensions: DimensionScore[];
  accentColor?: string;
  gridColor?: string;
  labelColor?: string;
  bgColor?: string;
}

function wrapLabel(text: string, maxCharsPerLine: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if (current && (current + " " + word).length > maxCharsPerLine) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + " " + word : word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function CustomTick({ x, y, payload, fill }: { x: number; y: number; payload: { value: string }; fill: string }) {
  const lines = wrapLabel(payload.value, 14);
  const lineHeight = 12;
  const startY = y - ((lines.length - 1) * lineHeight) / 2;

  return (
    <g>
      {lines.map((line, i) => (
        <text
          key={i}
          x={x}
          y={startY + i * lineHeight}
          textAnchor="middle"
          fill={fill}
          fontSize={9}
          fontFamily="monospace"
          dominantBaseline="central"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

export default function RadarChart({ dimensions, accentColor = "#6366F1", gridColor = "#2a2a4a", labelColor = "#646687", bgColor = "#1a1a2e" }: Props) {
  if (dimensions.length < 3) return null;

  const minimumVisibleScore = 4;
  const data = dimensions.map((d) => ({
    subject: d.label,
    score: d.score > 0 ? d.score : minimumVisibleScore,
    actualScore: d.score,
    fullMark: 100,
  }));

  return (
    <ResponsiveContainer width="100%" height={340}>
      <RechartsRadarChart cx="50%" cy="50%" outerRadius="34%" data={data}>
        <PolarGrid stroke={gridColor} strokeWidth={1} />
        <PolarAngleAxis
          dataKey="subject"
          tick={(props: Record<string, unknown>) => <CustomTick {...(props as { x: number; y: number; payload: { value: string }; fill: string })} fill={labelColor} />}
          tickLine={false}
        />
        <Radar
          name="Score"
          dataKey="score"
          stroke={accentColor}
          fill={accentColor}
          fillOpacity={0.2}
          strokeWidth={2}
          dot={{
            r: 4,
            fill: accentColor,
            stroke: bgColor,
            strokeWidth: 2,
          }}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
}
