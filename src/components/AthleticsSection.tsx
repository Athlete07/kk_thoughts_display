import { motion } from "framer-motion";
import { Timer, Dumbbell, Heart, Mountain } from "lucide-react";
import FadeInSection from "./FadeInSection";

const disciplines = [
  { 
    icon: Timer, 
    title: "Discipline", 
    value: "4:30 AM",
    desc: "When the world sleeps, champions rise."
  },
  { 
    icon: Mountain, 
    title: "Endurance", 
    value: "42K",
    desc: "Marathons finished. Mind over matter."
  },
  { 
    icon: Heart, 
    title: "Commitment", 
    value: "365",
    desc: "Days of consistent training. No excuses."
  },
];

const AthleticsSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald/3 via-transparent to-background" />
        {/* Horizontal Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
            className="absolute h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Nike Style */}
        <div className="mb-20">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-emerald animate-pulse-soft" />
              <span className="brand-tag text-emerald">The Discipline</span>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="headline-massive font-display text-foreground tracking-tight">
              JUST
            </h2>
          </FadeInSection>
          
          <FadeInSection delay={0.2}>
            <h2 className="headline-massive font-display text-gradient-crimson tracking-tight">
              DON'T STOP.
            </h2>
          </FadeInSection>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-border">
          {disciplines.map((item, i) => (
            <FadeInSection key={item.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ backgroundColor: "hsl(var(--carbon))" }}
                className="p-10 md:p-12 border-r border-border last:border-r-0 group transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <item.icon className="w-5 h-5 text-emerald" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.title}</span>
                </div>
                
                <div className="stat-number text-foreground group-hover:text-emerald transition-colors">
                  {item.value}
                </div>
                
                <p className="text-muted-foreground text-sm mt-4">{item.desc}</p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Philosophy Block */}
        <FadeInSection delay={0.3}>
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-2xl md:text-3xl font-sans font-light text-foreground leading-relaxed">
                The body is an instrument. Athletics taught me that 
                <span className="text-emerald font-medium"> pain is temporary</span>, 
                but the strength you build—mental and physical—becomes permanent.
              </p>
              
              <div className="mt-12 flex gap-8">
                <div>
                  <div className="text-4xl font-display text-emerald">10+</div>
                  <p className="text-sm text-muted-foreground mt-1">Years of Training</p>
                </div>
                <div>
                  <div className="text-4xl font-display text-emerald">0</div>
                  <p className="text-sm text-muted-foreground mt-1">Days Skipped</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] bg-carbon border border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-center"
                  >
                    <Dumbbell className="w-20 h-20 text-emerald/40 mx-auto mb-4" />
                    <p className="font-display text-6xl text-emerald/20">TRAIN</p>
                  </motion.div>
                </div>
              </div>
              {/* Corner Accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-emerald/30 -z-10" />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AthleticsSection;