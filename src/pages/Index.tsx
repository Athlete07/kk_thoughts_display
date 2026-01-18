import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import HeroSection from "@/components/HeroSection";
import GamingSection from "@/components/GamingSection";
import PoetrySection from "@/components/PoetrySection";
import AthleticsSection from "@/components/AthleticsSection";
import TechSection from "@/components/TechSection";
import Manifesto from "@/components/Manifesto";

const Index = () => {
  return (
    <>
      <FilmGrain />
      <FloatingOrbs />
      <Navbar />

      <main className="relative" id="worlds">
        {/* HERO - The Opening Statement */}
        <HeroSection />

        {/* GAMING - 30% - Red Bull Energy */}
        <GamingSection />

        {/* POETRY - 30% - Editorial Artistry */}
        <PoetrySection />

        {/* ATHLETICS - 20% - Nike Discipline */}
        <AthleticsSection />

        {/* TECHNOLOGY - 20% - Apple Minimalism */}
        <TechSection />

        {/* MANIFESTO - The Brand Statement */}
        <Manifesto />
      </main>

      <Footer />
    </>
  );
};

export default Index;