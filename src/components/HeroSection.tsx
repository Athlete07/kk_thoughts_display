import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center">
      {/* Minimal ambient light */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet/10 blur-[200px]"
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center"
        >
          {/* The Question */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-muted-foreground text-sm md:text-base font-light tracking-wide mb-12"
          >
            What if words could move you the way games train your mind?
          </motion.p>

          {/* Name - understated */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground tracking-tight mb-6"
          >
            Krishna Kumar
          </motion.h1>

          {/* Essence - one line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="text-muted-foreground/80 text-sm md:text-base font-light max-w-md mx-auto leading-relaxed"
          >
            Writes shayari. Builds cognitive games.<br />
            <span className="text-muted-foreground/50">Occasionally ships products.</span>
          </motion.p>

          {/* Minimal Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-16 flex items-center justify-center gap-12"
          >
            <Link
              to="/poetry"
              className="text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-500"
            >
              Read
            </Link>
            <span className="w-px h-3 bg-border" />
            <Link
              to="/gaming"
              className="text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-500"
            >
              Play
            </Link>
            <span className="w-px h-3 bg-border" />
            <Link
              to="/about"
              className="text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-500"
            >
              Know
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent"
        />
      </motion.div>
    </header>
  );
};

export default HeroSection;
