import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <h1 className="text-8xl font-bold text-white md:text-9xl">
          4<span className="text-blue-400">0</span>4
        </h1>
        <p className="mt-4 text-xl text-zinc-400">
          Oups, cette page n&apos;existe pas.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-blue-600"
        >
          Retour a l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
