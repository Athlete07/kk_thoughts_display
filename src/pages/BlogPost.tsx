import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Share2,
  Copy,
  Check,
  Twitter,
  Linkedin,
  BookOpen,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { toast } from "sonner";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import SEO from "@/components/SEO";
import { blogPosts, type BlogPost as BlogPostType } from "@/data/blogPosts";
import {
  calculateReadingTime,
  getPostWordCount,
  getAdjacentPosts,
  getRelatedPosts,
} from "@/lib/thoughts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((item) => item.slug === slug);
  const [copied, setCopied] = useState(false);

  // Reading progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!post) {
    return <NotFound />;
  }

  const readingTime = calculateReadingTime(post);
  const wordCount = getPostWordCount(post);
  const { prev, next } = getAdjacentPosts(post.slug);
  const relatedPosts = getRelatedPosts(post.slug, 2);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`"${post.title}" by Krishna Kumar`);
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thekrishnakumar.com/thoughts/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: "Krishna Kumar Yadlapalli",
      jobTitle: "Software Builder & Essayist",
      url: "https://thekrishnakumar.com/about",
      image: "https://thekrishnakumar.com/krishna.png",
      sameAs: [
        "https://twitter.com/krishnakumar",
        "https://linkedin.com/in/krishnakumar",
        "https://github.com/krishnakumar",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Krishna Kumar Yadlapalli",
      url: "https://thekrishnakumar.com",
    },
    keywords: [
      post.category,
      "Krishna Kumar Yadlapalli",
      "Essays",
      "Engineering",
      "Software Architecture",
      "Human Behavior",
      "Observations",
    ],
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`/thoughts/${post.slug}`}
        ogType="article"
        publishedTime={post.date}
        keywords={[
          post.category,
          "Krishna Kumar Yadlapalli",
          "Essays",
          "Engineering",
          "Observations",
        ]}
        schema={postSchema}
      />

      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back to thoughts link */}
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              to="/thoughts"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-widest group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span>All Essays</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <header className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-muted-foreground">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-[11px]">
                  {post.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-light">
                  <Clock size={12} />
                  {readingTime} min read ({wordCount} words)
                </span>
                <span>•</span>
                <span className="font-light">{post.date}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.2] tracking-tight">
                {post.title}
              </h1>

              {/* Author byline */}
              <div className="pt-2 pb-6 border-b border-border/40 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/krishna.png"
                    alt="Krishna Kumar"
                    className="w-10 h-10 rounded-full object-cover grayscale border border-border"
                  />
                  <div>
                    <p className="text-sm font-serif text-foreground">
                      Krishna Kumar Yadlapalli
                    </p>
                    <p className="text-xs text-muted-foreground font-light">
                      Builder & Essayist
                    </p>
                  </div>
                </div>

                {/* Share Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-full transition-colors"
                    title="Copy link"
                  >
                    {copied ? (
                      <Check size={16} className="text-green-500" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                  <button
                    onClick={shareOnTwitter}
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-full transition-colors"
                    title="Share on X"
                  >
                    <Twitter size={16} />
                  </button>
                  <button
                    onClick={shareOnLinkedIn}
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-full transition-colors"
                    title="Share on LinkedIn"
                  >
                    <Linkedin size={16} />
                  </button>
                </div>
              </div>

              {/* Thesis / Excerpt Callout */}
              {post.excerpt && (
                <div className="p-6 rounded-xl bg-card border-l-2 border-primary border-y border-r border-border/40 text-foreground/90 font-serif italic text-base md:text-lg leading-relaxed">
                  &ldquo;{post.excerpt}&rdquo;
                </div>
              )}
            </motion.div>
          </header>

          {/* Body Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-12"
          >
            {post.sections.map((section, sIndex) => (
              <section key={sIndex} className="space-y-6">
                {section.heading && (
                  <h2 className="font-serif text-xl md:text-2xl text-foreground pt-4 pb-2 border-b border-border/20">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-6">
                  {section.body.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-foreground/90 font-light text-base md:text-lg leading-[1.95] tracking-wide"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </motion.div>

          {/* End of article signature & dialog invite */}
          <div className="mt-20 pt-10 border-t border-border/30 space-y-8">
            <div className="p-8 rounded-2xl bg-card border border-border/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1.5 text-center sm:text-left">
                <h4 className="font-serif text-lg text-foreground">
                  Have a reflection on this essay?
                </h4>
                <p className="text-muted-foreground font-light text-xs md:text-sm">
                  Whether you agree, disagree, or wish to share your own observation—my inbox is always open.
                </p>
              </div>
              <Link
                to="/say-hello"
                className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors whitespace-nowrap shadow-sm"
              >
                Say Hello
              </Link>
            </div>

            {/* Next / Previous Essay Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {prev ? (
                <Link
                  to={`/thoughts/${prev.slug}`}
                  className="p-5 rounded-xl border border-border/40 bg-card hover:border-border/80 transition-all group flex flex-col justify-between"
                >
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-1 group-hover:text-primary transition-colors">
                    <ArrowLeft size={12} />
                    <span>Previous Essay</span>
                  </span>
                  <p className="font-serif text-sm md:text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {next ? (
                <Link
                  to={`/thoughts/${next.slug}`}
                  className="p-5 rounded-xl border border-border/40 bg-card hover:border-border/80 transition-all group flex flex-col justify-between text-right"
                >
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 flex items-center justify-end gap-1 group-hover:text-primary transition-colors">
                    <span>Next Essay</span>
                    <ArrowRight size={12} />
                  </span>
                  <p className="font-serif text-sm md:text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {next.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* More Thoughts to Read */}
            {relatedPosts.length > 0 && (
              <div className="pt-12">
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-6 font-medium">
                  More Thoughts to Explore
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      to={`/thoughts/${related.slug}`}
                      className="p-6 rounded-xl border border-border/40 bg-card hover:border-border/80 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
                          <span className="text-primary font-medium">
                            {related.category}
                          </span>
                          <span>•</span>
                          <span>{calculateReadingTime(related)} min read</span>
                        </div>
                        <h4 className="font-serif text-base text-foreground group-hover:text-primary transition-colors mb-2">
                          {related.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2 font-light">
                          {related.excerpt}
                        </p>
                      </div>
                      <span className="pt-4 text-[10px] uppercase tracking-widest text-primary flex items-center gap-1 mt-2">
                        <span>Read</span>
                        <ArrowRight size={12} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
