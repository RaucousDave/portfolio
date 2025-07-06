import FadeIn from "../FadeIn";

type HeroProps = {
  contactRef: React.RefObject<HTMLDivElement | null>;
};
export default function Hero({ contactRef }: HeroProps) {
  return (
    <section className="h-screen justify-center flex flex-col pt-24  p-10 sm:p-24">
      <FadeIn delay={0.7}>
        <h1 className="sm:text-7xl text-6xl font-bold text-neutral mb-6">
          Hey, I'm Davies<span className="text-secondary">.</span>
        </h1>
      </FadeIn>
      <FadeIn delay={1.0}>
        <div className="text-neutral text-3xl font-extralight">
          <h3 className="sm:text-4xl text-3xl mb-8">
            I'm a <span className="text-primary font-medium">Frontend </span>
            <span className="text-secondary font-medium">Developer</span>{" "}
          </h3>
        </div>
      </FadeIn>
      <FadeIn delay={1.2}>
        <p className="text-neutral opacity-60 mb-8  sm:text-lg">
          I've spent the last few years building and scaling custom web
          experiences — from sleek portfolios to feature-rich apps — for growing
          businesses and brands. If you're into clean code, bold ideas, or just
          need a dev who gets pixels — let's connect!
        </p>
      </FadeIn>

      <FadeIn delay={1.5}>
        <button
          className="px-6 py-3 bg-primary hover:bg-secondary transition ease-linear rounded-md"
          onClick={() =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact me
        </button>
      </FadeIn>
    </section>
  );
}
