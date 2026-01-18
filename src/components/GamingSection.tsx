import { motion } from "framer-motion";
import { Gamepad2, Trophy, Target, Zap } from "lucide-react";
import FadeInSection from "./FadeInSection";

const stats = [
  { number: "15K+", label: "Gaming Hours", icon: Gamepad2 },
  { number: "200+", label: "Games Mastered", icon: Trophy },
  { number: "Top 1%", label: "Competitive Rank", icon: Target },
];

const GamingSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden py-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-crimson/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-electric/5 to-transparent" />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), 
                              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <FadeInSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 bg-crimson animate-pulse-soft" />
            <span className="brand-tag text-crimson">The Arena</span>
          </div>
          
          <h2 className="headline-display font-serif text-foreground mb-6">
            Born to
            <span className="text-gradient-crimson ml-4">Compete</span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
            Gaming isn't escapism—it's training. Every match sharpens decision-making. 
            Every loss teaches resilience. Every victory proves that preparation meets opportunity.
          </p>
        </FadeInSection>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                className="card-glass p-10 group hover:border-crimson/50 transition-all duration-500"
              >
                <stat.icon className="w-8 h-8 text-crimson mb-6 group-hover:scale-110 transition-transform" />
                <div className="stat-number text-gradient-crimson">{stat.number}</div>
                <p className="text-muted-foreground uppercase tracking-widest text-sm mt-4">{stat.label}</p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Featured Quote */}
        <FadeInSection delay={0.3}>
          <div className="mt-24 border-l-2 border-crimson pl-8">
            <p className="text-3xl md:text-4xl font-quote italic text-foreground leading-relaxed">
              "In the game, I found what I couldn't find in the real world—
              <span className="text-crimson">a fair fight</span>."
            </p>
          </div>
        </FadeInSection>

        {/* Gaming Philosophy */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeInSection>
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-foreground">The Competitive Edge</h3>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: "Split-Second Decisions", desc: "When milliseconds matter, clarity under pressure becomes everything." },
                  { icon: Target, title: "Pattern Recognition", desc: "Reading opponents, predicting moves, staying three steps ahead." },
                  { icon: Trophy, title: "Relentless Improvement", desc: "Every session is deliberate practice. Every game is a lesson." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-crimson transition-colors">
                      <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-crimson transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative aspect-square bg-gradient-to-br from-carbon to-obsidian border border-border overflow-hidden group">
              {/* Animated Gaming Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-[80%] h-[80%] border border-crimson/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[60%] h-[60%] border border-electric/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[40%] h-[40%] border border-violet/20 rounded-full"
                />
                <Gamepad2 className="absolute w-16 h-16 text-crimson/60 group-hover:text-crimson group-hover:scale-110 transition-all" />
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-crimson" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-crimson" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default GamingSection;