type NavbarProps = {
  refs: {
    homeRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
  };
};
export default function Navbar({ refs }: NavbarProps) {
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header
      className="fixed bg-black h-screen pt-3
     w-8 sm:w-10 top-0 left-0 flex flex-col items-center z-20 space-y-5"
    >
      <div className="w-12 mb-[7rem]">
        <img
          src="/images/logo/Raucous Dave white Png-01.png"
          alt=""
          className="w-full h-full"
          onClick={() => scrollToSection(refs.homeRef)}
        />
      </div>
      <nav className="space-x-5 [&>button]:px-2 [&>button]:w-full opacity-80 font-medium flex justify-center rotate-90">
        <button
          className="text-white"
          onClick={() => scrollToSection(refs.aboutRef)}
        >
          About
        </button>
        <button
          className="text-white"
          onClick={() => scrollToSection(refs.projectsRef)}
        >
          Projects
        </button>
        <button
          className="text-white"
          onClick={() => scrollToSection(refs.contactRef)}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
