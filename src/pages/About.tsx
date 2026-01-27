// File: src/pages/About.tsx

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle2,
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

// ✅ TEAM PHOTOS (MUST EXIST EXACTLY WITH THESE NAMES)
import executiveDirectorPortrait from "@/assets/team/executive-director.jpg";
import ceoPortrait from "@/assets/team/chief-executive-officer.jpg";

import { LAB, buildTelLink, buildWhatsAppLink } from "@/config/lab";

const whatsappLink = buildWhatsAppLink(
  `Hello ${LAB.name}. I’d like to ask about your services and how to book a test.`
);

// ✅ Values from the owners' PDF
const values = [
  {
    icon: ShieldCheck,
    title: "Quality & Accuracy",
    description: "We are committed to reliable testing and trustworthy results.",
    color: "from-primary to-purple-600",
  },
  {
    icon: Heart,
    title: "Community Care",
    description: "We serve our community with compassion, respect, and inclusivity.",
    color: "from-rose-500 to-red-600",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "We strive to make diagnostic services affordable and available to all.",
    color: "from-secondary to-teal-600",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold honesty, confidentiality, and ethical practice at all times.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Sparkles,
    title: "Professionalism",
    description: "We maintain high standards through skilled staff and continuous improvement.",
    color: "from-sky-500 to-indigo-600",
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

// ✅ Leadership from the owners' PDF (names + bio points)
const leadership = [
  {
    name: "Dr. Violet Nxedhlana",
    role: "Executive Director",
    image: executiveDirectorPortrait,
    bullets: [
      "Highly experienced clinical laboratory scientist (25+ years).",
      "Career spanning cancer centers, clinical laboratories, and academia.",
      "Associate Professor and Clinical Laboratory Science Program Director.",
      "Committed to quality, mentorship, and community health.",
    ],
    icon: GraduationCap,
  },
  {
    name: "Prof. Shepherd Maingano",
    role: "Chief Executive Officer",
    image: ceoPortrait,
    bullets: [
      "24+ years of experience in clinical laboratory science.",
      "Professor of Clinical Chemistry.",
      "Director of Medical Laboratory Technician & Phlebotomy Programs.",
      "Provides strategic oversight and supports training of future professionals.",
    ],
    icon: Stethoscope,
  },
];

const About = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroLab} alt={`${LAB.name} facility`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-background/10" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                About Us
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Trusted Diagnostic Services for <span className="text-primary">Our Community</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                We are a community-focused diagnostic laboratory committed to delivering accurate, timely,
                and affordable testing services. Our team supports patients and healthcare providers with
                reliable results in hematology, clinical chemistry, and immunochemistry—improving health
                outcomes through quality, integrity, and compassionate care.
              </p>

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
                  <Link to="/contact">Contact Page</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 pt-1 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{LAB.addressShort}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{LAB.hoursLine}</span>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative">
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-6 sm:p-8 shadow-2xl">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Who We Serve</h2>
                <p className="text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                  We support individuals and healthcare providers with dependable testing, respectful service,
                  and clear turnaround guidance.
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

              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-secondary opacity-20 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-7 sm:p-10 rounded-3xl border border-border shadow-soft hover-lift">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 sm:mb-8 shadow-bold">
                <Eye className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                To be a leading and reliable diagnostic partner, improving community health through excellence,
                innovation, and compassionate service.
              </p>
            </div>

            <div className="bg-card p-7 sm:p-10 rounded-3xl border border-border shadow-soft hover-lift">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center mb-6 sm:mb-8 shadow-glow-secondary">
                <Target className="h-7 w-7 sm:h-8 sm:w-8 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                To deliver accurate, timely, and affordable diagnostic testing services that support clinicians,
                empower patients, and improve health outcomes through quality, integrity, and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Experienced, Community-Driven
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Leadership focused on quality, training, and trusted diagnostic services for better health outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {leadership.map((leader) => (
              <div key={leader.name} className="bg-card border border-border rounded-3xl overflow-hidden shadow-soft">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={leader.image} alt={`${leader.name} portrait`} className="w-full h-full object-cover" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <leader.icon className="h-5 w-5" />
                    <span className="text-sm font-semibold">{leader.role}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold">{leader.name}</h3>

                  <ul className="mt-4 space-y-2">
                    {leader.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="outline" className="rounded-xl font-semibold w-full sm:w-auto">
                      <Link to="/contact">Contact</Link>
                    </Button>
                    <Button asChild className="rounded-xl font-semibold w-full sm:w-auto">
                      <a href={whatsappLink} target="_blank" rel="noreferrer">
                        Message on WhatsApp
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 sm:mt-12 text-center text-muted-foreground">
            <p>
              Our skilled and caring team works together to provide accurate, timely, and reliable diagnostic services.
              Every member is dedicated to supporting patients and the community with professionalism, compassion, and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              How Our Testing Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              A clear and respectful journey—from arrival to results.
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

      {/* VALUES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              These values shape how we serve patients and support healthcare providers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-card p-7 sm:p-8 rounded-2xl border border-border text-center hover-lift">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <value.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLEDGE */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Careful Process, <span className="text-primary">Reliable Results</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We focus on safe sample handling, clear communication, and consistent testing practices.
                  If a specialized test is needed, we provide sample referral services through partners.
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