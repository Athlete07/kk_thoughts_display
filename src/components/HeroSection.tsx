import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[200px]"
        />
        <motion.div
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[180px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center"
        >
          {/* Opening line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg font-light tracking-wide mb-10"
          >
            What if words could move you the way games train your mind?
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="headline-display font-serif text-foreground mb-8"
          >
            Krishna Kumar
          </motion.h1>

          {/* Tagline — stronger closing line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl font-light max-w-lg mx-auto leading-relaxed"
          >
            Writes bhajans. Builds cognitive games.
            <br />
            <span className="text-foreground font-normal">Ships products that matter.</span>
          </motion.p>

          {/* Navigation CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex items-center justify-center gap-8 md:gap-14"
          >
            {[
              { label: "Read", to: "/words" },
              { label: "Play", to: "/games" },
              { label: "Know", to: "/about" },
            ].map((item, i) => (
              <span key={item.label} className="flex items-center gap-8 md:gap-14">
                {i > 0 && <span className="w-px h-4 bg-border" />}
                <Link
                  to={item.to}
                  className="text-xs md:text-sm tracking-[0.25em] uppercase text-foreground hover:text-primary transition-colors duration-500 font-medium"
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent"
        />
      </motion.div>
    </header>
  );
};

export default HeroSection;
