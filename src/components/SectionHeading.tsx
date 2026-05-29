"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
}

/**
 * Editorial / Swiss section header:
 * monospace numbered eyebrow + oversized title + full-width hairline.
 */
export default function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"
      >
        <span className="tabular">{index}</span>
        <span className="h-px flex-1 max-w-12 translate-y-[-1px] bg-accent/40" />
        <span className="text-muted">{eyebrow}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
        className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>

      <div className="hairline mt-6 border-t" />
    </div>
  );
}
