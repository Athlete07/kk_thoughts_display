import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

const blogPosts = [
  {
    id: 1,
    title: "The Paradox of Preparation",
    excerpt:
      "Why the athletes who train the hardest often seem the most effortless. A meditation on invisible labor and visible grace.",
    date: "December 2024",
    category: "Philosophy",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cognitive Load & Decision Fatigue",
    excerpt:
      "Exploring how video games can serve as diagnostic tools for understanding our mental bandwidth and biases.",
    date: "November 2024",
    category: "Cognitive Science",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Architecture of Resilience",
    excerpt:
      "What enterprise risk management teaches us about building anti-fragile systems—in business and in life.",
    date: "October 2024",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Rhythm Between Hurdles",
    excerpt:
      "Three steps, then leap. How the 110m hurdles became my framework for approaching any complex challenge.",
    date: "September 2024",
    category: "Athletics",
    image:
      "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800&auto=format&fit=crop",
  },
];

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

          {/* Featured Post */}
          <FadeInSection className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative group overflow-hidden aspect-[4/3]">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover noir-photo group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest bg-background/80 px-3 py-1 text-foreground">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:pl-8">
                <span className="text-[10px] uppercase tracking-widest text-primary mb-4 block">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground font-light text-lg mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/50">
                    {blogPosts[0].date}
                  </span>
                  <button className="group/btn inline-flex items-center gap-2 text-foreground text-sm tracking-widest uppercase hover:text-primary transition-colors">
                    Read Article
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-20" />

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <FadeInSection key={post.id} delay={index * 0.1}>
                <article className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/3] mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover noir-photo group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-xs text-muted-foreground/50">
                    {post.date}
                  </span>
                </article>
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