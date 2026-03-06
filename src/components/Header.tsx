"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { locale, t, toggleLocale } = useLocale();

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-card-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-xl font-bold text-foreground">
          S<span className="text-accent">.</span>A
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-1">
            <button
              onClick={toggleLocale}
              aria-label="Toggle language"
              className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-accent-muted hover:text-foreground"
            >
              <Globe size={16} />
              {locale.toUpperCase()}
            </button>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-lg p-2 text-muted transition-colors hover:bg-accent-muted hover:text-foreground"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile buttons */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
          >
            <Globe size={16} />
            {locale.toUpperCase()}
          </button>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-muted transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-card-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm text-muted transition-colors hover:bg-accent-muted hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
