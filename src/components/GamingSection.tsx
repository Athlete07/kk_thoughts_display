import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Zap, Target, Lightbulb, ArrowRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

const domains = [
  { icon: Zap, title: "Speed", color: "crimson" },
  { icon: Target, title: "Focus", color: "electric" },
  { icon: Brain, title: "Memory", color: "violet" },
  { icon: Lightbulb, title: "Logic", color: "emerald" },
];

const GamingSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-crimson/3 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <FadeInSection>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-crimson" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-crimson">
                  Cognitive Games
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight">
                Building at the intersection
                <span className="text-gradient-crimson block">of mind and play</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Not a gamer—a game builder. Creating cognitive training experiences 
                that sharpen the same mental faculties demanded on the athletic track: 
                reaction time, focus, pattern recognition, strategic thinking.
              </p>

              {/* Four Domains Preview */}
              <div className="grid grid-cols-4 gap-4 mb-10">
                {domains.map((domain, i) => (
                  <motion.div
                    key={domain.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-center p-4 border border-border hover:border-${domain.color}/50 transition-colors group`}
                  >
                    <domain.icon className={`w-5 h-5 text-${domain.color} mx-auto mb-2`} />
                    <span className="text-[9px] tracking-wider uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                      {domain.title}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/gaming"
                className="inline-flex items-center gap-3 text-crimson hover:text-foreground transition-colors group"
              >
                <span className="text-xs uppercase tracking-widest">Explore the Games</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInSection>

          {/* Right - Visual */}
          <FadeInSection delay={0.2}>
            <div className="relative">
              <div className="aspect-square bg-card border border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Animated Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="w-[70%] h-[70%] border border-crimson/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[50%] h-[50%] border border-electric/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[30%] h-[30%] border border-violet/20 rounded-full"
                  />
                  
                  {/* Center */}
                  <div className="absolute w-16 h-16 bg-background border border-border flex items-center justify-center">
                    <Brain className="w-6 h-6 text-crimson/60" />
                  </div>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-crimson/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-crimson/50" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default GamingSection;
