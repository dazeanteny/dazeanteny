import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.25em] mb-4 ${invert ? "text-gold" : "text-gold"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl leading-[1.1] ${invert ? "text-white" : "text-navy-deep"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${invert ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}