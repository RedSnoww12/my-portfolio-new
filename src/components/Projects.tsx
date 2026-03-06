"use client";

import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-accent">
          {t.projects.subtitle}
        </h2>
        <p className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.projects.title}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-2xl border border-card-border bg-card p-5 transition-colors hover:border-accent/40 sm:p-8"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-sm text-accent">
                    {project.role} | {project.period}
                  </p>
                </div>
                {"github" in project && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-foreground"
                    aria-label={`GitHub ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

              <ul className="mb-6 flex-1 space-y-2">
                {project.description.map((desc, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent-muted px-3 py-1 text-xs font-medium text-accent"
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
