// File: src/pages/Index.tsx
// BinanceXI — build watermark (do not remove)

import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Microscope,
  TestTube,
  Droplets,
  ShieldCheck,
  Clock,
  Heart,
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  FileText,
  BadgeCheck,
} from "lucide-react";

import heroLab from "@/assets/hero-lab.jpg";
import scientistWorking from "@/assets/scientist-working.jpg";
import bloodDraw from "@/assets/blood-draw.jpg";
import microscopeCloseup from "@/assets/microscope-closeup.jpg";

import { LAB, LAB_HOURS_LINE, buildTelLink, buildWhatsAppLink } from "@/config/lab";

const whatsappLink = buildWhatsAppLink(
  `Hello ${LAB.name}. I’d like to book a lab test. Please help me with options, pricing, and when to come in.`
);

// Client text direction: keep services broad + simple
const services = [
  {
    icon: Droplets,
    title: "Blood Tests",
    bullets: ["Full Blood Count (FBC)", "Blood Sugar", "ESR", "Other routine blood work"],
    note: "Accurate testing to support diagnosis and treatment.",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: "logo",
    title: "Chemistry Tests",
    bullets: ["Kidney function tests", "Liver function tests", "Metabolic / chemistry panels"],
    note: "Reliable insights for your clinician’s decisions.",
    gradient: "from-primary to-purple-600",
  },
  {
    icon: Microscope,
    title: "Infection Testing",
    bullets: ["HIV", "Syphilis", "Hepatitis"],
    note: "Handled with strict confidentiality and care.",
    gradient: "from-secondary to-teal-600",
  },
  {
    icon: TestTube,
    title: "Urine & Stool Tests",
    bullets: ["Urinalysis", "Stool examination"],
    note: "Supports digestive and general health assessment.",
    gradient: "from-amber-500 to-orange-600",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Confidential & respectful",
    desc: "Every patient is treated with dignity. Results are handled with care.",
  },
  {
    icon: BadgeCheck,
    title: "Accurate & dependable",
    desc: "We follow careful processes and quality checks to support reliable results.",
  },
  {
    icon: Clock,
    title: "Timely service",
    desc: "We aim for minimal waiting time and clear guidance on turnaround.",
  },
  {
    icon: Heart,
    title: "Compassionate staff",
    desc: "Friendly, professional support from sample collection to results.",
  },
];

const howItWorks = [
  {
    icon: FileText,
    title: "Bring your request (or walk in)",
    desc: "Come with a doctor’s request form, or ask us what test fits your needs.",
  },
  {
    icon: Droplets,
    title: "Sample collection",
    desc: "We collect your sample safely and explain what happens next.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & quality checks",
    desc: "Your sample is processed carefully with proper controls.",
  },
  {
    icon: MessageCircle,
    title: "Receive results",
    desc: "Collect results or request delivery options where available.",
  },
];

const Index = () => {
  // Put your logo here: place a file at /public/logo.png (Vercel-safe, no import headaches)
  const logoSrc = "/logo.png";

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[78vh] sm:min-h-[86vh] lg:min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroLab} alt={LAB.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/10" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container relative z-10 pt-24 sm:pt-28 pb-10 sm:pb-16">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {/* Logo + trust tag */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm border border-border/40 text-foreground">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Reliable • Affordable • Timely</span>
              </div>

              {/* Company Logo (client request). If logo missing, it just won’t load (no build fail). */}
              <div className="hidden sm:flex items-center justify-center h-11 w-11 rounded-xl bg-background/20 backdrop-blur-sm border border-border/40 overflow-hidden">
                <img src={logoSrc} alt={`${LAB.name} logo`} className="h-full w-full object-contain p-1.5" />
              </div>
            </div>

            {/* Client request: Lab name must be bigger, same font style, and above the tagline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
              {LAB.name}
            </h1>

            {/* Client request: tagline smaller than lab name */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-foreground/95">
              Your Health,{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Our Priority
              </span>
            </h2>

            {/* Client requested replacement paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We provide accurate, timely, and affordable testing to support better health outcomes. Every sample
              represents a person, a family, and a life—so we handle every test with care, respect, and confidentiality.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-1">
              <Button
                size="lg"
                asChild
                className="rounded-xl font-semibold text-base px-7 py-6 bg-gradient-secondary shadow-glow-secondary hover:opacity-90 transition-all w-full sm:w-auto"
              >
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Book on WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                asChild
                className="rounded-xl font-semibold text-base px-7 py-6 bg-background text-foreground hover:bg-background/90 w-full sm:w-auto"
              >
                <a href={buildTelLink()}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl font-semibold text-base px-7 py-6 border-border/60 text-foreground hover:bg-muted/40 w-full sm:w-auto"
              >
                <Link to="/contact">Contact Page</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 pt-1 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="font-medium leading-snug">{LAB.addressShort}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="font-medium leading-snug">{LAB_HOURS_LINE}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-border/60 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-muted-foreground/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-10 bg-muted/30">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-hero">
        <div className="container">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 sm:mb-4">
              Essential Lab Testing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              We support everyday healthcare needs with reliable tests for patients, clinics, and hospitals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group bg-card rounded-2xl border border-border p-7 sm:p-8 hover-lift">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg overflow-hidden`}
                >
                  {service.icon === "logo" ? (
                    <img src={logoSrc} alt={`${LAB.name} logo`} className="h-9 w-9 object-contain" />
                  ) : (
                    <service.icon className="h-7 w-7 text-white" />
                  )}
                </div>

                <h3 className="font-bold text-xl mb-3">{service.title}</h3>

                <ul className="space-y-2 mb-4">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-muted-foreground leading-relaxed">{service.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Need a test not listed? We also offer <strong>sample referral services</strong> for specialized testing.
            </p>
            <Button variant="outline" size="lg" asChild className="rounded-xl font-semibold">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Ask on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <img
                  src={scientistWorking}
                  alt="Laboratory scientist at work"
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background z-20 hidden lg:block">
                <img src={bloodDraw} alt="Blood collection" className="w-full h-full object-cover" />
              </div>

              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-secondary opacity-20 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
            </div>

            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                  About Us
                </span>

                {/* Client request: don’t restrict to Wedza */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4 sm:mb-6">
                  Trusted Diagnostics for <span className="text-primary">Our Community</span>
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {LAB.name} is a community-based diagnostic laboratory committed to supporting patients, clinics, and
                  hospitals with accurate laboratory results. We exist to improve health outcomes by making quality
                  diagnostics accessible and trustworthy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, text: "Respect and confidentiality for every patient" },
                  { icon: "logo", text: "Accurate and dependable test results" },
                  { icon: Clock, text: "Clear guidance on turnaround times" },
                  { icon: Heart, text: "Friendly, professional, compassionate staff" },
                ].map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {p.icon === "logo" ? (
                        <img src={logoSrc} alt={`${LAB.name} logo`} className="h-6 w-6 object-contain" />
                      ) : (
                        <p.icon className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <span className="font-semibold text-foreground leading-snug">{p.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold w-full sm:w-auto">
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="rounded-xl font-semibold bg-gradient-secondary hover:opacity-90 w-full sm:w-auto"
                >
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Book on WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-6 sm:mb-8">
                Quality You Can Trust
              </h2>

              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    title: "Accurate Results",
                    desc: "We follow careful lab processes and quality checks to support dependable results.",
                  },
                  {
                    title: "Clear Turnaround Guidance",
                    desc: "We explain expected turnaround times for your test so you can plan with confidence.",
                  },
                  {
                    title: "Affordable Services",
                    desc: "We aim to keep essential testing accessible for our community.",
                  },
                  {
                    title: "Professional Care",
                    desc: "Respectful sample collection and friendly support for every patient.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={microscopeCloseup}
                alt="Laboratory microscope analysis"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 sm:mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              A clear, respectful process—from arrival to results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-6 sm:p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-secondary/10 flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />
        <div className="container relative text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Ready to Book Your Test?
          </h2>
          <p className="text-primary-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg">
            Visit us at {LAB.addressFull}. If you have questions about pricing, test availability, or turnaround times,
            contact us and we’ll guide you.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              asChild
              className="rounded-xl font-semibold text-base px-8 py-6 bg-background text-foreground hover:bg-background/90 w-full sm:w-auto"
            >
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Book on WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              asChild
              className="rounded-xl font-semibold text-base px-8 py-6 bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
            >
              <a href={buildTelLink()}>
                <Phone className="mr-2 h-5 w-5" />
                Call {LAB.phoneDisplay}
              </a>
            </Button>

            <Button
              size="lg"
              variant="secondary"
              asChild
              className="rounded-xl font-semibold text-base px-8 py-6 shadow-lg w-full sm:w-auto"
            >
              <Link to="/contact">
                Contact Page
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;