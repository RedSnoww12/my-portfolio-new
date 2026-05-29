"use client";

import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/resume";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-hairline px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs tracking-wide text-muted">
          © {new Date().getFullYear()} {personalInfo.name} · {t.footer.rights}
        </p>
        <div className="flex gap-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-md border border-card-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-md border border-card-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
