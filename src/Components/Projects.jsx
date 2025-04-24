import { projects } from "./projects";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="min-h-screen py-20 bg-[var(--bg-color)] text-[var(--text-color)]"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-[var(--primary-accent)]">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-[hsl(224,19%,15%)] rounded-xl p-6 shadow-sm border border-transparent hover:border-[var(--primary-accent)] hover:shadow-[0_0_10px_var(--shadow-glow)] transition-all duration-300"
            >
              <h3 className="text-[25px] font-medium text-[var(--primary-accent)] mb-2 z-10 relative font-heading">
                {project.title}
              </h3>
              <p className="text-[var(--text-color)] font-body text-lg mb-4 z-10 relative">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-[hsl(224,19%,25%)] text-[var(--text-color)]  rounded-full transition-all duration-300 font-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm z-10 relative">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-white bg-[hsl(224,19%,25%)] px-4 py-2 rounded-xl transition-all duration-300 ease-in font-body border border-transparent hover:border-[var(--primary-accent)] "
                >
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className="text-white bg-[hsl(224,19%,25%)] px-4 py-2 rounded-xl border border-transparent hover:border-[var(--primary-accent)] transition-all duration-300 ease-in font-body"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
