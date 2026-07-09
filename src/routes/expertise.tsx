import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Scale, Globe2, TrendingUp, Building2, GraduationCap, Plane, Shirt, Lightbulb, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise & Services — Daze Antony" },
      { name: "description", content: "Corporate legal advisory, international trade, business consultancy, corporate strategy, education, tourism, fashion and interior projects." },
      { property: "og:title", content: "Expertise & Services — Daze Antony" },
      { property: "og:description", content: "Strategic counsel across eight global verticals." },
      { property: "og:url", content: "https://dazeanteny.lovable.app/expertise" },
    ],
    links: [{ rel: "canonical", href: "https://dazeanteny.lovable.app/expertise" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            "Corporate Legal Advisory",
            "International Trade & Commerce",
            "Business Consultancy",
            "Corporate Strategy",
            "Education Consultancy",
            "Tourism & Event Management",
            "Fashion Entrepreneurship",
            "Interior Design & Lighting",
          ].map((name) => ({
            "@type": "Service",
            name,
            provider: { "@type": "Person", name: "Daze Antony" },
            areaServed: ["India", "China", "Middle East"],
          })),
        }),
      },
    ],
  }),
  component: ExpertisePage,
});

const services = [
  { icon: Scale, title: "Corporate Legal Advisory", items: ["Business Compliance", "Corporate Governance", "Contract Management", "Risk Assessment", "Strategic Legal Planning"] },
  { icon: Globe2, title: "International Trade & Commerce", items: ["Import & Export Solutions", "China Business Partnerships", "International Sourcing", "Cross-Border Development", "Corporate Trade Support"] },
  { icon: TrendingUp, title: "Business Consultancy", items: ["Business Growth Strategy", "Market Expansion", "Operational Excellence", "Business Structuring", "Corporate Transformation"] },
  { icon: Building2, title: "Corporate Strategy", items: ["Strategic Planning", "Business Development", "Executive Advisory", "Leadership Consulting", "Partnership Development"] },
  { icon: GraduationCap, title: "Education Consultancy", items: ["Student Guidance", "International Education", "Professional Training", "Career Development"] },
  { icon: Plane, title: "Tourism & Event Management", items: ["Travel Consultancy", "Business Events", "Corporate Events", "International Coordination"] },
  { icon: Shirt, title: "Fashion Entrepreneurship", items: ["Women's Fashion", "Designer Collections", "Accessories", "Lifestyle Products"] },
  { icon: Lightbulb, title: "Interior Design & GM Lights", items: ["Premium Chandeliers", "LED Lighting Production", "Luxury Lighting Projects", "Guangzhou Sourcing & Export"] },
];

function ExpertisePage() {
  return (
    <>
      <PageHeader
        eyebrow="Expertise"
        title={<>Eight practice areas. <span className="text-gradient-gold">One trusted advisor.</span></>}
        description="A multidisciplinary boutique practice blending corporate law, international trade and strategic consultancy for founders, enterprises and family offices."
      />

      {/* Brief introduction */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">A multidisciplinary practice</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-navy-deep leading-tight">
              Two decades of building, advising and leading across borders.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Daze Antony <span className="text-gold">aka Bindu Antony</span> is a legal advisor, entrepreneur and international business leader with two
                decades of experience across corporate law, international trade, fashion entrepreneurship and strategic
                consultancy. With an MBA and LLB, her work bridges legal precision with commercial intuition.
              </p>
              <p>
                Her career began at multinational corporations including Wipro and Tata Consultancy Services. She went
                on to build a boutique fashion label, established sourcing and manufacturing networks across China, and
                today serves clients from Kochi and Guangzhou.
              </p>
              <p>
                She founded and leads <strong className="text-navy-deep">D&amp;R Goldenwings International Trading
                  Company</strong> as CEO — a platform that connects Indian and Middle Eastern enterprises with global
                sourcing, partnerships and trade opportunities.
              </p>
              <p>
                Her latest ventures, <strong className="text-navy-deep">GM Lights</strong>, focus on
                architectural, decorative, and commercial lighting — manufacturing and exporting curated collections
                (including premium chandeliers and LED lights) from Guangzhou, China to international markets and growing
                steadily through trusted distributor and dealer partnerships across India and the Middle East.
              </p>
            </div>
          </div>

          {/* Company brief card */}
          <aside className="rounded-3xl border border-gold/30 bg-card p-8 shadow-[var(--shadow-luxe)]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">The Company</p>
            <h3 className="mt-3 font-serif text-2xl text-navy-deep leading-tight">
              D&amp;R Goldenwings International Trading Co.
            </h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A cross-border trading and consultancy firm with operations between India and China. We help businesses
              source, manufacture and scale internationally — backed by trusted supplier networks, legal advisory and
              on-ground partnerships.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-navy-deep">
              {[
                "International sourcing & manufacturing",
                "China business partnerships",
                "Import & export solutions",
                "Trade compliance & legal advisory",
                "Market entry for Indian & Middle Eastern SMEs",
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
              Visit dandrinternational.com <ArrowRight size={14} />
            </a>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-muted">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.25em] text-gold text-center">Services</p>
          <h2 className="mt-3 text-center font-serif text-3xl md:text-4xl text-navy-deep">Practice areas in depth</h2>
        </div>
        <div className="container-x mt-10 grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, items }) => (
            <article key={title} className="group rounded-2xl bg-card border border-border p-8 hover:border-gold/50 hover:shadow-[var(--shadow-gold)] transition-all">
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold">
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl text-navy-deep">{title}</h3>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    {items.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="container-x mt-16 text-center">
          <Link to="/consultation" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5">
            Discuss your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}