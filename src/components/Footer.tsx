import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-12 border-t border-border/20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-foreground mb-8">
          Join the Conversation.
        </h2>
        <p className="text-muted-foreground font-light mb-10">
          I am always looking to connect with fellow athletes, thinkers, and
          builders. Let's discuss the future of human performance.
        </p>

        <a
          href="mailto:o0krissh0o@gmail.com"
          className="text-xl font-sans tracking-widest text-foreground border-b border-foreground/20 pb-2 hover:border-foreground transition-colors"
        >
          o0krissh0o@gmail.com
        </a>

        <div className="flex justify-center gap-8 mt-12 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://researchgate.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            ResearchGate
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Twitter
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        <p className="mt-16 text-[10px] text-foreground/20">
          Designed with Intention. © 2025 Krishna Kumar Yadlapalli.
        </p>
      </div>
    </footer>
  );
};

export default Footer;