// Navbar.jsx
import { useState } from "react";
import { navLinks } from "./navLinks";
function Navbar() {
  const [activeLink, setActiveLink] = useState(window.location.hash || "/");

  const handleClick = (href) => {
    setActiveLink(href);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-[var(--bg-color)] shadow-md z-50 px-6 py-4 flex justify-center pt-4">
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={`font-body text-sm md:text-base px-1 md:px-4 py-2 rounded-lg transition duration-200
                ${
                  activeLink === link.href
                    ? "bg-[var(--primary-accent)] text-black shadow-[0_0_10px_var(--shadow-glow)]"
                    : "text-[var(--text-color)] hover:text-[var(--primary-accent)]"
                }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
