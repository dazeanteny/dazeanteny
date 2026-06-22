import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Phone, Mail, MapPin, MessageCircle, Clock, Linkedin, Facebook, Instagram, Globe } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Daze Antony" },
      { name: "description", content: "Get in touch — phone, email, WhatsApp and office address. Schedule a consultation or partnership discussion." },
      { property: "og:title", content: "Contact Daze Antony" },
      { property: "og:description", content: "Phone, email, WhatsApp and office contact details." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's build <span className="text-gradient-gold">global opportunities</span> together.</>}
        description="Reach out for legal advisory, international trade, business consultancy or partnership discussions."
      />

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <div className="grid gap-4">
            {[
              { Icon: Phone, label: "Phone · China", value: "+86 199 2746 1254", href: "tel:+8619927461254" },
              { Icon: Phone, label: "Phone · India", value: "+91 99959 29691", href: "tel:+919995929691" },
              { Icon: Mail, label: "Email", value: "dazerose@gmail.com", href: "mailto:dazerose@gmail.com" },
              { Icon: MessageCircle, label: "WhatsApp", value: "+91 99959 29691", href: "https://wa.me/919995929691" },
              { Icon: Globe, label: "Company", value: "dandrinternational.com", href: "http://dandrinternational.com/" },
              { Icon: MapPin, label: "Office", value: "Kochi, India · Guangzhou, China" },
              { Icon: Clock, label: "Business Hours", value: "Mon – Sat · 10:00 – 19:00 IST" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href ?? "#"}
                target={href ? "_blank" : undefined}
                rel={href ? "noreferrer" : undefined}
                className="flex items-start gap-5 rounded-2xl bg-card border border-border p-6 hover:border-gold/50 transition-colors"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{label}</p>
                  <p className="mt-1 font-serif text-lg text-navy-deep break-words">{value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Follow</p>
              <div className="mt-3 flex gap-3">
                {[
                  { I: Linkedin, href: "http://www.linkedin.com/in/dazeantony", label: "LinkedIn" },
                  { I: Facebook, href: "https://www.facebook.com/daze.anteny", label: "Facebook" },
                  { I: Instagram, href: "https://www.instagram.com/dazeantony/", label: "Instagram" },
                ].map(({ I, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy-deep hover:bg-navy-deep hover:text-gold transition-colors">
                    <I size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Kochi,Kerala&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6 rounded-2xl p-8 text-white" style={{ background: "var(--gradient-navy)" }}>
              <h2 className="font-serif text-3xl">Prefer a structured intake?</h2>
              <p className="mt-3 text-white/70">Use the consultation form — it routes your details directly via WhatsApp.</p>
              <Link to="/consultation" className="mt-6 btn-gold inline-flex rounded-full px-6 py-3 text-sm">
                Open Consultation Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}