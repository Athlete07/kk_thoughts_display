import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const domains = [
  { title: "Speed", desc: "React before thought." },
  { title: "Focus", desc: "One thing, completely." },
  { title: "Memory", desc: "Hold, connect, recall." },
  { title: "Logic", desc: "See the path." },
];

const GamingSection = () => {
  return (
    <section className="relative py-32 md:py-40 bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-6">
              Games
            </span>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
              The mind is trainable. I build games at the intersection 
              of what you feel and how fast you think.
            </p>
          </div>
        </FadeInSection>

        {/* Four Domains */}
        <FadeInSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 max-w-2xl mx-auto">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-background p-8 text-center group"
              >
                <h3 className="text-sm font-sans tracking-wide text-foreground mb-2">
                  {domain.title}
                </h3>
                <p className="text-xs text-muted-foreground font-light">
                  {domain.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <div className="text-center mt-16">
            <Link
              to="/games"
              className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Explore →
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default GamingSection;
