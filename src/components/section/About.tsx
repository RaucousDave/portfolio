import FadeIn from "../FadeIn";
import { FaTerminal, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const stacks = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Golang",
  "TailwindCSS",
  "Express",
  "Node.js",
  "Framer-Motion",
  "Git",
  "Supabase",
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* Section Header with Hairline Divider */}
      <div className="flex items-center justify-between mb-16 gap-8">
        <FadeIn>
          <h2 className="text-4xl sm:text-6xl font-medium text-ink tracking-[-2px] sm:tracking-[-3.1px]">
            About<span className="text-accent-blue">.</span>
          </h2>
        </FadeIn>
        <div className="h-[1px] flex-1 hidden sm:block bg-hairline"></div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Bio & Links (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <FadeIn>
              <p className="text-ink-muted text-base sm:text-lg leading-relaxed font-normal tracking-[-0.18px]">
                Hi, I'm Davies — a fullstack developer focused on building sleek,
                high-performance UI components and modern web applications.
                I turn complex problems into clean, usable digital products.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-ink-muted text-base sm:text-lg leading-relaxed font-normal tracking-[-0.18px]">
                I'm actively open to freelance projects and full-time remote roles.
                Whether you need an end-to-end web app, frontend design system engineering,
                or performance optimization, I'm ready to collaborate.
              </p>
            </FadeIn>
          </div>

          {/* Social Links Row */}
          <FadeIn>
            <div className="pt-4 border-t border-hairline-soft flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                Connect with me
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/RaucousDave"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-surface-1 text-ink border border-hairline hover:bg-surface-2 hover:border-accent-blue transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/davies-enienghan-615718307/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-surface-1 text-ink border border-hairline hover:bg-surface-2 hover:border-accent-blue transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="https://x.com/sagefrugal"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-surface-1 text-ink border border-hairline hover:bg-surface-2 hover:border-accent-blue transition-all"
                  aria-label="Twitter Profile"
                >
                  <FaXTwitter size={16} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Signature Gradient Spotlight Card & Tech Stack (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Spotlight Card */}
          <FadeIn>
            <div className="rounded-xxl p-8 bg-gradient-to-br from-gradient-violet via-gradient-magenta/80 to-surface-1 text-ink shadow-2xl relative overflow-hidden border border-white/10 group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-orange/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-full bg-canvas/30 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <FaTerminal className="text-white text-sm" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-white">
                  Crafting modern web software with care.
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Focusing on responsive design systems, API architectures, and seamless digital interaction.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Tech Stack Surface Card */}
          <FadeIn>
            <div className="bg-surface-1 border border-hairline rounded-xl p-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">
                Technical Stack & Skills
              </span>
              <div className="flex flex-wrap gap-2">
                {stacks.map((stack) => (
                  <span
                    key={stack}
                    className="px-3.5 py-1.5 rounded-pill bg-surface-2 text-ink text-xs font-medium border border-hairline hover:border-hairline-soft transition-colors"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
