import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Mail, Compass } from "lucide-react";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import SEO from "@/components/SEO";

const curations = [
  {
    label: "Decision Velocity",
    description:
      "Why smart people freeze on reversible decisions, and how momentum creates clarity faster than endless research.",
  },
  {
    label: "Quiet Ownership",
    description:
      "The internal shift that occurs when someone stops waiting for permission, validation, or the perfect time to move.",
  },
  {
    label: "Signal vs. Noise",
    description:
      "How to protect focus and creative bandwidth in a culture optimized to distract you with manufactured urgency.",
  },
  {
    label: "The Psychology of Builders",
    description:
      "What separates people who talk about ideas from the ones who quietly absorb failure and keep iterating.",
  },
];

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "About Krishna Kumar Yadlapalli",
    url: "https://thekrishnakumar.com/about",
    mainEntity: {
      "@type": "Person",
      name: "Krishna Kumar Yadlapalli",
      alternateName: "Krishna Kumar",
      url: "https://thekrishnakumar.com",
      image: "https://thekrishnakumar.com/about-krishna.jpg",
      jobTitle: "Software Builder & Essayist",
      description:
        "Software builder and essayist based in Bangalore, India. Writes on human behavior, decision velocity, software architecture, and the craft of building enduring systems.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressCountry: "India",
      },
      sameAs: [
        "https://twitter.com/krishnakumar",
        "https://linkedin.com/in/krishnakumar",
        "https://github.com/krishnakumar",
      ],
      knowsAbout: [
        "Software Engineering",
        "System Architecture",
        "Decision Velocity",
        "Human Psychology",
        "Product Strategy",
      ],
    },
  };

  return (
    <>
      <SEO
        title="About"
        description="Software builder and writer based in Bangalore. Exploring decision velocity, builder psychology, software craft, and human behavior."
        canonicalUrl="/about"
        ogType="website"
        keywords={[
          "About Krishna Kumar Yadlapalli",
          "Krishna Kumar Bangalore",
          "Software Architect",
          "Builder Psychology",
          "Bio",
        ]}
        schema={aboutSchema}
      />
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header & Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-10 pb-10 border-b border-border/30">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-border/60 shadow-xl bg-card flex-shrink-0">
                <img
                  src="/about-krishna.jpg"
                  alt="Krishna Kumar Yadlapalli"
                  className="w-full h-full object-cover object-center grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-medium block">
                  Bangalore, India
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground tracking-tight">
                  Krishna Kumar Yadlapalli
                </h1>
                <p className="text-muted-foreground font-light text-base leading-relaxed max-w-lg">
                  Building software products by day. Writing field notes on human behavior, decision-making, and quiet craft by night.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Narrative Content */}
          <div className="space-y-16">
            {/* The Backstory */}
            <FadeInSection>
              <div className="space-y-5 text-foreground/90 font-light text-base md:text-lg leading-[1.85]">
                <h2 className="font-serif text-2xl text-foreground">
                  The Backstory
                </h2>
                <p>
                  I spend most of my working hours building software products. It’s practical, 
                  measurable, and demands direct feedback from the real world. But as anyone who’s ever 
                  built anything knows: the hardest part of building is rarely technical.
                </p>
                <p className="text-muted-foreground">
                  The hardest part is psychological. Why do we hesitate when the stakes are high? 
                  Why does ambition so easily turn into anxiety? Why do small, trivial expenses 
                  make people flinch even after their income multiplies? 
                </p>
                <p className="text-muted-foreground">
                  I don&rsquo;t write to tell anyone how to live. Basically, I observe situations, read between the lines of people and systems, and later write down what I understand or the takeaways from it. All the essays here are drawn from the surroundings I see, read, and understand.
                </p>
                <p className="text-muted-foreground">
                  For me, a blank page is where the noise stops—it&rsquo;s how I figure out what I actually believe.
                </p>
              </div>
            </FadeInSection>

            {/* Current Obsessions & Curiosities */}
            <FadeInSection delay={0.1}>
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-2">
                    What I&rsquo;m Thinking About
                  </h2>
                  <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">
                    A few themes that consistently show up in my notes, conversations, and writing:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {curations.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl bg-card border border-border/40 hover:border-border/80 transition-all space-y-2 group"
                    >
                      <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-muted-foreground font-light text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Outside the Screen */}
            <FadeInSection delay={0.2}>
              <div className="space-y-4 text-foreground/90 font-light text-base md:text-lg leading-[1.85]">
                <h2 className="font-serif text-2xl text-foreground">
                  Outside the Screen
                </h2>
                <p className="text-muted-foreground">
                  When I&rsquo;m not building or writing, I prefer low-noise environments. Long, unplanned 
                  walks around Bangalore, reading old books that survived decades without algorithms pushing them, 
                  and having unhurried 1-on-1 conversations with people who care more about honesty than status.
                </p>
                <p className="text-muted-foreground">
                  I believe in keeping life relatively simple: do good work, stay curious, avoid unnecessary drama, 
                  and hold your own bridge steady.
                </p>
              </div>
            </FadeInSection>

            {/* Call to Dialogue */}
            <FadeInSection delay={0.3}>
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border/40 shadow-sm space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground">
                  Let&rsquo;s connect.
                </h3>
                <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">
                  The best part of writing online is finding people on the same frequency. 
                  If an essay resonated with you, if you see things differently, or if you just want to say hello—my inbox is always open.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider">
                  <Link
                    to="/say-hello"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <Mail size={13} />
                    <span>Say Hello</span>
                  </Link>
                  <Link
                    to="/thoughts"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 text-foreground hover:bg-muted/40 transition-colors"
                  >
                    <BookOpen size={13} />
                    <span>Browse Essays</span>
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
