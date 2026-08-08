import FadeIn from "../FadeIn";
import { BiEnvelope } from "react-icons/bi";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6 sm:px-12">
      {/* Contact Section Box */}
      <div className="rounded-xxl bg-gradient-to-br from-surface-1 via-surface-2 to-canvas border border-hairline p-8 sm:p-16 flex flex-col items-center text-center space-y-8 relative overflow-hidden shadow-2xl">
        {/* Subtle Background Glow Tile */}
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-violet/15 rounded-full blur-3xl pointer-events-none" />

        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-mono tracking-wider">
            <span>GET IN TOUCH</span>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-medium text-ink tracking-[-3px] sm:tracking-[-4.5px]">
            Let's build something<br />
            <span className="text-ink-muted">remarkable.</span>
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="text-ink-muted text-base sm:text-xl font-normal leading-relaxed max-w-xl tracking-[-0.15px]">
            Have a project in mind, an opportunity, or just want to chat tech?
            Send an email or catch me on{" "}
            <a
              className="text-accent-blue font-medium hover:underline"
              href="https://www.linkedin.com/in/davies-enienghan-615718307/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              className="text-accent-blue font-medium hover:underline"
              href="https://x.com/sagefrugal"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            .
          </p>
        </FadeIn>

        <FadeIn>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <a
              className="px-8 py-4 bg-primary text-on-primary font-medium text-sm rounded-pill hover:bg-opacity-90 active:scale-95 transition-all shadow-lg flex items-center gap-3"
              href="mailto:daviesenienghan906@gmail.com"
            >
              <BiEnvelope size={18} />
              daviesenienghan906@gmail.com
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Footer Branding Bar */}
      <footer className="mt-20 pt-8 border-t border-hairline-soft flex flex-col sm:flex-row items-center justify-between text-ink-muted text-xs gap-4 font-normal">
        <p>&copy; {new Date().getFullYear()} Davies Enienghan.</p>
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/RaucousDave"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/davies-enienghan-615718307/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/sagefrugal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink transition-colors"
          >
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}
