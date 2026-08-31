import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/", built: true },
  { name: "Experience", href: "/experience", built: true },
  { name: "Skills", href: "/skills", built: true },
  { name: "Education", href: "/education", built: true },
  { name: "Certifications", href: "/certifications", built: true },
  { name: "Projects", href: "/projects", built: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-low/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 sm:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Umer Iqbal — AI Engineer | Full-Stack Developer"
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex gap-8 font-body text-xs uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = link.built && link.href === pathname;
            const className = isActive
              ? "text-primary border-b-2 border-primary pb-1"
              : "text-on-surface-variant hover:text-primary transition-all active:scale-95 duration-200 px-2 py-1 hover:bg-surface-container-high/50 rounded-sm";

            return link.built ? (
              <Link key={link.name} to={link.href} className={className}>
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href} className={className}>
                {link.name}
              </a>
            );
          })}
        </div>

        <a
          href="https://www.linkedin.com/in/muhammad-umer-iqbal-b73768185/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2 rounded-sm font-label text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Hire Me
          <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
            arrow_forward
          </span>
        </a>

        <button
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-4 bg-surface-container-low">
          {navLinks.map((link) => {
            const isActive = link.built && link.href === pathname;
            const className = isActive
              ? "text-primary font-semibold py-2 font-label text-sm uppercase tracking-widest"
              : "text-on-surface-variant py-2 font-label text-sm uppercase tracking-widest";

            return link.built ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={className}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={className}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="https://www.linkedin.com/in/muhammad-umer-iqbal-b73768185/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2 rounded-sm font-label text-sm uppercase tracking-wider"
          >
            Hire Me
            <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
              arrow_forward
            </span>
          </a>
        </div>
      )}
    </nav>
  );
};
