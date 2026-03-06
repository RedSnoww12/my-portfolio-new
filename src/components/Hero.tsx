"use client";

import { Github, Linkedin, MapPin, ChevronDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6"
    >
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] sm:h-[600px] sm:w-[600px]" />
        <div className="absolute top-1/3 right-0 h-[250px] w-[250px] rounded-full bg-indigo-500/8 blur-[100px] sm:h-[400px] sm:w-[400px]" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-muted"
        >
          <MapPin size={14} />
          {personalInfo.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-2 text-xl text-accent md:text-2xl"
        >
          {t.hero.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {t.hero.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 hover:brightness-110 sm:px-6 sm:py-3"
          >
            <Download size={18} />
            {t.hero.downloadCv}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105 sm:px-6 sm:py-3"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:px-6 sm:py-3"
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
        className="absolute bottom-10 animate-bounce text-muted transition-colors hover:text-foreground"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
