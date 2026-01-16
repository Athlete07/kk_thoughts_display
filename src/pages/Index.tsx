import { Link } from "react-router-dom";
import { ChevronDown, Quote } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import DecisionPulse from "@/components/DecisionPulse";
import DisciplineCard from "@/components/DisciplineCard";
import FadeInSection from "@/components/FadeInSection";

const disciplineCards = [
  {
    number: "01",
    title: "The Start Line",
    description:
      'In the <strong class="text-foreground">110m Hurdles</strong>, the race is won before the gun goes off. It is about visualization and mental rehearsal. I apply this same preparation to every project I touch.',
  },
  {
    number: "02",
    title: "The Flight",
    description:
      'In <strong class="text-foreground">Long Jump</strong>, you must trust your momentum to carry you into the unknown. Innovation requires that same leap of faith—backed by thousands of hours of training.',
  },
  {
    number: "03",
    title: "The Finish",
    description:
      "Discipline is not about motivation. It is about doing what is required, even when the stadium is empty. That is the standard I hold for myself.",
  },
];

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <FilmGrain />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <header className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <HeroCanvas />

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-[50vh] gradient-fade-up z-10" />

          <div className="max-w-4xl w-full relative z-20 text-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-3 justify-center">
                <span className="w-1 h-1 bg-foreground rounded-full" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-sans">
                  Krishna Kumar • Discipline in Motion
                </span>
                <span className="w-1 h-1 bg-foreground rounded-full" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8 text-foreground text-balance"
            >
              Design the moment.
              <br />
              <span className="italic">Deliver</span> the leap.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
            >
              Exploring the frontiers where athletic discipline meets cognitive
              science. I build systems—for the mind, for the body, and for the
              enterprise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.3em] uppercase bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                The Story
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.3em] uppercase border border-foreground/30 text-foreground hover:border-foreground hover:text-foreground transition-colors"
              >
                Create Together
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
              className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              Precision • Velocity • Trust
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
              className="mt-16"
            >
              <button
                onClick={() => scrollToSection("passion")}
                className="group inline-flex flex-col items-center gap-3 text-xs tracking-[0.3em] uppercase text-foreground/50 hover:text-foreground transition-colors"
              >
                Explore
                <ChevronDown className="group-hover:translate-y-2 transition-transform duration-500" />
              </button>
            </motion.div>
          </div>
        </header>

        {/* COGNITIVE GAMING SECTION */}
        <section id="passion" className="py-32 relative bg-background">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <FadeInSection className="order-2 md:order-1 relative">
              <DecisionPulse />
              <div className="text-center mt-8">
                <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  Fig 1. The Moment of Decision
                </p>
              </div>
            </FadeInSection>

            <FadeInSection className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
                The Gym for the Mind.
              </h2>
              <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
                <p>
                  We spend hours training our bodies, but how often do we train
                  our decision-making?
                </p>
                <p>
                  <strong className="text-foreground">Cognitive Gaming</strong>{" "}
                  is not about high scores. It is about understanding how you
                  think under pressure. It is a safe space to fail, to adapt,
                  and to sharpen the most important tool you possess: your mind.
                </p>
                <p>
                  I am passionate about building these digital playgrounds
                  because I believe that if we can measure intuition, we can
                  improve it. This is for the student, the athlete, the
                  leader—anyone who wants to understand their own potential.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* DISCIPLINE SECTION */}
        <section
          id="discipline"
          className="py-32 bg-card relative overflow-hidden"
        >
          {/* Background Texture */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-foreground/5 to-transparent pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <FadeInSection className="text-center mb-16">
              <Quote className="w-8 h-8 text-foreground/20 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                "The hurdle is not an obstacle.
                <br /> It is a rhythm."
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {disciplineCards.map((card, index) => (
                <DisciplineCard
                  key={card.number}
                  {...card}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ARCHITECT SECTION */}
        <section id="work" className="py-32 bg-background relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeInSection>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
                Professional Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
                Strategist of Chaos.
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
                In the corporate world, I work as an architect of resilience.
                Using frameworks like{" "}
                <strong className="text-foreground">ServiceNow</strong> and{" "}
                <strong className="text-foreground">Agile</strong>, I help
                organizations find clarity in complexity.
              </p>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                But titles like "Product Manager" or "Consultant" are just
                labels. My true role is to bring{" "}
                <strong className="text-foreground">structure to vision</strong>
                . To take a chaotic problem—whether it's a regulatory risk or a
                product roadmap—and design a path forward.
              </p>
            </FadeInSection>

            <FadeInSection className="mt-20">
              <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
            </FadeInSection>
          </div>
        </section>

        {/* ABOUT TEASER SECTION */}
        <section className="py-32 bg-card border-t border-border/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* IMAGE */}
              <FadeInSection className="relative group">
                <Link to="/about">
                  <div className="absolute -inset-4 border border-border/30 scale-95 group-hover:scale-100 transition-transform duration-500" />
                  <div className="aspect-[3/4] overflow-hidden bg-background relative">
                    <img
                      src="/krishna.png"
                      className="w-full h-full object-cover noir-photo"
                      alt="Krishna Kumar Yadlapalli"
                    />
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-background to-transparent w-full">
                      <span className="text-foreground font-serif italic text-lg">
                        Krishna Kumar Yadlapalli
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeInSection>

              {/* TEXT */}
              <FadeInSection>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
                  About The Man
                </span>
                <h2 className="text-4xl font-serif text-foreground mb-8">
                  More Than The Sum of Parts.
                </h2>
                <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">
                  Behind the strategies and the systems is a simple belief:{" "}
                  <strong className="text-foreground">
                    Excellence is a habit.
                  </strong>
                </p>
                <p className="text-muted-foreground font-light text-lg mb-10 leading-relaxed">
                  Whether I am analyzing a risk portfolio or training for a long
                  jump, the internal monologue is identical. Discover the
                  journey that shaped this philosophy.
                </p>
                <Link
                  to="/about"
                  className="text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors text-sm tracking-widest uppercase"
                >
                  Read Full Story
                </Link>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;