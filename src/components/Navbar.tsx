import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "The Mind", path: "/#passion" },
  { name: "The Discipline", path: "/#discipline" },
  { name: "The Man", path: "/about" },
  { name: "Thoughts", path: "/blog" },
  { name: "Connect", path: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path.includes("#")) {
      const hash = path.split("#")[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="fixed w-full z-40 py-8 px-8 flex justify-between items-center mix-blend-difference"
      >
        <Link
          to="/"
          className="font-serif text-sm tracking-[0.2em] text-foreground cursor-pointer z-50"
        >
          KRISHNA KUMAR YADLAPALLI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-[10px] font-sans tracking-[0.3em] uppercase text-muted-foreground z-50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`hover:text-foreground transition-colors ${
                location.pathname === link.path
                  ? "text-foreground border-b border-foreground/50"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="font-serif text-2xl tracking-widest text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;