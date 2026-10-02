import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-border/40 bg-background/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-serif text-xl text-foreground">
              Krishna Kumar Yadlapalli
            </h3>
            <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-sm">
              I observe situations, study human behavior and incentives, and write down the takeaways once the noise clears.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-foreground font-medium mb-4">
              Index
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/thoughts" className="text-muted-foreground hover:text-foreground transition-colors">
                  Essays & Notes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/say-hello" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-foreground font-medium mb-4">
              Network
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a
                  href="https://www.linkedin.com/in/krishnakumaryadlapalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} className="opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/krishnakumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight size={12} className="opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:boltfocus7@gmail.com"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>Direct Email</span>
                  <ArrowUpRight size={12} className="opacity-70" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60 font-light">
          <p>© {new Date().getFullYear()} Krishna Kumar Yadlapalli. All writings & observations reserved.</p>
          <p className="italic font-serif">Written in the quiet hours.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
