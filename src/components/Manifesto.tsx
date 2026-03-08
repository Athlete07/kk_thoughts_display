import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const Manifesto = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-divider mb-16 md:mb-20" />

      <div className="max-w-3xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center">
            {/* Merged "By Day" content */}
            <span className="brand-tag text-primary mb-6 block">
              <span className="w-6 h-px bg-primary inline-block mr-3 align-middle" />
              By Day
              <span className="w-6 h-px bg-primary inline-block ml-3 align-middle" />
            </span>
            <p className="text-xl md:text-2xl text-foreground font-serif leading-relaxed max-w-md mx-auto mt-6">
              I work on software products
            </p>
            <p className="text-base text-muted-foreground font-light mt-4 max-w-md mx-auto leading-relaxed">
              Understanding what people need, then shaping ideas into things that ship.
            </p>

            <div className="w-16 h-px bg-primary/30 mx-auto my-14" />

            {/* Closing philosophy */}
            <p className="text-xl md:text-2xl text-foreground font-serif leading-relaxed mb-4">
              Not everyone needs to know everything about you.
            </p>
            <p className="text-lg md:text-xl text-primary font-serif leading-relaxed mb-14">
              Some people just need to feel something.
            </p>

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
