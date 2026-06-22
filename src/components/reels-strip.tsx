import { Instagram, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionTitle } from "./section-title";

export const REELS = [
  { id: "DPbUEY7EXv8", caption: "Boardroom moments" },
  { id: "DPdLcnJEQHQ", caption: "Cross-border leadership" },
  { id: "DHOQszoioX1", caption: "Behind the brand" },
  { id: "DHd4D3-yCxR", caption: "On global trade" },
  { id: "DPROqcPkdZ-", caption: "Founder's notes" },
  { id: "DPVd4qxkYlF", caption: "From Kochi to Guangzhou" },
  { id: "DPWfHsLEZkY", caption: "Strategy in motion" },
  { id: "DPYCqGike9j", caption: "Daily reflections" },
  { id: "DPYviODEdWi", caption: "Conversations with Daze" },
] as const;

export function ReelCard({
  id,
  caption,
  compact = false,
}: {
  id: string;
  caption: string;
  index?: number;
  compact?: boolean;
}) {
  const href = `https://www.instagram.com/reel/${id}/`;
  const embed = `https://www.instagram.com/reel/${id}/embed/`;

  if (compact) {
    // Crops the bottom action bar (like / comment / save) of the IG embed
    // by giving the iframe extra height and clipping it inside the wrapper.
    return (
      <figure className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] hover:shadow-[var(--shadow-luxe)] transition-all duration-500">
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-navy-deep">
          <iframe
            src={embed}
            title={caption}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            scrolling="no"
            className="absolute left-0 top-0 w-full"
            style={{ height: "calc(100% + 110px)" }}
          />
        </div>
      </figure>
    );
  }

  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] hover:shadow-[var(--shadow-luxe)] transition-all duration-500">
      <div className="relative aspect-[9/16] w-full bg-navy-deep">
        <iframe
          src={embed}
          title={caption}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          scrolling="no"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-4 py-3 border-t border-border">
        <div className="min-w-0">
          <p className="font-serif text-base text-navy-deep leading-tight truncate">{caption}</p>
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-0.5">@dazeantony</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${caption} on Instagram`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 text-navy-deep hover:bg-navy-deep hover:text-gold hover:border-navy-deep transition-colors"
        >
          <Instagram size={15} />
        </a>
      </figcaption>
    </figure>
  );
}

export function ReelsStrip() {
  return (
    <section className="section-pad bg-background">
      <div className="container-x">
        <SectionTitle
          eyebrow="Gallery"
          align="center"
          title={<>Moments from the <span className="text-gradient-gold">global stage</span>.</>}
          description="Glimpses of leadership, trade journeys and reflections — straight from Instagram."
        />
        {/* Horizontally scrollable strip — 1 row, snap, with peek */}
        <div className="mt-14 -mx-[clamp(1rem,4vw,2.5rem)] px-[clamp(1rem,4vw,2.5rem)] overflow-x-auto scrollbar-thin snap-x snap-mandatory">
          <ul className="flex gap-5 pb-4">
            {REELS.slice(0, 6).map((r) => (
              <li
                key={r.id}
                className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[32%]"
              >
                <ReelCard id={r.id} caption={r.caption} compact />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/reels" className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-7 py-3">
            View Full Gallery <ArrowRight size={16} />
          </Link>
          <a href="https://www.instagram.com/dazeantony/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy-deep text-white px-7 py-3 hover:bg-navy transition-colors">
            <Instagram size={16} /> Follow @dazeantony
          </a>
        </div>
      </div>
    </section>
  );
}