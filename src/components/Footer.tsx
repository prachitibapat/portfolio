const footerLinks = [
  { label: "GitHub", href: "https://github.com/prachitibapat" },
  { label: "LinkedIn", href: "https://linkedin.com/in/prachiti-bapat" },
  { label: "Email", href: "mailto:ppbapat29@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative py-6 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-foreground-muted">
          &copy; {new Date().getFullYear()} Prachiti Bapat
        </p>
        <div className="flex items-center gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:text-accent-hover transition-colors duration-200"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
