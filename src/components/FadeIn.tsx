import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
};

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="relative overflow-hidden inline-block" ref={ref}>
      {/* Background curtain */}
      <motion.div
        className="absolute inset-0 bg-primary z-10"
        initial={{ x: 0 }}
        animate={inView ? { x: "-100%", opacity: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay,
        }}
      />

      {/* Content below */}
      <motion.div
        className="relative z-0"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: delay + 0.6, // starts after bg slides out
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
