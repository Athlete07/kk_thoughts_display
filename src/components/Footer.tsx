import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <p className="font-serif text-sm text-foreground tracking-wide">
            Krishna Kumar Yadlapalli
          </p>
          <div className="flex items-center gap-8 text-[10px] tracking-[0.2em] uppercase">
            <Link to="/words" className="text-muted-foreground hover:text-foreground transition-colors">Verses</Link>
            <Link to="/games" className="text-muted-foreground hover:text-foreground transition-colors">Games</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/say-hello" className="text-muted-foreground hover:text-foreground transition-colors">Say Hello</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026
          </p>
          <div className="flex items-center gap-8 text-[10px] tracking-[0.2em] uppercase">
            <a href="https://www.linkedin.com/in/krishnakumaryadlapalli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://x.com/krishnakumar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
