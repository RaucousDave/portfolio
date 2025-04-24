import { stacks } from "./stack";

function About() {
  return (
    <>
      <section
        id="about"
        className="py-20 px-2 md:px-0 bg-[var(--bg-color)] text-[var(--text-color)] text-center"
      >
        <h2 className="text-4xl md:text-5xl font-heading mb-6">
          <span className="text-[var(--primary-accent)]">About Me</span>
        </h2>

        <p className="text-[var(--text-color)] font-body leading-relaxed max-w-xl mx-auto mb-10 text-sm md:text-xl">
          Hey, I'm Davies — a frontend dev who loves building clean interfaces
          and learning new tech. I’m currently sharpening my full-stack skills
          with real-world projects, one commit at a time.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          {stacks.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 border shadow-xl hover:shadow-[0_4px_8px_var(--shadow-glow)] text-sm rounded-full text-[var(--text-color)]  transition-all duration-300 font-body hover:translate-y-[-10px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
export default About;
