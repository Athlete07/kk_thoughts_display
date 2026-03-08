import FadeInSection from "./FadeInSection";

const TechSection = () => {
  return (
    <section className="relative py-32 md:py-40 bg-card/30">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-6">
              By Day
            </span>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
              I work on software products—understanding what people need, 
              then shaping ideas into things that ship.
            </p>
            <p className="text-sm text-muted-foreground mt-8 font-light">
              The craft of building quietly informs everything else.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default TechSection;
