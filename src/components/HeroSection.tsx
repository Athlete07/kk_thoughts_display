import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet/10 blur-[120px]"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-electric/10 blur-[100px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-crimson/5 blur-[150px]"
        />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] gradient-fade-up z-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        {/* Brand Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Identity Tags */}
          <div className="flex items-center justify-center gap-8 mb-12">
            {[
              { label: "Poet", color: "violet" },
              { label: "Gamer", color: "crimson" },
              { label: "Athlete", color: "emerald" },
              { label: "Technologist", color: "electric" },
            ].map((tag, i) => (
              <motion.span
                key={tag.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`text-[10px] tracking-[0.3em] uppercase text-${tag.color}`}
              >
                {tag.label}
              </motion.span>
            ))}
          </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="headline-massive font-serif text-foreground mb-8"
          >
            I create
            <span className="block text-gradient-violet">
              <TypewriterText 
                texts={["poems", "games", "experiences", "systems"]} 
                className="" 
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
          >
            Artist. Creator. Technologist.
            <br />
            <span className="text-foreground">Building at the intersection of beauty and function.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/poetry"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Read My Poetry
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-foreground transition-colors"
            >
              The Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => document.getElementById("worlds")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>
    </header>
  );
};

export default HeroSection;