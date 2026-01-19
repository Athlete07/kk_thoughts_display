import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const Manifesto = () => {
  return (
    <section className="relative py-32 md:py-40">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center">
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12">
              Not everyone needs to know everything about you. 
              <span className="block mt-4 text-foreground/80">
                Some people just need to feel something.
              </span>
            </p>

            <div className="w-12 h-px bg-border mx-auto mb-12" />

            <Link
              to="/about"
              className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              If you're curious →
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Manifesto;
