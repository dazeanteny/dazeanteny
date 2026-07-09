import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Scale, Globe2, TrendingUp, Building2, GraduationCap, Plane, Shirt, Lightbulb } from "lucide-react";
import portrait from "@/assets/daze-portrait-real.jpg";
import { SectionTitle } from "@/components/section-title";
import { AnimatedCounter } from "@/components/animated-counter";
import { ReelsStrip } from "@/components/reels-strip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daze Antony | Legal, Trade & Business Advisory" },
      { name: "description", content: "Daze Antony (Bindu Antony), CEO of D&R Goldenwings International — corporate legal advisory, international trade, business consultancy and global partnerships." },
      { property: "og:title", content: "Daze Antony | Legal, Trade & Business Advisory" },
      { property: "og:description", content: "Transforming legal expertise into global business success." },
      { property: "og:url", content: "https://dazeanteny.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://dazeanteny.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Daze Antony",
          alternateName: "Bindu Antony",
          jobTitle: "Legal Advisor, Entrepreneur & CEO",
          url: "https://dazeanteny.lovable.app",
          worksFor: {
            "@type": "Organization",
            name: "D&R Goldenwings International Trading Co.",
            url: "http://dandrinternational.com/",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedVenture />
      <ExpertiseGrid />
      <Stats />
      <ReelsStrip />
      <Philosophy />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-20 min-h-[100vh] overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-navy-deep/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, oklch(0.16 0.045 257) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative container-x pt-32 pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center min-h-screen">
        <div className="text-navy-deep animate-fade-in">
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" /> Founder · Legal Advisor
          </p>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-navy-deep">
            Transforming <span className="text-gradient-gold">Legal Expertise</span> Into Global Business Success
          </h1>
          <p className="mt-6 text-lg md:text-xl text-navy-deep/75 font-light">
            Legal Advisor • Entrepreneur • International Business Leader
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Empowering businesses through strategic legal guidance, international trade
            expertise, and innovative business solutions across industries.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/consultation" className="btn-gold rounded-full px-7 py-3.5 inline-flex items-center gap-2">
              Schedule Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/expertise" className="btn-outline-gold rounded-full px-7 py-3.5 inline-flex items-center gap-2">
              Explore Services
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "20+", v: "Years Experience" },
              { k: "350+", v: "Engagements" },
              { k: "15+", v: "Countries" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-3xl text-gold">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-navy-deep/55">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2rem] bg-gold/15 blur-3xl" />
          <div className="absolute -top-6 -left-6 h-24 w-24 border-t-2 border-l-2 border-gold rounded-tl-3xl" />
          <div className="absolute -bottom-6 -right-6 h-24 w-24 border-b-2 border-r-2 border-gold rounded-br-3xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-gold/30 shadow-[var(--shadow-luxe)] bg-white">
            <img src={portrait} alt="Daze Antony — CEO, Legal Advisor & International Business Leader" className="w-full h-auto" width={1024} height={1280} />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent">
              <p className="font-serif text-xl text-white">Daze Antony</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mt-1">MBA · LLB · CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="section-pad bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-gold/30 shadow-[var(--shadow-luxe)]">
            <img src={portrait} alt="Daze Antony" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-8 glass-card rounded-2xl p-6 max-w-[240px]">
            <p className="font-serif text-3xl text-navy-deep">CEO</p>
            <p className="text-sm text-muted-foreground mt-1">D&R Goldenwings International Trading Co.</p>
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow="About Daze Antony"
            title={<>A multidisciplinary leader bridging <span className="text-gradient-gold">law, strategy & global commerce</span>.</>}
            description="From multinational corporations like Wipro and TCS to founding international trade and consultancy ventures, Daze Antony brings two decades of leadership across corporate law, business management, fashion entrepreneurship and cross-border commerce."
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              ["20+ Years", "Across legal, corporate & trade"],
              ["Global Reach", "India · China · Middle East"],
              ["Multi-industry", "Law, trade, fashion, interiors"],
              ["Trusted Advisor", "To founders & enterprises alike"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-border bg-card p-5">
                <p className="font-serif text-lg text-navy-deep">{k}</p>
                <p className="text-sm text-muted-foreground mt-1">{v}</p>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-navy-deep font-medium hover:text-gold transition-colors">
            Read the full journey <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedVenture() {
  return (
    <section className="section-pad bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-[300px] w-[300px] rounded-full bg-navy-deep/5 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/35 bg-card shadow-[var(--shadow-luxe)] p-8 md:p-12">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-32 w-32 bg-gold/10 rounded-bl-[100%] pointer-events-none" />
          <div className="absolute bottom-6 right-6 border border-gold/20 text-[100px] font-serif text-gold/5 leading-none select-none pointer-events-none">GM</div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-3.5 py-1.5 text-xs font-semibold text-gold tracking-wide uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> New Guangzhou Venture
              </span>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl text-navy-deep leading-tight">
                Introducing <span className="text-gradient-gold">GM Lights</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                Established as a premium lighting and manufacturing hub in Guangzhou, China,
                <strong> GM Lights</strong> specializes in the production and export of high-end chandeliers,
                bespoke decorative fixtures, and state-of-the-art LED lighting solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Luxury Chandeliers", "Custom LED Lighting", "Architectural Illumination", "Global Export Hub"].map((tag) => (
                  <span key={tag} className="text-xs bg-muted border border-border text-navy-deep/80 rounded-full px-3.5 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy-deep to-navy/90 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-inner border border-white/5">
              <div className="absolute top-4 right-4 text-gold/30">
                <Lightbulb size={40} className="stroke-[1.25]" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-gold">Production & Sourcing Excellence</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Combining global design sensibilities with Guangzhou's robust manufacturing ecosystem to deliver bespoke lighting solutions for residential, commercial, and hospitality projects worldwide.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs md:text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <strong>Premium Chandeliers:</strong> Classic, modern, and bespoke luxury collections.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <strong>LED Systems:</strong> High-efficiency commercial and residential LED solutions.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <strong>Global Logistics:</strong> Seamless export operations direct from China to international markets.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const expertise = [
  { icon: Scale, title: "Corporate Legal Advisory", desc: "Compliance, governance, contracts and strategic legal planning." },
  { icon: Globe2, title: "International Trade", desc: "Import & export, China partnerships and cross-border development." },
  { icon: TrendingUp, title: "Business Consultancy", desc: "Growth strategy, market expansion and operational excellence." },
  { icon: Building2, title: "Corporate Strategy", desc: "Strategic planning, executive advisory and partnership development." },
  { icon: GraduationCap, title: "Education Consultancy", desc: "International education, training and career development." },
  { icon: Plane, title: "Tourism & Events", desc: "Corporate events, business travel and international coordination." },
  { icon: Shirt, title: "Fashion Entrepreneurship", desc: "Women's fashion, designer collections and lifestyle products." },
  { icon: Lightbulb, title: "Interior & GM Lights", desc: "Production of chandeliers, LED lights, and custom illumination projects via GM Lights in Guangzhou." },
];

function ExpertiseGrid() {
  return (
    <section className="section-pad bg-muted">
      <div className="container-x">
        <SectionTitle
          eyebrow="Expertise"
          title={<>Strategic counsel across <span className="text-gradient-gold">eight global verticals</span>.</>}
          description="A boutique, multidisciplinary practice — built on integrity, judgment, and decades of operational depth."
          align="center"
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertise.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl bg-card border border-border p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-gold)]">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-gold mb-5">
                <Icon size={20} />
              </div>
              <h3 className="font-serif text-xl text-navy-deep">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-4 h-px w-10 bg-gold/40 group-hover:w-20 transition-all" />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/expertise" className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-7 py-3">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: 350, s: "+", l: "Corporate Projects" },
    { n: 500, s: "+", l: "Consultations" },
    { n: 60, s: "+", l: "International Partners" },
    { n: 20, s: "+", l: "Years of Experience" },
  ];
  return (
    <section className="section-pad text-white" style={{ background: "var(--gradient-navy)" }}>
      <div className="container-x">
        <SectionTitle
          invert
          eyebrow="By the Numbers"
          align="center"
          title={<>A record of <span className="text-gradient-gold">measurable impact</span>.</>}
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="glass-dark rounded-2xl p-8 text-center">
              <p className="font-serif text-5xl text-gold">
                <AnimatedCounter end={s.n} suffix={s.s} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/70">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const items = [
    { t: "Integrity & Professionalism", d: "Every engagement rooted in ethics, transparency and trust." },
    { t: "Innovation & Creativity", d: "Pragmatic solutions that turn complexity into opportunity." },
    { t: "Community Responsibility", d: "Business as a force for shared growth and empowerment." },
    { t: "Continuous Improvement", d: "Lifelong learning across law, commerce and leadership." },
  ];
  return (
    <section className="section-pad bg-background">
      <div className="container-x">
        <SectionTitle
          eyebrow="Leadership Philosophy"
          title={<>Four principles. <span className="text-gradient-gold">One enduring practice.</span></>}
          align="center"
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i, idx) => (
            <div key={i.t} className="relative rounded-2xl p-7 border border-border bg-card">
              <span className="font-serif text-5xl text-gold/30 absolute top-4 right-5">0{idx + 1}</span>
              <h3 className="font-serif text-xl text-navy-deep mt-6">{i.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>

        <figure className="mt-20 max-w-4xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug italic">
            "Success comes from combining vision, integrity, innovation, and strong relationships."
          </p>
          <figcaption className="mt-5 text-sm uppercase tracking-[0.25em] text-gold">— Daze Antony</figcaption>
        </figure>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-white" style={{ background: "var(--gradient-navy)" }}>
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Let's Connect</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.1] text-white">
                Let's Build <span className="text-gradient-gold">Global Opportunities</span> Together.
              </h2>
              <p className="mt-5 max-w-xl text-white/70">
                Whether you're scaling globally, navigating compliance, or sourcing across borders — start the conversation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/consultation" className="btn-gold rounded-full px-7 py-3.5 inline-flex items-center gap-2">
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline-gold rounded-full px-7 py-3.5">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
