import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Feather, ArrowUpRight, Quote } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { featuredShayaris } from "@/data/shayaris";

const PoetrySection = () => {
  const displayShayaris = featuredShayaris.slice(0, 3);

  return (
    <section className="relative min-h-screen bg-card overflow-hidden py-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet/5 to-transparent" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-violet/5 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-violet animate-pulse-soft" />
              <span className="brand-tag text-violet">The Verse</span>
            </div>
            
            <h2 className="headline-display font-serif text-foreground">
              Words that
              <span className="block text-gradient-violet">Wound & Heal</span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Poetry is my first language. Before I learned to code or compete, 
              I learned to feel—and feeling demanded to be written. These verses 
              are fragments of a life lived intensely.
            </p>
          </FadeInSection>
        </div>

        {/* Featured Verse - Large */}
        <FadeInSection>
          <div className="relative border border-violet/30 bg-background/50 p-12 md:p-20 mb-16 group hover:border-violet/60 transition-all duration-500">
            {/* Decorative Elements */}
            <Quote className="absolute top-6 left-6 w-8 h-8 text-violet/20" />
            <Quote className="absolute bottom-6 right-6 w-8 h-8 text-violet/20 rotate-180" />
            
            <div className="max-w-4xl mx-auto text-center">
              <span className="brand-tag text-violet mb-8 block">Featured</span>
              <p className="text-3xl md:text-5xl font-quote italic text-foreground leading-relaxed">
                "I don't write to be understood.
                <br />
                <span className="text-violet">I write so that someday,</span>
                <br />
                someone feels less alone."
              </p>
              <div className="mt-12 flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet to-transparent" />
                <span className="font-signature text-4xl text-foreground/70">Krishna Kumar</span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet to-transparent" />
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Poetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayShayaris.map((shayari, i) => (
            <FadeInSection key={shayari.id} delay={i * 0.15}>
              <motion.article
                whileHover={{ y: -5 }}
                className="shayari-card p-8 h-full group hover:border-violet/50 transition-all duration-500"
              >
                <Feather className="w-5 h-5 text-violet mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="font-serif text-xl text-foreground mb-4 group-hover:text-violet transition-colors">
                  {shayari.title}
                </h3>
                
                <p className="font-quote text-lg text-muted-foreground leading-relaxed italic line-clamp-4">
                  {shayari.english.split('\n').slice(0, 3).join(' / ')}
                </p>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <span className="text-xs uppercase tracking-widest text-violet/60">{shayari.theme}</span>
                </div>
              </motion.article>
            </FadeInSection>
          ))}
        </div>

        {/* CTA */}
        <FadeInSection delay={0.3}>
          <div className="mt-16 text-center">
            <Link
              to="/poetry"
              className="inline-flex items-center gap-3 text-violet hover:text-foreground transition-colors group"
            >
              <span className="text-sm uppercase tracking-widest">Enter the Poetry Collection</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default PoetrySection;