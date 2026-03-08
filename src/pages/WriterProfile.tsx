import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAlbumBySlug } from "@/data/albums";
import NotFound from "./NotFound";

const WriterProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const album = slug ? getAlbumBySlug(slug) : undefined;

  if (!album || !album.writer) return <NotFound />;

  const { writer } = album;

  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link
              to={`/words/${album.slug}`}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              ← {album.title}
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-20 text-center"
          >
            <p className="text-muted-foreground text-[10px] tracking-[0.5em] uppercase mb-8">
              रचयिता
            </p>
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
              {writer.penName}
            </h1>
            <p className="text-muted-foreground text-sm tracking-wide">
              {album.title} · {album.year}
            </p>
          </motion.div>

          {/* Foreword */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-24"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-10 font-medium">
              कुछ बातें जो कहनी थीं
            </p>
            <div className="space-y-6">
              {writer.foreword.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground font-light leading-[1.9] text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="w-16 h-px bg-border mx-auto mb-24"
          />

          {/* Closing Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-20"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-10 font-medium">
              अंत में
            </p>
            <div className="border-l-2 border-primary/40 pl-6 space-y-6">
              {writer.closingNote.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground font-light leading-[1.9] text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-10 text-foreground text-sm">
              — {writer.penName}
            </p>
          </motion.div>

          {/* Back to album */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center"
          >
            <Link
              to={`/words/${album.slug}`}
              className="text-xs tracking-widest uppercase text-primary hover:text-foreground transition-colors duration-300"
            >
              भजन पढ़ें →
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default WriterProfile;
