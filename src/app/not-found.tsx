"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <h1 className="text-8xl font-bold text-foreground md:text-9xl">
          4<span className="text-accent">0</span>4
        </h1>
        <p className="mt-4 text-xl text-muted">
          {t.notFound.message}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 hover:brightness-110"
        >
          {t.notFound.back}
        </Link>
      </div>
    </div>
  );
}
