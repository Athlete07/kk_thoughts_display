import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary Electric Orb */}
      <motion.div
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-electric/20 blur-[150px] top-[-150px] left-[-150px]"
      />

      {/* Violet Orb */}
      <motion.div
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -60, -120, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[400px] h-[400px] rounded-full bg-violet/15 blur-[120px] bottom-[-100px] right-[-100px]"
      />

      {/* Crimson Accent */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[300px] h-[300px] rounded-full bg-crimson/10 blur-[100px] top-1/3 right-[-50px]"
      />

      {/* Emerald Subtle */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[350px] h-[350px] rounded-full bg-emerald/10 blur-[130px] bottom-1/4 left-[-100px]"
      />
    </div>
  );
};

export default FloatingOrbs;