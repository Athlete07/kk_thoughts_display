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
            
            <h1 className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed text-center mb-12">
              I write because some things refuse to stay unspoken. 
              I build because ideas deserve to become real.
            </h1>
          </motion.div>

          {/* The Story */}
          <FadeInSection>
            <div className="space-y-8 mb-24">
              <p className="text-muted-foreground font-light leading-relaxed">
                You know how some people find their voice early? I didn't. For the longest time, 
                I was just someone who read a lot, thought too much, and said very little.
              </p>
              
              <p className="text-muted-foreground font-light leading-relaxed">
                Then I discovered shayari. And suddenly, all those unsaid things had a home. 
                The format—compact, rhythmic, honest—felt like it was made for someone 
                who wanted to say everything in as few words as possible.
              </p>

              <p className="text-foreground font-light leading-relaxed">
                That's still true. I write shayari because brevity forces truth.
              </p>
            </div>
          </FadeInSection>

          {/* The Games */}
          <FadeInSection delay={0.1}>
            <div className="space-y-8 mb-24">
              <p className="text-muted-foreground font-light leading-relaxed">
                The games came later. I started thinking about how we train our minds—not 
                through lectures or books, but through play. Through repetition that doesn't 
                feel like work.
              </p>

              <p className="text-muted-foreground font-light leading-relaxed">
                So I started building. Games that ask for focus, reward speed, test memory, 
                demand logic. Nothing flashy. Just small, deliberate exercises for the mind.
              </p>

              <p className="text-foreground font-light leading-relaxed">
                It's slow work. But it feels right.
              </p>
            </div>
          </FadeInSection>

          {/* The Work */}
          <FadeInSection delay={0.2}>
            <div className="space-y-8 mb-24">
              <p className="text-muted-foreground font-light leading-relaxed">
                By day, I work on software products. Figuring out what should exist, 
                then helping make it real. It's less glamorous than it sounds—mostly 
                it's listening, clarifying, and cutting scope.
              </p>

              <p className="text-muted-foreground font-light leading-relaxed">
                But the craft of shipping—of making something that works, that people use—
                that bleeds into everything else I do.
              </p>
            </div>
          </FadeInSection>

          {/* Photo */}
          <FadeInSection delay={0.3}>
            <div className="mb-24">
              <div className="aspect-[3/4] max-w-xs mx-auto overflow-hidden">
                <img 
                  src="/krishna.png" 
                  className="w-full h-full object-cover grayscale opacity-80" 
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
