import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileText,
  BadgeCheck,
  Clock,
  MapPin,
} from "lucide-react";

import heroLab from "@/assets/hero-lab.jpg";
import labEquipment from "@/assets/lab-equipment.jpg";
import scientistWorking from "@/assets/scientist-working.jpg";

import { LAB, buildTelLink, buildWhatsAppLink } from "@/config/lab";

const whatsappLink = buildWhatsAppLink(
  `Hello ${LAB.name}. I’d like to ask about your services and how to book a test.`
);

const values = [
  {
    icon: ShieldCheck,
    title: "Accuracy",
    description: "We follow careful processes and quality checks to support dependable test results.",
    color: "from-primary to-purple-600",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient with respect, dignity, and genuine care.",
    color: "from-rose-500 to-red-600",
  },
  {
    icon: Users,
    title: "Community",
    description: "We are committed to improving health outcomes in Wedza by making diagnostics accessible.",
    color: "from-secondary to-teal-600",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We uphold professionalism, confidentiality, and ethical practice at all times.",
    color: "from-amber-500 to-orange-600",
  },
];

const whoWeServe = [
  { icon: Users, title: "Patients", desc: "Walk-in clients and families seeking clear answers." },
  { icon: BadgeCheck, title: "Clinics", desc: "Reliable testing to support clinical decisions." },
  { icon: ShieldCheck, title: "Hospitals", desc: "Accurate results and respectful handling of samples." },
];

const howItWorks = [
  {
    icon: FileText,
    title: "Bring a request (or walk in)",
    desc: "Come with a clinician’s request form, or ask us what test fits your needs.",
  },
  {
    icon: Clock,
    title: "Sample collection",
    desc: "We collect your sample safely and explain turnaround expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & quality checks",
    desc: "Your sample is processed carefully with appropriate controls.",
  },
  {
    icon: MessageCircle,
    title: "Receive results",
    desc: "Collect results or request available delivery options where possible.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroLab} alt={`${LAB.name} facility`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                About Us
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Serving Wedza with <span className="text-primary">Care & Trust</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At {LAB.name}, we are proud to serve our community with reliable, affordable, and timely laboratory
                services. We understand that every test represents a person, a family, and a life—so we treat every
                sample with care and respect.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl font-semibold shadow-bold">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Book on WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="rounded-xl font-semibold bg-background text-foreground hover:bg-background/90"
                >
                  <a href={buildTelLink()}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold">
                  <Link to="/contact">Contact Page</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">{LAB.addressShort}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">{LAB.hoursLine}</span>
                </div>
              </div>
            </div>

            {/* Right side card */}
            <div className="relative">
              <div className="bg-card/70 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are a community-based diagnostic laboratory supporting patients, clinics, and hospitals with
                  accurate laboratory results. Our purpose is to improve health outcomes in Wedza by making quality
                  diagnostics accessible and trustworthy.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {whoWeServe.map((item, idx) => (
                    <div key={idx} className="rounded-2xl border border-border bg-background/60 p-4">
                      <item.icon className="h-5 w-5 text-primary mb-2" />
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-secondary opacity-20 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-10 rounded-3xl border border-border shadow-soft hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-8 shadow-bold">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be a trusted medical laboratory that improves the health of our community through accurate,
                accessible, and reliable diagnostic services.
              </p>
            </div>

            <div className="bg-card p-10 rounded-3xl border border-border shadow-soft hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center mb-8 shadow-glow-secondary">
                <Target className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide timely, affordable, and high-quality laboratory diagnostic services with professionalism,
                integrity, and care—supporting patients and healthcare providers in making informed health decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How Our Testing Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A clear and respectful journey—from arrival to results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-7">
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

      {/* VALUES */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Principles That Guide Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              These values shape how we serve patients and support healthcare providers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-card p-8 rounded-2xl border border-border text-center hover-lift">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img
                src={labEquipment}
                alt="Laboratory equipment"
                className="rounded-2xl shadow-xl w-full object-cover aspect-square"
              />
              <img
                src={scientistWorking}
                alt="Scientist working"
                className="rounded-2xl shadow-xl w-full object-cover aspect-square mt-8"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                  Our Facility
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Careful Process, <span className="text-primary">Reliable Results</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We focus on safe sample handling, clear communication, and consistent testing practices. If a specialized
                  test is needed, we provide sample referral services through partners.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Safe and respectful sample collection",
                  "Clear turnaround guidance for your test",
                  "Confidential handling of patient information",
                  "Sample referral support for specialized testing",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <Button asChild variant="outline" size="lg" className="rounded-xl font-semibold">
                <Link to="/contact">
                  Visit Our Laboratory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />
        <div className="container relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Questions About Our Services?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
            We’re here to help. Contact us for test availability, pricing guidance, and turnaround expectations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="rounded-xl font-semibold text-base px-8 py-6 bg-background text-foreground hover:bg-background/90"
            >
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>

            <Button
              size="lg"
              asChild
              className="rounded-xl font-semibold text-base px-8 py-6 bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={buildTelLink()}>
                <Phone className="mr-2 h-5 w-5" />
                Call {LAB.phoneDisplay}
              </a>
            </Button>

            <Button size="lg" variant="secondary" asChild className="rounded-xl font-semibold text-base px-8 py-6 shadow-lg">
              <Link to="/contact">
                Contact Page
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-primary-foreground/70 text-sm">
            <p>Location: {LAB.addressFull}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;