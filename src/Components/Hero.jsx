function Hero() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] text-[var(--text-color)] px-4">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-heading leading-tight">
            Hey there, I'm{" "}
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-[var(--primary-accent)] via-[var(--secondary-accent)] to-[var(--neutral-accent)]">
              Davies
            </span>
            <br />I build clean, creative web experiences.
          </h1>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl text-black bg-[var(--primary-accent)] hover:bg-[var(--highlight-hover)] shadow-[0_0_20px_var(--shadow-glow)] transition duration-300 font-bold font-body"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
