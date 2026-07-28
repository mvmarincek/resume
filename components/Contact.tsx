import Button from "./Button";

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
          <Button href="mailto:mvmarincek@gmail.com">mvmarincek@gmail.com</Button>
          <Button href="https://www.linkedin.com/in/mvmarincek" variant="ghost" external>
            LinkedIn ↗
          </Button>
          <Button href="tel:+5516994223527" variant="ghost">
            +55 16 99422-3527
          </Button>
        </div>
      </div>
      <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} Marcus Vinícius Marincek · Ribeirão Preto, SP, Brazil · Built
        with Next.js, deployed on Vercel
      </footer>
    </section>
  );
}
