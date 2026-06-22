import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { REELS, ReelCard } from "@/components/reels-strip";
import { Instagram, Play, Camera } from "lucide-react";
import portrait from "@/assets/daze-portrait-real.jpg";

export const Route = createFileRoute("/reels")({
  head: () => ({
    meta: [
      { title: "Reels — Daze Antony on Instagram" },
      { name: "description", content: "Watch Daze Antony's Instagram reels — leadership moments, global trade journeys and behind-the-scenes from D&R Goldenwings International." },
      { property: "og:title", content: "Reels — Daze Antony" },
      { property: "og:description", content: "Instagram reels from Daze Antony." },
      { property: "og:url", content: "/reels" },
    ],
    links: [{ rel: "canonical", href: "/reels" }],
  }),
  component: ReelsPage,
});

function ReelsPage() {
  // Mixed gallery: reels (vertical) + photo tiles. Tap a reel to open on Instagram.
  // Tap a photo to open it full-size.
  const photos = [portrait, portrait, portrait, portrait];

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Reels &amp; <span className="text-gradient-gold">moments</span> from a global career.</>}
        description="A curated visual gallery — Instagram reels, portraits and behind-the-scenes from across India, China and the Middle East."
      />

      <section className="section-pad">
        <div className="container-x">
          {/* Tabs / legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-navy-deep">
              <Play size={12} className="text-gold" /> Reels
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-navy-deep">
              <Camera size={12} className="text-gold" /> Photos
            </span>
          </div>

          {/* Masonry gallery — reels (tall) interleaved with photos (square) */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {REELS.map((r, i) => (
              <div key={r.id} className="mb-5 break-inside-avoid">
                <ReelCard id={r.id} caption={r.caption} index={i} />
              </div>
            ))}
            {photos.map((src, i) => (
              <a
                key={`photo-${i}`}
                href={src}
                target="_blank"
                rel="noreferrer"
                className="mb-5 break-inside-avoid block group relative overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] hover:shadow-[var(--shadow-luxe)] transition-all"
              >
                <img
                  src={src}
                  alt={`Daze Antony — photo ${i + 1}`}
                  loading="lazy"
                  className={`w-full ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-square"} object-cover transition-transform duration-700 group-hover:scale-[1.03]`}
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-navy-deep">
                  <Camera size={11} className="text-gold" /> Photo
                </span>
              </a>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] p-10 md:p-14 text-white text-center" style={{ background: "var(--gradient-navy)" }}>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Follow the journey</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">More reels every week.</h2>
            <p className="mt-3 max-w-xl mx-auto text-white/70">Follow @dazeantony on Instagram for fresh stories, business insights and behind-the-scenes from D&R Goldenwings International.</p>
            <a href="https://www.instagram.com/dazeantony/" target="_blank" rel="noreferrer" className="mt-8 btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5">
              <Instagram size={16} /> Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}