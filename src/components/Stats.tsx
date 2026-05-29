"use client";

import AnimatedCounter from "./AnimatedCounter";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Stats() {
  const { t } = useLocale();

  const stats = [
    { end: 5, suffix: "+", label: t.stats.years },
    { end: 5, suffix: "+", label: t.stats.projects },
    { end: 25, suffix: "+", label: t.stats.technologies },
    { end: 3, suffix: "", label: t.stats.companies },
  ];

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-hairline border-y border-hairline sm:divide-y-0 md:grid-cols-4">
        {stats.map((stat) => (
          <AnimatedCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
