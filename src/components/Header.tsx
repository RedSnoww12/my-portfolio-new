"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const { theme, toggle } = useTheme();
  const { locale, t, toggleLocale } = useLocale();

  const navLinks = [
    { label: t.nav.home, href: "#hero", id: "hero" },
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.skills, href: "#skills", id: "skills" },
    { label: t.nav.projects, href: "#projects", id: "projects" },
    { label: t.nav.experience, href: "#experience", id: "experience" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const ids = ["hero", "about", "skills", "projects", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#hero"
          className="cursor-pointer font-mono text-base font-semibold tracking-tight text-foreground"
        >
          SA<span className="text-accent">_</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                className={`relative cursor-pointer font-mono text-xs uppercase tracking-[0.15em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300 ${
                  active === link.id
                    ? "text-foreground after:w-full"
                    : "text-muted after:w-0 hover:text-foreground hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-1 flex items-center gap-1 border-l border-hairline pl-4">
            <button
              onClick={toggleLocale}
              aria-label="Toggle language"
              className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1.5 font-mono text-xs font-medium text-muted transition-colors hover:bg-accent-muted hover:text-foreground"
            >
              <Globe size={15} />
              {locale.toUpperCase()}
            </button>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="cursor-pointer rounded-md p-2 text-muted transition-colors hover:bg-accent-muted hover:text-foreground"
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
            className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1.5 font-mono text-xs font-medium text-muted transition-colors hover:text-foreground"
          >
            <Globe size={15} />
            {locale.toUpperCase()}
          </button>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="cursor-pointer rounded-md p-2 text-muted transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="cursor-pointer p-1 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-hairline bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block cursor-pointer rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-[0.12em] transition-colors ${
                    active === link.id
                      ? "bg-accent-muted text-accent"
                      : "text-muted hover:bg-accent-muted hover:text-foreground"
                  }`}
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
