import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { useRef, useState } from "react";
import Hero from "./components/section/Hero";
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
        <div className="bg-canvas text-ink min-h-screen selection:bg-accent-blue selection:text-ink relative">
          <Navbar refs={{ homeRef, aboutRef, projectsRef, contactRef }}  />

          <main>
            <section ref={homeRef}>
              <Hero contactRef={contactRef} />
            </section>

            <section className="px-6 sm:px-12 py-16 border-t border-hairline-soft" ref={aboutRef}>
              <About />
            </section>

            <section className="px-6 sm:px-12 py-16 border-t border-hairline-soft bg-canvas" ref={projectsRef}>
              <Projects />
            </section>

            <section className="border-t border-hairline-soft bg-canvas" ref={contactRef}>
              <Contact />
            </section>
          </main>
        </div>
      )}
    </PageWrapper>
  );
}
