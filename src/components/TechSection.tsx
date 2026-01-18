import { motion } from "framer-motion";
import { Code2, Cpu, Layers, Sparkles } from "lucide-react";
import FadeInSection from "./FadeInSection";

const techStack = [
  "React", "TypeScript", "Node.js", "AI/ML", "Cloud", "Design Systems"
];

const TechSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-card overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-electric/5 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <FadeInSection>
            <div className="relative">
              {/* Rotating Code Symbol */}
              <div className="aspect-square max-w-md mx-auto relative">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-electric/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-violet/20 rounded-full"
                />
                <div className="absolute inset-16 bg-carbon border border-border flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-electric" />
                </div>
              </div>

              {/* Floating Tags */}
              <div className="absolute top-0 right-0 bg-electric/10 border border-electric/30 px-4 py-2">
                <span className="text-xs font-mono text-electric">{'<innovation />'}</span>
              </div>
              <div className="absolute bottom-10 left-0 bg-violet/10 border border-violet/30 px-4 py-2">
                <span className="text-xs font-mono text-violet">{'function create() {}'}</span>
              </div>
            </div>
          </FadeInSection>

          {/* Right - Content */}
          <FadeInSection delay={0.2}>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-2 bg-electric animate-pulse-soft" />
                <span className="brand-tag text-electric">The Craft</span>
              </div>

              <h2 className="headline-section font-serif text-foreground mb-8">
                Building the
                <span className="text-gradient-electric block">Impossible</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Technology is my canvas. I don't just write code—I architect experiences 
                that feel alive. From AI systems to design tooling, every project is an 
                opportunity to push boundaries.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-12">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: "hsl(var(--electric))" }}
                    className="px-4 py-2 border border-border text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Philosophy Points */}
              <div className="space-y-6">
                {[
                  { icon: Cpu, text: "Systems thinking over feature chasing" },
                  { icon: Layers, text: "Design and engineering as one discipline" },
                  { icon: Sparkles, text: "AI as a creative partner, not replacement" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-electric transition-colors">
                      <item.icon className="w-4 h-4 text-electric" />
                    </div>
                    <span className="text-foreground text-sm">{item.text}</span>
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