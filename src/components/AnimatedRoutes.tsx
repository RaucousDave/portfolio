import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import { useLocation, Route, Routes } from "react-router-dom";
export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
