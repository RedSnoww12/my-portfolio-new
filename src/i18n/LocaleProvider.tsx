"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import translations, { type Locale, type Translations } from "./translations";

const LocaleContext = createContext<{
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}>({
  locale: "fr",
  t: translations.fr,
  toggleLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && translations[stored]) {
      setLocale(stored);
    }
  }, []);

  const toggleLocale = () => {
    const next = locale === "fr" ? "en" : "fr";
    setLocale(next);
    localStorage.setItem("locale", next);
  };

  return (
    <LocaleContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
