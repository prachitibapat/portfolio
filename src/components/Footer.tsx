"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/prachitibapat" },
  { label: "LinkedIn", href: "https://linkedin.com/in/prachiti-bapat" },
  { label: "Email", href: "mailto:ppbapat29@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-lg font-semibold tracking-tight">
              Prachiti <span className="text-accent">Bapat</span>
            </p>

            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent-hover transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom row */}
          <div className="flex items-center justify-center text-xs text-foreground-muted">
            <p>&copy; {new Date().getFullYear()} Prachiti Bapat. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
