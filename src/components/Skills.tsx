"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, type Skill } from "@/data/resume";
import { useLocale } from "@/i18n/LocaleProvider";

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-foreground">{skill.name}</span>
        <span className="text-xs text-muted">{skill.level}/5</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-card-border">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-blue-400 group-hover:brightness-125"
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLocale();
  const categoryKeys = ["languages", "frameworks", "devops", "databases", "methods", "tools"] as const;
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? categoryKeys.filter((c) => c === active)
    : categoryKeys;

  return (
    <section id="skills" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-accent">
          {t.skills.subtitle}
        </h2>
        <p className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.skills.title}
        </p>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === null
                ? "bg-accent text-white"
                : "border border-card-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {t.skills.all}
          </button>
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? null : cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-accent text-white"
                  : "border border-card-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {t.skills.categories[cat]}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat);
              return (
                <motion.div
                  key={cat}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-card-border bg-card p-6"
                >
                  <h3 className="mb-5 text-lg font-semibold text-foreground">
                    {t.skills.categories[cat]}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {catSkills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
