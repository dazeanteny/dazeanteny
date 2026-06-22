import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Calendar as CalendarIcon, Check, MessageCircle, Phone, Video, Users } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Daze Antony" },
      { name: "description", content: "Schedule a private legal, business or international trade consultation with Daze Antony." },
      { property: "og:title", content: "Book a Consultation — Daze Antony" },
      { property: "og:description", content: "Legal, business and international trade consultations." },
      { property: "og:url", content: "/consultation" },
    ],
    links: [{ rel: "canonical", href: "/consultation" }],
  }),
  component: ConsultationPage,
});

const WHATSAPP_NUMBER = "919995929691";

const SERVICES = ["Legal Advisory", "Business Consultancy", "International Trade", "Corporate Strategy", "Partnership Discussion"];

const MEDIUMS = [
  { key: "Phone Call", desc: "A direct call at a scheduled time.", Icon: Phone },
  { key: "Online Meeting", desc: "Zoom / Google Meet video session.", Icon: Video },
  { key: "In-Person Meeting", desc: "Meet at our office or your preferred venue.", Icon: Users },
];

type Form = {
  service: string; medium: string;
  name: string; phone: string; email: string; message: string;
  date: Date | undefined;
};

function ConsultationPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>({
    service: "", medium: "", name: "", phone: "", email: "", message: "", date: undefined,
  });

  const steps = ["Service", "Medium", "Your Details"];
  const canNext = useMemo(() => {
    if (step === 0) return !!form.service;
    if (step === 1) return !!form.medium;
    return form.name.trim().length > 1 && form.phone.trim().length > 3;
  }, [step, form]);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  const submit = () => {
    const text =
`Hello Ms. Daze Antony,

I would like to schedule a consultation.

Service: ${form.service}
Preferred Medium: ${form.medium}
Preferred Date: ${form.date ? format(form.date, "PPP") : "—"}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "—"}
${form.message ? `\nNote:\n${form.message}` : ""}

Please contact me.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <>
      <PageHeader
        eyebrow="Book a Consultation"
        title={<>Let's discuss your <span className="text-gradient-gold">next move</span>.</>}
        description="A short, structured form to help us prepare for a meaningful first conversation."
      />

      <section className="section-pad">
        <div className="container-x max-w-3xl">
          {/* Fee note */}
          <div className="mb-10 rounded-2xl border border-gold/40 bg-gold/10 px-6 py-5 text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">Please note</p>
            <p className="mt-2 text-sm md:text-base text-navy-deep leading-relaxed">
              A nominal consultation fee is applicable for detailed legal, business and advisory sessions.
              Fee details will be confirmed on WhatsApp before your appointment is scheduled.
            </p>
          </div>

          {/* Stepper */}
          <ol className="grid grid-cols-3 gap-2 mb-10 max-w-md mx-auto">
            {steps.map((s, i) => (
              <li key={s} className="text-center">
                <div className={`mx-auto grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition-colors ${
                  i < step ? "bg-gold text-navy-deep" : i === step ? "bg-navy-deep text-gold border border-gold" : "bg-muted text-muted-foreground"
                }`}>
                  {i < step ? <Check size={16} /> : i + 1}
                </div>
                <p className={`mt-2 text-xs uppercase tracking-widest ${i === step ? "text-navy-deep" : "text-muted-foreground"}`}>{s}</p>
              </li>
            ))}
          </ol>

          <div className="glass-card rounded-3xl p-8 md:p-10">
            {step === 0 && (
              <Step title="Which service do you need?">
                <div className="grid sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => (
                    <button key={s} onClick={() => set("service", s)} className={`text-left rounded-xl border px-5 py-4 transition-all ${form.service === s ? "border-gold bg-gold/10 text-navy-deep" : "border-border bg-card hover:border-gold/50"}`}>
                      <p className="font-serif text-lg text-navy-deep">{s}</p>
                    </button>
                  ))}
                </div>
              </Step>
            )}

            {step === 1 && (
              <Step title="How would you like to meet?">
                <div className="grid sm:grid-cols-3 gap-3">
                  {MEDIUMS.map(({ key, desc, Icon }) => (
                    <button key={key} onClick={() => set("medium", key)} className={`text-left rounded-xl border px-5 py-5 transition-all ${form.medium === key ? "border-gold bg-gold/10" : "border-border bg-card hover:border-gold/50"}`}>
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-deep text-gold mb-3">
                        <Icon size={18} />
                      </span>
                      <p className="font-serif text-lg text-navy-deep">{key}</p>
                      <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                    </button>
                  ))}
                </div>
              </Step>
            )}

            {step === 2 && (
              <Step title="Tell us about yourself">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name *" value={form.name} onChange={(v) => set("name", v)} />
                  <Field label="Phone *" value={form.phone} onChange={(v) => set("phone", v)} />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => set("email", v)} className="sm:col-span-2" />
                  <div className="sm:col-span-2">
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Preferred Consultation Date</span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "mt-2 w-full inline-flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm text-left focus:outline-none focus:border-gold transition-colors",
                            !form.date && "text-muted-foreground"
                          )}
                        >
                          {form.date ? format(form.date, "EEEE, d MMMM yyyy") : "Pick a date"}
                          <CalendarIcon size={16} className="text-gold" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={form.date}
                          onSelect={(d) => set("date", d)}
                          disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <p className="mt-2 text-[11px] text-muted-foreground">
                      Final time will be confirmed on WhatsApp based on availability.
                    </p>
                  </div>
                  <label className="block sm:col-span-2">
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Brief note (optional)</span>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Anything you'd like Daze to know in advance."
                      maxLength={1000}
                      className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-gold"
                    />
                  </label>
                </div>
              </Step>
            )}

            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm border border-border disabled:opacity-40"
              >
                <ArrowLeft size={14} /> Back
              </button>

              {step < steps.length - 1 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext}
                  className="btn-gold rounded-full px-6 py-2.5 text-sm inline-flex items-center gap-2 disabled:opacity-40"
                >
                  Continue <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={!canNext}
                  className="btn-gold rounded-full px-6 py-2.5 text-sm inline-flex items-center gap-2 disabled:opacity-40"
                >
                  <MessageCircle size={14} /> Send via WhatsApp
                </button>
              )}
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            On submit, your details are sent securely via WhatsApp. We respond within 24 business hours.
          </p>
        </div>
      </section>
    </>
  );
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl text-navy-deep">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", className = "",
}: { label: string; value: string; onChange: (v: string) => void; type?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-gold"
      />
    </label>
  );
}