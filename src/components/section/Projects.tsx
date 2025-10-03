import FadeIn from "../FadeIn";
import { projects } from "../projects";
import { Link } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function Projects() {
  return (
    <>
      <div className="flex items-center justify-between mb-8 flex-row-reverse">
        <FadeIn>
          <h1 className="sm:text-6xl text-5xl font-bold text-neutral">
            Projects <span className="text-secondary">.</span>
          </h1>
        </FadeIn>
        <div className="h-[1px] w-[60%] sm:flex hidden bg-surface"></div>
      </div>
      {/* Projects Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Project card */}
        {projects.map((project) => (
          <div className="flex flex-col" key={project.id}>
            <div className="bg-stone-800 rounded-xl md:h-72 overflow-y-hidden md:px-8 md:pt-12">
              <div>
                <img
                  src={project.image}
                  alt=""
                  className="md:hover:rotate-1 md:hover:scale-110 transition ease-linear"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-6 p-3 sm:p-6">
              <FadeIn>
                <div className="flex flex-row md:justify-between items-center">
                  <h1 className="text-neutral font-bold text-2xl sm:text-3xl">
                    {project.title}
                  </h1>
                  <div className=" space-x-3 flex  sm:text-2xl text-stone-600">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {" "}
                      <Link className="hover:text-primary transition ease-linear" />
                    </a>
                    <a href={project.github} target="_blank">
                      {" "}
                      <FaGithub className="hover:text-primary transition ease-linear" />
                    </a>
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <p className="text-neutral font-light opacity-60 text-lg">
                  {project.desc}
                </p>
              </FadeIn>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
