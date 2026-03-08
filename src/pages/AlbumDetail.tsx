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

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link
              to="/words"
              className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300"
            >
              ← All Verses
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-20 text-center"
          >
            {album.subtitle && (
              <p className="text-muted-foreground/50 text-[10px] tracking-[0.5em] uppercase mb-8">
                {album.subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4 font-semibold">
              {album.title}
            </h1>
            {album.writer && (
              <p className="text-muted-foreground/70 text-[11px] tracking-[0.2em] mb-6">
                रचयिता — <Link to={`/words/${album.slug}/writer`} className="hover:text-muted-foreground transition-colors">{album.writer.penName}</Link>
              </p>
            )}
            <p className="text-muted-foreground/80 font-light max-w-md mx-auto leading-relaxed text-sm">
              {album.description}
            </p>
          </motion.div>

          {/* Album Art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative max-w-md mx-auto mb-24"
          >
            <div className="aspect-square bg-card border border-border/30 flex items-center justify-center overflow-hidden">
              <div className="text-center space-y-6 p-8">
                {album.coverSymbol && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    className="text-6xl md:text-7xl text-primary/40 font-serif"
                  >
                    {album.coverSymbol}
                  </motion.p>
                )}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="w-16 h-px bg-primary/20 mx-auto"
                />
                {album.coverSubtext && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="font-serif text-lg text-foreground/60"
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
              transition={{ duration: 1, delay: 0.4 }}
              className="max-w-lg mx-auto mb-24 text-center"
            >
              <div className="py-10 border-t border-b border-border/15">
                {album.dedication.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className={`font-quote italic leading-loose ${
                      i === 0
                        ? "text-foreground/60 text-base mb-2"
                        : "text-muted-foreground/40 text-sm"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Writer's Foreword (excerpt) */}
          {forewordExcerpt && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-lg mx-auto mb-24"
            >
              <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground/40 mb-8">
                कुछ बातें जो कहनी थीं
              </p>
              <div className="border-l border-primary/20 pl-6 space-y-4">
                {forewordExcerpt.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground/50 font-light leading-relaxed text-sm">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link
                to={`/words/${album.slug}/writer`}
                className="inline-block mt-6 text-[10px] tracking-[0.2em] uppercase text-muted-foreground/30 hover:text-muted-foreground transition-colors duration-300"
              >
                पूरी बात पढ़ें →
              </Link>
            </motion.div>
          )}

          {/* Stages & Bhajans */}
          {album.stages?.map((stage, si) => (
            <motion.div
              key={si}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 + si * 0.2 }}
              className="mb-20"
            >
              {/* Stage header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-border/15" />
                <div className="text-center">
                  <p className="text-[9px] tracking-[0.4em] uppercase text-primary/40">
                    {stage.title}
                  </p>
                  {stage.titleEn && (
                    <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground/25 mt-1">
                      {stage.titleEn}
                    </p>
                  )}
                </div>
                <div className="h-px flex-1 bg-border/15" />
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
              transition={{ duration: 1, delay: 0.7 }}
              className="max-w-lg mx-auto mb-20"
            >
              <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground/40 mb-8">
                Tracklist
              </p>
              <div className="space-y-0">
                {album.tracks.map((track, i) => (
                  <div
                    key={i}
                    className="py-4 border-b border-border/20 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] text-muted-foreground/30 font-light w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-light text-foreground/70">
                        {track.title}
                      </span>
                    </div>
                    {track.duration && (
                      <span className="text-[10px] text-muted-foreground/30">
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
              transition={{ duration: 1, delay: 1 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[9px] uppercase tracking-[0.4em] text-primary/50 px-5 py-2.5 border border-primary/15">
                Coming Soon
              </span>
            </motion.div>
          )}

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="w-12 h-px bg-border/30 mx-auto my-12"
          />

          {/* Closing Note */}
          {album.closingNote && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-center text-[11px] text-muted-foreground/40 font-light tracking-wide"
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
