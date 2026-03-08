import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const Manifesto = () => {
  return (
    <section className="relative py-32 md:py-44">
      <div className="section-divider mb-32 md:mb-44" />

      <div className="max-w-3xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center">
            <p className="text-xl md:text-2xl text-foreground font-serif leading-relaxed mb-4">
              Not everyone needs to know everything about you.
            </p>
            <p className="text-lg md:text-xl text-primary font-serif leading-relaxed mb-14">
              Some people just need to feel something.
            </p>

            <div className="w-16 h-px bg-primary/30 mx-auto mb-14" />

            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors duration-500 font-medium"
            >
              If you're curious
              <span className="text-primary">→</span>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Manifesto;
