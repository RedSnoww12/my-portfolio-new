"use client";

import { useState } from "react";
import { skills, skillCategories, type Skill } from "@/data/resume";

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-foreground">{skill.name}</span>
        <span className="text-xs text-muted">{skill.level}/5</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-card-border">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-blue-400 transition-all duration-700 group-hover:brightness-125"
          style={{ width: `${(skill.level / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = Object.keys(skillCategories);
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? categories.filter((c) => c === active)
    : categories;

  return (
    <section id="skills" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-accent">
          Competences
        </h2>
        <p className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
          Stack technique
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
            Toutes
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? null : cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-accent text-white"
                  : "border border-card-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {skillCategories[cat]}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            return (
              <div
                key={cat}
                className="rounded-2xl border border-card-border bg-card p-6 transition-all duration-300"
              >
                <h3 className="mb-5 text-lg font-semibold text-foreground">
                  {skillCategories[cat]}
                </h3>
                <div className="flex flex-col gap-4">
                  {catSkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
