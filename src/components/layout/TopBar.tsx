import { Phone, Mail, Clock, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 text-sm">
      <div className="container flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span className="hidden sm:inline font-medium">Wedza District, Zimbabwe</span>
          </div>
          <a href="tel:+263000000000" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Call Us</span>
          </a>
          <a href="mailto:info@wedzalab.co.zw" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Email Us</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span>Mon-Fri: 8AM-4:30PM | Sat: 8AM-12PM</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
