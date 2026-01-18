import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Feather, ArrowRight } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { featuredShayaris } from "@/data/shayaris";

const PoetrySection = () => {
  const displayShayari = featuredShayaris[0]; // Show one featured shayari

  return (
    <section className="relative py-32 bg-card overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet/5 blur-[100px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Featured Shayari */}
          <FadeInSection>
            <div className="relative p-10 md:p-14 border border-violet/20 bg-background/30">
              {/* Decorative */}
              <Feather className="w-6 h-6 text-violet/40 mb-8" />
              
              {displayShayari && (
                <>
                  <h3 className="font-serif text-xl text-foreground mb-6">
                    {displayShayari.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {displayShayari.english.split('\n').slice(0, 4).map((line, i) => (
                      <p key={i} className="font-quote text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-6 border-t border-border/30">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-violet/60">
                      {displayShayari.theme}
                    </span>
                  </div>
                </>
              )}
            </div>
          </FadeInSection>

          {/* Right - Content */}
          <FadeInSection delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-violet" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-violet">
                  Shayari
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight">
                Words before
                <span className="text-gradient-violet block">everything else</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Before code, before product specs, before cognitive frameworks—there 
                were words. Shayari is where I think most clearly, feel most deeply. 
                It's not a hobby; it's the truest form of expression I know.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-10">
                Themes of solitude, rebellion, love found and lost. Written in 
                the quiet hours when the noise fades and only truth remains.
              </p>

              <Link
                to="/poetry"
                className="inline-flex items-center gap-3 text-violet hover:text-foreground transition-colors group"
              >
                <span className="text-xs uppercase tracking-widest">Read the Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default PoetrySection;
