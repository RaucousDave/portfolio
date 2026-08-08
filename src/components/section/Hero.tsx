import FadeIn from "../FadeIn";

type HeroProps = {
  contactRef: React.RefObject<HTMLDivElement | null>;
};

export default function Hero({ contactRef }: HeroProps) {
  return (
    <section className="min-h-[85vh] justify-center flex flex-col pt-32 pb-16 px-6 sm:px-12 max-w-7xl mx-auto">


      <FadeIn delay={0.4}>
        <h1 className="text-5xl sm:text-7xl lg:text-[105px] font-medium text-ink leading-[0.88] tracking-[-3px] sm:tracking-[-5.5px] mb-8 max-w-5xl">
          Hey, I'm Davies. <br />
          <span className="text-ink-muted">Fullstack Developer.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.6}>
        <p className="text-ink-muted text-base sm:text-xl font-normal leading-relaxed max-w-2xl mb-10 tracking-[-0.18px]">
          I build complete web experiences for growing businesses and brands —
          clean, responsive frontends backed by robust APIs, databases, and backend logic.
        </p>
      </FadeIn>

      <FadeIn delay={0.8}>
        <div className="flex flex-wrap items-center gap-4">
          <button
            className="px-6 py-3 bg-primary text-on-primary font-medium text-sm rounded-pill hover:bg-opacity-90 active:scale-95 transition-all duration-200"
            onClick={() =>
              contactRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact me
          </button>
          <a
            href="https://github.com/RaucousDave"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-surface-1 text-ink font-medium text-sm rounded-pill border border-hairline hover:bg-surface-2 hover:border-hairline transition-all duration-200"
          >
            View Github
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
