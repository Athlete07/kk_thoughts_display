import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  LayoutGrid,
  List,
  Clock,
  ArrowRight,
  Filter,
  Sparkles,
} from "lucide-react";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { calculateReadingTime, getAllCategories } from "@/lib/thoughts";

type SortOption = "latest" | "oldest" | "quickest";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<SortOption>("latest");

  const categories = useMemo(() => ["All", ...getAllCategories()], []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blogPosts.length };
    blogPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredAndSortedPosts = useMemo(() => {
    let posts = blogPosts.filter((post) => {
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

    // Sorting
    return posts.sort((a, b) => {
      if (sortBy === "latest") return b.id - a.id;
      if (sortBy === "oldest") return a.id - b.id;
      if (sortBy === "quickest")
        return calculateReadingTime(a) - calculateReadingTime(b);
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const archiveSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Essays & Observations Library | Krishna Kumar Yadlapalli",
    description:
      "Complete library of essays and observations by Krishna Kumar Yadlapalli on software systems, human behavior, decision velocity, and craftsmanship.",
    url: "https://thekrishnakumar.com/thoughts",
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: "Krishna Kumar Yadlapalli",
      url: "https://thekrishnakumar.com/about",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://thekrishnakumar.com/thoughts/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <SEO
        title="Essays Archive"
        description="Explore the complete collection of essays and observations by Krishna Kumar Yadlapalli on software craft, human psychology, and decision velocity."
        canonicalUrl="/thoughts"
        ogType="website"
        keywords={[
          "Krishna Kumar Yadlapalli",
          "Essays Archive",
          "Software Engineering Thoughts",
          "Decision Making",
          "Observations",
        ]}
        schema={archiveSchema}
      />
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-14 text-center"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium block mb-4">
              Published Library
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-6">
              Essays & Observations
            </h1>
            <p className="text-muted-foreground font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Takeaways from what I observe, read, and understand. Written in the quiet hours when the noise stops.
            </p>
          </motion.div>

          {/* Controls Bar */}
          <div className="mb-10 space-y-6">
            {/* Search and view toggle */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search all essays..."
                  className="w-full bg-card border border-border/50 rounded-full pl-10 pr-4 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                {/* Sort selector */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-card border border-border/50 text-muted-foreground text-xs rounded-full px-3 py-1.5 outline-none focus:border-primary"
                >
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="quickest">Quickest Read</option>
                </select>

                {/* View toggle */}
                <div className="flex items-center border border-border/40 rounded-full p-0.5 bg-card">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-full transition-colors ${
                      viewMode === "grid"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    title="Grid view"
                  >
                    <LayoutGrid size={14} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-full transition-colors ${
                      viewMode === "list"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    title="List view"
                  >
                    <List size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((category) => {
                const count = categoryCounts[category] || 0;
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-[11px] tracking-wider uppercase px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-foreground text-background font-medium"
                        : "bg-card/70 text-muted-foreground hover:text-foreground border border-border/40"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                        isSelected
                          ? "bg-background/20 text-background"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-6 font-light">
            <span>
              Showing {filteredAndSortedPosts.length} of {blogPosts.length} thoughts
            </span>
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-primary hover:underline text-[11px] uppercase tracking-wider"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Posts View */}
          {filteredAndSortedPosts.length === 0 ? (
            <div className="py-24 text-center rounded-xl border border-border/30 bg-card/20">
              <p className="text-muted-foreground text-sm font-light mb-4">
                No thoughts found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-xs uppercase tracking-widest text-primary hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAndSortedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <Link
                    to={`/thoughts/${post.slug}`}
                    className="group flex flex-col justify-between h-full p-7 rounded-xl bg-card border border-border/40 hover:border-border/90 hover:bg-card/90 transition-all duration-300 shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 text-[10px] tracking-wider uppercase text-muted-foreground mb-3">
                        <span className="text-primary font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 font-light">
                          <Clock size={11} />
                          <span>{calculateReadingTime(post)} min</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <h2 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300 mb-3 leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground font-light text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-border/20 flex items-center justify-between text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="tracking-widest uppercase text-[10px]">
                        Read thought
                      </span>
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1.5 transition-transform duration-300 text-primary"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Minimalist Editorial List View */
            <div className="divide-y divide-border/30 border-y border-border/30">
              {filteredAndSortedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                >
                  <Link
                    to={`/thoughts/${post.slug}`}
                    className="group py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4 hover:bg-muted/15 px-4 -mx-4 rounded-lg transition-colors"
                  >
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex items-center gap-2 text-[10px] tracking-wider uppercase text-muted-foreground">
                        <span className="text-primary">{post.category}</span>
                        <span>•</span>
                        <span>{calculateReadingTime(post)} min read</span>
                      </div>
                      <h2 className="font-serif text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-light flex-shrink-0">
                      <span>{post.date}</span>
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
