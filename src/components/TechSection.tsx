import { motion } from "framer-motion";
import { Layers, Users, Sparkles } from "lucide-react";
import FadeInSection from "./FadeInSection";

const TechSection = () => {
  return (
    <section className="relative py-32 bg-card overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-electric/5 rounded-full"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <FadeInSection>
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto relative">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-electric/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 border border-violet/15 rounded-full"
                />
                <div className="absolute inset-24 bg-background border border-border flex items-center justify-center">
                  <Layers className="w-10 h-10 text-electric/60" />
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Right - Content */}
          <FadeInSection delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-electric" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-electric">
                  By Profession
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight">
                Product & Project
                <span className="text-gradient-electric block">Management</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Building software products. Shipping features. Coordinating teams. 
                The day job that funds the creative work—but also teaches systems 
                thinking, user empathy, and the discipline of delivery.
              </p>

              {/* Philosophy Points */}
              <div className="space-y-4">
                {[
                  { icon: Layers, text: "Product thinking applied to everything" },
                  { icon: Users, text: "Building with users, not just for them" },
                  { icon: Sparkles, text: "Shipping beats perfection" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 group">
                    <div className="w-9 h-9 flex items-center justify-center border border-border group-hover:border-electric/50 transition-colors">
                      <item.icon className="w-4 h-4 text-electric/60 group-hover:text-electric transition-colors" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
