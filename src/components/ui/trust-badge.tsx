import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const TrustBadge = ({ icon: Icon, title, description }: TrustBadgeProps) => {
  return (
    <div className="flex items-center gap-3 bg-accent/50 rounded-lg px-4 py-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
};

export default TrustBadge;
