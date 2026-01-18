import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "LinkedIn", url: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-primary flex items-center justify-center">
                <span className="font-display text-primary text-xl">K</span>
              </div>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-foreground">
                Krishna Kumar
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Shayar. Cognitive game builder. Product person. Former state-level athlete.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6 block">Navigate</span>
            <div className="flex flex-wrap md:justify-center gap-x-8 gap-y-3">
              {[
                { name: "Shayari", path: "/poetry" },
                { name: "Games", path: "/gaming" },
                { name: "About", path: "/about" },
                { name: "Connect", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6 block">Connect</span>
            <div className="flex md:justify-end gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  {link.name}
                  <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
            © 2025 Krishna Kumar
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-muted-foreground/50 tracking-widest">
              Words • Games • Products
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
