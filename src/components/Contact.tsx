"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "ppbapat29@gmail.com",
    href: "mailto:ppbapat29@gmail.com",
    borderColor: "border-accent/30",
    hoverBorder: "hover:border-border/60",
    iconColor: "border-accent/40 text-accent",
    iconHover: "group-hover:border-border/60 group-hover:text-foreground-muted",
    valueColor: "text-accent",
    valueHover: "group-hover:text-foreground-muted",
  },
  {
    label: "GitHub",
    value: "github.com/prachitibapat",
    href: "https://github.com/prachitibapat",
    external: true,
    borderColor: "border-sage/30",
    hoverBorder: "hover:border-border/60",
    iconColor: "border-sage/40 text-sage",
    iconHover: "group-hover:border-border/60 group-hover:text-foreground-muted",
    valueColor: "text-sage",
    valueHover: "group-hover:text-foreground-muted",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/prachiti-bapat",
    href: "https://linkedin.com/in/prachiti-bapat",
    external: true,
    borderColor: "border-lavender/30",
    hoverBorder: "hover:border-border/60",
    iconColor: "border-lavender/40 text-lavender",
    iconHover: "group-hover:border-border/60 group-hover:text-foreground-muted",
    valueColor: "text-lavender",
    valueHover: "group-hover:text-foreground-muted",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-36 bg-background-secondary overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-lavender/[0.04] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5"
          >
            <motion.p
              variants={fadeUp}
              className="text-warm-highlight font-mono text-sm tracking-[0.2em] uppercase mb-4"
            >
              <span className="inline-block w-8 h-px bg-warm-highlight mr-3 align-middle" />
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.05]"
            >
              Let&apos;s work
              <br />
              <span className="text-foreground-muted/50">together</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-foreground-muted text-lg leading-relaxed mt-6 text-justify"
            >
              Open to new opportunities, collaborations, and interesting
              conversations. Feel free to reach out.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-foreground-muted/60 text-sm mt-3"
            >
              Based in Los Angeles, CA
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-7 space-y-4 md:pt-4"
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                variants={fadeUp}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group flex items-center justify-between p-6 rounded-2xl border ${link.borderColor} bg-card/40 ${link.hoverBorder} transition-all duration-300`}
              >
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-foreground-muted/50 mb-1.5">
                    {link.label}
                  </p>
                  <p className={`text-lg font-medium ${link.valueColor} ${link.valueHover} transition-colors duration-300`}>
                    {link.value}
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -20 }}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center ${link.iconColor} ${link.iconHover} transition-all duration-300`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
