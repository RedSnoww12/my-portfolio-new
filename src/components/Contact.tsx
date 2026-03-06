"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Contact() {
  const { t } = useLocale();

  const cards = [
    {
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      label: "Email",
      detail: personalInfo.email,
      external: false,
    },
    {
      href: personalInfo.github,
      icon: Github,
      label: "GitHub",
      detail: "RedSnoww12",
      external: true,
    },
    {
      href: personalInfo.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
      detail: "Sacha Amara-Pirollo",
      external: true,
    },
  ];

  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-accent">
          {t.contact.subtitle}
        </h2>
        <p className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.contact.title}
        </p>
        <p className="mx-auto mb-12 max-w-lg text-center text-muted">
          {t.contact.description}
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/40 sm:p-8"
            >
              <div className="rounded-xl bg-accent-muted p-4 text-accent transition-colors group-hover:bg-accent-hover">
                <card.icon size={24} />
              </div>
              <span className="text-sm font-medium text-foreground">{card.label}</span>
              <span className="max-w-full truncate text-xs text-muted">{card.detail}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
