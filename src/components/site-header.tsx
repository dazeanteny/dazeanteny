import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/reels", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[oklch(0.74_0.13_85/0.25)] shadow-[0_2px_30px_-20px_rgba(11,31,58,0.25)]"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center min-w-0">
          <span className="font-serif text-2xl md:text-[1.6rem] font-medium leading-none text-navy-deep tracking-[0.02em]">
            Daze <span className="text-gradient-gold">Antony</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-navy-deep/75 hover:text-gold transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-gold font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/consultation"
            className="ml-3 btn-gold rounded-full px-5 py-2 text-sm"
          >
            Book Consultation
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-navy-deep"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gold/25 animate-fade-in shadow-lg">
          <nav className="container-x py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-navy-deep/85 hover:text-gold"
                activeProps={{ className: "py-2 text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/consultation"
              onClick={() => setOpen(false)}
              className="mt-4 btn-gold rounded-full px-5 py-3 text-center text-sm"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}