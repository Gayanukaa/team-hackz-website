import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PlayerCard from "@/components/PlayerCard";
import CompetitionCard from "@/components/CompetitionCard";

import teamLogo from "@/assets/team-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import playerLex from "@/assets/player-lex.jpg";
import playerStacey from "@/assets/player-stacey.jpg";
import playerDante from "@/assets/player-dante.jpg";
import playerSasuke from "@/assets/player-sasuke.jpg";
import playerIzira from "@/assets/player-izira.jpg";
import playerSatan from "@/assets/player-satan.jpg";
import playerProfessor from "@/assets/player-professor.jpg";
import playerJohnny from "@/assets/player-johnny.jpg";
import playerZozzflank from "@/assets/player-zozzflank.jpg";
import playerTeddy from "@/assets/player-teddy.jpg";
import playerThejaa from "@/assets/player-thejaa.png";
import compRuiz from "@/assets/comp-ruiz.jpg";
import compAcies from "@/assets/comp-acies.jpg";
import compYoungblood from "@/assets/comp-youngblood.jpg";
import compIuec from "@/assets/comp-iuec.jpg";
import compEclipse from "@/assets/comp-eclipse.jpg";
import compIuecDante from "@/assets/comp-iuec-dante.jpg";
import compProfessorDuel from "@/assets/comp-professor-duel.jpg";
import compTrinity from "@/assets/comp-trinity.png";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    gameId: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    setFormData({ name: "", contact: "", gameId: "", role: "" });
  };

  const leaders = [
    {
      name: "Lex",
      tagline: "Leads the charge, plans victory",
      image: playerLex,
      stats: { kd: 4.1, kills: 3020, mpMatches: 25, brMatches: 21 },
    },
    {
      name: "Stacy",
      tagline: "Voice of focus under fire",
      image: playerStacey,
      stats: { managedCompetitions: 12, wins: 7, experience: "3 Years" },
    },
  ];

  const players = [
    {
      name: "Dante",
      tagline: "The calm before clutch chaos.",
      image: playerDante,
      stats: { kd: 3.6, kills: 2415, mpMatches: 18, brMatches: 12 },
    },
    {
      name: "Sasuke",
      tagline: "Walls don't hide his targets",
      image: playerSasuke,
      stats: { kd: 3.2, kills: 1980, mpMatches: 15, brMatches: 10 },
    },
    {
      name: "Zira",
      tagline: "Dances through danger, hits perfect.",
      image: playerIzira,
      stats: { kd: 3.9, kills: 2780, mpMatches: 21, brMatches: 16 },
    },
    {
      name: "Satan",
      tagline: "Turns cover into storm zones.",
      image: playerSatan,
      stats: { kd: 4.4, kills: 3540, mpMatches: 27, brMatches: 19 },
    },
    {
      name: "Professor",
      tagline: "Plans battles like solving puzzles",
      image: playerProfessor,
      stats: { kd: 3.7, kills: 2630, mpMatches: 19, brMatches: 14 },
    },
    {
      name: "Jony",
      tagline: "You'll never guess his next.",
      image: playerJohnny,
      stats: { kd: 3.4, kills: 2210, mpMatches: 16, brMatches: 13 },
    },
    {
      name: "Thejaa",
      tagline: "Silent aim, loud impact.",
      image: playerThejaa,
      stats: { kd: 3.8, kills: 2560, mpMatches: 17, brMatches: 15 },
    },
    {
      name: "Zozzflank",
      tagline: "Strikes fast, disappears faster.",
      image: playerZozzflank,
      stats: { kd: 3.5, kills: 2340, mpMatches: 14, brMatches: 11 },
    },
    {
      name: "Teddy",
      tagline: "Soft name, hard eliminations.",
      image: playerTeddy,
      stats: { kd: 3.3, kills: 2050, mpMatches: 12, brMatches: 9 },
    },
  ];

  const competitions = [
    // 1st Place
    {
      name: "Youngblood S1 Tournament 2022",
      placement: "1st Place",
      description:
        "Our first tournament, our first win. Proved that war doesn't determine who is right, only who is left.",
      image: compYoungblood,
    },
    {
      name: "Trinity Showdown 2026",
      placement: "1st Place",
      description:
        "Dominated the 5v5 Rotaract championship with tactical supremacy.",
      image: compTrinity,
    },
    {
      name: "RUIZ G v2.0 2023 E-Gaming Competition",
      placement: "1st Place",
      description: "Claimed champions of BR Squad showdown.",
      image: compRuiz,
    },
    {
      name: "ACIES Season 03 2024",
      placement: "1st Place",
      description:
        "Champions of the season with tactical excellence and flawless execution.",
      image: compAcies,
    },
    {
      name: "Last Breath Arena 2025 (Professor - Solo)",
      placement: "1st Place",
      description:
        "Professor claimed victory in the intense duel masters tournament.",
      image: compProfessorDuel,
    },
    // 2nd Place
    {
      name: "IUEC 22 5v5 Championship",
      placement: "2nd Place",
      description:
        "Secured runners-up position in the Inter-University eSports Championship.",
      image: compIuec,
    },
    {
      name: "Eclipse Playoffs 2025",
      placement: "2nd Place",
      description:
        "Fought through intense playoffs to claim runners-up in the tournament.",
      image: compEclipse,
    },
    // 3rd Place
    {
      name: "IUEC 22 Solo BR Championship (Dante - Solo)",
      placement: "3rd Place",
      description:
        "Individual achievement by Dante in the Inter-University championship tournament.",
      image: compIuecDante,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <img
            src={teamLogo}
            alt="Team Hackz Logo"
            className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 animate-glow-pulse"
          />

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-glow-red">
            TEAM HACKZ
          </h1>

          <p className="text-3xl md:text-4xl font-semibold text-primary mb-8 text-glow-red">
            Precision. Power. Domination.
          </p>

          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Team Hackz is a Call of Duty: Mobile team from Mora Esports started
            in 2021.
            <br />
            We live to compete, and we dominate every match we enter.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 px-4 bg-gradient-to-b from-background to-background/95"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow-blue animate-slide-up">
            THE TEAM
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Meet the warriors behind the wins
          </p>

          {/* Leadership */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Leadership
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leaders.map((leader) => (
                <PlayerCard key={leader.name} {...leader} isLeader />
              ))}
            </div>
          </div>

          {/* Players Grid */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">
              Elite Squad
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {players.map((player) => (
                <PlayerCard key={player.name} {...player} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section
        id="competitions"
        className="py-20 px-4 bg-gradient-to-b from-background/95 to-background"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow-red animate-slide-up">
            TOURNAMENTS & ACHIEVEMENTS
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Our legacy of victory
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {competitions.map((comp) => (
              <CompetitionCard key={comp.name} {...comp} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights Section */}
      <section
        id="highlights"
        className="py-20 px-4 bg-gradient-to-b from-background to-background/95"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow-purple animate-slide-up">
            HIGHLIGHTS
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Watch our best moments in action
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 glow-red">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/9vOZFmRHujc?start=592"
                  title="Team Hackz Highlight 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-secondary/30 hover:border-secondary transition-all duration-300 glow-blue">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/eAhQtqKDJdA?start=1325"
                  title="Team Hackz Highlight 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-accent/30 hover:border-accent transition-all duration-300 glow-purple">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/wXAQ57sSza4?start=22496"
                  title="Team Hackz Highlight 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section - Hidden for now
      <section id="recruitment" className="py-20 px-4 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow-blue animate-slide-up">
            JOIN TEAM HACKZ
          </h2>

          <p className="text-center text-foreground/90 mb-12 text-lg leading-relaxed">
            Think you've got what it takes to roll with the elite? Team Hackz is recruiting new
            talent. We're looking for sharpshooters, tacticians, and aggressive playmakers ready
            to rise in the CODM ranks.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Player Name *
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border focus:border-primary"
                placeholder="Your in-game name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Discord / Email *
              </label>
              <Input
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="bg-card border-border focus:border-primary"
                placeholder="your.discord#0000 or email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Game ID *
              </label>
              <Input
                required
                value={formData.gameId}
                onChange={(e) => setFormData({ ...formData, gameId: e.target.value })}
                className="bg-card border-border focus:border-primary"
                placeholder="Your CODM Player ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Preferred Role *
              </label>
              <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                <SelectTrigger className="bg-card border-border focus:border-primary">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sniper">Sniper</SelectItem>
                  <SelectItem value="rusher">Rusher</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="leader">Leader</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg glow-red transition-all hover:scale-105"
            >
              APPLY TO JOIN
            </Button>
          </form>
        </div>
      </section>
      */}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Team Hackz. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
