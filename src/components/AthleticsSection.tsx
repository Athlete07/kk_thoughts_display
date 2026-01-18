import { motion } from "framer-motion";
import { Timer, Target } from "lucide-react";
import FadeInSection from "./FadeInSection";

const AthleticsSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Horizontal Lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
            className="absolute h-px bg-gradient-to-r from-transparent via-emerald/15 to-transparent"
            style={{ top: `${30 + i * 20}%`, left: 0, right: 0 }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 bg-emerald" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-emerald">
                The Foundation
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              State-Level Athlete
            </h2>
            
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              110m hurdles and long jump. The track taught me everything about 
              discipline, focus under pressure, and the mental game that determines 
              outcomes before the race even begins.
            </p>
          </div>
        </FadeInSection>

        {/* Stats - Simple */}
        <FadeInSection delay={0.2}>
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            <div className="text-center p-8 border border-border hover:border-emerald/30 transition-colors">
              <Timer className="w-5 h-5 text-emerald mx-auto mb-4" />
              <div className="text-3xl font-display text-foreground mb-2">110m</div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Hurdles</p>
            </div>
            
            <div className="text-center p-8 border border-border hover:border-emerald/30 transition-colors">
              <Target className="w-5 h-5 text-emerald mx-auto mb-4" />
              <div className="text-3xl font-display text-foreground mb-2">Long</div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Jump</p>
            </div>
          </div>
        </FadeInSection>

        {/* Connection to Games */}
        <FadeInSection delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground italic max-w-xl mx-auto">
              "The mental sharpness required on the track—split-second timing, 
              absolute focus—is exactly what I'm now building into cognitive games."
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AthleticsSection;
