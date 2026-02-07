// File: src/components/layout/Footer.tsx
// BinanceXI — build watermark (do not remove)

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LAB, LAB_HOURS_LINE, buildMailtoLink, buildMapsLink, buildTelLink, buildWhatsAppLink } from "@/config/lab";

const Footer = () => {
  // Default WhatsApp enquiry message (simple + consistent)
  const whatsappLink = buildWhatsAppLink(`Hello ${LAB.name}. I’d like to ask about your services and how to book a test.`);

  // Default email enquiry message
  const mailtoLink = buildMailtoLink(
    `Enquiry — ${LAB.name}`,
    `Hello ${LAB.name},\n\nI would like to enquire about your services.\n\nThank you.`
  );

  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / summary */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt={`${LAB.name} logo`}
                className="h-16 sm:h-18 w-auto object-contain"
              />

              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-background">{LAB.name}</span>
                <span className="text-xs text-background/60 leading-tight font-medium">Diagnostic Laboratory</span>
              </div>
            </Link>

            <p className="text-background/70 leading-relaxed max-w-md">
              A community-based diagnostic laboratory committed to supporting patients, clinics, and hospitals with
              accurate laboratory results—served with professionalism, integrity, and care.
            </p>

            {/* Quick actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="secondary" className="rounded-xl font-semibold group">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild className="rounded-xl font-semibold bg-background text-foreground hover:bg-background/90">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/70 hover:text-background transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Contact Us</h4>

            <ul className="space-y-4">
              {/* Location */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary flex-shrink-0" />
                <div className="text-background/70">
                  <div>{LAB.addressFull}</div>
                  <a
                    className="inline-flex items-center gap-2 text-sm mt-2 text-background hover:underline"
                    href={buildMapsLink()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Directions <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-secondary flex-shrink-0" />
                <div className="text-background/70">
                  <p className="font-medium text-background/80">Opening Hours</p>
                  <p>{LAB.hours.weekdays}</p>
                  <p>{LAB.hours.saturday}</p>
                  <p className="text-xs text-background/50 mt-2">{LAB_HOURS_LINE}</p>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href={buildTelLink(LAB.phoneTel)} className="text-background/70 hover:text-background transition-colors">
                  {LAB.phoneDisplay}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href={mailtoLink} className="text-background/70 hover:text-background transition-colors break-all">
                  {LAB.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} {LAB.name}. All rights reserved.</p>
            <p className="text-xs text-center md:text-right max-w-xl">
              This website provides general information only. For diagnosis and treatment, consult a qualified healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;