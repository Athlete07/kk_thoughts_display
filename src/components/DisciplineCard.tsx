import { motion } from "framer-motion";

interface DisciplineCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const DisciplineCard = ({ number, title, description, delay = 0 }: DisciplineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="p-8 border-t border-border/30 hover:border-border/60 transition-colors group"
    >
      <span className="text-4xl font-serif text-foreground/10 block mb-4 group-hover:text-primary/30 transition-colors">
        {number}
      </span>
      <h3 className="text-lg font-serif text-foreground mb-4">{title}</h3>
      <p
        className="text-muted-foreground text-sm font-light leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </motion.div>
  );
};

export default DisciplineCard;