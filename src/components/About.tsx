"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({
  target,
  suffix = "",
  color,
}: {
  target: number;
  suffix?: string;
  color: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <span ref={ref} className={color}>
      {count}
      {suffix}
    </span>
  );
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-36 bg-background-secondary overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.04] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-sage/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5"
          >
            <motion.p
              variants={fadeUp}
              className="text-sage font-mono text-sm tracking-[0.2em] uppercase mb-4"
            >
              <span className="inline-block w-8 h-px bg-sage mr-3 align-middle" />
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.05]"
            >
              A bit about
              <br />
              <span className="text-foreground-muted/50">myself</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-10 hidden md:flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent/50" />
              </div>
              <div className="w-20 h-px bg-border" />
              <div className="w-6 h-6 rounded border border-sage/30 rotate-45" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7 space-y-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-foreground-muted text-lg leading-[1.8] text-justify"
            >
              I&apos;m a software engineer with a Master&apos;s in Computer Science from
              USC and a B.Tech from the University of Mumbai. I enjoy working across
              the full stack — from building Java data pipelines at Amazon to designing
              system-level D-Bus APIs in C/C++ at Lux Vitae.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-foreground-muted text-lg leading-[1.8] text-justify"
            >
              Currently at Easley Dunn Productions, I lead development on interactive
              project planning tools used by multiple teams. I&apos;m drawn to problems
              that sit at the intersection of systems engineering and user-facing products.
            </motion.p>

            {/* Education */}
            <motion.div variants={fadeUp} className="pt-4 space-y-3">
              <p className="text-xs font-mono tracking-widest uppercase text-foreground-muted/50">Education</p>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">University of Southern California</p>
                  <p className="text-sm text-foreground-muted">M.S. Computer Science</p>
                </div>
                <p className="text-sm text-foreground-muted shrink-0">2023 — 2025</p>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">University of Mumbai</p>
                  <p className="text-sm text-foreground-muted">B.Tech Computer Engineering</p>
                </div>
                <p className="text-sm text-foreground-muted shrink-0">2019 — 2023</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
            >
              <div>
                <p className="text-4xl font-semibold tracking-tight">
                  <AnimatedCounter target={3} suffix="" color="text-accent" />
                </p>
                <p className="text-sm text-foreground-muted mt-2 leading-relaxed">
                  Companies
                  <br />
                  worked at
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-tight">
                  <AnimatedCounter target={3} suffix="+" color="text-sage" />
                </p>
                <p className="text-sm text-foreground-muted mt-2 leading-relaxed">
                  Projects
                  <br />
                  shipped
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-tight">
                  <AnimatedCounter target={50} suffix="+" color="text-lavender" />
                </p>
                <p className="text-sm text-foreground-muted mt-2 leading-relaxed">
                  Users
                  <br />
                  impacted
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
