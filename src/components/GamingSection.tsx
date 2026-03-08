import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const domains = [
  { title: "Speed", desc: "React before thought.", icon: "⚡" },
  { title: "Focus", desc: "One thing, completely.", icon: "◎" },
  { title: "Memory", desc: "Hold, connect, recall.", icon: "◈" },
  { title: "Logic", desc: "See the path.", icon: "△" },
];

const GamingSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-divider mb-16 md:mb-20" />

      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-20">
            <span className="brand-tag text-primary mb-6 block">
              <span className="w-6 h-px bg-primary inline-block mr-3 align-middle" />
              Games
              <span className="w-6 h-px bg-primary inline-block ml-3 align-middle" />
            </span>
            <p className="text-xl md:text-2xl text-foreground font-serif max-w-lg mx-auto leading-relaxed mt-6">
              The mind is trainable
            </p>
            <p className="text-base text-muted-foreground font-light max-w-md mx-auto leading-relaxed mt-4">
              Games at the intersection of what you feel and how fast you think.
            </p>
          </div>
        </FadeInSection>

        {/* Four Domains */}
        <FadeInSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-glass p-8 text-center group hover:border-primary/30 transition-all duration-500"
              >
                <span className="text-2xl block mb-4 group-hover:opacity-100 transition-opacity">
                  {domain.icon}
                </span>
                <h3 className="text-sm font-medium tracking-wide text-foreground mb-2">
                  {domain.title}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
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
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors duration-500 font-medium"
            >
              Explore
              <span className="text-primary">→</span>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default GamingSection;
