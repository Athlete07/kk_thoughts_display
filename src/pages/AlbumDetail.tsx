import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BhajanAccordion from "@/components/BhajanAccordion";
import { getAlbumBySlug } from "@/data/albums";
import NotFound from "./NotFound";

const AlbumDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const album = slug ? getAlbumBySlug(slug) : undefined;

  if (!album) return <NotFound />;

  const forewordExcerpt = album.writer?.foreword.split("\n\n").slice(0, 2).join("\n\n");

  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-28 pb-24">
        <div className="max-w-2xl mx-auto px-6 md:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/words"
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              ← All Verses
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 text-center"
          >
            {album.subtitle && (
              <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase mb-6">
                {album.subtitle}
              </p>
            )}
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-5 font-bold leading-tight">
              {album.title}
            </h1>
            {album.writer && (
              <p className="text-muted-foreground text-sm tracking-wider mb-6">
                रचयिता —{" "}
                <Link
                  to={`/words/${album.slug}/writer`}
                  className="text-primary hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/30"
                >
                  {album.writer.penName}
                </Link>
              </p>
            )}
            <p className="text-muted-foreground font-light max-w-lg mx-auto leading-relaxed text-base">
              {album.description}
            </p>
          </motion.div>

          {/* Album Art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative max-w-sm mx-auto mb-20"
          >
            <div className="aspect-square bg-card border border-border/40 flex items-center justify-center overflow-hidden rounded-sm">
              <div className="text-center space-y-5 p-10">
                {album.coverSymbol && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.6 }}
                    className="text-7xl md:text-8xl text-primary/60 font-serif"
                  >
                    {album.coverSymbol}
                  </motion.p>
                )}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="w-16 h-px bg-primary/30 mx-auto"
                />
                {album.coverSubtext && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="font-serif text-xl text-foreground/80"
                  >
                    {album.coverSubtext}
                  </motion.p>
                )}
              </div>
            </div>
            <div className="absolute -inset-px bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10 blur-2xl" />
          </motion.div>

          {/* Dedication */}
          {album.dedication && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-md mx-auto mb-20 text-center"
            >
              <div className="py-10 border-t border-b border-border/30">
                {album.dedication.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className={`font-quote italic leading-loose ${
                      i === 0
                        ? "text-foreground text-lg mb-2"
                        : "text-muted-foreground text-base"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Stages & Bhajans */}
          {album.stages?.map((stage, si) => (
            <motion.div
              key={si}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + si * 0.15 }}
              className="mb-16"
            >
              {/* Stage header */}
              <div className="flex items-center gap-5 mb-10">
                <div className="h-px flex-1 bg-border/30" />
                <div className="text-center px-4">
                  <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
                    {stage.title}
                  </p>
                  {stage.titleEn && (
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1.5">
                      {stage.titleEn}
                    </p>
                  )}
                </div>
                <div className="h-px flex-1 bg-border/30" />
              </div>

              {/* Bhajans */}
              <div>
                {stage.bhajans.map((bhajan) => (
                  <BhajanAccordion key={bhajan.number} bhajan={bhajan} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Tracklist fallback (for albums without stages) */}
          {!album.stages && album.tracks.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-lg mx-auto mb-20"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 font-medium">
                Tracklist
              </p>
              <div className="space-y-0">
                {album.tracks.map((track, i) => (
                  <div
                    key={i}
                    className="py-5 border-b border-border/30 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground font-light w-8">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base text-foreground">
                        {track.title}
                      </span>
                    </div>
                    {track.duration && (
                      <span className="text-sm text-muted-foreground">
                        {track.duration}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Status Badge */}
          {album.status === "coming-soon" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary px-6 py-3 border border-primary/30 font-medium">
                Coming Soon
              </span>
            </motion.div>
          )}

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="w-16 h-px bg-border/40 mx-auto my-14"
          />

          {/* Closing Note */}
          {album.closingNote && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-center text-sm text-muted-foreground font-light leading-relaxed"
            >
              {album.closingNote.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < album.closingNote!.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AlbumDetail;
