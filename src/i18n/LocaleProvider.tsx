"use client";

import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import translations, { type Locale, type Translations } from "./translations";

const LOCALE_KEY = "locale";
const LOCALE_EVENT = "locale-change";

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

function subscribe(callback: () => void) {
  window.addEventListener(LOCALE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(LOCALE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Locale {
  const stored = localStorage.getItem(LOCALE_KEY) as Locale | null;
  return stored && translations[stored] ? stored : "fr";
}

// Server (and first hydration render) always assume the default locale.
const getServerSnapshot = (): Locale => "fr";

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleLocale = useCallback(() => {
    const next: Locale = locale === "fr" ? "en" : "fr";
    localStorage.setItem(LOCALE_KEY, next);
    window.dispatchEvent(new Event(LOCALE_EVENT));
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
