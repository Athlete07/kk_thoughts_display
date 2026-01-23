import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

const experiencePillars = [
  {
    title: "Presence",
    description: "The room fades. The signal is all you feel.",
  },
  {
    title: "Instinct",
    description: "Decisions land clean and immediate, no hesitation.",
  },
  {
    title: "Flow",
    description: "Momentum without friction. The pace stays locked to you.",
  },
  {
    title: "Precision",
    description: "Every input matters. Tight control, crisp feedback.",
  },
  {
    title: "Real-Time Response",
    description: "No lag in the loop. Your timing is the game.",
  },
];

const designPrinciples = [
  {
    title: "Adaptive Pacing",
    description: "Challenge speed shifts with your rhythm to keep the zone intact.",
  },
  {
    title: "Real-Time AI Pacing",
    description: "Difficulty tunes in milliseconds to match your run.",
  },
  {
    title: "Precision Mechanics",
    description: "Split-second timing with instant feedback and clean control.",
  },
  {
    title: "Flow-Focused Design",
    description: "Short, intense sessions built for full presence.",
  },
  {
    title: "Classic Mechanics",
    description: "Pattern lanes, signal focus, reflex loops—pure play.",
  },
];

const gameLineup = [
  {
    title: "NeuroSprint",
    status: "Prototype",
    domain: "Instinct",
  },
  {
    title: "Echo Maze",
    status: "In Development",
    domain: "Presence",
  },
  {
    title: "Signal Forge",
    status: "Concept",
    domain: "Precision",
  },
  {
    title: "Flowline",
    status: "Prototype",
    domain: "Flow",
  },
];

const Gaming = () => {
  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="relative">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeInSection>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-muted-foreground text-sm font-light mb-8"
              >
                Games
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8"
              >
                Presence. Instinct. Flow.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-muted-foreground/80 font-light max-w-lg mx-auto leading-relaxed"
              >
                I'm building BoltFocus at boltfocus.io — a fast, game-native arena built for clean reads,
                instant response, and repeatable runs.
              </motion.p>

              <div className="mt-8 flex items-center justify-center gap-6 text-[11px] tracking-[0.2em] uppercase">
                <a
                  href="https://www.boltfocus.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors duration-500"
                >
                  Play at boltfocus.io →
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Experience Pillars */}
        <section className="py-32 md:py-40">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInSection>
              <div className="text-center mb-20">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-6">
                  The Experience
                </span>
                <p className="text-lg text-muted-foreground font-light max-w-md mx-auto">
                  Five pillars that define the feel of every BoltFocus game.
                </p>
              </div>
            </FadeInSection>

            <div className="space-y-px">
              {experiencePillars.map((pillar, i) => (
                <FadeInSection key={pillar.title} delay={i * 0.1}>
                  <div className="py-10 border-b border-border/30 group">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
                      <h3 className="font-serif text-xl text-foreground md:w-32 flex-shrink-0">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground font-light leading-relaxed flex-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* The Feel */}
        <section className="py-32 md:py-40 bg-card/30">
          <div className="max-w-3xl mx-auto px-6">
            <FadeInSection>
              <div className="text-center">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-12">
                  The Feel
                </span>
                
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Designed for presence, instinct, and flow. Every detail is tuned for the experience.
                </p>
                
                <p className="text-muted-foreground/60 font-light leading-relaxed">
                  Adaptive pacing, calibrated opponents, and classic mechanics—felt, not explained.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Why BoltFocus Works */}
        <section className="py-32 md:py-40">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-6">
                  Why BoltFocus Works
                </span>
                <p className="text-lg text-muted-foreground font-light">
                  Designed for presence, instinct, and flow. Every detail tuned for the experience.
                </p>
              </div>
            </FadeInSection>

            <div className="space-y-px">
              {designPrinciples.map((principle, i) => (
                <FadeInSection key={principle.title} delay={i * 0.1}>
                  <div className="py-10 border-b border-border/30 group">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
                      <h3 className="font-serif text-xl text-foreground md:w-48 flex-shrink-0">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground font-light leading-relaxed flex-1">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Game Lineup */}
        <section className="py-32 md:py-40">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-6">
                  Current Lineup
                </span>
                <p className="text-lg text-muted-foreground font-light">
                  Fast, focused, and ready to drop in.
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30">
              {gameLineup.map((game, i) => (
                <FadeInSection key={game.title} delay={i * 0.1}>
                  <div className="bg-background p-10 group">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-serif text-lg text-foreground">
                        {game.title}
                      </h3>
                      <span className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground/50">
                        {game.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground/60 tracking-wide">
                      {game.domain}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-32 md:py-40 bg-card/30">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeInSection>
              <div className="text-center mb-10">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-6">
                  Privacy First
                </span>
                <p className="text-muted-foreground font-light">
                  Your data stays on your device. No accounts, no tracking, no selling.
                </p>
              </div>

              <div className="text-center mb-12">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-6">
                  Always Free
                </span>
                <p className="text-muted-foreground font-light">
                  No paywalls. No premium tiers. Pure gameplay, always.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-[0.2em] uppercase text-muted-foreground/70 mb-10">
                <span>No Accounts</span>
                <span>No Downloads</span>
                <span>Instant Access</span>
                <span>Privacy First</span>
                <span>Always Free</span>
              </div>

              <div className="text-muted-foreground/70 text-sm mb-8">
                Trusted by players worldwide.
              </div>

              <a
                href="https://www.boltfocus.io/"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors duration-500"
              >
                Play Now →
              </a>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Gaming;
