// File: src/pages/Contact.tsx

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  LAB,
  buildMailtoLink,
  buildMapsEmbedUrl,
  buildMapsLink,
  buildTelLink,
  buildWhatsAppLink,
} from "@/config/lab";

function buildBookingMessage(params: {
  name?: string;
  test?: string;
  preferredDay?: string;
  notes?: string;
}) {
  const { name, test, preferredDay, notes } = params;

  const lines = [
    `Hello ${LAB.name}.`,
    name?.trim() ? `My name is ${name.trim()}.` : "",
    test?.trim() ? `I would like to book: ${test.trim()}.` : "I would like to book a lab test.",
    preferredDay?.trim() ? `Preferred day/time: ${preferredDay.trim()}.` : "",
    notes?.trim() ? `Notes: ${notes.trim()}` : "",
    "Please advise pricing, any preparation needed (if applicable), and when I should come in.",
  ].filter(Boolean);

  return lines.join("\n");
}

const Contact = () => {
  const [name, setName] = useState("");
  const [test, setTest] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [notes, setNotes] = useState("");

  const message = useMemo(
    () => buildBookingMessage({ name, test, preferredDay, notes }),
    [name, test, preferredDay, notes]
  );

  const whatsappLink = useMemo(() => buildWhatsAppLink(message), [message]);

  const mailtoLink = useMemo(() => {
    const subject = `Booking / Enquiry — ${LAB.name}`;
    return buildMailtoLink(subject, message);
  }, [message]);

  // Phone list (supports your new config fields, but won’t crash if missing)
  const phoneList: string[] = useMemo(() => {
    const primary = LAB.phoneE164 || "";
    const extras = (LAB as any).extraPhones || [];
    return [primary, ...extras].filter(Boolean);
  }, []);

  const formatPhone = (p: string) => {
    // light formatting only; keep safe for Zim numbers
    if (p.startsWith("+263")) {
      const rest = p.replace("+263", "").trim();
      // group like: +263 775 243 241 (best-effort)
      const g1 = rest.slice(0, 3);
      const g2 = rest.slice(3, 6);
      const g3 = rest.slice(6, 9);
      return `+263 ${g1}${g2 ? " " + g2 : ""}${g3 ? " " + g3 : ""}`.trim();
    }
    return p;
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Contact Us
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Book a Test or Get in Touch
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
              We are here to help. Contact us for test availability, pricing guidance, and typical turnaround times.
              Your information is handled respectfully and confidentially.
            </p>

            {/* Primary actions (mobile-first: full width) */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-xl font-semibold w-full sm:w-auto">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book on WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="rounded-xl font-semibold bg-background text-foreground hover:bg-background/90 w-full sm:w-auto"
              >
                <a href={buildTelLink(LAB.phoneE164)}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold w-full sm:w-auto">
                <a href={buildMapsLink()} target="_blank" rel="noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-20 sm:pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* LEFT */}
            <div className="space-y-6">
              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="bg-card border border-border rounded-2xl p-6 sm:col-span-2">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0 w-full">
                      <div className="font-bold mb-2">Phone</div>

                      <div className="space-y-2">
                        {phoneList.length > 0 ? (
                          phoneList.map((p) => (
                            <div key={p} className="flex items-center justify-between gap-3">
                              <a
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                href={buildTelLink(p)}
                              >
                                {formatPhone(p)}
                              </a>
                              <Button asChild size="sm" variant="outline" className="rounded-lg">
                                <a href={buildTelLink(p)}>Call</a>
                              </Button>
                            </div>
                          ))
                        ) : (
                          <div className="text-muted-foreground">Phone number coming soon.</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-secondary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold">Email</div>
                      <a
                        className="text-muted-foreground hover:text-foreground transition-colors break-all"
                        href={mailtoLink}
                      >
                        {LAB.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-secondary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold">Opening Hours</div>
                      <div className="text-muted-foreground">{LAB.hours.weekdays}</div>
                      <div className="text-muted-foreground">{LAB.hours.saturday}</div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-card border border-border rounded-2xl p-6 sm:col-span-2">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold">Visit Us</div>
                      <div className="text-muted-foreground">{LAB.addressFull}</div>
                      <a
                        className="inline-flex items-center gap-2 text-sm mt-2 text-primary hover:underline"
                        href={buildMapsLink()}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open directions <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-card border border-border rounded-2xl p-6 sm:col-span-2">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-primary/10 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold">WhatsApp</div>
                      <a
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking form */}
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <h2 className="text-lg sm:text-xl font-bold">Quick Booking Message</h2>
                </div>
                <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                  Fill in the details below. We’ll generate a ready-to-send message for WhatsApp or email.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold">Your name</label>
                    <Input
                      className="mt-2"
                      placeholder="e.g. Tendai M."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">Test needed</label>
                    <Input
                      className="mt-2"
                      placeholder="e.g. FBC / Blood Sugar / HIV / Urinalysis"
                      value={test}
                      onChange={(e) => setTest(e.target.value)}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold">Preferred day/time</label>
                    <Input
                      className="mt-2"
                      placeholder="e.g. Tomorrow morning / Saturday 10AM"
                      value={preferredDay}
                      onChange={(e) => setPreferredDay(e.target.value)}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold">Notes (optional)</label>
                    <Textarea
                      className="mt-2 min-h-[120px]"
                      placeholder="Any extra details or questions (pricing, fasting, results collection)..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                </div>

                {/* Preview */}
                <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <FileText className="h-5 w-5 text-secondary" />
                    <div className="font-semibold">Preview</div>
                    <div className="text-xs text-muted-foreground">(This is what will be sent)</div>
                  </div>
                  <pre className="whitespace-pre-wrap break-words text-sm text-muted-foreground leading-relaxed font-sans">
                    {message}
                  </pre>
                </div>

                {/* Send buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button asChild className="rounded-xl font-semibold w-full sm:w-auto">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Send via WhatsApp
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="rounded-xl font-semibold w-full sm:w-auto">
                    <a href={mailtoLink}>
                      <Mail className="mr-2 h-5 w-5" />
                      Send via Email
                    </a>
                  </Button>
                </div>

                <div className="mt-6 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5" />
                    <p>
                      This website provides general information only. For diagnosis and treatment,
                      consult a qualified healthcare provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-border">
                  <h2 className="text-lg sm:text-xl font-bold">Find Us</h2>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base">{LAB.addressFull}</p>
                </div>

                <div className="h-[280px] sm:h-[380px] w-full">
                  <iframe
                    title="Map"
                    src={buildMapsEmbedUrl()}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 sm:p-7">
                <h3 className="text-base sm:text-lg font-bold mb-3">Before you come</h3>
                <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Bring your clinician’s request form if you have one.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Ask if your test needs preparation (for example, fasting).</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>We’ll guide you on expected turnaround time for your test.</span>
                  </li>
                </ul>
              </div>

              {/* Extra mobile CTA block */}
              <div className="bg-muted/30 border border-border rounded-2xl p-6">
                <div className="font-bold mb-2">Fastest way to book</div>
                <p className="text-muted-foreground text-sm mb-4">
                  WhatsApp is usually quickest for pricing and availability.
                </p>
                <Button asChild className="rounded-xl font-semibold w-full">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;