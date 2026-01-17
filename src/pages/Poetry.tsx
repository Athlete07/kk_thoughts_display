import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import ShayariCard from "@/components/ShayariCard";
import { shayaris } from "@/data/shayaris";

const Poetry = () => {
  return (
    <>
      <FilmGrain />
      <FloatingOrbs />
      <Navbar />

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20 text-center"
          >
            <span className="text-primary text-[10px] tracking-[0.4em] uppercase mb-6 block">
              The Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8">
              Poetry & Shayari
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Words born in the space between heartbeats. Verses that bridge 
              technology, gaming, and the eternal human experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shayaris.map((shayari, i) => (
              <ShayariCard key={shayari.id} shayari={shayari} index={i} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Poetry;