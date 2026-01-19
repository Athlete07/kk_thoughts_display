import { motion } from "framer-motion";
import { Shayari } from "@/data/shayaris";

interface ShayariCardProps {
  shayari: Shayari;
  index?: number;
}

const ShayariCard = ({ shayari, index = 0 }: ShayariCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="py-12 border-b border-border/30 last:border-b-0"
    >
      {/* Theme - subtle */}
      <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/40 mb-6 block">
        {shayari.theme}
      </span>

      {/* Title */}
      <h3 className="font-serif text-lg text-foreground mb-6">
        {shayari.title}
      </h3>

      {/* Verse */}
      <div className="font-quote text-lg text-muted-foreground/80 leading-relaxed whitespace-pre-line italic pl-6 border-l border-violet/20">
        {shayari.english}
      </div>
    </motion.article>
  );
};

export default ShayariCard;
