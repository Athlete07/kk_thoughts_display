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
    <section className="relative py-32 md:py-40">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-6">
              Verses
            </span>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
              Devotion expressed through sound. Each bhajan is an offering —
              crafted with patience, released when ready.
            </p>
          </div>
        </FadeInSection>

        {/* Featured Verse from Abhay */}
        <FadeInSection delay={0.2}>
          <div className="relative max-w-2xl mx-auto">
            <div className="py-12 md:py-16 px-8 md:px-12 border-l border-violet/20">
              <p className="text-[9px] tracking-[0.3em] uppercase text-primary/40 mb-8 font-light">
                अभय — हनुमान भक्ति के सात भजन
              </p>
              <div className="space-y-4">
                {featuredLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.8 }}
                    className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed"
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
              className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Explore the Collection →
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default PoetrySection;
