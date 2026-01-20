import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Games", path: "/gaming" },
  { name: "Words", path: "/poetry" },
  { name: "About", path: "/about" },
  { name: "Thoughts", path: "/blog" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed w-full z-40 py-6 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo - Minimal */}
          <Link to="/" className="z-50">
            <span className="font-serif text-lg text-foreground hover:text-foreground/70 transition-colors">
              Krishna Kumar Yadlapalli
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.2em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-muted-foreground hover:text-foreground transition-colors duration-300 ${
                  location.pathname === link.path ? "text-foreground" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Say Hello
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-2xl tracking-wide transition-colors ${
                      location.pathname === link.path
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  Say Hello
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
