import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const featuredLines = [
  "जाग रे मन, बजरंग आया",
  "डर का अँधेरा दूर भगाया",
  "जाग रे मन, बजरंग आया",
];

const PoetrySection = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-divider mb-16 md:mb-20" />

      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-20">
            <span className="brand-tag text-primary mb-6 block">
              <span className="w-6 h-px bg-primary inline-block mr-3 align-middle" />
              Verses
              <span className="w-6 h-px bg-primary inline-block ml-3 align-middle" />
            </span>
            <p className="text-xl md:text-2xl text-foreground font-serif max-w-lg mx-auto leading-relaxed mt-6">
              Devotion expressed through sound
            </p>
            <p className="text-base text-muted-foreground font-light max-w-md mx-auto leading-relaxed mt-4">
              Each bhajan is an offering — crafted with patience, released when ready.
            </p>
          </div>
        </FadeInSection>

        {/* Featured Verse */}
        <FadeInSection delay={0.2}>
          <div className="relative max-w-2xl mx-auto">
            <div className="shayari-card py-14 md:py-18 px-10 md:px-16">
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-10 font-medium">
                अभय — हनुमान भक्ति के सात भजन
              </p>
              <div className="space-y-5">
                {featuredLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.8 }}
                    className="font-serif text-xl md:text-2xl text-foreground leading-relaxed"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <div className="text-center mt-16">
            <Link
              to="/words/abhay"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors duration-500 font-medium"
            >
              Explore the Collection
              <span className="text-primary">→</span>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default PoetrySection;
