import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";

const socials = [
  { Icon: Linkedin, href: "http://www.linkedin.com/in/dazeantony", label: "LinkedIn" },
  { Icon: Facebook, href: "https://www.facebook.com/daze.anteny", label: "Facebook" },
  { Icon: Instagram, href: "https://www.instagram.com/dazeantony/", label: "Instagram" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.98_0.005_85)] text-navy-deep/80 border-t border-gold/30">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-navy-deep tracking-wide">
              Daze <span className="text-gradient-gold">Antony</span>
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold mt-1">Founder · CEO</p>
            <p className="mt-5 text-sm leading-relaxed text-navy-deep/65">
              Legal advisor, entrepreneur, and international business leader empowering organizations across borders.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5 font-medium">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/expertise" className="hover:text-gold">Expertise</Link></li>
              <li><Link to="/reels" className="hover:text-gold">Gallery</Link></li>
              <li><Link to="/consultation" className="hover:text-gold">Consultation</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5 font-medium">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Phone size={14} className="mt-1 text-gold shrink-0" /><a href="tel:+8619927461254" className="hover:text-gold">+86 199 2746 1254</a></li>
              <li className="flex items-start gap-2"><Phone size={14} className="mt-1 text-gold shrink-0" /><a href="tel:+919995929691" className="hover:text-gold">+91 99959 29691</a></li>
              <li className="flex items-start gap-2"><Mail size={14} className="mt-1 text-gold shrink-0" /><a href="mailto:dazerose@gmail.com" className="hover:text-gold break-all">dazerose@gmail.com</a></li>
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-gold shrink-0" /> Kochi, India · Guangzhou, China</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5 font-medium">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-navy-deep hover:bg-navy-deep hover:text-gold hover:border-navy-deep transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a href="http://dandrinternational.com/" target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-gold hover:underline">
              dandrinternational.com →
            </a>
            <Link to="/consultation" className="mt-6 inline-block btn-gold rounded-full px-5 py-2.5 text-sm">
              Let's Build Together
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-navy-deep/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-navy-deep/60">
          <p>© {new Date().getFullYear()} Daze Antony. All rights reserved.</p>
          <p className="font-serif italic text-gold">"Vision · Integrity · Innovation · Relationships"</p>
          <p className="inline-flex items-center gap-1.5">
            Crafted with <Heart size={11} className="text-gold fill-current" /> by{" "}
            <a href="https://www.instagram.com/rahulrgz" target="_blank" rel="noreferrer" className="font-medium text-navy-deep hover:text-gold underline-offset-4 hover:underline">
              Rahul
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}