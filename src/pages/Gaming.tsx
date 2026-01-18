import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Zap, Target, Lightbulb, Timer, Trophy, ArrowRight, Play } from "lucide-react";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import FloatingOrbs from "@/components/FloatingOrbs";

const cognitiveDomains = [
  {
    icon: Zap,
    title: "Speed",
    tagline: "Reaction in milliseconds",
    description: "Training the mind to respond faster than conscious thought. Where instinct meets precision.",
    color: "crimson",
    athleteConnection: "The starting block. That split-second before the gun fires."
  },
  {
    icon: Target,
    title: "Focus",
    tagline: "Undivided attention",
    description: "Games that demand absolute presence. One distraction, one failure. Pure concentration.",
    color: "electric",
    athleteConnection: "110m hurdles. 10 barriers. Zero room for wandering thoughts."
  },
  {
    icon: Brain,
    title: "Memory",
    tagline: "Pattern recognition",
    description: "Retaining, recalling, connecting. Building mental architectures that expand capacity.",
    color: "violet",
    athleteConnection: "Remembering every stride pattern, every muscle memory."
  },
  {
    icon: Lightbulb,
    title: "Logic",
    tagline: "Strategic reasoning",
    description: "Problem-solving under pressure. Finding the path when there seems to be none.",
    color: "emerald",
    athleteConnection: "Calculating the approach. Adjusting mid-flight."
  },
];

const gameLineup = [
  {
    title: "NeuroSprint",
    status: "Prototype",
    domain: "Speed",
    description: "High-velocity micro-challenges that sharpen reaction time under pressure. Inspired by the explosive start of a sprint race.",
  },
  {
    title: "Echo Maze",
    status: "In Development",
    domain: "Memory",
    description: "Pattern-based navigation that trains recall through spatial awareness and sequential memory.",
  },
  {
    title: "Signal Forge",
    status: "Concept",
    domain: "Logic",
    description: "Strategic puzzles where every decision cascades. Think three moves ahead or fall behind.",
  },
  {
    title: "Flowline",
    status: "Prototype",
    domain: "Focus",
    description: "Breath-paced interactions that reward sustained attention and calm under complexity.",
  },
];

const philosophy = [
  {
    number: "01",
    title: "Games as Training",
    description: "Not entertainment. Not escapism. Cognitive games are deliberate practice for the mind—the same way track workouts train the body."
  },
  {
    number: "02",
    title: "Athlete's Mindset",
    description: "From 110m hurdles to game design: the discipline of showing up, failing forward, and measuring progress in increments."
  },
  {
    number: "03",
    title: "Intersection Design",
    description: "Building at the crossroads of sport psychology, cognitive science, and game mechanics. Where no single discipline is enough."
  },
];

const Gaming = () => {
  return (
    <>
      <FilmGrain />
      <FloatingOrbs />
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-crimson/10 blur-[100px]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-electric/10 blur-[80px]"
            />
          </div>

          <div className="max-w-5xl mx-auto px-6 py-32 relative z-10 text-center">
            <FadeInSection>
              <span className="text-[10px] tracking-[0.4em] uppercase text-crimson mb-8 block">
                Cognitive Game Design
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[0.9] mb-8">
                Building Games
                <span className="block text-gradient-crimson">for the Mind</span>
              </h1>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
                At the intersection of speed, focus, memory, and logic—games designed 
                not to pass time, but to sharpen it. An athlete's discipline applied 
                to cognitive training.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("domains")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-crimson text-background text-xs tracking-[0.2em] uppercase hover:bg-crimson/90 transition-colors"
              >
                <Play className="w-4 h-4" />
                Explore the Domains
              </motion.button>
            </FadeInSection>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-16 bg-gradient-to-b from-crimson to-transparent"
            />
          </motion.div>
        </section>

        {/* The Four Domains */}
        <section id="domains" className="relative py-32 bg-card overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeInSection>
              <div className="text-center mb-20">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 block">
                  The Framework
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                  Four Domains of Cognitive Gaming
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cognitiveDomains.map((domain, i) => (
                <FadeInSection key={domain.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative p-10 border border-border bg-background/50 group hover:border-border transition-all duration-500"
                  >
                    {/* Corner Accent */}
                    <div className={`absolute top-0 left-0 w-16 h-px bg-${domain.color}/50`} />
                    <div className={`absolute top-0 left-0 h-16 w-px bg-${domain.color}/50`} />

                    <div className="flex items-start gap-6">
                      <div className={`w-14 h-14 flex items-center justify-center border border-border group-hover:border-${domain.color}/50 transition-colors`}>
                        <domain.icon className={`w-6 h-6 text-${domain.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <span className={`text-[10px] tracking-[0.3em] uppercase text-${domain.color} mb-2 block`}>
                          {domain.tagline}
                        </span>
                        <h3 className="text-2xl font-serif text-foreground mb-3">
                          {domain.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {domain.description}
                        </p>
                        
                        {/* Athlete Connection */}
                        <div className="pt-6 border-t border-border/50">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
                            From the Track:
                          </span>
                          <p className="text-sm text-foreground/70 italic mt-2">
                            "{domain.athleteConnection}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* The Connection - Athletics to Gaming */}
        <section className="relative py-32 bg-background overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <FadeInSection>
                <div>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-emerald mb-6 block">
                    The Origin
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 leading-tight">
                    From 110m Hurdles
                    <span className="text-gradient-emerald block">to Cognitive Design</span>
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      As a state-level athlete in hurdles and long jump, I learned that 
                      physical performance is only half the equation. The real battles 
                      are won in the mind—in focus, reaction time, pattern recognition.
                    </p>
                    <p>
                      Every hurdle demanded split-second calculations. Every jump required 
                      perfect timing. The track taught me that cognitive sharpness isn't 
                      optional—it's the difference between personal best and falling short.
                    </p>
                    <p className="text-foreground">
                      Now I build games that train these exact abilities. Not for athletes 
                      alone, but for anyone who believes their mind deserves the same 
                      deliberate practice as their body.
                    </p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/5] bg-card border border-border overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                      {/* Visual: Athletic to Digital */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="relative"
                      >
                        <Timer className="w-16 h-16 text-emerald/60 mb-8" />
                      </motion.div>
                      
                      <div className="text-center">
                        <div className="text-6xl font-display text-emerald/20 mb-2">110m</div>
                        <p className="text-sm text-muted-foreground tracking-widest uppercase">
                          Hurdles → Cognitive Games
                        </p>
                      </div>
                      
                      <div className="flex gap-8 mt-12">
                        <div className="text-center">
                          <div className="text-2xl font-display text-foreground">State</div>
                          <p className="text-xs text-muted-foreground mt-1">Level Athlete</p>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div className="text-center">
                          <div className="text-2xl font-display text-foreground">4</div>
                          <p className="text-xs text-muted-foreground mt-1">Domains</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Offset Border */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-emerald/30 -z-10" />
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Game Lineup */}
        <section className="relative py-32 bg-card overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 block">
                  The Games
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                  Current Lineup
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gameLineup.map((game, i) => (
                <FadeInSection key={game.title} delay={i * 0.1}>
                  <div className="p-8 border border-border bg-background/50 hover:border-crimson/30 transition-colors group">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-serif text-foreground group-hover:text-crimson transition-colors">
                        {game.title}
                      </h3>
                      <span className="text-[9px] tracking-[0.2em] uppercase text-crimson/70 px-3 py-1 border border-crimson/30">
                        {game.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {game.description}
                    </p>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      Domain: {game.domain}
                    </span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="relative py-32 bg-background overflow-hidden">
          <div className="max-w-5xl mx-auto px-6">
            <FadeInSection>
              <div className="text-center mb-20">
                <span className="text-[10px] tracking-[0.4em] uppercase text-violet mb-4 block">
                  Design Philosophy
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                  How I Build
                </h2>
              </div>
            </FadeInSection>

            <div className="space-y-0 border-t border-border">
              {philosophy.map((item, i) => (
                <FadeInSection key={item.number} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="py-12 border-b border-border group cursor-default"
                  >
                    <div className="flex items-start gap-8">
                      <span className="text-4xl font-display text-muted-foreground/30 group-hover:text-violet transition-colors">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-violet transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-card overflow-hidden">
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-crimson/5 blur-[120px]"
          />

          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <FadeInSection>
              <Trophy className="w-12 h-12 text-crimson/40 mx-auto mb-8" />
              
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Interested in Cognitive Gaming?
              </h2>
              
              <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
                Whether you're curious about the games or want to collaborate on 
                cognitive training tools, I'd love to connect.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-crimson text-crimson text-xs tracking-[0.2em] uppercase hover:bg-crimson hover:text-background transition-all"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Gaming;
