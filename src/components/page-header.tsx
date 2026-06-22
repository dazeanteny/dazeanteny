import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
}: { eyebrow: string; title: ReactNode; description?: ReactNode }) {
  return (
    <section className="relative pt-24 pb-20 text-white overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-x relative">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-white/70 text-lg leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}