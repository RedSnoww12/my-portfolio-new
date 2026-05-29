"use client";

import { Code2, Server, Cloud, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLocale();

  const highlights = [
    { icon: Code2, title: t.about.frontend, desc: t.about.frontendDesc },
    { icon: Server, title: t.about.backend, desc: t.about.backendDesc },
    { icon: Cloud, title: t.about.devops, desc: t.about.devopsDesc },
    { icon: GraduationCap, title: t.about.methods, desc: t.about.methodsDesc },
  ];

  const edu = t.about.education;

  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" eyebrow={t.about.subtitle} title={t.about.title} />

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="group rounded-lg border border-card-border bg-card p-6 transition-colors duration-300 hover:border-accent/50"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex rounded-lg bg-accent-muted p-2.5 text-accent transition-colors duration-300 group-hover:bg-accent-hover">
                  <h.icon size={22} />
                </span>
                <span className="tabular font-mono text-xs text-muted/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-foreground">{h.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-start gap-4 rounded-lg border border-card-border bg-card p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
        >
          <span className="inline-flex flex-shrink-0 rounded-lg bg-accent-muted p-3 text-accent">
            <GraduationCap size={26} />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
            <p className="mt-0.5 font-mono text-sm text-accent">
              {edu.school} · {edu.period}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{edu.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
