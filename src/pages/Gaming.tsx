import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Gamepad2,
  Network,
  Sparkles,
  Target,
  Timer,
  Zap,
} from "lucide-react";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import FloatingOrbs from "@/components/FloatingOrbs";
import TypewriterText from "@/components/TypewriterText";

const gameLineup = [
  {
    title: "NeuroSprint",
    status: "Prototype",
    focus: "Attention + Reaction",
    desc: "High-velocity micro-challenges that sharpen focus and rhythm under pressure.",
  },
  {
    title: "Echo Maze",
    status: "In Progress",
    focus: "Memory + Spatial",
    desc: "A resonant labyrinth that trains recall through pattern, sound, and motion.",
  },
  {
    title: "Signal Forge",
    status: "Concept",
    focus: "Logic + Strategy",
    desc: "Resource puzzles where every move programs the world you play inside.",
  },
  {
    title: "Flowline",
    status: "Prototype",
    focus: "Calm + Regulation",
    desc: "Breath-paced interactions that reward clarity and steady decision-making.",
  },
];

const pillars = [
  {
    icon: Brain,
    title: "Cognition",
    desc: "Games that train working memory, attention, and adaptive thinking.",
  },
  {
    icon: Target,
    title: "Precision",
    desc: "Feedback loops built for skill growth, not empty dopamine.",
  },
  {
    icon: Timer,
    title: "Rhythm",
    desc: "Sessions designed for short bursts or deep focus, your choice.",
  },
  {
    icon: Sparkles,
    title: "Delight",
    desc: "Visuals, audio, and motion that feel alive and intentional.",
  },
];

const systemLoop = [
  {
    title: "Sense",
    desc: "Listen to player signals and in-game behavior.",
    icon: Network,
  },
  {
    title: "Challenge",
    desc: "Present adaptive tasks tuned to the moment.",
    icon: Zap,
  },
  {
    title: "Adapt",
    desc: "Balance difficulty and flow with smart pacing.",
    icon: Cpu,
  },
  {
    title: "Reflect",
    desc: "Show insights that help players understand growth.",
    icon: Brain,
  },
];

const Gaming = () => {
  return (
    <>
      <FilmGrain />
      <FloatingOrbs />
      <Navbar />

      <main className="relative">
        {/* HERO */}
        <header className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,201,75,0.12),_transparent_50%)]" />
          <div className="absolute bottom-0 left-0 w-full h-[40vh] gradient-fade-up z-10" />

          <div className="max-w-5xl w-full relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-8 flex items-center justify-center gap-4 text-primary"
            >
              <Gamepad2 className="w-10 h-10 animate-float" />
              <Brain className="w-12 h-12 animate-float" />
              <Sparkles className="w-10 h-10 animate-float" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-primary text-sm tracking-[0.4em] uppercase mb-6"
            >
              Cognitive Gaming Platform
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8 text-foreground"
            >
              I build games that <TypewriterText texts={["train focus", "shape memory", "spark flow"]} className="text-primary" />
              <br />
              <span className="italic font-quote">and feel like play, not homework.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
            >
              A multi-game platform that blends cognitive science, game design, and clean technology.
              Every experience is tuned for attention, joy, and real-world carryover.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs tracking-[0.3em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
              >
                Request a Demo
              </Link>
              <button
                type="button"
                onClick={() => document.getElementById("lineup")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.3em] uppercase border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                See the Games
              </button>
            </motion.div>
          </div>
        </header>

        {/* MANIFESTO */}
        <section className="py-24 bg-card border-y border-border/20">
          <FadeInSection className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary text-[10px] tracking-[0.4em] uppercase mb-6">Manifesto</p>
            <p className="text-2xl md:text-4xl font-quote italic text-foreground leading-relaxed">
              "Games can be more than distraction. They can be training grounds for clarity,
              resilience, and a sharper self."
            </p>
            <p className="font-signature text-4xl text-primary/60 mt-8">Krishna Kumar</p>
          </FadeInSection>
        </section>

        {/* GAME LINEUP */}
        <section id="lineup" className="py-24 bg-background relative">
          <div className="max-w-6xl mx-auto px-6">
            <FadeInSection className="text-center mb-16">
              <span className="text-primary text-[10px] tracking-[0.4em] uppercase">Game Lineup</span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mt-4">
                A Growing Universe of Challenges
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gameLineup.map((game, index) => (
                <FadeInSection key={game.title} delay={index * 0.1}>
                  <div className="border border-border/30 bg-card/50 p-8 h-full group hover:border-primary/50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-2xl text-foreground">{game.title}</h3>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-primary">
                        {game.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">{game.desc}</p>
                    <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground/70">
                      <Target className="w-4 h-4 text-primary" />
                      {game.focus}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <FadeInSection className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">
                Designed for Mind + Momentum
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => (
                <FadeInSection key={pillar.title} delay={index * 0.1}>
                  <div className="border border-border/30 bg-background/40 p-6 h-full hover:border-primary/50 transition-colors">
                    <pillar.icon className="w-7 h-7 text-primary mb-4" />
                    <h3 className="font-serif text-lg text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM LOOP */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <FadeInSection className="text-center mb-16">
              <span className="text-primary text-[10px] tracking-[0.4em] uppercase">The Loop</span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mt-4">
                Sense. Challenge. Adapt. Reflect.
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {systemLoop.map((step, index) => (
                <FadeInSection key={step.title} delay={index * 0.1}>
                  <div className="border border-border/30 bg-card/50 p-6 h-full hover:border-primary/50 transition-colors">
                    <step.icon className="w-7 h-7 text-primary mb-4" />
                    <h3 className="font-serif text-lg text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card border-t border-border/20">
          <FadeInSection className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Want to shape the next generation of cognitive games?
            </h2>
            <p className="text-muted-foreground mb-10">
              I am building this platform with collaborators, researchers, and players who care about
              meaningful play. Let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-all"
            >
              Start a Conversation
            </Link>
          </FadeInSection>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Gaming;
