import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";
import { featuredShayaris } from "@/data/shayaris";

const PoetrySection = () => {
  const displayShayari = featuredShayaris[0];

  return (
    <section className="relative py-32 md:py-40">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 block mb-6">
              Words
            </span>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
              Some things are easier felt than explained. 
              Shayari is where silence finds a voice.
            </p>
          </div>
        </FadeInSection>

        {/* Featured Verse */}
        {displayShayari && (
          <FadeInSection delay={0.2}>
            <div className="relative max-w-2xl mx-auto">
              <div className="py-12 md:py-16 px-8 md:px-12 border-l border-violet/20">
                <div className="space-y-6">
                  {displayShayari.english.split('\n').slice(0, 4).map((line, i) => (
                    <motion.p 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.8 }}
                      className="font-quote text-lg md:text-xl text-foreground/80 italic leading-relaxed"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        )}

        <FadeInSection delay={0.4}>
          <div className="text-center mt-16">
            <Link
              to="/words"
              className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              The Collection →
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default PoetrySection;
