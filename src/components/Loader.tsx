import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slideVariants = {
  initial: { y: 0 },
  exit: {
    y: "-100%",
    transition: {
      duration: 1,
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
    const handleLoad = () => {
      setTimeout(() => {
        setShowLoader(false); // triggers exit animation
      }, 5000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={onFinish} // called AFTER animation is done
    >
      {showLoader && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-gradient-to-tl from-primary to-secondary z-[9999] flex items-center justify-center"
          variants={slideVariants}
          initial="initial"
          exit="exit"
        >
          <h1 className="text-background text-5xl sm:text-7xl md:text-9xl font-black font-heading tracking-tight">
            Raucous Dev
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
