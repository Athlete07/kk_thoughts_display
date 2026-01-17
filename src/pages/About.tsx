import { Link } from "react-router-dom";
import { Feather, Code, Gamepad2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import FloatingOrbs from "@/components/FloatingOrbs";

const About = () => {
  return (
    <>
      <FilmGrain />
      <FloatingOrbs />
      <Navbar />

      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div>
              <span className="text-primary text-[10px] tracking-[0.4em] uppercase mb-4 block">The Artist</span>
              <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
                I live between
                <br /><span className="italic text-primary">verses and versions.</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                By day, I architect digital experiences. By night, I write poetry that refuses to sleep. 
                And somewhere in between, I explore virtual worlds searching for meaning in pixels and polygons.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-all"
              >
                <Mail size={16} /> Let's Connect
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-card">
                <img src="/krishna.png" className="w-full h-full object-cover artistic-photo" alt="Krishna Kumar" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary px-6 py-4">
                <p className="font-signature text-3xl text-primary-foreground">कृष्ण कुमार</p>
              </div>
            </div>
          </motion.div>

          {/* Three Identities */}
          <FadeInSection className="mb-24">
            <h2 className="text-3xl font-serif text-foreground text-center mb-12">The Three Identities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Feather, title: "The Poet", text: "Shayari is my mother tongue of the soul. Through verses, I explore love, existential dread, rebellion, and quiet hope." },
                { icon: Code, title: "The Technologist", text: "I build things. Clean code, elegant systems, digital experiences that feel human despite being made of logic." },
                { icon: Gamepad2, title: "The Gamer", text: "Games taught me that failure is just a checkpoint. Every virtual world is a lesson in persistence and imagination." },
              ].map((item) => (
                <div key={item.title} className="border border-border/30 bg-card/50 p-8">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Philosophy */}
          <FadeInSection className="text-center mb-24">
            <p className="text-2xl md:text-3xl font-quote italic text-foreground leading-relaxed max-w-3xl mx-auto">
              "Art is not what you create. It's who you become in the process of creating."
            </p>
            <p className="font-signature text-4xl text-primary/60 mt-6">Krishna Kumar</p>
          </FadeInSection>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/poetry"
              className="inline-flex items-center gap-2 text-primary border-b border-primary/50 pb-1 hover:border-primary transition-colors tracking-widest uppercase text-sm"
            >
              Read My Poetry <Feather size={14} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;