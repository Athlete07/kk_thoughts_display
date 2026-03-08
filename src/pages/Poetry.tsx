import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { albums } from "@/data/albums";

const Poetry = () => {
  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-24 text-center"
          >
            <p className="text-muted-foreground/50 text-[10px] tracking-[0.5em] uppercase mb-8">
              A Growing Collection
            </p>
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Verses
            </h1>
            <p className="text-muted-foreground/70 font-light max-w-md mx-auto leading-relaxed">
              Devotion expressed through sound. Each album is an offering —
              crafted with patience, released when ready.
            </p>
          </motion.div>

          {/* Albums Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {albums.map((album, index) => (
              <motion.div
                key={album.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
              >
                <Link
                  to={`/words/${album.slug}`}
                  className="group block"
                >
                  {/* Album Cover */}
                  <div className="relative aspect-square bg-card border border-border/30 flex items-center justify-center overflow-hidden mb-6 transition-all duration-500 group-hover:border-primary/20">
                    <div className="text-center space-y-4 p-8">
                      {album.coverSymbol && (
                        <p className="text-5xl md:text-6xl text-primary/30 font-serif transition-colors duration-500 group-hover:text-primary/50">
                          {album.coverSymbol}
                        </p>
                      )}
                      <div className="w-10 h-px bg-primary/15 mx-auto" />
                      {album.coverSubtext && (
                        <p className="font-serif text-base text-foreground/50 transition-colors duration-500 group-hover:text-foreground/70">
                          {album.coverSubtext}
                        </p>
                      )}
                    </div>
                    {/* Hover glow */}
                    <div className="absolute -inset-px bg-gradient-to-b from-primary/0 via-transparent to-transparent -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:from-primary/5" />
                  </div>

                  {/* Album Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h2 className="font-serif text-lg text-foreground group-hover:text-primary/80 transition-colors duration-300">
                        {album.title}
                      </h2>
                      {album.status === "coming-soon" && (
                        <span className="text-[8px] uppercase tracking-[0.3em] text-primary/40 border border-primary/15 px-2 py-0.5">
                          Soon
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground/50 font-light leading-relaxed line-clamp-2">
                      {album.description}
                    </p>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground/30 pt-1">
                      {album.year} · {album.language}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Empty state hint when more albums come */}
          {albums.length <= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-center mt-24"
            >
              <div className="w-12 h-px bg-border/20 mx-auto mb-8" />
              <p className="text-[11px] text-muted-foreground/30 font-light tracking-wide">
                More albums in the making.
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Poetry;
