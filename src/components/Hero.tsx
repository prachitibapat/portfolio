"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const wordReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 50, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={wordReveal}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className ?? ""}`}
      style={{ perspective: 400 }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariant}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen flex items-center overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[18%] right-[18%] w-16 h-16 border border-accent/15 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[25%] right-[28%] w-8 h-8 border border-sage/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] left-[8%] w-3 h-3 rounded-full bg-lavender/30"
        />
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[35%] left-[22%] w-2 h-2 rounded-full bg-accent/30"
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative max-w-6xl mx-auto px-6 md:px-8 py-32 w-full"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-sage font-mono text-sm tracking-[0.2em] uppercase mb-8"
          >
            <span className="inline-block w-8 h-px bg-sage mr-3 align-middle" />
            Hello, I&apos;m
          </motion.p>

          <h1 className="text-7xl md:text-[6.5rem] font-semibold tracking-tighter leading-[0.9] mb-4">
            <AnimatedHeading text="Prachiti" />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-5xl md:text-7xl font-semibold tracking-tighter bg-gradient-to-r from-accent via-warm-highlight to-sage bg-clip-text text-transparent">
              Software Engineer
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-lg text-foreground-muted leading-relaxed mt-10 text-justify"
          >
            Full-stack engineer with experience building data pipelines at Amazon,
            system-level APIs at Lux Vitae, and interactive planning tools at
            Easley Dunn. USC Computer Science grad based in Los Angeles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 pt-8"
          >
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              View my work
              <motion.svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </motion.svg>
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/85 hover:shadow-lg transition-all duration-300"
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Gradient line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-12 left-6 md:left-8 right-6 md:right-8 h-px bg-gradient-to-r from-accent/40 via-border to-sage/40 origin-left"
        />

      </motion.div>
    </section>
  );
}
