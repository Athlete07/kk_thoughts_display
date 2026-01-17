import { motion } from "framer-motion";
import { Shayari } from "@/data/shayaris";

interface ShayariCardProps {
  shayari: Shayari;
  index?: number;
}

const themeColors: Record<Shayari["theme"], string> = {
  love: "from-rose/20 to-transparent",
  life: "from-teal/20 to-transparent",
  solitude: "from-violet/20 to-transparent",
  dreams: "from-amber/20 to-transparent",
  rebellion: "from-rose/30 to-violet/20",
};

const themeLabels: Record<Shayari["theme"], string> = {
  love: "Love",
  life: "Life",
  solitude: "Solitude",
  dreams: "Dreams",
  rebellion: "Rebellion",
};

const ShayariCard = ({ shayari, index = 0 }: ShayariCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="shayari-card p-8 md:p-10 group hover:border-primary/50 transition-colors duration-500"
    >
      {/* Theme gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${themeColors[shayari.theme]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        {/* Theme label */}
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">
          {themeLabels[shayari.theme]}
        </span>

        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl text-foreground mb-6 group-hover:text-glow transition-all duration-300">
          {shayari.title}
        </h3>

        {/* Verse */}
        <div className="font-quote text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-pre-line italic">
          {shayari.english}
        </div>

        {/* Signature */}
        <div className="mt-8 flex items-center gap-3">
          <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
          <span className="font-signature text-2xl text-foreground/70">KK</span>
        </div>
      </div>
    </motion.article>
  );
};

export default ShayariCard;