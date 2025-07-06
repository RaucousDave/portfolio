import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { useRef, useState } from "react";
import Hero from "./components/section/Hero";
import Links from "./components/Links";
import PageWrapper from "./components/PageWrapper";
import About from "./components/section/About";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  return (
    <PageWrapper>
      {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div className="bg-black/70">
          <Navbar refs={{ homeRef, aboutRef, projectsRef, contactRef }} />
          <Links />
          <section ref={homeRef}>
            <Hero contactRef={contactRef} />
          </section>
          <section className="p-12 sm:p-24" ref={aboutRef}>
            <About />
          </section>
          <section className="p-12 sm:p-24" ref={projectsRef}>
            <Projects />
          </section>
          <section className="p-12 sm:p-24" ref={contactRef}>
            <Contact />
          </section>
        </div>
      )}
    </PageWrapper>
  );
}
