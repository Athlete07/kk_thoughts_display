import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <>
      <FilmGrain />
      <Navbar />

      <main ref={containerRef}>
        {/* HERO - The Manifesto */}
        <motion.section 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="h-screen flex items-center justify-center relative overflow-hidden fixed inset-0 z-0"
        >
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
          
          <div className="text-center px-6 relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-muted-foreground text-sm tracking-[0.4em] uppercase mb-12"
            >
              Krishna Kumar
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.1, 0, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground leading-[1.1]"
            >
              Think Different.
              <br />
              <span className="text-muted-foreground/60">Move Different.</span>
            </motion.h1>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-16 bg-gradient-to-b from-foreground/40 to-transparent"
            />
          </motion.div>
        </motion.section>

        {/* Spacer for fixed hero */}
        <div className="h-screen" />

        {/* SECTION 1 - The Single Word */}
        <section className="min-h-screen flex items-center justify-center bg-background relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5 }}
            className="text-center px-6"
          >
            <span className="text-[120px] md:text-[200px] lg:text-[280px] font-serif font-medium text-foreground/5 select-none leading-none">
              Why
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 text-muted-foreground text-center max-w-md px-6 text-lg font-light"
          >
            Most ask what. Few ask how.
            <br />
            <span className="text-foreground">The right question changes everything.</span>
          </motion.p>
        </section>

        {/* SECTION 2 - The Tension */}
        <section className="min-h-screen bg-card relative overflow-hidden">
          <div className="absolute inset-0 flex">
            <div className="flex-1 flex items-center justify-center border-r border-border/10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <span className="text-6xl md:text-8xl font-serif text-foreground/10">Mind</span>
              </motion.div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <span className="text-6xl md:text-8xl font-serif text-foreground/10">Body</span>
              </motion.div>
            </div>
          </div>
          
          {/* Center convergence */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center z-10"
            >
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto mb-8" />
              <span className="text-2xl md:text-3xl font-serif text-foreground">One System.</span>
              <div className="w-px h-32 bg-gradient-to-b from-primary via-primary to-transparent mx-auto mt-8" />
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 - The Numbers That Don't Speak */}
        <section className="py-40 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
            >
              {[
                { number: "0.13", unit: "sec", context: "The time between thought and action." },
                { number: "10K", unit: "hrs", context: "The myth. The reality is different." },
                { number: "∞", unit: "", context: "What you become when limits dissolve." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="mb-6">
                    <span className="text-6xl md:text-7xl font-serif text-foreground group-hover:text-primary transition-colors duration-500">
                      {item.number}
                    </span>
                    <span className="text-xl text-muted-foreground ml-2">{item.unit}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {item.context}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 - The Philosophy Statement */}
        <section className="py-48 bg-card relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight"
            >
              "The people who are crazy enough to think they can
              <span className="text-primary italic"> train the untrained</span>
              —are the ones who do."
            </motion.blockquote>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16"
            >
              <span className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
                — On cognitive gaming
              </span>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 - The Three Words */}
        <section className="py-40 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-0"
            >
              {[
                { word: "Prepare.", subtext: "Like the race is tomorrow." },
                { word: "Execute.", subtext: "Like there's no tomorrow." },
                { word: "Reflect.", subtext: "Like time is infinite." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="py-16 md:py-24 border-b md:border-b-0 md:border-r last:border-0 border-border/20 text-center group cursor-default"
                >
                  <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.word}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.subtext}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 - The Identity */}
        <section className="py-48 bg-card border-t border-border/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-[4/5] bg-background relative overflow-hidden">
                  {/* Abstract representation instead of photo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Concentric circles - representing focus */}
                      <div className="w-64 h-64 md:w-80 md:h-80 border border-foreground/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <div className="w-48 h-48 md:w-60 md:h-60 border border-foreground/10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <div className="w-32 h-32 md:w-40 md:h-40 border border-foreground/15 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <div className="w-16 h-16 md:w-20 md:h-20 border border-foreground/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <div className="w-3 h-3 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-px bg-foreground/20" />
                  <div className="absolute top-0 left-0 w-px h-16 bg-foreground/20" />
                  <div className="absolute bottom-0 right-0 w-16 h-px bg-foreground/20" />
                  <div className="absolute bottom-0 right-0 w-px h-16 bg-foreground/20" />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-8">
                  Not a consultant. Not an athlete. Not a builder.
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-10 leading-tight">
                  A student of 
                  <span className="italic text-primary"> performance.</span>
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-12">
                  Some see categories. Boxes to check. Roles to fill.
                  <br /><br />
                  I see one question asked in a thousand ways:
                  <br />
                  <span className="text-foreground">How do we become what we're capable of becoming?</span>
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-4 text-foreground text-sm tracking-[0.2em] uppercase group"
                >
                  <span className="border-b border-foreground/40 pb-1 group-hover:border-foreground transition-colors">
                    The full story
                  </span>
                  <span className="w-8 h-px bg-foreground/40 group-hover:w-12 group-hover:bg-foreground transition-all duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 7 - The CTA */}
        <section className="py-48 bg-background relative">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-muted-foreground text-lg mb-8 font-light">
                Ready to think differently?
              </p>
              <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-16">
                Let's build something
                <br />
                <span className="text-primary italic">extraordinary.</span>
              </h2>
              <Link
                to="/contact"
                className="inline-block px-12 py-5 border border-foreground/20 text-foreground text-sm tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
              >
                Start a conversation
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;