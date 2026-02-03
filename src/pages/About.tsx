// File: src/pages/About.tsx
// BinanceXI watermark — internal build signature (do not remove)

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SITE } from "@/config/site";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  ArrowRight,
  Phone,
  MessageCircle,
  FileText,
  BadgeCheck,
  Clock,
  MapPin,
  GraduationCap,
  Stethoscope,
  Sparkles,
  Shield,
  Award,
} from "lucide-react";

import heroLab from "@/assets/hero-lab.jpg";
import labEquipment from "@/assets/lab-equipment.jpg";
import scientistWorking from "@/assets/scientist-working.jpg";

// Team photos (must exist with these names)
import executiveDirectorPortrait from "@/assets/team/executive-director.jpg";
import ceoPortrait from "@/assets/team/chief-executive-officer.jpg";

import { LAB, LAB_HOURS_LINE, buildTelLink, buildWhatsAppLink } from "@/config/lab";

const whatsappLink = buildWhatsAppLink(
  `Hello ${LAB.name}. I’d like to ask about your services and how to book a test.`
);

// Values (expanded wording per client corrections)
const values = [
  {
    icon: ShieldCheck,
    title: "Quality & Accuracy",
    description:
      "We are committed to delivering precise, reliable laboratory results through uncompromising quality standards and meticulous attention to detail.",
    color: "from-primary to-purple-600",
  },
  {
    icon: Users,
    title: "Community Care",
    description:
      "We care for our community by delivering trusted laboratory services, supporting local healthcare, and promoting healthier lives through partnership and service.",
    color: "from-rose-500 to-red-600",
  },
  {
    icon: BadgeCheck,
    title: "Accessibility",
    description:
      "We believe quality laboratory testing should be easy to access. Our services are designed to be convenient, responsive, and inclusive for every patient and provider we serve.",
    color: "from-secondary to-teal-600",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Integrity guides every test we perform. We protect patient confidentiality, follow strict quality controls, and report results honestly and accurately—because lives depend on reliable laboratory data.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Sparkles,
    title: "Professionalism",
    description:
      "We demonstrate professionalism through expertise, integrity, and respectful service in every interaction and every result we deliver.",
    color: "from-sky-500 to-indigo-600",
  },
];

const whoWeServe = [
  { icon: Users, title: "Patients", desc: "Walk-in clients and families seeking clear answers." },
  { icon: BadgeCheck, title: "Clinics", desc: "Reliable testing to support clinical decisions." },
  { icon: ShieldCheck, title: "Hospitals", desc: "Accurate results and respectful sample handling." },
];

const howItWorks = [
  {
    icon: FileText,
    title: "Request or walk in",
    desc: "Bring a clinician’s request form, or ask what test fits your needs.",
  },
  {
    icon: Clock,
    title: "Sample collection",
    desc: "Safe collection with clear guidance on expected turnaround time.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & quality checks",
    desc: "Careful processing with appropriate controls and standards.",
  },
  {
    icon: MessageCircle,
    title: "Receive results",
    desc: "Collect results or request available delivery options where possible.",
  },
];

// Leadership (paragraph bios — per document)
const leadership = [
  {
    name: "Dr. Violet Nxedhlana",
    role: "Executive Director",
    image: executiveDirectorPortrait,
    icon: GraduationCap,
    bio: "Our laboratory is led by Dr. Violet Nxedhlana, a highly experienced clinical laboratory scientist with over 25 years of expertise in clinical laboratory sciences. Her career spans extensive work in cancer centers and clinical laboratories, as well as academic leadership as an Associate Professor and Clinical Laboratory Science Program Director. Dr. Nxedhlana brings a strong commitment to quality, mentorship, and community health, ensuring the laboratory delivers trusted diagnostic services guided by excellence and integrity.",
  },
  {
    name: "Prof. Shepherd Maingano",
    role: "Chief Executive Officer",
    image: ceoPortrait,
    icon: Stethoscope,
    bio: "Prof. Shepherd Maingano has over 24 years of experience in clinical laboratory science, transitioning from hands-on laboratory testing to leadership and supervision. He is a Professor of Clinical Chemistry and Director of the Medical Laboratory Technician and Phlebotomy Programs, providing strategic oversight and fostering the next generation of laboratory professionals.",
  },
];

const About = () => {
  // Client logo: keep it in /public/logo.png (no import headaches)
  const logoSrc = "/logo.png";

  // SEO
  const canonical = `${SITE.domain}/about`;
  const title = `About ${LAB.name} | Diagnostic Laboratory`;
  const description =
    "Learn about Wedza Medical Centre Laboratory — our mission, values, leadership, and commitment to accurate, timely, and affordable diagnostic testing services.";

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

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* BinanceXI watermark — About page */}
      {/* HERO */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroLab} alt={`${LAB.name} facility`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/10" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  About Us
                </span>

                {/* Client request: replace flask with actual logo (this screen) */}
                <div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-xl bg-background/20 backdrop-blur-sm border border-border/40 overflow-hidden">
                  <img src={logoSrc} alt={`${LAB.name} logo`} className="h-full w-full object-contain p-1.5" />
                </div>
              </div>

              {/* Client request: match font size of “Your Health, Our Priority” */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Trusted Diagnosis for <span className="text-primary">Our Community</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                We are a community-focused diagnostic laboratory committed to delivering accurate, timely, and affordable
                testing services. Our team supports patients and healthcare providers with reliable results in
                hematology, clinical chemistry, and immunochemistry—improving health outcomes through quality, integrity,
                and compassionate care.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-xl font-semibold shadow-bold w-full sm:w-auto">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Book on WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="rounded-xl font-semibold bg-background text-foreground hover:bg-background/90 w-full sm:w-auto"
                >
                  <a href={buildTelLink()}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold w-full sm:w-auto">
                  <Link to="/contact">Contact</Link>
                </Button>
              </div>

              {/* Meta line */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 pt-1 text-muted-foreground">
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

            {/* Right card */}
            <div className="relative">
              <div className="bg-card/85 backdrop-blur-sm border border-border rounded-3xl p-6 sm:p-8 shadow-2xl">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Who We Serve</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Individuals and healthcare providers—served with respectful care and dependable testing.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {whoWeServe.map((item, idx) => (
                    <div key={idx} className="rounded-2xl border border-border bg-background/70 p-4">
                      <item.icon className="h-5 w-5 text-primary mb-2" />
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-secondary opacity-15 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-gradient-primary opacity-15 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-7 sm:p-10 rounded-3xl border border-border shadow-soft">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-bold">
                <Eye className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                To be a leading and reliable diagnostic partner, improving community health through excellence,
                innovation, and compassionate service.
              </p>
            </div>

            <div className="bg-card p-7 sm:p-10 rounded-3xl border border-border shadow-soft">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center mb-6 shadow-glow-secondary">
                <Target className="h-7 w-7 sm:h-8 sm:w-8 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                To deliver accurate, timely, and affordable diagnostic testing services that support clinicians,
                empower patients, and improve health outcomes through quality, integrity, and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fix: VALUES must come immediately after Vision/Mission */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Principles That Guide Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              These values shape how we serve patients and support healthcare providers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card p-6 sm:p-7 rounded-2xl border border-border text-center hover-lift"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP (paragraph bios) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Experienced, Community-Driven</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Focused on quality, training, and trusted diagnostic services for better health outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {leadership.map((leader) => (
              <div key={leader.name} className="bg-card border border-border rounded-3xl p-6 sm:p-7 shadow-soft">
                <div className="flex items-start gap-4">
                  {/* Client request: show full photo ratio (no cropping) */}
                  <div className="h-24 w-20 sm:h-28 sm:w-24 rounded-2xl border border-border shadow-sm bg-muted/30 overflow-hidden shrink-0 flex items-center justify-center">
                    <img
                      src={leader.image}
                      alt={`${leader.name} portrait`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-primary">
                      <leader.icon className="h-5 w-5" />
                      <span className="text-sm font-semibold">{leader.role}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mt-1">{leader.name}</h3>

                    <p className="mt-3 text-muted-foreground text-sm sm:text-[15px] leading-relaxed">
                      {leader.bio}
                    </p>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Button asChild variant="outline" className="rounded-xl font-semibold w-full sm:w-auto">
                        <Link to="/contact">Contact</Link>
                      </Button>
                      <Button asChild className="rounded-xl font-semibold w-full sm:w-auto">
                        <a href={whatsappLink} target="_blank" rel="noreferrer">
                          WhatsApp
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Exact “Our Staff” section from corrections */}
          <div className="max-w-5xl mx-auto mt-10 sm:mt-12 bg-card border border-border rounded-3xl p-7 sm:p-10 shadow-soft">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <Users className="h-6 w-6" />
              <h3 className="text-2xl sm:text-3xl font-bold">Our Staff</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Our skilled and caring team works together to provide accurate, timely, and reliable diagnostic services.
              Every member, from laboratory scientists to drivers, is dedicated to supporting patients and the community
              with professionalism, compassion, and integrity. Together, we work hand-in-hand to support better health
              outcomes for all.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">How Our Testing Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              A clear and respectful journey—from arrival to results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
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

      {/* PLEDGE */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-7 sm:p-10 shadow-soft">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Award className="h-6 w-6" />
              <h2 className="text-2xl sm:text-3xl font-bold">Our Pledge to the Community</h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              We are committed to serving our community with accurate, timely, and affordable diagnostic services.
              We pledge to uphold the highest standards of quality, integrity, and compassion—ensuring that every
              patient receives care they can trust.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild className="rounded-xl font-semibold w-full sm:w-auto">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>

              <Button asChild variant="outline" className="rounded-xl font-semibold w-full sm:w-auto">
                <a href={buildTelLink()}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {LAB.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img
                src={labEquipment}
                alt="Laboratory equipment"
                className="rounded-2xl shadow-xl w-full object-cover aspect-square"
              />
              <img
                src={scientistWorking}
                alt="Scientist working"
                className="rounded-2xl shadow-xl w-full object-cover aspect-square mt-6 sm:mt-8"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                  Our Facility
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Careful Process, <span className="text-primary">Reliable Results</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We focus on safe sample handling, clear communication, and consistent testing practices.
                  If a specialized test is needed, we support sample referral through trusted partners.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Safe and respectful sample collection",
                  "Clear guidance on turnaround time",
                  "Confidential handling of patient information",
                  "Referral support for specialized testing",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <ShieldCheck className="h-6 w-6 text-secondary flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <Button asChild variant="outline" size="lg" className="rounded-xl font-semibold w-full sm:w-auto">
                <Link to="/contact">
                  Visit Our Laboratory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;