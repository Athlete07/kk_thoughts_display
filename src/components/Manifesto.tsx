import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

const Manifesto = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Subtle Glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="text-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8 block">
              In Summary
            </span>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-foreground leading-relaxed mb-12">
              A shayar who builds cognitive games,
              <span className="block text-muted-foreground mt-2">ships products by day,</span>
              <span className="block text-muted-foreground mt-2">and was once a state-level hurdler.</span>
            </h2>

            <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-8" />
            
            <p className="font-signature text-4xl text-foreground/60 mb-12">Krishna Kumar</p>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-xs uppercase tracking-widest">The Full Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Manifesto;
