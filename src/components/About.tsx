"use client";

import { Code2, Server, Cloud, GraduationCap } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

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
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-accent">
          {t.about.subtitle}
        </h2>
        <p className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.about.title}
        </p>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent-muted p-3 text-accent transition-colors group-hover:bg-accent-hover">
                <h.icon size={24} />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">{h.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-card-border bg-card p-8 text-center">
          <GraduationCap className="mx-auto mb-4 text-accent" size={32} />
          <h3 className="mb-1 text-lg font-semibold text-foreground">{edu.degree}</h3>
          <p className="text-accent">{edu.school} | {edu.period}</p>
          <p className="mt-2 text-sm text-muted">{edu.description}</p>
        </div>
      </div>
    </section>
  );
}
