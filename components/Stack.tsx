const stacks = [
  {
    title: "AI Stack",
    items: [
      "Agentic AI",
      "Multi-Agent Systems",
      "LLMs (OpenAI, Claude, Gemini)",
      "RAG · Embeddings",
      "LangChain · LangGraph",
      "MCP (Model Context Protocol)",
      "Function Calling",
      "Prompt / Context Engineering",
      "Computer Vision",
      "Token Optimization",
    ],
  },
  {
    title: "Engineering Stack",
    items: [
      "Python (5+ years)",
      "TypeScript · Node.js",
      "React · Next.js",
      "SQL · PostgreSQL",
      "MongoDB · Redis",
      "AWS · Azure",
      "Docker · CI/CD",
      "REST APIs",
    ],
  },
  {
    title: "Industrial / IT-OT",
    items: [
      "Industry 4.0 · IoT",
      "IT/OT Integration",
      "Embedded C/C++",
      "PLC / CODESYS",
      "CAN bus (J1939, CANopen)",
      "ISOBUS",
      "Predictive Monitoring",
      "Cybersecurity · Data Protection",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs tracking-widest text-accent">(02) — STACK</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          From the factory floor to production AI
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          20+ years of engineering — Industry 4.0, IoT, embedded systems — combined with modern
          agentic AI. Track record with HYDAC Group, Zanini Renk and 100+ delivered projects.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stacks.map((s) => (
            <div key={s.title} className="rounded-2xl border border-line bg-ink/60 p-6">
              <h3 className="font-mono text-sm tracking-widest text-accent">{s.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
