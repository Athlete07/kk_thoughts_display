import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, BookOpen } from "lucide-react";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="text-center px-6 max-w-md mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            Page Not Found
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-foreground">404</h1>
          <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">
            The essay or page you are looking for doesn't exist or has moved.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/thoughts"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              <BookOpen size={14} />
              <span>Explore Essays</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 text-foreground text-xs uppercase tracking-wider hover:bg-muted/40 transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
