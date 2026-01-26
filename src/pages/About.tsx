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
  CheckCircle2
} from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";
import labEquipment from "@/assets/lab-equipment.jpg";
import scientistWorking from "@/assets/scientist-working.jpg";

const values = [
  {
    icon: ShieldCheck,
    title: "Accuracy",
    description: "We ensure every test result is accurate, reliable, and dependable for proper diagnosis.",
    color: "from-primary to-purple-600"
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient with genuine care, respect, and dignity they deserve.",
    color: "from-rose-500 to-red-600"
  },
  {
    icon: Users,
    title: "Community",
    description: "We are deeply committed to improving health outcomes in our Wedza community.",
    color: "from-secondary to-teal-600"
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We uphold the highest standards of professionalism and ethical practice.",
    color: "from-amber-500 to-orange-600"
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Serving Wedza with{" "}
                <span className="text-primary">Care & Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wedza Medical Laboratory is a community-based diagnostic laboratory committed to 
                supporting patients, clinics, and hospitals with accurate laboratory results. 
                We exist to improve health outcomes in Wedza by making quality diagnostics 
                accessible and trustworthy.
              </p>
              <Button asChild size="lg" className="rounded-xl font-semibold shadow-bold">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroLab} 
                alt="Wedza Medical Laboratory facility" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-secondary opacity-20 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-10 rounded-3xl border border-border shadow-soft hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-8 shadow-bold">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be a trusted medical laboratory that improves the health of our community 
                through accurate, accessible, and reliable diagnostic services.
              </p>
            </div>
            <div className="bg-card p-10 rounded-3xl border border-border shadow-soft hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center mb-8 shadow-glow-secondary">
                <Target className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide timely, affordable, and high-quality laboratory diagnostic services 
                with professionalism, integrity, and care, supporting patients and healthcare 
                providers in making informed health decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              These core values shape everything we do at Wedza Medical Laboratory.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-card p-8 rounded-2xl border border-border text-center hover-lift"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-24 bg-muted/30">
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
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Our Facility
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Modern Equipment,{" "}
                  <span className="text-primary">Reliable Results</span>
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  "Equipped with modern diagnostic equipment for accurate testing",
                  "Comfortable and welcoming environment for all patients",
                  "Strict quality control measures for reliable results",
                  "Sample referral services for specialized tests",
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Questions About Our Services?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg">
            We're here to help. Reach out to us with any questions about our laboratory services.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-xl font-semibold text-base px-8 py-6 shadow-lg">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
