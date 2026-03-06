import { languages } from "@/data/resume";

export default function Languages() {
  return (
    <section id="languages" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-accent">
          Langues
        </h2>
        <p className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Langues parlees
        </p>

        <div className="mx-auto grid max-w-md gap-6 sm:grid-cols-2">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="group flex items-center gap-4 rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-muted text-sm font-bold text-accent transition-colors group-hover:bg-accent-hover">
                {lang.flag}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{lang.name}</h3>
                <p className="text-sm text-muted">{lang.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
