import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet/8 blur-[100px]"
        />
        <motion.div
          animate={{ 
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-crimson/6 blur-[80px]"
        />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] gradient-fade-up z-10" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-20">
        {/* Brand Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Identity Tags - More subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-12"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Shayari
            </span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Cognitive Games
            </span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Product
            </span>
          </motion.div>

          {/* Main Headline - Refined */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-8 leading-[1.1]"
          >
            Writing words,
            <span className="block text-gradient-violet">
              <TypewriterText 
                texts={["building games", "crafting products", "shaping ideas"]} 
                className="" 
              />
            </span>
          </motion.h1>

          {/* Tagline - Authentic */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed"
          >
            A shayar at heart. Building cognitive games at the intersection of 
            speed, focus, memory, and logic. Product person by profession.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/poetry"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-xs tracking-[0.2em] uppercase hover:bg-violet hover:text-white transition-all"
            >
              Read My Shayari
            </Link>
            <Link
              to="/gaming"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-crimson hover:text-crimson transition-colors"
            >
              Explore Games
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => document.getElementById("worlds")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase">Discover</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>
    </header>
  );
};

export default HeroSection;
