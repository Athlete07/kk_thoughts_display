import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import FadeInSection from "@/components/FadeInSection";

const Contact = () => {
  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-14"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block">
              Connect
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">
              Let’s make
              <br />
              the next move.
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl">
              One clear note is enough. No forms, no noise—just a direct line.
            </p>
          </motion.div>

          <FadeInSection>
            <div className="border border-border/30 bg-card/70 p-10">
              <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Email
                  </p>
                  <p className="text-2xl font-light text-foreground">
                    o0krissh0o@gmail.com
                  </p>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                    Share what you’re building, why it matters, and your timing.
                  </p>
                </div>
                <a
                  href="mailto:o0krissh0o@gmail.com?subject=Collaboration%20Inquiry"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.3em] uppercase bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  Write a Note
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <Mail size={14} className="text-primary" />
                Typical reply in 24–48 hours
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="border border-border/30 bg-background/60 p-8">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
                  Location
                </span>
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-lg font-light">
                    Bangalore, India
                  </span>
                </div>
              </div>
              <div className="border border-border/30 bg-background/60 p-8">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
                  Elsewhere
                </span>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest"
                  >
                    LinkedIn
                    <span className="text-[10px]">Open</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest"
                  >
                    Twitter
                    <span className="text-[10px]">Open</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="border border-border/30 bg-card/70 p-10 mt-10">
              <p className="font-quote italic text-xl text-foreground leading-relaxed">
                "The best conversations begin with genuine curiosity. I'm
                interested in ideas that challenge convention—whether in
                athletics, technology, or human potential."
              </p>
              <p className="font-signature text-3xl text-foreground/80 mt-6 -rotate-2">
                Krishna Kumar Yadlapalli
              </p>
            </div>
          </FadeInSection>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-background py-12 border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[10px] text-foreground/20">
            Designed with Intention. © 2025 Krishna Kumar Yadlapalli.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;