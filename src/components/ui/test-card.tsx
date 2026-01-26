import { Link } from "react-router-dom";
import { Clock, Droplets } from "lucide-react";
import { Button } from "./button";

interface TestCardProps {
  name: string;
  description: string;
  sampleType: string;
  turnaround: string;
  price: number;
  popular?: boolean;
}

const TestCard = ({ name, description, sampleType, turnaround, price, popular }: TestCardProps) => {
  return (
    <div className={`relative p-5 bg-card rounded-xl border shadow-card hover:shadow-lg transition-all duration-300 ${popular ? 'border-primary ring-1 ring-primary/20' : 'border-border'}`}>
      {popular && (
        <span className="absolute -top-2.5 left-4 px-2.5 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
          Popular
        </span>
      )}
      <h3 className="font-semibold text-base mb-1.5">{name}</h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Droplets className="h-3.5 w-3.5" />
          <span>{sampleType}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          <span>{turnaround}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-primary">${price}</div>
        <Button size="sm" asChild>
          <Link to="/book">Book</Link>
        </Button>
      </div>
    </div>
  );
};

export default TestCard;
