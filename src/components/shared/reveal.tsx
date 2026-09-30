"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Eases a chapter's content in the first time it enters the viewport, so
 * each screen arrives as its own moment. Under reduced motion it renders
 * in place.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn("w-full", className)}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
