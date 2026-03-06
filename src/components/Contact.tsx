import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-accent">
          Contact
        </h2>
        <p className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Travaillons ensemble
        </p>
        <p className="mx-auto mb-12 max-w-lg text-center text-muted">
          Interesse par mon profil ? N&apos;hesitez pas a me contacter pour discuter de vos projets
          ou opportunites.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/40 sm:p-8"
          >
            <div className="rounded-xl bg-accent-muted p-4 text-accent transition-colors group-hover:bg-accent-hover">
              <Mail size={24} />
            </div>
            <span className="text-sm font-medium text-foreground">Email</span>
            <span className="max-w-full truncate text-xs text-muted">{personalInfo.email}</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/40 sm:p-8"
          >
            <div className="rounded-xl bg-accent-muted p-4 text-accent transition-colors group-hover:bg-accent-hover">
              <Github size={24} />
            </div>
            <span className="text-sm font-medium text-foreground">GitHub</span>
            <span className="text-xs text-muted">RedSnoww12</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/40 sm:p-8"
          >
            <div className="rounded-xl bg-accent-muted p-4 text-accent transition-colors group-hover:bg-accent-hover">
              <Linkedin size={24} />
            </div>
            <span className="text-sm font-medium text-foreground">LinkedIn</span>
            <span className="text-xs text-muted">Sacha Amara-Pirollo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
