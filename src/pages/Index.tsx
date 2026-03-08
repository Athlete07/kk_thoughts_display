import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import HeroSection from "@/components/HeroSection";
import GamingSection from "@/components/GamingSection";
import PoetrySection from "@/components/PoetrySection";
import Manifesto from "@/components/Manifesto";

const Index = () => {
  return (
    <>
      <FilmGrain />
      <FloatingOrbs />
      <Navbar />

      <main className="relative" id="worlds">
        <HeroSection />
        <PoetrySection />
        <GamingSection />
        <Manifesto />
      </main>

      <Footer />
    </>
  );
};

export default Index;
