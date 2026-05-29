"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { useLocale } from "@/i18n/LocaleProvider";
import SectionHeading from "./SectionHeading";

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
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="06" eyebrow={t.contact.subtitle} title={t.contact.title} />

        <p className="mb-10 max-w-xl text-base leading-relaxed text-muted">
          {t.contact.description}
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="group flex cursor-pointer items-center gap-4 rounded-lg border border-card-border bg-card p-5 transition-colors duration-300 hover:border-accent/50"
            >
              <span className="flex-shrink-0 rounded-lg bg-accent-muted p-3 text-accent transition-colors duration-300 group-hover:bg-accent-hover">
                <card.icon size={22} />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs uppercase tracking-[0.12em] text-muted">
                  {card.label}
                </span>
                <span className="block truncate text-sm font-medium text-foreground">
                  {card.detail}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
