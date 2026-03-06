import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { end: 5, suffix: "+", label: "Annees d'experience" },
  { end: 5, suffix: "+", label: "Projets realises" },
  { end: 25, suffix: "+", label: "Technologies maitrisees" },
  { end: 3, suffix: "", label: "Entreprises" },
];

export default function Stats() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <AnimatedCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
