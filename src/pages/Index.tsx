import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="overflow-hidden">
        {/* HERO - Full Impact */}
        <section 
          ref={heroRef}
          className="h-screen relative flex items-center justify-center overflow-hidden"
        >
          {/* Dynamic gradient background */}
          <motion.div 
            style={{ y: bgY }}
            className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"
          />
          
          {/* Animated accent lines */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '200%', opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
              className="absolute top-1/3 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            />
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: '-200%', opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
              className="absolute top-2/3 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` 
              }}
            >
              <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-serif font-medium text-foreground leading-[0.9] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  KRISHNA
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-primary"
                >
                  KUMAR
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 text-muted-foreground text-lg md:text-xl tracking-[0.2em] uppercase"
            >
              Athlete • Strategist • Builder
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
            <motion.div 
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent origin-top"
            />
          </motion.div>
        </section>

        {/* SECTION 2 - The Statement */}
        <section className="min-h-screen bg-card flex items-center relative">
          <div className="max-w-7xl mx-auto px-6 py-32 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="lg:col-span-7"
              >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1]">
                  I don't believe in
                  <br />
                  <span className="text-muted-foreground/40">impossible.</span>
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="lg:col-span-5"
              >
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Every hurdle cleared. Every system built. Every limit pushed. 
                  It all starts with refusing to accept the word "no."
                </p>
                <div className="mt-8 h-px w-24 bg-primary" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3 - The Disciplines */}
        <section className="py-32 bg-background relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase">What I Do</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border/30">
              {[
                {
                  num: "01",
                  title: "Compete",
                  desc: "110m Hurdles. Long Jump. The track is where discipline becomes instinct.",
                  accent: "Athletics"
                },
                {
                  num: "02", 
                  title: "Build",
                  desc: "Cognitive games that train the mind like weights train the body.",
                  accent: "Technology"
                },
                {
                  num: "03",
                  title: "Lead",
                  desc: "Turning chaos into clarity. Strategy that moves organizations forward.",
                  accent: "Enterprise"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="group border-b md:border-b-0 md:border-r last:border-r-0 border-border/30 p-10 md:p-12 hover:bg-card/50 transition-colors duration-500"
                >
                  <span className="text-6xl font-serif text-foreground/10 group-hover:text-primary/30 transition-colors duration-500">
                    {item.num}
                  </span>
                  <h3 className="text-3xl font-serif text-foreground mt-6 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-light mb-6">
                    {item.desc}
                  </p>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-primary">
                    {item.accent}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 - The Quote */}
        <section className="py-48 bg-card relative overflow-hidden">
          {/* Large background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="text-[30vw] font-serif text-foreground/[0.02] leading-none">
              KK
            </span>
          </div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                "The hurdle is not an obstacle.
                <br />
                <span className="text-primary">It's a rhythm.</span>"
              </p>
            </motion.blockquote>
          </div>
        </section>

        {/* SECTION 5 - Stats */}
        <section className="py-32 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[
                { value: "10+", label: "Years of Training" },
                { value: "50+", label: "Projects Delivered" },
                { value: "∞", label: "Possibilities" },
                { value: "1", label: "Mission" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center py-8"
                >
                  <span className="text-5xl md:text-6xl font-serif text-foreground">
                    {stat.value}
                  </span>
                  <p className="text-muted-foreground text-sm mt-4 tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 - About Preview */}
        <section className="py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image/Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="aspect-square bg-background relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop"
                    alt="Athletic discipline"
                    className="w-full h-full object-cover noir-photo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/50" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/50" />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="text-primary text-sm tracking-[0.3em] uppercase mb-6 block">
                  The Story
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                  From the track to the boardroom.
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                  Two worlds that seem far apart. But they share the same truth: 
                  excellence isn't given. It's earned through relentless practice, 
                  strategic thinking, and the courage to fail forward.
                </p>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
                  This is my journey.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="text-foreground text-sm tracking-[0.2em] uppercase border-b border-foreground/30 pb-1 group-hover:border-primary group-hover:text-primary transition-colors">
                    Read More
                  </span>
                  <motion.span 
                    className="text-primary"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 7 - CTA */}
        <section className="py-48 bg-background relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-8 leading-tight">
                Let's create
                <br />
                <span className="text-primary">something bold.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
                Whether it's a new venture, a challenging problem, or just a conversation — 
                I'm always ready for what's next.
              </p>
              <Link
                to="/contact"
                className="inline-block px-16 py-6 bg-primary text-primary-foreground font-medium tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
              >
                Get in Touch
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