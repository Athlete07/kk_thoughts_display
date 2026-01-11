import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import FadeInSection from "@/components/FadeInSection";

const artifacts = [
  {
    src: "https://images.unsplash.com/photo-1599831295251-1d57564d2629?q=80&w=800&auto=format&fit=crop",
    alt: "Stopwatch",
    label: "Precision",
    offset: false,
  },
  {
    src: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    alt: "Notebook",
    label: "Planning",
    offset: true,
  },
  {
    src: "https://images.unsplash.com/photo-1516422867086-2df47e271239?q=80&w=800&auto=format&fit=crop",
    alt: "Track Spikes",
    label: "Grit",
    offset: false,
  },
  {
    src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop",
    alt: "Strategy",
    label: "Logic",
    offset: true,
  },
];

const About = () => {
  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-20">
        {/* Back Button */}
        <div className="fixed top-24 left-6 md:left-12 z-30">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs uppercase tracking-widest mix-blend-difference"
          >
            <ArrowLeft size={16} /> Return
          </Link>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-32 text-center relative pt-12"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block">
              The Narrative
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-foreground mb-12 leading-tight">
              Identity is an <br />
              <span className="italic text-muted-foreground">Action.</span>
            </h1>

            <div className="max-w-3xl mx-auto text-xl md:text-2xl font-light text-foreground leading-relaxed">
              <p className="mb-8">
                "I am not defined by a single title. I am the sum of my
                disciplines. The athlete's grit, the strategist's vision, and
                the architect's precision."
              </p>
            </div>

            <div className="h-px w-24 bg-foreground/20 mx-auto mt-12" />
          </motion.div>

          {/* CHAPTER 1: THE FORGE */}
          <FadeInSection className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-40 items-center">
            <div className="md:col-span-6 relative group">
              <div className="aspect-[4/5] overflow-hidden bg-card relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
                  className="w-full h-full object-cover noir-photo group-hover:scale-105 transition-transform duration-1000"
                  alt="The Start Line"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <span className="block text-4xl font-serif text-foreground mb-2">
                    01
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    The Forge
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
                The 110m Hurdles.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  The track was my first classroom. It taught me that{" "}
                  <strong className="text-foreground">gravity is honest</strong>
                  . In the 110m hurdles, you cannot fake technique. If you
                  hesitate, you crash.
                </p>
                <p>
                  This discipline forged my character. It taught me to love the
                  monotony of practice. To respect the clock. To understand that
                  "glory" is just a split-second byproduct of years of unseen
                  labor.
                </p>
                <p className="text-foreground italic border-l border-primary pl-6 py-2 my-6">
                  "I don't just run. I calculate rhythm under extreme pressure."
                </p>
                <p>
                  Whether I am analyzing a business risk or coding a cognitive
                  test, I bring this same "start-line intensity" to the table.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* CHAPTER 2: THE ARENA */}
          <FadeInSection className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-40 items-center">
            <div className="md:col-span-6 md:order-2 relative group">
              <div className="aspect-[4/5] overflow-hidden bg-card relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                  className="w-full h-full object-cover noir-photo group-hover:scale-105 transition-transform duration-1000"
                  alt="Corporate Strategy"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <span className="block text-4xl font-serif text-foreground mb-2">
                    02
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    The Arena
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 md:order-1 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
                The Art of Structure.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  The corporate landscape of{" "}
                  <strong className="text-foreground">ServiceNow</strong>
                  —specifically{" "}
                  <strong className="text-foreground">
                    Integrated Risk Management (IRM)
                  </strong>{" "}
                  and{" "}
                  <strong className="text-foreground">
                    Strategic Portfolio Management (SPM)
                  </strong>
                  —became my canvas.
                </p>
                <p>
                  I do not view this as mere "consulting." I view it as the
                  architecture of resilience. An enterprise is a living
                  organism; risk is its pulse, and strategy is its intent.
                </p>
                <p>
                  My craft involves harmonizing these forces. I look at chaotic
                  regulatory environments and see patterns waiting to be
                  resolved. I take the complexity of a global portfolio and
                  sculpt it into a singular, flowing narrative of execution. It
                  is about creating clarity where there was once confusion.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* CHAPTER 3: THE PASSION */}
          <FadeInSection className="relative mb-40">
            <div className="absolute inset-0 bg-card opacity-50 z-0" />
            <div className="relative z-10 bg-background border border-border/30 p-8 md:p-20 text-center overflow-hidden group">
              {/* Abstract Background */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1000&auto=format&fit=crop"
                  className="w-full h-full object-cover grayscale"
                  alt="Neural Network"
                />
              </div>

              <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block relative z-10">
                03 — The Synthesis
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-10 relative z-10">
                The Gym for the Mind.
              </h2>

              <div className="max-w-3xl mx-auto text-xl text-foreground font-light leading-relaxed relative z-10">
                <p className="mb-8">
                  "We track our steps. We track our calories. But we rarely
                  track our thoughts."
                </p>
                <p className="text-muted-foreground text-lg">
                  Cognitive Gaming is my answer to the unquantified mind. It is
                  a space where failure is data, and reaction time is currency.
                  I built this to help people understand their own operating
                  systems—to see their biases, their strengths, and their
                  potential in high-definition.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* ARTIFACTS */}
          <FadeInSection className="mb-40">
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Evidence of Process
              </span>
              <h2 className="text-3xl font-serif text-foreground mt-4">
                Artifacts of Discipline.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {artifacts.map((artifact) => (
                <div
                  key={artifact.label}
                  className={`group relative aspect-square bg-card overflow-hidden cursor-crosshair ${
                    artifact.offset ? "mt-8 md:mt-0" : ""
                  }`}
                >
                  <img
                    src={artifact.src}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale"
                    alt={artifact.alt}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/60">
                    <span className="text-xs font-mono uppercase tracking-widest text-foreground border border-border/30 px-3 py-1">
                      {artifact.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-[10px] text-muted-foreground italic">
                "The tools change. The standard does not."
              </p>
            </div>
          </FadeInSection>

          {/* THE PROMISE */}
          <FadeInSection className="max-w-3xl mx-auto text-center mb-32">
            <div className="text-3xl text-primary mb-8">✦</div>
            <h3 className="font-serif text-3xl text-foreground mb-10">
              A Note on Trust
            </h3>
            <div className="space-y-8 text-xl font-quote italic text-foreground leading-relaxed">
              <p>
                "Trust is not a contract; it is a frequency. It is the quiet
                understanding that comes from unwavering consistency."
              </p>
              <p>
                "I share my journey here not to impress, but to connect. To find
                those who also value depth over speed, and principle over
                convenience. If you see a reflection of your own values in my
                work, then we have already met."
              </p>
            </div>

            <div className="mt-20">
              <p className="font-signature text-5xl text-foreground/90 transform -rotate-2">
                Krishna Kumar
              </p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-4">
                Bangalore • Global
              </p>
            </div>
          </FadeInSection>

          {/* Final CTA */}
          <div className="text-center pb-20">
            <p className="text-muted-foreground text-sm mb-6">
              If this resonates with you...
            </p>
            <a
              href="mailto:o0krissh0o@gmail.com"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all"
            >
              <span>Say Hello</span>
              <Mail className="group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;