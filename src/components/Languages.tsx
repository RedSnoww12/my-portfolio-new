"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import SectionHeading from "./SectionHeading";

export default function Languages() {
  const { t } = useLocale();

  return (
    <section id="languages" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="05" eyebrow={t.languages.subtitle} title={t.languages.title} />

        <div className="grid gap-4 sm:grid-cols-2">
          {t.languages.items.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="group flex items-center gap-4 rounded-lg border border-card-border bg-card p-6 transition-colors duration-300 hover:border-accent/50"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent-muted font-mono text-sm font-semibold text-accent transition-colors duration-300 group-hover:bg-accent-hover">
                {lang.flag}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{lang.name}</h3>
                <p className="font-mono text-sm text-muted">{lang.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
