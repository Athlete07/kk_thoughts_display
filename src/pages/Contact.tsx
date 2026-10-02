import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import SEO from "@/components/SEO";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "boltfocus7@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Krishna Kumar Yadlapalli",
    description:
      "Get in touch directly with Krishna Kumar Yadlapalli for intellectual exchange, thoughtful feedback, or technology collaboration.",
    url: "https://thekrishnakumar.com/contact",
    mainEntity: {
      "@type": "Person",
      name: "Krishna Kumar Yadlapalli",
      email: email,
      url: "https://thekrishnakumar.com",
    },
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch directly with Krishna Kumar Yadlapalli for thoughtful discourse, intellectual exchange, or technology collaboration."
        canonicalUrl="/contact"
        ogType="website"
        keywords={[
          "Contact Krishna Kumar",
          "Email Krishna Kumar",
          "Krishna Kumar Yadlapalli Contact",
        ]}
        schema={contactSchema}
      />
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-3 font-medium">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-4">
              Contact
            </h1>
            <p className="text-muted-foreground font-light text-base leading-relaxed max-w-md mx-auto">
              If an essay resonated with you, sparked a disagreement, or if you want to explore an idea—I read every note.
            </p>
          </motion.div>

          {/* Simple Email Box */}
          <FadeInSection>
            <div className="p-8 sm:p-10 rounded-2xl bg-card border border-border/40 text-center space-y-4 mb-10 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-light">
                Direct Email
              </span>
              <div>
                <a
                  href={`mailto:${email}`}
                  className="font-serif text-xl sm:text-2xl text-foreground hover:text-primary transition-colors duration-300 block"
                >
                  {email}
                </a>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <Mail size={13} />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/70 text-foreground text-xs uppercase tracking-wider hover:bg-muted/40 transition-colors"
                >
                  {copiedEmail ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          </FadeInSection>

          {/* Subtle location note */}
          <FadeInSection delay={0.1}>
            <div className="mt-12 text-center">
              <p className="text-xs text-muted-foreground/60 font-light">
                Based in Bangalore • Often working across international time zones
              </p>
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
