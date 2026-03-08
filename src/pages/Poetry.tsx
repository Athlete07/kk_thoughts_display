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
            transition={{ duration: 1.2 }}
            className="mb-24 text-center"
          >
            <p className="text-muted-foreground/50 text-[10px] tracking-[0.5em] uppercase mb-8">
              Words · Volume I
            </p>
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Hanuman Bhajan
            </h1>
            <p className="text-muted-foreground/70 font-light max-w-md mx-auto leading-relaxed">
              A devotional album in praise of Lord Hanuman — 
              strength, surrender, and the silence between prayers.
            </p>
          </motion.div>

          {/* Album Art Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative max-w-md mx-auto mb-20"
          >
            <div className="aspect-square bg-card border border-border/30 flex items-center justify-center overflow-hidden">
              <div className="text-center space-y-6 p-8">
                {/* Om Symbol */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                  className="text-6xl md:text-7xl text-primary/40 font-serif"
                >
                  ॐ
                </motion.p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="w-16 h-px bg-primary/20 mx-auto"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="font-serif text-lg text-foreground/60"
                >
                  जय हनुमान
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground/30"
                >
                  Album Art Coming Soon
                </motion.p>
              </div>
            </div>
            {/* Subtle glow behind */}
            <div className="absolute -inset-px bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10 blur-2xl" />
          </motion.div>

          {/* About the Album */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-lg mx-auto mb-20"
          >
            <div className="border-l border-primary/20 pl-6 space-y-4">
              <p className="text-muted-foreground/60 font-light leading-relaxed text-sm">
                This collection draws from the ancient tradition of Hanuman bhajans — 
                verses that carry the weight of devotion and the lightness of faith.
              </p>
              <p className="text-muted-foreground/60 font-light leading-relaxed text-sm">
                Each bhajan is an act of surrender. Each word, a step closer 
                to the strength that comes from letting go.
              </p>
            </div>
          </motion.div>

          {/* Track List Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="max-w-lg mx-auto mb-20"
          >
            <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground/40 mb-8">
              Tracklist
            </p>
            <div className="space-y-0">
              {[
                "Track details arriving soon",
              ].map((track, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                  className="py-4 border-b border-border/20 flex items-center gap-4"
                >
                  <span className="text-[10px] text-muted-foreground/30 font-light w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted-foreground/50 font-light italic">
                    {track}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Launching Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[9px] uppercase tracking-[0.4em] text-primary/50 px-5 py-2.5 border border-primary/15">
              Launching Soon
            </span>
          </motion.div>

          {/* Teaser Verse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="max-w-md mx-auto text-center mb-16"
          >
            <div className="py-8">
              <p className="font-quote text-lg text-muted-foreground/50 leading-relaxed italic">
                "मन की शक्ति, तन की शक्ति
                <br />
                <span className="text-muted-foreground/30">
                  सब जग जाने हनुमान।"
                </span>
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
            className="w-12 h-px bg-border/30 mx-auto my-12"
          />

          {/* Closing Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-center text-[11px] text-muted-foreground/40 font-light tracking-wide"
          >
            Some offerings take time to prepare.
            <br />
            This one is being made with devotion.
          </motion.p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Poetry;
