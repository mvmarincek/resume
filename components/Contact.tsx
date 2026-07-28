export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="font-mono text-xs tracking-widest text-accent">(04) — CONTACT</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
          If your company needs AI in production —{" "}
          <span className="text-accent">not in PowerPoint</span> — let's talk.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted">
          On-site: Brazil or Paraguay · Remote: worldwide (USD or EUR) · Roles: AI Engineer, LLM
          Engineer, Agentic AI Engineer, Control & Automation Engineer, IT/OT Specialist
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:mvmarincek@gmail.com"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            mvmarincek@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/mvmarincek"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-8 py-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn ↗
          </a>
          <a
            href="tel:+5516994223527"
            className="rounded-full border border-line px-8 py-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            +55 16 99422-3527
          </a>
        </div>
      </div>
      <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} Marcus Vinícius Marincek · Ribeirão Preto, SP, Brazil · Built
        with Next.js, deployed on Vercel
      </footer>
    </section>
  );
}
