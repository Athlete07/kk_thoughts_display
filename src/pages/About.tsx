import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import FadeInSection from "@/components/FadeInSection";

const principles = [
  {
    title: "Calm",
    description: "Reduce noise so the next decision feels obvious.",
  },
  {
    title: "Discipline",
    description: "Build habits that hold under real pressure.",
  },
  {
    title: "Results",
    description: "Measure what changed and make it repeatable.",
  },
];

const chapters = [
  {
    title: "Athlete",
    description:
      "The track taught me precision, timing, and how to win before the gun goes off.",
  },
  {
    title: "Architect",
    description:
      "In enterprise work, I design systems that keep teams aligned and moving.",
  },
  {
    title: "Builder",
    description:
      "Cognitive Gaming is my way of training the mind to decide well.",
  },
];

const focusAreas = [
  {
    title: "ServiceNow",
    description: "Clear systems that reduce friction at scale.",
  },
  {
    title: "Agile Delivery",
    description: "Execution that keeps momentum real.",
  },
  {
    title: "Performance",
    description: "Decision training for high-stakes teams.",
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
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center mb-24 pt-12"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block">
                The Man
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 leading-tight">
                I design calm
                <br />
                in high‑pressure rooms.
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                Athlete. Architect. Builder. My work is about making the next
                decision feel clear and the outcome feel earned.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.3em] uppercase bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  Start a Conversation
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.3em] uppercase border border-foreground/30 text-foreground hover:border-foreground hover:text-foreground transition-colors"
                >
                  Read the Thinking
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden bg-card relative">
                <img
                  src="/krishna.png"
                  className="w-full h-full object-cover noir-photo"
                  alt="Krishna Kumar Yadlapalli"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 border border-border/30 bg-background/80 px-6 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Discipline in Motion
                </p>
                <p className="text-lg font-serif text-foreground">
                  Krishna Kumar Yadlapalli
                </p>
              </div>
            </div>
          </motion.div>

          {/* PRINCIPLES */}
          <FadeInSection className="mb-24">
            <div className="text-center mb-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Principles
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mt-4">
                What I stand for.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="border border-border/30 bg-card/60 p-8"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                    {principle.title}
                  </p>
                  <p className="text-foreground text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* CHAPTERS */}
          <FadeInSection className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {chapters.map((chapter, index) => (
                <div key={chapter.title} className="border-l border-border/30 pl-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl font-serif text-foreground mt-4 mb-4">
                    {chapter.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* FOCUS */}
          <FadeInSection className="mb-24">
            <div className="text-center mb-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Focus
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mt-4">
                Where I do my best work.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="border border-border/30 bg-background/60 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    {area.title}
                  </p>
                  <p className="text-foreground text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* NOTE */}
          <FadeInSection className="max-w-3xl mx-auto text-center mb-24">
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
              A Note
            </p>
            <p className="text-2xl md:text-3xl font-quote italic text-foreground leading-relaxed">
              "Trust is built quietly—through consistency, clarity, and the
              discipline to do the work when no one is watching."
            </p>
            <div className="mt-12">
              <p className="font-signature text-5xl text-foreground/90 transform -rotate-2">
                Krishna Kumar
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