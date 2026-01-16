import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-20"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block">
              Thoughts
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8">
              The Examined Life.
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl">
              Essays on discipline, cognition, and the intersection of athletic
              rigor with strategic thinking.
            </p>
          </motion.div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <FadeInSection key={post.id} delay={index * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block border border-border/30 bg-card/60 p-8 h-full hover:border-foreground/60 transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-widest text-primary mb-3 block">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-light text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </FadeInSection>
            ))}
          </div>

          {/* Newsletter Section */}
          <FadeInSection className="mt-32">
            <div className="bg-card border border-border/30 p-8 md:p-16 text-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6 block">
                Stay Connected
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Subscribe to the Newsletter.
              </h2>
              <p className="text-muted-foreground font-light mb-10 max-w-xl mx-auto">
                Occasional reflections on discipline, cognition, and the pursuit
                of potential. No spam. Just depth.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-background border border-border px-6 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="bg-foreground text-background px-8 py-4 text-xs uppercase tracking-widest hover:bg-primary transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blog;