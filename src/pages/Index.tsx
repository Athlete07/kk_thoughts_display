import { Link } from "react-router-dom";
import { ChevronDown, Feather, Gamepad2, Code, Quote } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import FloatingOrbs from "@/components/FloatingOrbs";
import TypewriterText from "@/components/TypewriterText";
import ShayariCard from "@/components/ShayariCard";
import { featuredShayaris } from "@/data/shayaris";

const Index = () => {
  return (
    <>
      <FilmGrain />
      <FloatingOrbs />
      <Navbar />

      <main className="relative">
        {/* HERO */}
        <header className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[40vh] gradient-fade-up z-10" />

          <div className="max-w-4xl w-full relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-4 text-primary">
                <Code className="w-10 h-10 animate-float" />
                <Gamepad2 className="w-10 h-10 animate-float" />
                <Feather className="w-10 h-10 animate-float" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-primary text-sm tracking-[0.4em] uppercase mb-6"
            >
              Technologist • Game Builder • Poet
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8 text-foreground"
            >
              I build <TypewriterText texts={["systems", "playgrounds", "stories"]} className="text-primary" />
              <br />
              <span className="italic font-quote">that invite people to stay.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
            >
              I ship technology with soul and design games with a heartbeat. 
              This is a studio of code, play, and poetry—built in public.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                type="button"
                onClick={() => document.getElementById("builds")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-8 py-4 text-xs tracking-[0.3em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Code size={16} /> Explore Builds
              </button>
              <Link
                to="/poetry"
                className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.3em] uppercase border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Read Poetry
              </Link>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              onClick={() => document.getElementById("builds")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-20 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase">Discover</span>
              <ChevronDown className="animate-bounce" />
            </motion.button>
          </div>
        </header>

        {/* FEATURED BUILDS */}
        <section id="builds" className="py-24 bg-card relative">
          <div className="max-w-6xl mx-auto px-6">
            <FadeInSection className="text-center mb-16">
              <span className="text-primary text-[10px] tracking-[0.4em] uppercase">Now Building</span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mt-4">
                Technology + Gaming Studio
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeInSection>
                <div className="border border-border/30 bg-background/40 p-8 h-full hover:border-primary/50 transition-colors">
                  <Code className="w-9 h-9 text-primary mb-6" />
                  <h3 className="font-serif text-2xl text-foreground mb-4">Technology</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Building performant web experiences, tooling, and AI-assisted workflows that turn ideas into products.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Product design + engineering</li>
                    <li>• UI systems and interaction craft</li>
                    <li>• Experimental AI features</li>
                  </ul>
                </div>
              </FadeInSection>
              <FadeInSection delay={0.15}>
                <div className="border border-border/30 bg-background/40 p-8 h-full hover:border-primary/50 transition-colors">
                  <Gamepad2 className="w-9 h-9 text-primary mb-6" />
                  <h3 className="font-serif text-2xl text-foreground mb-4">Gaming</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Designing playable worlds and narrative systems that reward curiosity, strategy, and flow.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Game mechanics + progression loops</li>
                    <li>• Worldbuilding and lore design</li>
                    <li>• Immersive player experiences</li>
                  </ul>
                </div>
              </FadeInSection>
            </div>

            <FadeInSection className="mt-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                  <span className="text-primary text-[10px] tracking-[0.4em] uppercase">Latest Poetry</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground mt-3">Verses from the Void</h3>
                </div>
                <Link
                  to="/poetry"
                  className="inline-flex items-center gap-2 text-primary border-b border-primary/50 pb-1 hover:border-primary transition-colors text-sm tracking-widest uppercase"
                >
                  View All Poetry <Feather size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredShayaris.slice(0, 4).map((shayari, i) => (
                  <ShayariCard key={shayari.id} shayari={shayari} index={i} />
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* THREE WORLDS */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <FadeInSection className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">
                Three Disciplines. One Studio.
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Code, title: "The Technologist", desc: "Engineering systems that feel alive—fast, thoughtful, and crafted with intention." },
                { icon: Gamepad2, title: "The Game Builder", desc: "Designing mechanics and worlds that turn play into meaning and learning." },
                { icon: Feather, title: "The Poet", desc: "Writing shayari that anchors the studio in emotion, memory, and rhythm." },
              ].map((item, i) => (
                <FadeInSection key={item.title} delay={i * 0.15}>
                  <div className="border border-border/30 bg-card/50 p-8 h-full group hover:border-primary/50 transition-colors">
                    <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif text-xl text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="py-24 bg-card border-y border-border/20">
          <FadeInSection className="max-w-4xl mx-auto px-6 text-center">
            <Quote className="w-10 h-10 text-primary/40 mx-auto mb-8" />
            <p className="text-2xl md:text-4xl font-quote italic text-foreground leading-relaxed">
              "I don't write to be understood. I write so that someday, someone feels less alone."
            </p>
            <p className="font-signature text-4xl text-primary/60 mt-8">Krishna Kumar</p>
          </FadeInSection>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <FadeInSection className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Let's Build Together
            </h2>
            <p className="text-muted-foreground mb-10">
              Whether it's product, play, or poetry—I'd love to collaborate and ship something memorable.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-all"
            >
              Start a Conversation
            </Link>
          </FadeInSection>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;