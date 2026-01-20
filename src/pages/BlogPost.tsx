import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/thoughts"
              className="inline-flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors text-[10px] uppercase tracking-[0.2em] mb-16"
            >
              <ArrowLeft size={12} />
              Back
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/40 mb-6 block">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-6 leading-relaxed">
              {post.title}
            </h1>
            <p className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.2em]">
              {post.date}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-12"
          >
            {post.sections.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h2 className="font-serif text-lg text-foreground mb-6">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-6">
                  {section.body.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-muted-foreground/80 font-light leading-[1.9] text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Footer Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 pt-12 border-t border-border/20"
          >
            <Link
              to="/thoughts"
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors text-[10px] uppercase tracking-[0.2em]"
            >
              ← More thoughts
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
