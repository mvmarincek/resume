const projects = [
  {
    id: "01",
    name: "TagIT",
    tag: "Asset Tracking · Agentic AI",
    result: "Monitoring team reduced from 3 → 1 person (–66% headcount)",
    description:
      "Asset tracking with geolocated tags and an agentic monitoring system. Data architecture and cybersecurity by design.",
  },
  {
    id: "02",
    name: "AIOS",
    tag: "Agentic OS · Computer Vision + LLM",
    result: "~30h/week of operational work automated per workstation",
    description:
      "An agentic operating layer that controls desktops via HID, combining computer vision and LLMs to execute real workflows.",
  },
  {
    id: "03",
    name: "Metabbo",
    tag: "Healthcare AI",
    result: "4x more patients monitored per professional (20 → 80+)",
    description:
      "Automated patient monitoring platform with sensitive health data protection built in from day one.",
  },
  {
    id: "04",
    name: "Metadia",
    tag: "Behavioral Intelligence",
    result: "+40% coaching adherence vs. static programs",
    description:
      "Adaptive coaching platform that adjusts to each person's behavior instead of following a fixed script.",
  },
  {
    id: "05",
    name: "BBN Agro",
    tag: "Market Intelligence",
    result: "Commodity quotes in seconds — a process that used to take hours",
    description:
      "Real-time commodity market intelligence for agribusiness trading desks.",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-xs tracking-widest text-accent">(01) — PRODUCTION WORK</p>
      <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
        Five AI platforms shipped in 2026. Live in production. Measurable results.
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        All agentic systems engineered with token optimization — lower inference cost, lower
        latency, more value per project.
      </p>

      <div className="mt-12 space-y-4">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group grid gap-4 rounded-2xl border border-line bg-panel/50 p-6 transition-colors hover:border-accent/50 md:grid-cols-[80px_1fr_1fr] md:items-center md:p-8"
          >
            <span className="font-mono text-sm text-muted">({p.id})</span>
            <div>
              <h3 className="text-xl font-semibold group-hover:text-accent">{p.name}</h3>
              <p className="mt-1 font-mono text-xs tracking-wide text-accent2">{p.tag}</p>
              <p className="mt-3 text-sm text-muted">{p.description}</p>
            </div>
            <p className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm font-medium text-accent">
              {p.result}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
