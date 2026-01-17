import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Violet orb - top left */}
      <motion.div
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="orb w-[400px] h-[400px] bg-violet/30 top-[-100px] left-[-100px]"
      />

      {/* Amber orb - bottom right */}
      <motion.div
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -60, -120, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="orb w-[350px] h-[350px] bg-amber/20 bottom-[-50px] right-[-50px]"
      />

      {/* Rose orb - center right */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="orb w-[250px] h-[250px] bg-rose/15 top-1/3 right-[-50px]"
      />
    </div>
  );
};

export default FloatingOrbs;