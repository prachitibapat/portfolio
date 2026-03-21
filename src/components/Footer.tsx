const footerLinks = [
  { label: "GitHub", href: "https://github.com/prachitibapat" },
  { label: "LinkedIn", href: "https://linkedin.com/in/prachiti-bapat" },
  { label: "Email", href: "mailto:ppbapat29@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative py-5 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <p className="text-[11px] tracking-wide text-foreground-muted/40 font-mono uppercase">
          &copy; {new Date().getFullYear()} Prachiti Bapat
        </p>

        <div className="flex items-center gap-1">
          {footerLinks.map((link, i) => (
            <span key={link.label} className="flex items-center">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-wide font-mono uppercase text-foreground-muted/40 hover:text-foreground transition-colors duration-300 px-2 py-1"
              >
                {link.label}
              </a>
              {i < footerLinks.length - 1 && (
                <span className="text-border/60 text-[8px]">/</span>
              )}
            </span>
          ))}
          <span className="text-border/60 text-[8px]">/</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-wide font-mono uppercase text-accent/60 hover:text-accent transition-colors duration-300 px-2 py-1"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
