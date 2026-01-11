import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeInSection = ({ children, delay = 0, className = "" }: FadeInSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;