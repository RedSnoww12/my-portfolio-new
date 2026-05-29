"use client";

import { Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" eyebrow={t.projects.subtitle} title={t.projects.title} />

        <div className="grid gap-5 md:grid-cols-2">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col rounded-lg border border-card-border bg-card p-6 transition-colors duration-300 hover:border-accent/50 sm:p-8"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <span className="tabular font-mono text-xs text-muted/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-sm text-accent">
                    {project.role} · {project.period}
                  </p>
                </div>
                {"github" in project && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 cursor-pointer rounded-md border border-card-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                    aria-label={`GitHub ${project.title}`}
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>

              <ul className="mb-6 flex-1 space-y-2.5">
                {project.description.map((desc, j) => (
                  <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <ArrowUpRight size={15} className="mt-0.5 flex-shrink-0 text-accent" />
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-card-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted transition-colors group-hover:border-accent/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
