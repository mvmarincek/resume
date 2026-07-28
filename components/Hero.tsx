import Button from "./Button";
import AssemblePhoto from "./AssemblePhoto";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent2/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="reveal">
          <p className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-accent">
            <span className="live-dot inline-block h-2 w-2 rounded-full bg-accent" />
            AVAILABLE FOR REMOTE · WORLDWIDE
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Marcus
            <br />
            Marincek
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
            Agentic AI Engineer. I build AI projects{" "}
            <span className="text-gray-100">from zero</span> and deliver them{" "}
            <span className="text-accent">deployed in production</span> — not in PowerPoint.
          </p>
          <p className="mt-4 max-w-xl text-sm text-muted">
            20+ years of engineering · 5 AI platforms shipped to production in 2026 · Factory
            floor + production AI: a rare combination that makes solutions work in the real world.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#work">See production results →</Button>
            <Button href="https://www.linkedin.com/in/mvmarincek" variant="ghost" external>
              LinkedIn ↗
            </Button>
          </div>
        </div>
        <div className="reveal mx-auto w-full max-w-sm" style={{ animationDelay: "150ms" }}>
          <AssemblePhoto />
        </div>
      </div>
    </section>
  );
}
