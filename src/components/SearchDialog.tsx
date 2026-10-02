import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { calculateReadingTime } from "@/lib/thoughts";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) {
          onClose();
        } else {
          // Open handled outside or toggled
        }
      }
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Reset query on close
  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  const filteredPosts = blogPosts.filter((post) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    const titleMatch = post.title.toLowerCase().includes(q);
    const excerptMatch = post.excerpt.toLowerCase().includes(q);
    const categoryMatch = post.category.toLowerCase().includes(q);
    const bodyMatch = post.sections.some((s) =>
      s.body.some((p) => p.toLowerCase().includes(q))
    );
    return titleMatch || excerptMatch || categoryMatch || bodyMatch;
  });

  const handleSelect = (slug: string) => {
    onClose();
    navigate(`/thoughts/${slug}`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 md:pt-28 px-4 bg-background/80 backdrop-blur-md animate-fade-in"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl bg-card border border-border/60 shadow-2xl rounded-xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-border/40 gap-3">
          <Search size={18} className="text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search essays, thoughts, themes (e.g. mindset, win, love)..."
            autoFocus
            className="w-full bg-transparent text-sm md:text-base text-foreground placeholder:text-muted-foreground/60 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-muted-foreground hover:text-foreground p-1"
            >
              <X size={16} />
            </button>
          )}
          <kbd className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50">
            Esc
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-border/20 p-2">
          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground text-sm font-light">
              No essays found matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => handleSelect(post.slug)}
                className="w-full text-left p-3.5 rounded-lg hover:bg-muted/40 transition-colors group flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] tracking-wider uppercase text-muted-foreground">
                    <span className="text-primary font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{calculateReadingTime(post)} min read</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h4 className="font-serif text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground/80 line-clamp-1 font-light">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-muted/20 border-t border-border/30 flex items-center justify-between text-[11px] text-muted-foreground font-light">
          <span className="flex items-center gap-1.5">
            <BookOpen size={13} />
            <span>{blogPosts.length} essays published</span>
          </span>
          <span>Select to read</span>
        </div>
      </div>
    </div>
  );
}
