import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-serif text-lg text-foreground">Krishna Kumar</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8 text-[10px] tracking-[0.2em] uppercase">
            <Link to="/poetry" className="text-muted-foreground hover:text-foreground transition-colors">
              Words
            </Link>
            <Link to="/gaming" className="text-muted-foreground hover:text-foreground transition-colors">
              Games
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Say Hello
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] text-muted-foreground/40 tracking-widest">
            © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
