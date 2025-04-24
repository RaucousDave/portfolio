function Footer() {
  return (
    <>
      <footer className="bg-[var(--bg-color)] text-[var(--text-color)] text-sm text-center py-8 border-t border-[var(--shadow-glow)]">
        <div className="mb-4 flex justify-center gap-6">
          <a
            href="https://github.com/RaucousDave"
            target="_blank"
            className="hover:text-[var(--highlight-hover)] transition"
          >
            GitHub
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="hover:text-[var(--highlight-hover)] transition"
          >
            Email
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--highlight-hover)] transition"
          >
            Projects
          </a>
        </div>
        <p className="opacity-60">
          &copy; {new Date().getFullYear()} RaucousDev. Built with code &
          caffeine.
        </p>
      </footer>
    </>
  );
}
export default Footer;
