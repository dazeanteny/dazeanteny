import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import portrait from "@/assets/daze-portrait-real.jpg";
import { ArrowRight, ArrowUpRight, Trophy, ExternalLink } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Daze Antony — Legal Advisor & Entrepreneur" },
      { name: "description", content: "The journey of Daze Antony aka Bindu Antony — from multinational corporations to founding D&R Goldenwings International Trading Co." },
      { property: "og:title", content: "About Daze Antony" },
      { property: "og:description", content: "From Wipro and TCS to international entrepreneurship and legal advisory." },
      { property: "og:url", content: "https://dazeanteny.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://dazeanteny.lovable.app/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "Early Career", title: "Corporate Beginnings", desc: "Joined leading multinationals — Wipro and Tata Consultancy Services — building foundations in business operations and leadership." },
  { year: "Legal Practice", title: "Legal Consulting", desc: "Earned LLB and began advising organizations on corporate compliance, governance and contract strategy." },
  { year: "Entrepreneurship", title: "Fashion Boutique", desc: "Founded a women's fashion and lifestyle venture, blending design sensibility with business acumen." },
  { year: "Global Expansion", title: "China Operations", desc: "Built sourcing, supplier and manufacturing networks across China for Indian and Middle Eastern clients." },
  { year: "Today", title: "D&R Goldenwings International", desc: "CEO of an international trading company connecting markets, partners and opportunities across borders." },
  { year: "Now Scaling", title: "Goldenwings Lighting", desc: "Launched a dedicated lighting venture exporting architectural, decorative and commercial lighting collections to international markets." },
  { year: "Ongoing", title: "Multidisciplinary Leadership", desc: "Advisory across legal, trade, education, tourism, interiors and corporate strategy." },
];

const counters = [
  { n: 20, s: "+", l: "Years of Experience" },
  { n: 350, s: "+", l: "Corporate Projects" },
  { n: 500, s: "+", l: "Consultations" },
  { n: 60, s: "+", l: "Global Partners" },
];

const milestones = [
  "Built leadership career at multinational corporations including Wipro and TCS",
  "Earned MBA and LLB — uniting business acumen with legal expertise",
  "Established a successful boutique fashion business in India",
  "Expanded operations into China — sourcing, manufacturing and supplier networks",
  "Founded D&R Goldenwings International Trading Company as CEO",
  "Developed cross-border partnerships across India, China and the Middle East",
  "Advisory practice spanning legal, trade, education, tourism and interiors",
];

const insights = [
  { tag: "Legal", title: "Corporate Governance in a Cross-Border World", desc: "Why compliance is becoming the most strategic conversation in the boardroom." },
  { tag: "Trade", title: "Sourcing from China: A Practical Playbook", desc: "From supplier audits to logistics, what every Indian importer should know." },
  { tag: "Leadership", title: "Women Leading Global Enterprises", desc: "Reflections on perseverance, mentorship and the road ahead." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>A <span className="text-gradient-gold">multidisciplinary leader</span> in law, strategy and global commerce.</>}
        description={<>Daze Antony <span className="text-gold">aka Bindu Antony</span> is a legal advisor, entrepreneur and international business strategist whose career spans multinational corporations, legal practice, fashion entrepreneurship and cross-border trade.</>}
      />

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-gold/30 shadow-[var(--shadow-luxe)]">
              <img src={portrait} alt="Daze Antony" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Personal Story</p>
            <h2 className="mt-4 font-serif text-4xl text-navy-deep leading-tight">From boardrooms in Bangalore to factories in Guangzhou.</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>Daze Antony's career began inside two of India's most respected technology companies — Wipro and Tata Consultancy Services — where she built her foundation in operations, governance and people leadership.</p>
              <p>Holding both an MBA and an LLB, she transitioned into legal consulting, advising organizations on compliance, contracts and corporate strategy. Entrepreneurial curiosity led her into fashion, where she launched a boutique label, and then into international trade.</p>
              <p>Today she leads D&R Goldenwings International Trading Company as CEO — a multidisciplinary platform that connects clients across India, China and the Middle East with sourcing, manufacturing and strategic partnerships.</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {["MBA", "LLB", "CEO", "Founder"].map((c) => (
                <div key={c} className="rounded-xl border border-border bg-card px-4 py-3 text-center font-serif text-navy-deep">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Journey</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-navy-deep leading-tight max-w-2xl">A career built across <span className="text-gradient-gold">industries and continents</span>.</h2>

          <ol className="mt-14 relative border-l-2 border-gold/30 ml-4 space-y-10">
            {timeline.map((t) => (
              <li key={t.title} className="pl-8 relative">
                <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-navy-deep border-2 border-gold" />
                <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.year}</p>
                <h3 className="mt-1 font-serif text-2xl text-navy-deep">{t.title}</h3>
                <p className="mt-2 text-muted-foreground max-w-2xl leading-relaxed">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Companies — D&R Goldenwings + Lighting */}
      <section className="section-pad">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">The Companies</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-navy-deep leading-tight max-w-3xl">
            Building <span className="text-gradient-gold">two global ventures</span> from one trusted foundation.
          </h2>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {/* D&R Goldenwings */}
            <article className="rounded-3xl border border-gold/30 bg-card p-8 md:p-10 shadow-[var(--shadow-luxe)]">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold">Flagship Company</p>
              <h3 className="mt-3 font-serif text-2xl md:text-3xl text-navy-deep leading-tight">
                D&amp;R Goldenwings International Trading Co.
              </h3>
              <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                A cross-border trading and consultancy firm operating between India and China. We help
                businesses source, manufacture and scale globally — backed by trusted supplier networks,
                legal advisory and on-ground partnerships across India, China and the Middle East.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm text-navy-deep">
                {[
                  "International sourcing & manufacturing",
                  "China business partnerships",
                  "Import & export solutions",
                  "Trade compliance & legal advisory",
                  "India · China · Middle East",
                  "Market entry for SMEs",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="http://dandrinternational.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-gold transition-colors"
              >
                Visit dandrinternational.com <ExternalLink size={14} />
              </a>
            </article>

            {/* Goldenwings Lighting */}
            <article className="rounded-3xl p-8 md:p-10 text-white shadow-[var(--shadow-luxe)]" style={{ background: "var(--gradient-navy)" }}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold">New Venture · Now Scaling</p>
              <h3 className="mt-3 font-serif text-2xl md:text-3xl text-white leading-tight">
                Goldenwings Lighting
              </h3>
              <p className="mt-5 text-sm md:text-base text-white/80 leading-relaxed">
                A dedicated lighting venture focused on architectural, decorative and commercial
                illumination — exporting curated collections from China to international markets and
                growing steadily through trusted distributor partnerships across India and the Middle East.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm text-white/85">
                {[
                  "Architectural lighting",
                  "Decorative & designer lighting",
                  "Commercial & hospitality lighting",
                  "Custom OEM manufacturing",
                  "Distributor & dealer partnerships",
                  "End-to-end export logistics",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-pad">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Achievements</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-navy-deep leading-tight max-w-3xl">A record of <span className="text-gradient-gold">trusted leadership</span> and global impact.</h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {counters.map((c) => (
              <div key={c.l} className="rounded-2xl border border-border bg-card p-7 text-center">
                <p className="font-serif text-5xl text-navy-deep">
                  <span className="text-gradient-gold"><AnimatedCounter end={c.n} suffix={c.s} /></span>
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.l}</p>
              </div>
            ))}
          </div>

          <ul className="mt-12 grid md:grid-cols-2 gap-4">
            {milestones.map((m, i) => (
              <li key={m} className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-deep text-gold">
                  <Trophy size={16} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Milestone 0{i + 1}</p>
                  <p className="mt-1 text-navy-deep text-sm leading-relaxed">{m}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insights */}
      <section className="section-pad bg-muted">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Insights</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-navy-deep leading-tight max-w-3xl">Perspectives on <span className="text-gradient-gold">law, trade and leadership</span>.</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">Selected reflections drawn from real engagements across legal practice, international trade and entrepreneurship.</p>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {insights.map((a) => (
              <article key={a.title} className="rounded-2xl border border-border bg-card p-7 hover:border-gold/50 transition-all flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold">{a.tag}</span>
                <h3 className="mt-4 font-serif text-xl text-navy-deep leading-snug">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{a.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-navy-deep">
                  Read more <ArrowUpRight size={14} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy-deep">Ready to work together?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Book a private consultation to explore how Daze Antony can support your goals.</p>
          <Link to="/consultation" className="mt-8 btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5">
            Schedule Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}