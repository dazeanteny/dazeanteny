import { Link } from "@tanstack/react-router";
import { MessageCircle, CalendarCheck } from "lucide-react";

const WHATSAPP_NUMBER = "919995929691";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <Link
        to="/consultation"
        aria-label="Book consultation"
        className="group grid h-14 w-14 place-items-center rounded-full bg-navy text-gold border border-gold/40 shadow-[0_10px_30px_-10px_oklch(0.16_0.045_257/0.6)] hover:scale-105 transition-transform"
      >
        <CalendarCheck size={22} />
      </Link>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
        style={{ background: "linear-gradient(135deg,#25d366,#128c7e)" }}
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}