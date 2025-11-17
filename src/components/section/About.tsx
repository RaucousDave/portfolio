import FadeIn from "../FadeIn";
import { FaTerminal, FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const stacks = [
  "HTML",
  "CSS",
  "Framer-Motion",
  "Javascript",
  "React",
  "TailwindCSS",
  "Bootstrap",
  "Typescript",
  "Git",
  "Java",
  "Supabase",
];

export default function About() {
  return (
    <>
      <div className="flex mb-14 justify-between items-center">
        <FadeIn>
          <div>
            <h1 className="text-white font-bold text-5xl sm:text-6xl">
              About<span className="text-secondary">.</span>
            </h1>
          </div>
        </FadeIn>
        {/* thin line */}
        <div className="h-[1px] w-[60%] hidden sm:flex bg-surface"></div>
      </div>
      {/* about me content */}
      <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row">
        {/* About me text */}
        <div className="flex flex-col gap-6">
          <FadeIn>
            <div>
              <p className="text-neutral opacity-60 text-lg">
                Hi, I'm Davies, a frontend developer, if you haven't already
                gathered that by now. I specialize in building sleek UI
                components and functional websites like the one you're viewing
                now.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <p className="text-neutral opacity-60 text-lg">
                I'm passively looking for freelance gigs and also internships,
                I'm open to remote work of course, part-time preferrably but of
                course willing to open up to being a full-time remote worker.
              </p>
            </div>
          </FadeIn>
          <div className="flex">
            <h1 className="text-primary text-base flex items-center gap-4">
              My Links
              <span className="text-surface flex gap-2 text-2xl">
                <FaArrowRight />
              </span>
              <a href="https://github.com/RaucousDave">
                {" "}
                <FaGithub className="hover:text-primary transition ease-linear" />
              </a>
              <a href="https://www.linkedin.com/in/davies-enienghan-615718307/">
                {" "}
                <FaLinkedin className="hover:text-primary transition ease-linear" />
              </a>
              <a href="https://x.com/sagefrugal">
                {" "}
                <FaXTwitter className="hover:text-primary transition ease-linear" />
              </a>
            </h1>
          </div>
        </div>
        {/* Tech stack */}
        <div className="sm:w-[150%]">
          <FadeIn>
            <div className="flex text-3xl text-white font-bold gap-1.5">
              <div className="bg-primary p-1">
                {" "}
                <FaTerminal className="text-black text-2xl" />
              </div>
              <h3 className="">My Tech Stack</h3>
            </div>
            <div className="flex mt-8 mx-5 flex-wrap gap-3">
              {stacks.map((stack, index) => (
                <p
                  key={index}
                  className="px-3 py-1 rounded-full bg-primary text-black"
                >
                  {stack}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
