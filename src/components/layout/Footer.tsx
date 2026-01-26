import { Link } from "react-router-dom";
import { FlaskConical, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <FlaskConical className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-background">Wedza</span>
                <span className="text-xs text-background/60 leading-tight font-medium">Medical Laboratory</span>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md">
              A community-based diagnostic laboratory committed to supporting patients, clinics, 
              and hospitals with accurate laboratory results. Serving Wedza District with care.
            </p>
            <Button asChild variant="secondary" className="rounded-xl font-semibold group">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-background/70 hover:text-background transition-colors font-medium"
                  >
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
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-background/70">B24 Complex, Wedza District, Zimbabwe</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-secondary flex-shrink-0" />
                <div className="text-background/70">
                  <p>Mon-Fri: 8AM - 4:30PM</p>
                  <p>Sat: 8AM - 12PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-background/70">+263 000 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-background/70">info@wedzalab.co.zw</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} Wedza Medical Laboratory. All rights reserved.</p>
            <p className="text-xs text-center md:text-right">
              This website provides general information only. Always consult a healthcare provider for medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
