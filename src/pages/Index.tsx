import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  FlaskConical, 
  Microscope, 
  TestTube, 
  Droplets,
  ShieldCheck,
  Clock,
  Heart,
  Users,
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";
import scientistWorking from "@/assets/scientist-working.jpg";
import bloodDraw from "@/assets/blood-draw.jpg";
import microscopeCloseup from "@/assets/microscope-closeup.jpg";

const services = [
  {
    icon: Droplets,
    title: "Blood Tests",
    description: "Complete blood count, blood sugar, ESR and comprehensive blood work for accurate diagnosis.",
    color: "from-red-500 to-rose-600"
  },
  {
    icon: FlaskConical,
    title: "Chemistry Tests",
    description: "Kidney function, liver function, and metabolic panel testing for health insights.",
    color: "from-primary to-purple-600"
  },
  {
    icon: Microscope,
    title: "Infection Screening",
    description: "HIV, Syphilis, Hepatitis testing with confidential and accurate results.",
    color: "from-secondary to-teal-600"
  },
  {
    icon: TestTube,
    title: "Urine & Stool Analysis",
    description: "Complete urinalysis and stool examination for digestive health assessment.",
    color: "from-amber-500 to-orange-600"
  },
];

const stats = [
  { value: "1000+", label: "Tests Monthly", icon: FlaskConical },
  { value: "24hr", label: "Result Time", icon: Clock },
  { value: "100%", label: "Confidential", icon: ShieldCheck },
];

const promises = [
  { icon: Heart, text: "Compassionate care for every patient" },
  { icon: ShieldCheck, text: "Accurate and reliable results" },
  { icon: Clock, text: "Quick turnaround times" },
  { icon: Users, text: "Community-focused service" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroLab} 
            alt="Wedza Medical Laboratory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 text-background/90">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">Trusted by Wedza Community</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-background">
              Your Health,{" "}
              <span className="text-gradient-primary bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-background/80 leading-relaxed max-w-2xl">
              Accurate diagnostics. Compassionate care. Serving the Wedza community with 
              reliable laboratory services you can trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild className="rounded-xl font-semibold text-base px-8 py-6 bg-gradient-secondary shadow-glow-secondary hover:opacity-90 transition-all">
                <Link to="/contact">
                  Book a Test
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-xl font-semibold text-base px-8 py-6 border-background/30 text-background hover:bg-background/10 backdrop-blur-sm">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-background/70">
              <a href="tel:+263000000000" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-medium">+263 000 000 000</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>B24 Complex, Wedza</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-background/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-primary py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-primary-foreground">
                <stat.icon className="h-6 w-6 mx-auto mb-2 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Lab Testing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We offer a wide range of diagnostic services to support your healthcare needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-card rounded-2xl border border-border p-8 hover-lift cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Need a specialized test? We offer <strong>sample referral services</strong> for advanced diagnostics.
            </p>
            <Button variant="outline" size="lg" asChild className="rounded-xl font-semibold">
              <Link to="/contact">
                Ask About Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={scientistWorking} 
                  alt="Laboratory scientist at work" 
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background z-20 hidden lg:block">
                <img 
                  src={bloodDraw} 
                  alt="Blood collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-secondary opacity-20 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                  About Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Serving Wedza with{" "}
                  <span className="text-primary">Excellence</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wedza Medical Laboratory is a community-based diagnostic laboratory committed to 
                  supporting patients, clinics, and hospitals with accurate laboratory results. 
                  We exist to improve health outcomes by making quality diagnostics accessible.
                </p>
              </div>

              <div className="space-y-4">
                {promises.map((promise, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center flex-shrink-0">
                      <promise.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{promise.text}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Quality You Can Trust
              </h2>

              <div className="space-y-6">
                {[
                  { title: "Accurate Results", desc: "We use modern equipment and strict quality controls to ensure reliable diagnostics." },
                  { title: "Fast Turnaround", desc: "Most routine test results are available within 24 hours of sample collection." },
                  { title: "Affordable Prices", desc: "Quality healthcare shouldn't break the bank. We keep our services accessible." },
                  { title: "Professional Staff", desc: "Our trained laboratory scientists are committed to your care and comfort." },
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

            {/* Image */}
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        
        <div className="container relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Book Your Test?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
            Visit us at B24 Complex, Wedza District or contact us today. 
            We're here to serve you with quality diagnostic services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="rounded-xl font-semibold text-base px-8 py-6 shadow-lg">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-xl font-semibold text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+263000000000">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
