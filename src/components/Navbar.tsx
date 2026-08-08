import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type NavbarProps = {
  refs: {
    homeRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
  };
};

export default function Navbar({ refs }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[64px] bg-canvas/90 backdrop-blur-md border-b border-hairline-soft z-50 flex items-center justify-between px-6 sm:px-12">
      {/* Brand Monogram Badge */}
      <div 
        onClick={() => scrollToSection(refs.homeRef)} 
        className="cursor-pointer flex items-center gap-3 group"
      >
        <div className="w-8 h-8 rounded-full bg-surface-1 border border-hairline flex items-center justify-center text-ink font-semibold text-xs tracking-wider group-hover:border-ink transition-colors">
          RD
        </div>
        <span className="text-ink font-bold text-sm tracking-tight hidden xs:inline-block">
          Raucous Dave
        </span>
      </div>

      {/* Nav Links - Desktop Center */}
      <nav className="hidden md:flex items-center space-x-1 bg-surface-1/60 p-1.5 rounded-pill border border-hairline/60">
        <button
          className="px-4 py-1.5 text-xs font-medium text-ink-muted hover:text-ink transition-colors rounded-pill"
          onClick={() => scrollToSection(refs.homeRef)}
        >
          Home
        </button>
        <button
          className="px-4 py-1.5 text-xs font-medium text-ink-muted hover:text-ink transition-colors rounded-pill"
          onClick={() => scrollToSection(refs.aboutRef)}
        >
          About
        </button>
        <button
          className="px-4 py-1.5 text-xs font-medium text-ink-muted hover:text-ink transition-colors rounded-pill"
          onClick={() => scrollToSection(refs.projectsRef)}
        >
          Projects
        </button>
      </nav>

      {/* CTA Buttons - Desktop Right */}
      <div className="hidden md:flex items-center space-x-3">
        <button
          className="px-4 py-2 bg-surface-1 text-ink text-xs font-medium rounded-pill border border-hairline hover:bg-surface-2 transition-all"
          onClick={() => scrollToSection(refs.aboutRef)}
        >
          Explore Stack
        </button>
        <button
          className="px-4 py-2 bg-primary text-on-primary text-xs font-medium rounded-pill hover:opacity-90 active:scale-95 transition-all shadow-sm"
          onClick={() => scrollToSection(refs.contactRef)}
        >
          Get in touch
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center gap-3">
        <button
          className="px-3.5 py-1.5 bg-primary text-on-primary text-xs font-medium rounded-pill"
          onClick={() => scrollToSection(refs.contactRef)}
        >
          Contact
        </button>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-ink rounded-lg bg-surface-1 border border-hairline"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-canvas/95 backdrop-blur-xl border-b border-hairline p-6 flex flex-col space-y-4 md:hidden">
          <button
            className="text-left text-sm font-medium text-ink py-2 border-b border-hairline-soft"
            onClick={() => scrollToSection(refs.homeRef)}
          >
            Home
          </button>
          <button
            className="text-left text-sm font-medium text-ink py-2 border-b border-hairline-soft"
            onClick={() => scrollToSection(refs.aboutRef)}
          >
            About
          </button>
          <button
            className="text-left text-sm font-medium text-ink py-2 border-b border-hairline-soft"
            onClick={() => scrollToSection(refs.projectsRef)}
          >
            Projects
          </button>
          <button
            className="text-left text-sm font-medium text-ink py-2"
            onClick={() => scrollToSection(refs.contactRef)}
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
