"use client";

import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { DimensionScore } from "@/lib/scoring";

interface Props {
  dimensions: DimensionScore[];
  size?: number;
  accentColor?: string;
  gridColor?: string;
  labelColor?: string;
  bgColor?: string;
}

export default function RadarChart({ dimensions, accentColor = "#e2b714", gridColor = "#2a2a4a", labelColor = "#646687", bgColor = "#1a1a2e" }: Props) {
  const data = dimensions.map((d) => ({
    subject: d.label,
    score: d.score,
    fullMark: 100,
  }));

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RechartsRadarChart cx="50%" cy="50%" outerRadius="55%" data={data}>
        <PolarGrid stroke={gridColor} strokeWidth={1} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: labelColor, fontSize: 10, fontFamily: "monospace" }}
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
