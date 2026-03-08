import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-7xl font-serif text-foreground mb-6">404</h1>
          <p className="text-lg text-muted-foreground font-light mb-10">
            This page doesn't exist.
          </p>
          <Link
            to="/"
            className="text-[11px] tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors duration-500"
          >
            Return Home →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
