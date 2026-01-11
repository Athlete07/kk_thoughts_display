import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import FadeInSection from "@/components/FadeInSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I'll respond soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FilmGrain />
      <Navbar />

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-20 text-center"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block">
              Connect
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8">
              Let's Talk.
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Whether you're exploring a collaboration, have a question, or just
              want to say hello—I'm listening.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Contact Info */}
            <FadeInSection>
              <div className="space-y-12">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
                    Direct Line
                  </span>
                  <a
                    href="mailto:o0krissh0o@gmail.com"
                    className="group flex items-center gap-4 text-xl text-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={20} className="text-primary" />
                    o0krissh0o@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
                    Location
                  </span>
                  <div className="flex items-center gap-4 text-xl text-foreground">
                    <MapPin size={20} className="text-primary" />
                    Bangalore, India • Global
                  </div>
                </div>

                <div className="pt-8 border-t border-border/30">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-6 block">
                    Elsewhere
                  </span>
                  <div className="flex gap-6">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://researchgate.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest"
                    >
                      ResearchGate
                    </a>
                  </div>
                </div>

                <div className="bg-card border border-border/30 p-8 mt-12">
                  <p className="font-quote italic text-lg text-foreground leading-relaxed">
                    "The best conversations begin with genuine curiosity. I'm
                    interested in ideas that challenge convention—whether in
                    athletics, technology, or human potential."
                  </p>
                  <p className="font-signature text-3xl text-foreground/80 mt-6 -rotate-2">
                    Krishna Kumar
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Contact Form */}
            <FadeInSection delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="How should I address you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="What's on your mind?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me more..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-foreground text-background py-5 text-xs uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </FadeInSection>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-background py-12 border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[10px] text-foreground/20">
            Designed with Intention. © 2025 Krishna Kumar Yadlapalli.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;