import { useState } from "react";
import { Card } from "@/components/ui/card";

interface PlayerStats {
  kd?: number;
  kills?: number;
  mpMatches?: number;
  brMatches?: number;
  medals?: number;
  managedCompetitions?: number;
  wins?: number;
  experience?: string;
}

interface PlayerCardProps {
  name: string;
  tagline: string;
  image: string;
  stats: PlayerStats;
  isLeader?: boolean;
}

const PlayerCard = ({
  name,
  tagline,
  image,
  stats,
  isLeader = false,
}: PlayerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`relative overflow-hidden bg-card border-2 border-border transition-all duration-300 group cursor-pointer ${
        isLeader ? "min-h-[400px]" : "min-h-[300px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80" />

        {/* Name, tagline, and role - always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="text-2xl font-bold text-foreground mb-1">{name}</h3>
          <p className="text-sm text-primary italic mb-1">"{tagline}"</p>
          {isLeader && (
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {name === "Lex" ? "Team Leader" : "Team Manager"}
            </p>
          )}
        </div>

        {/* Stats overlay - hidden for now
        <div
          className={`absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/90 to-secondary/95 flex flex-col justify-center items-center p-6 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs text-primary-foreground">
            {stats.kd !== undefined && (
              <div className="text-center">
                <p className="text-3xl font-bold glow-red">{stats.kd}</p>
                <p className="text-sm opacity-90">K/D Ratio</p>
              </div>
            )}
            {stats.kills !== undefined && (
              <div className="text-center">
                <p className="text-3xl font-bold glow-blue">{stats.kills.toLocaleString()}</p>
                <p className="text-sm opacity-90">Total Kills</p>
              </div>
            )}
            {stats.mpMatches !== undefined && (
              <div className="text-center">
                <p className="text-2xl font-bold">{stats.mpMatches}</p>
                <p className="text-sm opacity-90">MP Medals</p>
              </div>
            )}
            {stats.brMatches !== undefined && (
              <div className="text-center">
                <p className="text-2xl font-bold">{stats.brMatches}</p>
                <p className="text-sm opacity-90">BR Medals</p>
              </div>
            )}
            {stats.managedCompetitions !== undefined && (
              <div className="text-center">
                <p className="text-3xl font-bold glow-blue">{stats.managedCompetitions}</p>
                <p className="text-sm opacity-90">Competitions</p>
              </div>
            )}
            {stats.wins !== undefined && (
              <div className="text-center">
                <p className="text-3xl font-bold glow-red">{stats.wins}</p>
                <p className="text-sm opacity-90">Wins</p>
              </div>
            )}
            {stats.experience !== undefined && (
              <div className="text-center col-span-2">
                <p className="text-2xl font-bold">{stats.experience}</p>
                <p className="text-sm opacity-90">Experience</p>
              </div>
            )}
          </div>
        </div>
        */}
      </div>
    </Card>
  );
};

export default PlayerCard;
