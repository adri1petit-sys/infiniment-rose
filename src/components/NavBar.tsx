"use client";

import { useEffect, useState } from "react";
import { Countdown } from "./Countdown";
import { RegisterButton } from "./RegisterButton";

const links = [
  { href: "#format", label: "Format" },
  { href: "#parcours", label: "Parcours" },
  { href: "#cause", label: "La cause" },
  { href: "#dons", label: "Dons" },
  { href: "#faq", label: "FAQ" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/80 backdrop-blur border-b border-rose-light/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="font-display font-black text-xl tracking-tight hover:opacity-80"
        >
          Infiniment <span className="text-gradient-rose">Rose</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink/70 hover:text-rose transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Countdown compact />
          </div>
          <RegisterButton size="sm">S'inscrire</RegisterButton>
        </div>
      </div>
    </header>
  );
}
