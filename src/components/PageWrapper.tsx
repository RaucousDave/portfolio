import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

const slideVariants = {
  initial: {
    x: "0%",
  },
  animate: {
    x: "100%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
  exit: {
    x: "0%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

type Props = {
  children: ReactNode;
};
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1.0 },
  },
};

export default function PageWrapper({ children }: Props) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Wait for slide-in to finish

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-background">
      {/* Slide transition */}
      <AnimatePresence>
        <motion.div
          key="slider"
          className="fixed top-0 left-0 w-full h-screen bg-primary-light z-50"
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>

      {/* Actual Page Content */}
      <motion.main
        className="relative z-10"
        initial="hidden"
        animate={showContent ? "visible" : "hidden"}
        variants={contentVariants}
      >
        {children}
      </motion.main>
    </div>
  );
}
