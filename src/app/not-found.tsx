"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-4 text-center">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative z-10">
        <h1 className="text-8xl font-semibold tracking-tight text-foreground md:text-9xl">
          4<span className="text-accent">0</span>4
        </h1>
        <p className="mt-4 text-lg text-muted">{t.notFound.message}</p>
        <Link
          href="/"
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {t.notFound.back}
        </Link>
      </div>
    </div>
  );
}
