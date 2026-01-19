import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import HeroSection from "@/components/HeroSection";
import GamingSection from "@/components/GamingSection";
import PoetrySection from "@/components/PoetrySection";
import TechSection from "@/components/TechSection";
import Manifesto from "@/components/Manifesto";

const Index = () => {
  return (
    <>
      <FilmGrain />
      <FloatingOrbs />
      <Navbar />

      <main className="relative" id="worlds">
        {/* Hero - The Opening */}
        <HeroSection />

        {/* Poetry First - The Heart */}
        <PoetrySection />

        {/* Games - The Mind */}
        <GamingSection />

        {/* Work - The Craft */}
        <TechSection />

        {/* Close - The Invitation */}
        <Manifesto />
      </main>

      <Footer />
    </>
  );
};

export default Index;
