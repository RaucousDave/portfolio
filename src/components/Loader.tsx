import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slideVariants = {
  initial: { y: 0 },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

type LoaderProps = {
  onFinish: () => void;
};

export default function Loader({ onFinish }: LoaderProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {showLoader && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-canvas z-[9999] flex flex-col items-center justify-center space-y-4"
          variants={slideVariants}
          initial="initial"
          exit="exit"
        >
          <div className="w-10 h-10 rounded-full bg-surface-1 border border-hairline flex items-center justify-center text-ink font-semibold text-sm">
            RD
          </div>
          <h1 className="text-ink text-4xl sm:text-6xl font-medium tracking-[-2.5px] leading-none">
            Raucous Dave
          </h1>
          <div className="w-12 h-[2px] bg-surface-2 overflow-hidden rounded-full mt-4">
            <div className="w-full h-full bg-primary animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
