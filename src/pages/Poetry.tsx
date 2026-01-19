import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShayariCard from "@/components/ShayariCard";
import { shayaris } from "@/data/shayaris";

const Poetry = () => {
  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-20 text-center"
          >
            <p className="text-muted-foreground text-sm font-light mb-12">
              Words
            </p>
            <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              Shayari
            </h1>
            <p className="text-muted-foreground/80 font-light max-w-md mx-auto">
              Some of what I've written. Most is about love, loss, or the 
              strange space between the two.
            </p>
          </motion.div>

          <div className="space-y-12">
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
