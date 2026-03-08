import FadeInSection from "./FadeInSection";

const TechSection = () => {
  return (
    <section className="relative py-32 md:py-44">
      <div className="section-divider mb-32 md:mb-44" />

      <div className="max-w-3xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center">
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
            <p className="text-sm text-foreground mt-10 font-light italic">
              "The craft of building quietly informs everything else."
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default TechSection;
