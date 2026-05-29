"use client";

import { Github, Linkedin, ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { useLocale } from "@/i18n/LocaleProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-4 pt-24 pb-20 sm:px-6"
    >
      {/* Editorial dotted grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Status / location line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {personalInfo.location}
        </motion.div>

        {/* Name — oversized display type */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="mt-6 text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease }}
          className="mt-5 max-w-2xl text-xl font-medium text-accent sm:text-2xl"
        >
          {t.hero.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26, ease }}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          {t.hero.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34, ease }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="/cv.pdf"
            download
            className="group inline-flex cursor-pointer items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
            {t.hero.downloadCv}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-card-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-card-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-muted transition-colors hover:text-foreground sm:left-6 sm:translate-x-0"
        aria-label="Scroll to content"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
