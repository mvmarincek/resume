import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: Props) {
  const base =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 active:scale-95";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-accent to-emerald-300 text-ink shadow-[0_0_24px_-6px_rgba(110,231,183,0.5)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-6px_rgba(110,231,183,0.6)]"
      : "border border-line bg-white/[0.03] text-gray-200 backdrop-blur-sm hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent hover:shadow-[0_8px_32px_-12px_rgba(110,231,183,0.3)]";

  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {inner}
    </Link>
  );
}
