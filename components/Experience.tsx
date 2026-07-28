const roles = [
  {
    period: "Dec 2024 — Present",
    title: "AI Engineer",
    org: "AI8 Soluções com IA e Educacional",
    description:
      "AI projects from zero to production deployment — architecture, engineering, security and continuous optimization — for enterprises and industries. 5 platforms shipped in 2026.",
  },
  {
    period: "Aug 2020 — Dec 2024",
    title: "IT/OT Technology Consultant",
    org: "MVM Engenharia",
    description:
      "IT/OT projects from zero to deployment: IT/Automation integration, IoT, data and AI. Featured: online predictive monitoring of industrial gearboxes at Zanini Renk (embedded devices, Python/SQL/AWS/Azure, ML).",
  },
  {
    period: "Mar 2018 — Mar 2020",
    title: "Embedded Software Engineer",
    org: "HYDAC Group",
    description:
      "Embedded C/C++ and CODESYS software for agricultural machines: HMI, ISOBUS, CAN (J1939, CANopen).",
  },
  {
    period: "Nov 2012 — Jul 2020",
    title: "Automation & R&D Engineer",
    org: "MVM Engenharia",
    description:
      "Automation consulting for machines and industries. 100+ projects delivered, R$1.3M+ in measurable client results.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-xs tracking-widest text-accent">(03) — EXPERIENCE</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">20+ years of engineering</h2>

      <ol className="mt-12 space-y-0 border-l border-line">
        {roles.map((r) => (
          <li key={r.title + r.period} className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="font-mono text-xs tracking-wide text-muted">{r.period}</p>
            <h3 className="mt-2 text-xl font-semibold">{r.title}</h3>
            <p className="text-sm text-accent2">{r.org}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{r.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-2xl border border-line bg-panel/50 p-6 text-sm text-muted">
        <span className="font-mono text-xs tracking-widest text-accent">EDUCATION · </span>
        Mechatronics Engineering (2006) · Business Management (2014) · Portuguese native · English
        professional · Spanish basic
      </div>
    </section>
  );
}
