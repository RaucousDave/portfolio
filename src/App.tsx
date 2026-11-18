import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  Menu,
  X,
  Mail,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone,
  Github,
} from "lucide-react";
import {
  SiNestjs,
  SiExpress,
  SiFastify,
  SiPostgresql,
  SiDrizzle,
  SiTypeorm,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGo,
  SiReact,
  SiExpo,
} from "react-icons/si";
import { projects } from "./components/projects";

const email = "daviesenienghan906@gmail.com";
const socials = [
  ["GitHub", "https://github.com/RaucousDave"],
  ["LinkedIn", "https://www.linkedin.com/in/davies-enienghan-615718307/"],
  ["Twitter / X", "https://x.com/sagefrugal"],
];
const categories: Record<number, string> = {
  1: "Web",
  2: "Web",
  3: "Web",
  4: "Web",
  5: "Web",
  6: "Web",
  7: "Backend & tools",
  8: "Backend & tools",
  9: "Backend & tools",
  10: "Mobile",
};
const captions: Record<number, string> = {
  1: "A frame for every story.",
  2: "Creative work, center stage.",
  3: "A digital home for a distinct voice.",
  4: "Small habits. Real momentum.",
  5: "Less admin. More learning.",
  6: "One brief, a whole campaign.",
  7: "Your terminal, with a better memory.",
  8: "Give your APIs a speed limit.",
  9: "Follow the request. Find the bottleneck.",
  10: "A little progress, in your pocket.",
};
const stack = [
  { name: "NestJS", Icon: SiNestjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "Fastify", Icon: SiFastify },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Drizzle ORM", Icon: SiDrizzle },
  { name: "TypeORM", Icon: SiTypeorm },
  { name: "Better Auth", Icon: ShieldCheck },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Golang", Icon: SiGo },
  { name: "Fiber", Icon: Zap },
  { name: "React Native", Icon: SiReact },
  { name: "Expo", Icon: SiExpo },
];
const layers = [
  {
    name: "The interface",
    detail: "Thoughtful web & mobile experiences.",
    Icon: Code2,
    code: "<experience />",
  },
  {
    name: "The logic",
    detail: "APIs that make the moving parts click.",
    Icon: Layers3,
    code: "GET /possibilities",
  },
  {
    name: "The foundation",
    detail: "Data with a dependable place to live.",
    Icon: Database,
    code: "SELECT possibility;",
  },
];
function StackPlayground() {
  const [active, setActive] = useState(0);
  return (
    <div className="playground">
      <div className="playground-top">
        <span>Inside the build</span>
        <span className="tiny-cross">+</span>
      </div>
      <div className="stack-scene">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        {layers.map(({ name, Icon, code }, i) => (
          <button
            key={name}
            className={`stack-layer layer-${i} ${active === i ? "selected" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            aria-label={`Explore ${name.toLowerCase()}`}
          >
            <Icon size={30} strokeWidth={1.5} />
            <span>{code}</span>
            <span className="layer-end">
              {i === 0 ? "✳" : i === 1 ? "{ }" : "≋"}
            </span>
          </button>
        ))}
        <span className="spark spark-one">✳</span>
        <span className="spark spark-two">+</span>
      </div>
      <div className="playground-caption" aria-live="polite">
        <div>
          <strong>{layers[active].name}</strong>
          <p>{layers[active].detail}</p>
        </div>
        <span className="tap-hint">Tap a layer</span>
      </div>
    </div>
  );
}
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      layout
      className={`project-card project-${project.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="project-visual">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            width="1200"
            height="800"
          />
        ) : project.id === 8 ? (
          <div className="bucket-art" aria-hidden="true">
            <span className="package-label">npm / bucketflow</span>
            <div className="bucket-bars">
              {[35, 60, 95, 70, 45, 85, 55].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <strong>
              Traffic.
              <br />
              Under control.
            </strong>
          </div>
        ) : (
          <div className="mobile-art" aria-hidden="true">
            <div className="phone">
              <span>streakly</span>
              <b>Keep showing up.</b>
              <div className="habit-check">
                <Check /> Read a little
              </div>
              <div className="habit-check">
                <Check /> Move your body
              </div>
              <div className="habit-check">
                <Check /> Make something
              </div>
              <strong>One day at a time.</strong>
            </div>
            <span className="mobile-spark">✳</span>
          </div>
        )}
        <span className="project-category">{categories[project.id]}</span>
      </div>
      <div className="project-heading">
        <h3>{project.title}</h3>
        <div className="project-links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.title}`}
            >
              <Globe size={17} /> Live site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source on GitHub`}
            >
              <Github size={17} />
              <span>Code</span>
            </a>
          )}
          {!project.link && !project.github && (
            <span className="no-link">No public link yet</span>
          )}
        </div>
      </div>
      <p className="project-caption">{captions[project.id]}</p>
      <details>
        <summary>
          About this project <span>+</span>
        </summary>
        <p>{project.desc}</p>
      </details>
    </motion.article>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All work");
  const [copyState, setCopyState] = useState("Copy email");
  const visibleProjects = projects.filter(
    (p) => filter === "All work" || categories[p.id] === filter,
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("Copied!");
    } catch {
      setCopyState("Select the email to copy it");
    }
  }
  return (
    <MotionConfig reducedMotion="user">
      <div className="portfolio">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <header className="header">
          <a className="wordmark" href="#home" aria-label="Davies home">
            davies<span aria-hidden="true">✳</span>
          </a>
          <nav
            id="main-navigation"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setMenuOpen(false);
                document.getElementById("menu-toggle")?.focus();
              }
            }}
            aria-label="Main navigation"
            className={menuOpen ? "nav open" : "nav"}
          >
            {[
              ["Work", "#work"],
              ["About", "#about"],
              ["Stack", "#stack"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk <span className="contact-dot" />
            </a>
          </nav>
          <button
            className="menu-toggle"
            id="menu-toggle"
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>
        <main id="main">
          <section className="hero section-wrap" id="home">
            <div className="hero-topline">
              <span>Davies Enienghan / Fullstack developer</span>
              <span className="availability">
                <i /> Open to opportunities
              </span>
            </div>
            <motion.div
              className="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1>
                Good ideas.
                <br />
                <span className="second-line">
                  Great{" "}
                  <span className="build-word">
                    builds
                    <svg
                      viewBox="0 0 500 30"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path d="M5 20 Q230 -5 495 15" />
                    </svg>
                  </span>
                  <span className="title-period">.</span>
                </span>
              </h1>
              <span className="hero-asterisk" aria-hidden="true">
                ✳
              </span>
            </motion.div>
            <div className="hero-bottom">
              <div className="hero-intro">
                <p>
                  I’m Davies. I connect the dots between
                  <br className="desktop-break" /> thoughtful interfaces and
                  powerful backends.
                  <br className="desktop-break" /> From first idea to the last
                  API call.
                </p>
                <div className="hero-actions">
                  <a className="button primary" href="#work">
                    Explore my work <span className="button-count">10</span>
                  </a>
                  <a className="text-link" href={`mailto:${email}`}>
                    Get in touch
                  </a>
                </div>
                <div className="hero-footnote">
                  <span className="mini-line" /> Built with curiosity. Shipped
                  with care.
                </div>
              </div>
              <StackPlayground />
            </div>
          </section>
          <div className="specialties" aria-label="Specialties">
            <span>Frontend craft</span>
            <span aria-hidden="true">✳</span>
            <span>Backend thinking</span>
            <span aria-hidden="true">✳</span>
            <span>Mobile experiences</span>
            <span aria-hidden="true">✳</span>
            <span>End-to-end ownership</span>
          </div>
          <section className="work section-wrap" id="work">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Ideas, made real</span>
                <h2>
                  Selected work<span className="heading-dot">.</span>
                </h2>
              </div>
              <p>
                Websites, useful tools, and things
                <br />
                that make everyday life a little easier.
              </p>
            </div>
            <div className="filter-row" aria-label="Filter projects">
              {["All work", "Web", "Backend & tools", "Mobile"].map(
                (category) => (
                  <button
                    key={category}
                    className={filter === category ? "filter active" : "filter"}
                    aria-pressed={filter === category}
                    onClick={() => setFilter(category)}
                  >
                    {category}
                    <span>
                      {category === "All work"
                        ? projects.length
                        : projects.filter((p) => categories[p.id] === category)
                            .length}
                    </span>
                  </button>
                ),
              )}
              <span className="work-count" aria-live="polite">
                {visibleProjects.length} projects to explore
              </span>
            </div>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          <section className="about" id="about">
            <div className="section-wrap about-layout">
              <div className="about-mark" aria-hidden="true">
                <span>
                  Always
                  <br />
                  connecting
                  <br />
                  the dots.
                </span>
                <div className="dot-diagram">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <span className="about-signature">
                  a little curiosity goes a long way.
                </span>
              </div>
              <div className="about-copy">
                <span className="eyebrow">The person behind the code</span>
                <h2>
                  Big picture thinker.
                  <br />
                  Detail person.
                </h2>
                <p>
                  I’m Davies Enienghan, a fullstack developer who enjoys turning
                  complicated problems into things that feel simple to use.
                </p>
                <p>
                  My work moves between responsive interfaces, API architecture,
                  and the databases underneath. I care about how a product
                  feels, and just as much about how it works.
                </p>
                <p>
                  I’m open to freelance projects and full-time remote roles. If
                  you’re building something useful, I’d love to be part of it.
                </p>
                <a className="button outline" href="#contact">
                  Let’s make something together
                </a>
              </div>
            </div>
          </section>
          <section className="stack-section section-wrap" id="stack">
            <div className="section-heading">
              <div>
                <span className="eyebrow">My building blocks</span>
                <h2>
                  The right tools.
                  <br />
                  The whole picture.
                </h2>
              </div>
              <p>
                From the data layer to the screen
                <br />
                in your hand. Here’s my toolkit.
              </p>
            </div>
            <div className="tech-grid">
              {stack.map(({ name, Icon }) => (
                <div className="tech-item" key={name}>
                  <Icon aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <p className="stack-note">
              <Code2 size={18} /> Web. <Database size={18} /> Backend.{" "}
              <Smartphone size={18} /> Mobile.{" "}
              <span>Connected by good engineering.</span>
            </p>
          </section>
          <section className="contact" id="contact">
            <div className="section-wrap">
              <div className="contact-top">
                <span className="availability">
                  <i /> Open for the right opportunity
                </span>
                <span>Have something in mind?</span>
              </div>
              <h2>
                Let’s make
                <br />
                it{" "}
                <span className="happen">
                  happen
                  <svg
                    viewBox="0 0 500 30"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M5 20 Q230 -5 495 15" />
                  </svg>
                </span>
                <span className="contact-star" aria-hidden="true">
                  ✳
                </span>
              </h2>
              <div className="contact-bottom">
                <a className="email-link" href={`mailto:${email}`}>
                  <Mail size={23} />
                  <span>{email}</span>
                </a>
                <button className="copy-button" onClick={copyEmail}>
                  {copyState === "Copied!" ? (
                    <Check size={17} />
                  ) : (
                    <Copy size={17} />
                  )}
                  <span aria-live="polite">{copyState}</span>
                </button>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer section-wrap">
          <a className="wordmark" href="#home">
            davies<span aria-hidden="true">✳</span>
          </a>
          <p>© {new Date().getFullYear()} Davies Enienghan</p>
          <div>
            {socials.map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer">
                {name}
              </a>
            ))}
          </div>
          <a className="back-top" href="#home">
            Back to top
          </a>
        </footer>
      </div>
    </MotionConfig>
  );
}
