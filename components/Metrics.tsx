"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  unit: string;
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delta: string;
  deltaUp: boolean;
  spark: number[];
};

const stats: Stat[] = [
  {
    label: "AI PLATFORMS IN PROD",
    unit: "2026",
    target: 5,
    delta: "▲ 5 shipped",
    deltaUp: true,
    spark: [1, 1, 2, 2, 3, 4, 5],
  },
  {
    label: "MONITORING HEADCOUNT",
    unit: "TagIT",
    target: 66,
    prefix: "–",
    suffix: "%",
    delta: "▼ cost down",
    deltaUp: true,
    spark: [100, 90, 78, 65, 52, 40, 34],
  },
  {
    label: "HOURS AUTOMATED / WK",
    unit: "AIOS · per workstation",
    target: 30,
    suffix: "h",
    delta: "▲ per station",
    deltaUp: true,
    spark: [0, 5, 9, 14, 20, 26, 30],
  },
  {
    label: "PATIENTS / PROFESSIONAL",
    unit: "Metabbo",
    target: 4,
    suffix: "x",
    delta: "▲ 20 → 80+",
    deltaUp: true,
    spark: [20, 28, 40, 52, 64, 74, 80],
  },
  {
    label: "COACHING ADHERENCE",
    unit: "Metadia",
    target: 40,
    prefix: "+",
    suffix: "%",
    delta: "▲ vs static",
    deltaUp: true,
    spark: [10, 14, 18, 24, 30, 36, 40],
  },
  {
    label: "CLIENT RESULTS",
    unit: "100+ projects",
    target: 1.3,
    prefix: "R$",
    suffix: "M+",
    decimals: 1,
    delta: "▲ cumulative",
    deltaUp: true,
    spark: [0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3],
  },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

function CountUp({ stat, start }: { stat: Stat; start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1200;
    const t0 = performance.now();
    let raf: number;

    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(stat.target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.target]);

  const formatted = value.toFixed(stat.decimals ?? 0);

  return (
    <span className="font-mono text-3xl font-bold tracking-tight text-gray-50 tabular-nums md:text-4xl">
      {stat.prefix}
      {formatted}
      <span className="text-accent">{stat.suffix}</span>
    </span>
  );
}

function Sparkline({ points, active }: { points: number[]; active: boolean }) {
  const w = 120;
  const h = 28;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const coords = points.map((p, i) => [
    (i / (points.length - 1)) * w,
    h - ((p - min) / range) * h,
  ]);
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={`h-7 w-full transition-opacity duration-1000 ${
        active ? "opacity-100" : "opacity-0"
      }`}
      preserveAspectRatio="none"
    >
      <path d={area} fill="url(#spark-fill)" opacity={0.25} />
      <path
        d={line}
        fill="none"
        stroke="#6ee7b7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MetricCard({ stat, start, index }: { stat: Stat; start: boolean; index: number }) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-line bg-panel/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_-8px_rgba(110,231,183,0.25)]"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="font-mono text-[10px] font-medium tracking-widest text-muted">
          {stat.label}
        </p>
        <span
          className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${
            stat.deltaUp ? "bg-accent/10 text-accent" : "bg-red-400/10 text-red-300"
          }`}
        >
          {stat.delta}
        </span>
      </div>
      <div className="mt-3">
        <CountUp stat={stat} start={start} />
      </div>
      <p className="mt-1 text-[11px] text-muted">{stat.unit}</p>
      <div className="mt-3">
        <Sparkline points={stat.spark} active={start} />
      </div>
    </div>
  );
}

export default function Metrics() {
  const { ref, inView } = useInView();

  return (
    <section id="impact" className="border-y border-line bg-panel/40">
      <div ref={ref} className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 flex items-center justify-between">
          <p className="font-mono text-xs tracking-widest text-accent">
            (00) — IMPACT DASHBOARD
          </p>
          <p className="hidden font-mono text-[10px] tracking-widest text-muted md:block">
            LIVE · PRODUCTION METRICS
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <MetricCard key={s.label} stat={s} start={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
