import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-14 md:pt-40 md:pb-20 border-b border-border/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Author Anchor */}
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-border/70 shadow-sm bg-card flex-shrink-0">
              <img
                src="/about-krishna.jpg"
                alt="Krishna Kumar Yadlapalli"
                className="w-full h-full object-cover object-center grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="space-y-1">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
                Krishna Kumar Yadlapalli
              </h1>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-light">
                Bangalore, India • Software Builder & Essayist
              </p>
            </div>
          </div>

          {/* Guiding Premise */}
          <div className="space-y-4 max-w-2xl">
            <p className="font-serif text-xl sm:text-2xl md:text-[26px] text-foreground/95 leading-relaxed font-normal">
              I observe situations, study human behavior and incentives, and write down the takeaways once the noise clears.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
              I don’t write to tell anyone how to live. I write to figure out what I actually believe when the noise stops—notes from the arena on decision velocity, quiet craft, and conviction.
            </p>
          </div>

          {/* Understated Editorial Navigation */}
          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            <button
              onClick={() => {
                if (onExploreClick) {
                  onExploreClick();
                } else {
                  document.getElementById("essays-archive")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-1.5 font-medium"
            >
              <span>Essays (14)</span>
              <ArrowDown size={12} />
            </button>
            <span className="text-border/60">•</span>
            <Link to="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <span className="text-border/60">•</span>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
