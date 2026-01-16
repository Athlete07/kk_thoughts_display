import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeGame, setActiveGame] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const games = [
    { name: "REACTION", time: "187ms", desc: "Processing speed that separates good from elite" },
    { name: "MEMORY", time: "32", desc: "Patterns recognized in milliseconds" },
    { name: "FOCUS", time: "∞", desc: "Sustained attention under pressure" },
    { name: "DECISION", time: "<0.3s", desc: "Choices made before others see options" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGame((prev) => (prev + 1) % games.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="overflow-hidden bg-background">
        {/* HERO - Gaming First Impression */}
        <section 
          ref={heroRef}
          className="h-screen relative flex items-center justify-center overflow-hidden"
        >
          {/* Animated grid background */}
          <div className="absolute inset-0">
            <motion.div style={{ y: bgY }} className="absolute inset-0">
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                    linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
                  `,
                  backgroundSize: '60px 60px'
                }}
              />
            </motion.div>
          </div>

          {/* Floating nodes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/40"
                style={{
                  left: `${10 + (i * 8)}%`,
                  top: `${15 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + (i * 0.3),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Main hero content */}
          <motion.div 
            style={{ scale }}
            className="relative z-10 text-center px-6 max-w-6xl"
          >
            {/* Micro label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
                <span className="w-8 h-px bg-primary" />
                Cognitive Performance
                <span className="w-8 h-px bg-primary" />
              </span>
            </motion.div>

            {/* Main headline with glitch aesthetic */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="relative"
            >
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[15vw] md:text-[12vw] lg:text-[10vw] font-serif font-medium text-foreground leading-[0.85] tracking-tight"
                style={{ 
                  transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` 
                }}
              >
                GAME
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[15vw] md:text-[12vw] lg:text-[10vw] font-serif font-medium leading-[0.85] tracking-tight"
                style={{ 
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` 
                }}
              >
                <span className="text-muted-foreground/30">YOUR</span>{" "}
                <span className="text-primary">MIND</span>
              </motion.span>
            </motion.h1>

            {/* Rotating game metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-12 h-16 relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGame}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl md:text-5xl font-mono text-primary font-light">
                      {games[activeGame].time}
                    </span>
                    <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
                      {games[activeGame].name}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border border-foreground/20 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1 h-2 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2 - The Philosophy */}
        <section className="min-h-screen bg-card relative flex items-center py-32">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
              >
                <span className="text-primary text-[10px] tracking-[0.4em] uppercase mb-8 block">
                  Philosophy
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] mb-8">
                  The brain is the
                  <br />
                  <span className="text-primary">ultimate muscle.</span>
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-lg">
                  Athletes train their bodies for years. Surgeons sharpen their hands. 
                  But the mind—the command center of every decision, every reaction, 
                  every breakthrough—often goes untrained.
                </p>
                <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-lg mt-6">
                  <span className="text-foreground">I build games that change this.</span>
                </p>
              </motion.div>

              {/* Interactive brain visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative aspect-square max-w-md mx-auto"
              >
                {/* Concentric circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                    <motion.div
                      key={i}
                      className="absolute border border-foreground/10 rounded-full"
                      style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
                    />
                  ))}
                  {/* Center pulse */}
                  <motion.div
                    className="w-4 h-4 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Floating labels */}
                {[
                  { text: "SPEED", pos: "top-0 left-1/2 -translate-x-1/2" },
                  { text: "MEMORY", pos: "right-0 top-1/2 -translate-y-1/2" },
                  { text: "LOGIC", pos: "bottom-0 left-1/2 -translate-x-1/2" },
                  { text: "FOCUS", pos: "left-0 top-1/2 -translate-y-1/2" },
                ].map((item, i) => (
                  <motion.span
                    key={i}
                    className={`absolute ${item.pos} text-[9px] tracking-[0.3em] text-muted-foreground`}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {item.text}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3 - Game Categories */}
        <section className="py-32 bg-background relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-primary text-[10px] tracking-[0.4em] uppercase block mb-4">
                Training Grounds
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                Four pillars of cognitive power
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/20">
              {[
                {
                  icon: "⚡",
                  title: "Reaction Training",
                  desc: "Milliseconds matter. Train your neural pathways to fire faster than instinct.",
                  metric: "187ms avg",
                },
                {
                  icon: "🧠",
                  title: "Memory Systems",
                  desc: "Pattern recognition. Spatial recall. The architecture of remembering.",
                  metric: "32 patterns",
                },
                {
                  icon: "🎯",
                  title: "Focus Chambers",
                  desc: "Sustained attention in a world of distraction. Meditation meets competition.",
                  metric: "∞ duration",
                },
                {
                  icon: "⚖️",
                  title: "Decision Arenas",
                  desc: "Split-second choices under pressure. Strategy compressed into moments.",
                  metric: "<0.3s",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group bg-card p-12 md:p-16 relative overflow-hidden hover:bg-card/80 transition-all duration-500"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  </div>

                  <span className="text-4xl mb-8 block">{item.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-mono text-primary">{item.metric}</span>
                    <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                      Benchmark
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 - The Quote / Manifesto */}
        <section className="py-48 bg-card relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[40vw] font-serif text-foreground/[0.015] leading-none">
              ⌘
            </span>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <blockquote className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                "Everyone practices the body.
                <br />
                <span className="text-primary">Champions train the mind."</span>
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 - The Athlete Bridge */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-5"
              >
                <span className="text-primary text-[10px] tracking-[0.4em] uppercase mb-6 block">
                  The Bridge
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                  Where track meets
                  <br />
                  <span className="text-muted-foreground/50">technology</span>
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                  110m hurdles taught me something no book could: success lives in 
                  the space between stimulus and response. The games I build compress 
                  that space—training minds like athletics trains bodies.
                </p>
                <div className="flex gap-8 mt-10">
                  <div>
                    <span className="text-4xl font-serif text-foreground">10+</span>
                    <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-2">
                      Years Athletic
                    </p>
                  </div>
                  <div>
                    <span className="text-4xl font-serif text-primary">∞</span>
                    <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-2">
                      Games Built
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-7 relative"
              >
                <div className="relative">
                  {/* Main visual */}
                  <div className="aspect-video bg-card relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop"
                      alt="Athletic discipline"
                      className="w-full h-full object-cover noir-photo opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
                  </div>
                  {/* Overlay stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
                    <div className="flex justify-between text-[10px] tracking-widest uppercase text-muted-foreground">
                      <span>110m Hurdles</span>
                      <span>Long Jump</span>
                      <span>Decathlon Training</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - Live Metrics */}
        <section className="py-24 bg-card border-y border-border/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "< 200", unit: "ms", label: "Reaction Target" },
                { value: "99.2", unit: "%", label: "Accuracy Rate" },
                { value: "4.7", unit: "M", label: "Sessions Played" },
                { value: "38", unit: "sec", label: "Avg Focus Time" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-mono text-foreground font-light">
                      {stat.value}
                    </span>
                    <span className="text-lg text-primary">{stat.unit}</span>
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-3">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 - CTA */}
        <section className="py-48 bg-background relative overflow-hidden">
          {/* Ambient elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
            <motion.div
              className="absolute inset-0 border border-primary/10 rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-primary text-[10px] tracking-[0.4em] uppercase mb-8 block">
                Ready?
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-8 leading-tight">
                Train different.
                <br />
                <span className="text-primary">Think faster.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
                Whether you're building the next game, training for competition, 
                or just curious about cognitive performance—let's connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block px-12 py-5 bg-primary text-primary-foreground font-medium tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
                >
                  Start Training
                </Link>
                <Link
                  to="/about"
                  className="inline-block px-12 py-5 border border-foreground/20 text-foreground font-medium tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-colors"
                >
                  My Story
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
