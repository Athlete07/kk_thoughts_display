import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

const cognitiveDomains = [
  {
    title: "Speed",
    description: "The gap between stimulus and response. Training the mind to move before doubt arrives.",
  },
  {
    title: "Focus",
    description: "One thing, held completely. Games that ask for your full presence—nothing less.",
  },
  {
    title: "Memory",
    description: "Patterns recognized, connections made. Building the architecture of recall.",
  },
  {
    title: "Logic",
    description: "Finding paths where none seem to exist. The quiet confidence of strategic thought.",
  },
];

const gameLineup = [
  {
    title: "NeuroSprint",
    status: "Prototype",
    domain: "Speed",
  },
  {
    title: "Echo Maze",
    status: "In Development",
    domain: "Memory",
  },
  {
    title: "Signal Forge",
    status: "Concept",
    domain: "Logic",
  },
  {
    title: "Flowline",
    status: "Prototype",
    domain: "Focus",
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
                What if play was practice?
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8"
              >
                Cognitive Games
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-muted-foreground/80 font-light max-w-lg mx-auto leading-relaxed"
              >
                I build games at the intersection of speed, focus, memory, and logic. 
                Not to pass time—to sharpen it.
              </motion.p>
            </FadeInSection>
          </div>
        </section>

        {/* The Four Domains */}
        <section className="py-32 md:py-40">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInSection>
              <div className="text-center mb-20">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-6">
                  The Framework
                </span>
                <p className="text-lg text-muted-foreground font-light max-w-md mx-auto">
                  Four domains of cognitive training. Each game lives somewhere in this space.
                </p>
              </div>
            </FadeInSection>

            <div className="space-y-px">
              {cognitiveDomains.map((domain, i) => (
                <FadeInSection key={domain.title} delay={i * 0.1}>
                  <div className="py-10 border-b border-border/30 group">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
                      <h3 className="font-serif text-xl text-foreground md:w-32 flex-shrink-0">
                        {domain.title}
                      </h3>
                      <p className="text-muted-foreground font-light leading-relaxed flex-1">
                        {domain.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* The Why */}
        <section className="py-32 md:py-40 bg-card/30">
          <div className="max-w-3xl mx-auto px-6">
            <FadeInSection>
              <div className="text-center">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-12">
                  The Origin
                </span>
                
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  I've always believed that discipline transfers. The focus demanded 
                  in one arena sharpens performance in another.
                </p>
                
                <p className="text-muted-foreground/60 font-light leading-relaxed">
                  These games come from that belief—that with deliberate practice, 
                  the mind can become faster, clearer, sharper. Not as entertainment, 
                  but as training.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Game Lineup */}
        <section className="py-32 md:py-40">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-6">
                  Current Work
                </span>
                <p className="text-lg text-muted-foreground font-light">
                  What I'm building, testing, imagining.
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

        {/* CTA */}
        <section className="py-32 md:py-40 bg-card/30">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeInSection>
              <p className="text-muted-foreground font-light mb-10">
                Interested in cognitive gaming or collaboration?
              </p>
              
              <Link
                to="/contact"
                className="text-[11px] tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors duration-500"
              >
                Let's talk →
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
