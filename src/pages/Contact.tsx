import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

const Contact = () => {
  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="text-muted-foreground text-sm font-light mb-12">
              Say Hello
            </p>
            <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              I'd like to hear from you.
            </h1>
            <p className="text-muted-foreground font-light max-w-md mx-auto">
              Whether it's about shayari, games, technology, or something else 
              entirely—I read everything.
            </p>
          </motion.div>

          <FadeInSection>
            <div className="text-center mb-16">
              <a
                href="mailto:o0krissh0o@gmail.com"
                className="text-lg md:text-xl font-light text-foreground hover:text-muted-foreground transition-colors duration-500"
              >
                o0krissh0o@gmail.com
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                I usually respond within a day or two.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="pt-16 border-t border-border/30">
              <p className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-8">
                Elsewhere
              </p>
              <div className="flex justify-center gap-12">
                <a
                  href="https://www.linkedin.com/in/krishnakumaryadlapalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/krishnakumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
                >
                  X
                </a>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="mt-24 text-center">
              <p className="text-sm text-muted-foreground font-light">
                Based in Bangalore, India.
              </p>
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
