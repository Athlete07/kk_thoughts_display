import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

const About = () => {
  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-24"
          >
            <p className="text-muted-foreground text-sm font-light mb-12 text-center">
              About
            </p>
            
            <h1 className="text-2xl md:text-4xl font-serif text-foreground leading-relaxed text-center mb-12">
              Some people build things. Some write verses.
              <br className="hidden md:block" />
              I do both — because one without the other feels incomplete.
            </h1>
          </motion.div>

          {/* The Verses */}
          <FadeInSection>
            <div className="space-y-8 mb-24">
              <p className="text-muted-foreground font-light leading-relaxed">
                It started with devotion. Not the loud kind — the quiet kind. The kind where
                you sit with a thought about something larger than yourself, and the only honest
                response is a verse.
              </p>

              <p className="text-muted-foreground font-light leading-relaxed">
                That's what the bhajans are. Offerings shaped into sound. Each one written slowly,
                released only when it feels ready. Not content — conviction.
              </p>

              <p className="text-foreground font-light leading-relaxed">
                I write because some things only make sense when they're sung.
              </p>
            </div>
          </FadeInSection>

          {/* The Games */}
          <FadeInSection delay={0.1}>
            <div className="space-y-8 mb-24">
              <p className="text-muted-foreground font-light leading-relaxed">
                Then came a different question — how do we sharpen the mind without making it
                feel like work? Not through lectures. Through play. Through presence, instinct, flow.
              </p>

              <p className="text-muted-foreground font-light leading-relaxed">
                That's BoltFocus. Cognitive games built for clean reads, instant response, and
                repeatable runs. No accounts, no tracking — just you and the signal.
              </p>

              <p className="text-foreground font-light leading-relaxed">
                I build because the best training doesn't announce itself.
              </p>
            </div>
          </FadeInSection>

          {/* The Work */}
          <FadeInSection delay={0.2}>
            <div className="space-y-8 mb-24">
              <p className="text-muted-foreground font-light leading-relaxed">
                By day, I work on software products. Understanding what people need,
                then shaping ideas into things that ship. It's mostly listening, clarifying,
                and cutting scope.
              </p>

              <p className="text-muted-foreground font-light leading-relaxed">
                But the craft of shipping — of making something that works, that people actually
                use — that bleeds into everything else I do.
              </p>
            </div>
          </FadeInSection>

          {/* Photo */}
          <FadeInSection delay={0.3}>
            <div className="mb-24">
              <div className="aspect-[3/4] max-w-xs mx-auto overflow-hidden">
                <img 
                  src="/krishna.png" 
                  className="w-full h-full object-cover grayscale" 
                  alt="Krishna Kumar" 
                />
              </div>
              <p className="text-center mt-6 font-serif text-foreground">Krishna Kumar</p>
              <p className="text-center mt-2 text-xs text-muted-foreground tracking-widest">
                Somewhere, writing or building.
              </p>
            </div>
          </FadeInSection>

          {/* Closing */}
          <FadeInSection delay={0.4}>
            <div className="text-center pt-12 border-t border-border/30">
              <p className="text-muted-foreground font-light mb-8">
                If any of this resonates, I'd like to hear from you.
              </p>
              
              <Link
                to="/say-hello"
                className="text-[11px] tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors duration-500"
              >
                Say hello →
              </Link>
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
