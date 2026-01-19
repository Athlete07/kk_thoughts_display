import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Poetry = () => {
  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
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
            <p className="text-muted-foreground/80 font-light max-w-md mx-auto mb-6">
              A collection of verses. About love, loss, and the strange space between the two.
            </p>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="py-20 text-center"
          >
            <div className="inline-block mb-12">
              <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground/40 px-4 py-2 border border-border/30">
                Launching Soon
              </span>
            </div>
            
            <p className="text-muted-foreground/60 font-light max-w-sm mx-auto leading-relaxed mb-16">
              The first collection is being carefully curated. 
              Each verse, handpicked. Each word, intentional.
            </p>

            {/* Teaser Verse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="max-w-md mx-auto"
            >
              <div className="border-l border-muted-foreground/10 pl-6 py-4">
                <p className="font-quote text-lg text-muted-foreground/50 leading-relaxed italic">
                  "Kuch alfaaz hain jo likhne mein waqt lete hain.
                  <br />
                  <span className="text-muted-foreground/30">
                    Kyunki unhe jeena pehle padta hai."
                  </span>
                </p>
              </div>
              <p className="text-[10px] text-muted-foreground/30 mt-6 tracking-wide">
                — from the upcoming collection
              </p>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="w-12 h-px bg-border/30 mx-auto my-16"
          />

          {/* Anticipation Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-center text-[11px] text-muted-foreground/40 font-light tracking-wide"
          >
            Some things take time to share.
            <br />
            This is one of them.
          </motion.p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Poetry;
