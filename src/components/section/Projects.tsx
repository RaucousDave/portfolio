import FadeIn from "../FadeIn";
import { projects } from "../projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16 gap-8">
        <div className="h-[1px] flex-1 hidden sm:block bg-hairline"></div>
        <FadeIn>
          <h2 className="text-4xl sm:text-6xl font-medium text-ink tracking-[-2px] sm:tracking-[-3.1px]">
            Selected Work<span className="text-accent-blue">.</span>
          </h2>
        </FadeIn>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <FadeIn key={project.id}>
            <div className="group bg-surface-1 border border-hairline hover:border-hairline/80 rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-2xl">
              {/* Project Image Preview Container */}
              {project.image ? (
                <div className="bg-surface-2 p-6 sm:p-8 aspect-video flex items-center justify-center overflow-hidden border-b border-hairline relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 shadow-md"
                  />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-surface-2 to-surface-1 p-8 aspect-video flex flex-col justify-between border-b border-hairline relative overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue">
                    <FaGithub size={14} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block mb-1">
                      CLI & Backend Library
                    </span>
                    <h4 className="text-xl font-medium text-ink">{project.title}</h4>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-medium text-ink tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-ink-muted">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full hover:bg-surface-2 hover:text-accent-blue transition-colors"
                          title="Live Preview"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full hover:bg-surface-2 hover:text-ink transition-colors"
                          title="View Source Code"
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-ink-muted text-sm leading-relaxed font-normal tracking-[-0.15px] line-clamp-4">
                    {project.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-hairline-soft flex items-center justify-between">
                  <span className="text-xs font-mono text-ink-muted">0{project.id} // Showcase</span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-accent-blue hover:underline inline-flex items-center gap-1"
                    >
                      Visit site &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
