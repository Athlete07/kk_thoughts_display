import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

const Manifesto = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Center Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="text-center">
            <span className="brand-tag text-primary mb-8 block">The Manifesto</span>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight mb-16">
              "I believe the world needs more
              <span className="block text-gradient-electric"> artists who can code,</span>
              <span className="block text-gradient-violet"> athletes who can think,</span>
              and
              <span className="text-gradient-crimson"> poets who can compete."</span>
            </h2>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
            
            <p className="font-signature text-5xl text-foreground/70 mb-16">Krishna Kumar</p>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-primary hover:text-foreground transition-colors group"
            >
              <span className="text-sm uppercase tracking-widest">Learn My Story</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Manifesto;