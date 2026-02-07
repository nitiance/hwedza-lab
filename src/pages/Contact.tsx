// File: src/pages/Contact.tsx
// BinanceXI © — WCML site build

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
import { Helmet } from "react-helmet-async";
import { SITE } from "@/config/site";
import {
  LAB,
  buildMailtoLink,
  buildMapsEmbedUrl,
  buildMapsLink,
  buildTelLink,
  buildWhatsAppLink,
} from "@/config/lab";

// Builds a clean booking/enquiry message (WhatsApp + Email use the same content)
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

// Light formatting for Zimbabwe numbers (best-effort, safe)
function formatPhone(p: string) {
  if (p.startsWith("+263")) {
    const rest = p.replace("+263", "").trim();
    const g1 = rest.slice(0, 3);
    const g2 = rest.slice(3, 6);
    const g3 = rest.slice(6, 9);
    return `+263 ${g1}${g2 ? " " + g2 : ""}${g3 ? " " + g3 : ""}`.trim();
  }
  return p;
}

const Contact = () => {
  const [name, setName] = useState("");
  const [test, setTest] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [notes, setNotes] = useState("");

  // Put your logo here: place a file at /public/logo.png (Vercel-safe, no import headaches)
  const logoSrc = "/logo.png";

  // Single source of truth: the message preview is exactly what we send
  const message = useMemo(
    () => buildBookingMessage({ name, test, preferredDay, notes }),
    [name, test, preferredDay, notes]
  );

  const whatsappLink = useMemo(() => buildWhatsAppLink(message), [message]);

  const mailtoLink = useMemo(() => {
    const subject = `Booking / Enquiry — ${LAB.name}`;
    return buildMailtoLink(subject, message);
  }, [message]);

  // Client correction: use the exact numbers on the lab door
  const phoneList = useMemo(() => {
    const primary = LAB.phoneTel || "";
    const extras = Array.isArray(LAB.phones) ? LAB.phones : [];
    return [primary, ...extras].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i);
  }, []);

  // ✅ SEO
  const canonical = `${SITE.domain}/contact`;
  const title = `Contact ${LAB.name} | Book a Lab Test`;
  const description =
  `Contact ${LAB.name} to book a lab test or ask about pricing, availability, and turnaround times. WhatsApp, call, email, or get directions.`;
  const ogImage = `${SITE.domain}${"/logo.png"}`;

  // ✅ JSON-LD (helps Google understand the business)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: LAB.name,
    url: SITE.domain,
    telephone: LAB.phoneTel || undefined,
    email: LAB.email || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: LAB.addressFull,
      addressCountry: "ZW",
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Contact hero */}
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Contact Us
              </span>

              {/* Company Logo (client request). If logo missing, it just won’t load (no build fail). */}
              <div className="hidden sm:flex items-center justify-center h-11 w-11 rounded-xl bg-background/20 backdrop-blur-sm border border-border/40 overflow-hidden">
                <img src={logoSrc} alt={`${LAB.name} logo`} className="h-full w-full object-contain p-1.5" />
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              Book a Test or Get in Touch
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
              Contact us for test availability, pricing guidance, and typical turnaround times. Your information is
              handled respectfully and confidentially.
            </p>

            {/* Quick actions */}
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
                <a href={buildTelLink(LAB.phoneTel)}>
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

      {/* Main content */}
      <section className="pb-20 sm:pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left column */}
            <div className="space-y-6">
              {/* Contact info */}
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

              {/* Booking message generator */}
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

                {/* Small disclaimer */}
                <div className="mt-6 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5" />
                    <p>
                      This website provides general information only. For diagnosis and treatment, consult a qualified
                      healthcare provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
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

              {/* Mobile-first CTA */}
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