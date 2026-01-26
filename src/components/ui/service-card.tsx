import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

const ServiceCard = ({ icon: Icon, title, description, href = "/tests" }: ServiceCardProps) => {
  return (
    <Link
      to={href}
      className="group block p-6 bg-card rounded-xl border border-border shadow-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
        <span>View Tests</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
};

export default ServiceCard;
