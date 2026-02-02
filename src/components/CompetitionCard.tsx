import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface CompetitionCardProps {
  name: string;
  placement: string;
  description: string;
  image: string;
}

const CompetitionCard = ({ name, placement, description, image }: CompetitionCardProps) => {
  const getPlacementStyle = (placement: string) => {
    if (placement.includes("1st")) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    if (placement.includes("2nd")) return "bg-slate-300/20 text-slate-300 border-slate-400/50";
    if (placement.includes("3rd")) return "bg-amber-600/20 text-amber-500 border-amber-600/50";
    return "bg-muted text-foreground border-border";
  };

  return (
    <Card className="bg-card border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden group hover:glow-red">
      <div className="relative aspect-square overflow-hidden bg-card">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <span className={`inline-block text-lg font-bold px-3 py-1 rounded border ${getPlacementStyle(placement)}`}>
          {placement}
        </span>
        
        <h3 className="text-xl font-bold text-foreground mt-3 mb-2 group-hover:text-glow-red transition-all">
          {name}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default CompetitionCard;
