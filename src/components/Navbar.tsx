import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Feather } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gaming", path: "/gaming" },
  { name: "Poetry", path: "/poetry" },
  { name: "The Artist", path: "/about" },
  { name: "Reflections", path: "/blog" },
  { name: "Connect", path: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed w-full z-40 py-6 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group z-50"
          >
            <Feather className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-serif text-sm md:text-base tracking-[0.15em] text-foreground">
              KRISHNA KUMAR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-sans tracking-[0.2em] uppercase text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 hover:text-foreground transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : ""
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-primary via-primary to-transparent"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background/98 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-3xl tracking-wider transition-colors ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 font-signature text-4xl text-muted-foreground"
            >
              कृष्ण
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;