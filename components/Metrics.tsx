const stats = [
  { value: "5", label: "AI platforms in production (2026)" },
  { value: "–66%", label: "monitoring headcount at TagIT" },
  { value: "30h/week", label: "automated per workstation at AIOS" },
  { value: "4x", label: "patients monitored per professional at Metabbo" },
  { value: "+40%", label: "coaching adherence at Metadia" },
  { value: "R$1.3M+", label: "measurable client results, 100+ projects" },
];

export default function Metrics() {
  return (
    <section className="border-y border-line bg-panel/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden md:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-ink/60 px-6 py-8 text-center">
            <p className="font-mono text-2xl font-bold text-accent md:text-3xl">{s.value}</p>
            <p className="mt-2 text-xs leading-snug text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
