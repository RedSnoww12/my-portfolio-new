"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { t } = useLocale();

  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="04" eyebrow={t.experience.subtitle} title={t.experience.title} />

        <div className="relative">
          {/* Single left rail */}
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-hairline" />

          <div className="flex flex-col gap-10">
            {t.experience.items.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                className="relative pl-9"
              >
                {/* Node */}
                <span className="absolute top-1.5 left-0 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-accent bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {exp.period}
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                  {exp.company}
                </h3>
                <p className="mt-0.5 text-sm text-muted">
                  {exp.role} · {exp.location}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-card-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
