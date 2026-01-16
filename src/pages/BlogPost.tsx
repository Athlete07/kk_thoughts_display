import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
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

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs uppercase tracking-widest mb-12"
          >
            <ArrowLeft size={16} /> Back to Thoughts
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              {post.title}
            </h1>
            <p className="text-xs text-muted-foreground/50 mt-6">{post.date}</p>
          </motion.div>

          <FadeInSection>
            <div className="space-y-12">
              {post.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-2xl font-serif text-foreground mb-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
