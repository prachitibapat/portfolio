"use client";

import { motion } from "framer-motion";

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-[36rem] h-[36rem] rounded-full bg-accent/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 -left-32 w-[40rem] h-[40rem] rounded-full bg-sage/15 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full bg-lavender/15 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 50, -20, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-10 left-1/3 w-[28rem] h-[28rem] rounded-full bg-warm-highlight/12 blur-[90px]"
      />
    </div>
  );
}
