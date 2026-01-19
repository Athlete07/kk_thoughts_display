import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
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
              Thoughts
            </p>
            <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              Notes on living, building, and being.
            </h1>
            <p className="text-muted-foreground/80 font-light max-w-md mx-auto">
              Reflections that have stayed with me. Some personal, some philosophical. 
              Most written in the quiet hours.
            </p>
          </motion.div>

          {/* Post List - Minimal */}
          <div className="space-y-0">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block py-8 border-b border-border/30 last:border-b-0"
                >
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/40 mb-4 block">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg text-foreground mb-3 group-hover:text-muted-foreground transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground/60 font-light text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
