import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Search,
  Sparkles,
  BookOpen,
} from "lucide-react";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FadeInSection from "@/components/FadeInSection";
import SEO from "@/components/SEO";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { calculateReadingTime, getAllCategories, getPostWordCount } from "@/lib/thoughts";

// 3 Curated Essential Essays for First-Time High-Profile Visitors
const ESSENTIAL_SLUGS = [
  "the-quiet-edge-of-i-have-to-win",
  "first-principle-thinking",
  "why-people-avoid-decisions",
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => ["All", ...getAllCategories()], []);

  // Selected essays
  const essentialPosts = useMemo(() => {
    return ESSENTIAL_SLUGS.map((slug) =>
      blogPosts.find((p) => p.slug === slug)
    ).filter(Boolean) as BlogPost[];
  }, []);

  // Filtered essays for chronological list
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const indexSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://thekrishnakumar.com/#website",
        "url": "https://thekrishnakumar.com/",
        "name": "Krishna Kumar Yadlapalli | Essays & Observations",
        "description":
          "Personal publication of Krishna Kumar Yadlapalli. Takeaways on building software, human behavior, and high-agency decisions.",
        "publisher": {
          "@id": "https://thekrishnakumar.com/#author",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "Person",
        "@id": "https://thekrishnakumar.com/#author",
        "name": "Krishna Kumar Yadlapalli",
        "alternateName": "Krishna Kumar",
        "url": "https://thekrishnakumar.com",
        "image": "https://thekrishnakumar.com/krishna.png",
        "description":
          "Software builder and essayist sharing takeaways on systems, code, decision velocity, and human behavior.",
        "jobTitle": "Software Builder & Essayist",
        "sameAs": [
          "https://twitter.com/krishnakumar",
          "https://linkedin.com/in/krishnakumar",
          "https://github.com/krishnakumar",
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="Essays & Observations"
        description="Personal publication of Krishna Kumar Yadlapalli. Takeaways on building software, human behavior, decision velocity, and high-agency leadership."
        canonicalUrl="/"
        ogType="website"
        keywords={[
          "Krishna Kumar Yadlapalli",
          "Krishna Kumar",
          "Essays",
          "Software Engineering",
          "Decision Velocity",
          "Human Behavior",
          "Tech Observations",
        ]}
        schema={indexSchema}
      />
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen">
        {/* Editorial Single-Fold Hero */}
        <HeroSection
          onExploreClick={() => {
            document
              .getElementById("essays-archive")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Essential Reading: 3 Curated Essays */}
        <section className="py-16 md:py-20 border-b border-border/30">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInSection>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-primary font-medium block mb-1">
                    Start Here
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                    Selected Essays
                  </h2>
                </div>
                <span className="text-xs text-muted-foreground/60 font-light hidden sm:inline">
                  3 core perspectives
                </span>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {essentialPosts.map((post, idx) => (
                <FadeInSection key={post.slug} delay={idx * 0.08}>
                  <Link
                    to={`/thoughts/${post.slug}`}
                    className="p-6 rounded-2xl bg-card border border-border/40 hover:border-border/90 hover:bg-card/80 transition-all duration-300 flex flex-col justify-between h-full group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground font-light">
                        <span className="uppercase tracking-widest text-[10px] font-mono text-primary/90">
                          {post.category}
                        </span>
                        <span>{calculateReadingTime(post)} min</span>
                      </div>

                      <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-4">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-border/20 flex items-center gap-1.5 text-xs text-primary font-medium group-hover:translate-x-0.5 transition-transform">
                      <span>Read essay</span>
                      <ArrowRight size={13} />
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Chronological Archive */}
        <section id="essays-archive" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            {/* Header + Search Bar */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-border/30">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-medium block mb-1">
                  Chronological Library
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                  All Essays & Observations
                </h2>
              </div>

              {/* In-page Search */}
              <div className="relative w-full sm:w-64">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Filter essays..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/80 transition-colors"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap text-xs transition-colors ${
                    selectedCategory === cat
                      ? "bg-foreground text-background font-medium"
                      : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Essay Rows List */}
            {filteredPosts.length === 0 ? (
              <div className="py-16 text-center text-muted-foreground text-sm font-light">
                No essays match your filter.
              </div>
            ) : (
              <div className="divide-y divide-border/25">
                {filteredPosts.map((post, idx) => (
                  <FadeInSection key={post.slug} delay={Math.min(idx * 0.03, 0.2)}>
                    <Link
                      to={`/thoughts/${post.slug}`}
                      className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 group hover:translate-x-1 transition-transform duration-200 block"
                    >
                      <div className="space-y-1 sm:max-w-2xl">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground/70 font-light">
                          <span className="font-mono text-[10px] uppercase text-primary/80">
                            {post.category}
                          </span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{calculateReadingTime(post)} min read</span>
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-light line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                        <span>Read</span>
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  </FadeInSection>
                ))}
              </div>
            )}

            {/* Quiet Colophon / Invitation */}
            <FadeInSection delay={0.15}>
              <div className="mt-20 pt-10 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-muted-foreground font-light">
                <div>
                  <p className="text-foreground font-medium font-serif text-sm mb-1">
                    Have thoughts on an essay?
                  </p>
                  <p>
                    I read every note. Write directly to{" "}
                    <a
                      href="mailto:boltfocus7@gmail.com"
                      className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                    >
                      boltfocus7@gmail.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    to="/about"
                    className="text-foreground hover:text-primary transition-colors uppercase tracking-widest text-[10px]"
                  >
                    About Krishna →
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
