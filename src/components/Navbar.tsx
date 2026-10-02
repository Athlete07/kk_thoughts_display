import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import SearchDialog from "./SearchDialog";

const navLinks = [
  { name: "Essays", path: "/thoughts" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/say-hello" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 right-0 z-40 py-5 px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/40 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Personal Brand */}
          <Link to="/" className="group flex items-center gap-3 z-50">
            <span className="w-2 h-2 rounded-full bg-primary/90 group-hover:scale-125 transition-transform" />
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
                Krishna Kumar Yadlapalli
              </span>
              <span className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground/80 -mt-0.5">
                Essays & Observations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full border border-border/40 hover:border-border/80 bg-muted/20"
              title="Search essays (⌘K)"
            >
              <Search size={13} />
              <span>Search</span>
              <kbd className="text-[9px] font-mono opacity-60 ml-1">⌘K</kbd>
            </button>

            {navLinks.map((link) => {
              const isActive =
                link.path === "/thoughts"
                  ? location.pathname === "/thoughts" || location.pathname.startsWith("/thoughts/")
                  : location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-colors duration-300 ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden z-50">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-muted-foreground hover:text-foreground"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <button
              className="text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Global Search Modal */}
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-background/98 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <div className="max-w-sm mx-auto w-full flex flex-col gap-8 text-center">
              <div className="mb-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary block mb-2 font-medium">
                  Index
                </span>
                <div className="w-8 h-[1px] bg-border mx-auto" />
              </div>

              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-3xl tracking-wide transition-colors ${
                  location.pathname === "/" ? "text-primary" : "text-foreground"
                }`}
              >
                Home
              </Link>

              {navLinks.map((link) => {
                const isActive =
                  link.path === "/thoughts"
                    ? location.pathname === "/thoughts" || location.pathname.startsWith("/thoughts/")
                    : location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-3xl tracking-wide transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="mt-8 pt-8 border-t border-border/40">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground py-2 px-5 rounded-full border border-border/40"
                >
                  <Search size={14} />
                  <span>Search essays</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
