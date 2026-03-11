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
          {/* Photo first — lead with the person */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-20"
          >
            <div className="aspect-[3/4] max-w-xs mx-auto overflow-hidden mb-8">
              <img 
                src="/krishna.png" 
                className="w-full h-full object-cover grayscale" 
                alt="Krishna Kumar" 
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-serif text-foreground leading-relaxed text-center">
              Krishna Kumar
            </h1>
            <p className="text-center mt-3 text-sm text-muted-foreground font-light tracking-wide">
              Writer. Builder. Quiet observer of loud things.
            </p>
          </motion.div>

          {/* Who he is */}
          <FadeInSection>
            <div className="space-y-8 mb-24">
              <p className="text-muted-foreground font-light leading-relaxed">
                I grew up in a home where devotion was the background score — not performed, 
                just present. That stayed with me. Not as ritual, but as a way of paying attention 
                to things most people walk past.
              </p>

              <p className="text-muted-foreground font-light leading-relaxed">
                I read more than I spoke. I noticed more than I shared. And somewhere along 
                the way, I realized the things I cared about most — clarity, craft, honesty — 
                weren't things you could announce. You had to build them into the work.
              </p>

              <p className="text-foreground font-light leading-relaxed">
                So that's what I try to do.
              </p>
            </div>
          </FadeInSection>

          {/* What drives him */}
          <FadeInSection delay={0.1}>
            <div className="space-y-8 mb-24">
              <p className="text-muted-foreground font-light leading-relaxed">
                I write verses because devotion deserves better than silence. I build games 
                because the mind deserves better than noise. And I ship software because 
                ideas that stay ideas help no one.
              </p>

              <p className="text-muted-foreground font-light leading-relaxed">
                None of these are side projects. They're all the same instinct — take something 
                you feel deeply about, give it form, and put it where someone else can find it.
              </p>
            </div>
          </FadeInSection>

          {/* The human side */}
          <FadeInSection delay={0.2}>
            <div className="space-y-8 mb-24">
              <p className="text-muted-foreground font-light leading-relaxed">
                Outside of work, I'm probably reading something I won't finish, walking somewhere 
                without a destination, or sitting with a half-formed thought that might become 
                a verse by morning.
              </p>

              <p className="text-foreground font-light leading-relaxed">
                I don't have a grand philosophy. Just a quiet stubbornness about making things 
                that feel true.
              </p>
            </div>
          </FadeInSection>

          {/* Closing */}
          <FadeInSection delay={0.3}>
            <div className="text-center pt-12 border-t border-border/30">
              <p className="text-muted-foreground font-light mb-8">
                If something here resonated, I'd like to hear from you.
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
