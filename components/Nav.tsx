const links = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-widest text-accent">
          mvm<span className="text-muted">.ai</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:mvmarincek@gmail.com"
          className="rounded-full bg-gradient-to-r from-accent to-emerald-300 px-5 py-2 text-sm font-semibold text-ink shadow-[0_0_20px_-6px_rgba(110,231,183,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_28px_-6px_rgba(110,231,183,0.65)] active:scale-95"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
