"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/lib/mock";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-widest text-rose font-semibold">
            Questions fréquentes
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Tout ce qu'il faut savoir.
          </h2>
        </div>

        <ul className="divide-y divide-rose-light/40 border-y border-rose-light/40">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left hover:text-rose transition-colors"
                >
                  <span className="font-display text-lg sm:text-xl font-semibold">
                    {item.q}
                  </span>
                  <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-light/40 text-rose-dark">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-ink/70 leading-relaxed max-w-3xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center text-sm text-ink/60">
          Une autre question ? Écris-nous à{" "}
          <a
            href="mailto:contact@infinimentrose.fr"
            className="text-rose font-semibold hover:underline"
          >
            contact@infinimentrose.fr
          </a>
        </p>
      </div>
    </section>
  );
}
