const footerLinks = [
  { name: "GitHub", href: "https://github.com/Umer-206" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-umer-iqbal-b73768185/",
  },
  { name: "Contact", href: "#" },
  { name: "Download CV", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-inverse-surface">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 sm:px-8 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline text-lg font-semibold text-tertiary">
            Umer Iqbal
          </span>
          <span className="font-body text-sm text-inverse-on-surface/70">
            © {new Date().getFullYear()} Umer Iqbal. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6 font-body text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-inverse-on-surface/70 hover:text-tertiary-fixed hover:underline decoration-tertiary decoration-2 underline-offset-4 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
