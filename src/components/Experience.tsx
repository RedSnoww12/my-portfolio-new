"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Experience() {
  const { t } = useLocale();

  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-accent">
          {t.experience.subtitle}
        </h2>
        <p className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.experience.title}
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-card-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {t.experience.items.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[12px] top-1 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                {/* Content */}
                <div
                  className={`ml-10 w-[calc(100%-2.5rem)] sm:ml-12 sm:w-[calc(100%-3rem)] md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-0 md:mr-auto md:text-right" : "md:pl-0 md:ml-auto md:text-left"
                  }`}
                >
                  <div className="rounded-2xl border border-card-border bg-card p-4 text-left transition-colors hover:border-accent/40 sm:p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Briefcase size={16} className="text-accent" />
                      <span className="text-xs font-medium text-accent">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                    <p className="mb-3 text-sm text-muted">{exp.role} - {exp.location}</p>

                    <ul className="mb-4 space-y-2">
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-accent-muted px-3 py-1 text-xs font-medium text-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
