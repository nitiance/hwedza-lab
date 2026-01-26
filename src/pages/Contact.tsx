import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import reception from "@/assets/reception.jpg";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're here to help. Reach out with any questions about our laboratory services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={reception} 
                  alt="Wedza Medical Laboratory" 
                  className="w-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-background">
                  <h3 className="font-bold text-xl mb-1">Visit Us Today</h3>
                  <p className="text-background/80">B24 Complex, Wedza District</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-bold">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-muted-foreground">B24 Complex, Wedza District, Zimbabwe</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center flex-shrink-0 shadow-glow-secondary">
                      <Clock className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Opening Hours</h3>
                      <p className="text-muted-foreground">Monday – Friday: 8:00 AM – 4:30 PM</p>
                      <p className="text-muted-foreground">Saturday: 8:00 AM – 12:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <a href="tel:+263000000000" className="text-muted-foreground hover:text-primary transition-colors">
                        +263 000 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:info@wedzalab.co.zw" className="text-muted-foreground hover:text-primary transition-colors">
                        info@wedzalab.co.zw
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/263000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#20bd5a] transition-colors shadow-lg"
              >
                <MessageCircle className="h-6 w-6" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-soft">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you soon.</p>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-xl font-semibold">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-semibold">Full Name</Label>
                        <Input id="name" placeholder="Your name" required className="rounded-xl py-5" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-semibold">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" required className="rounded-xl py-5" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">Email (Optional)</Label>
                      <Input id="email" type="email" placeholder="Your email address" className="rounded-xl py-5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-semibold">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="How can we help you?" 
                        rows={5}
                        required 
                        className="rounded-xl resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-xl font-semibold py-6 text-base shadow-bold">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* Note */}
              <div className="mt-6 p-5 bg-muted/50 rounded-xl border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This is for general inquiries only. For urgent medical concerns, 
                  please visit the laboratory directly or contact your healthcare provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
