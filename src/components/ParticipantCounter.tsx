"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";

type Payload = {
  current: number;
  remaining: number;
  max: number;
  totalCollectedEur: number;
};

export function ParticipantCounter() {
  const [data, setData] = useState<Payload | null>(null);

  useEffect(() => {
    let alive = true;
    async function fetchIt() {
      try {
        const r = await fetch("/api/participants/count", { cache: "no-store" });
        const j = (await r.json()) as Payload;
        if (alive) setData(j);
      } catch {
        /* silent pour le mock */
      }
    }
    fetchIt();
    const id = setInterval(fetchIt, 15_000); // refresh toutes les 15s
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  const remaining = data?.remaining ?? 150;
  const percent = data ? (data.current / data.max) * 100 : 0;
  const almostFull = remaining <= 20;

  return (
    <div className="inline-flex flex-col items-center gap-3">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 border border-rose-light/60 text-xs uppercase tracking-widest text-ink/70">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            almostFull ? "bg-rose-dark animate-pulse" : "bg-rose"
          }`}
        />
        {almostFull ? "Dernières places" : "Inscriptions ouvertes"}
      </div>

      <div className="flex items-baseline gap-3 font-display">
        <Users className="h-8 w-8 text-rose" aria-hidden />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={remaining}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="text-6xl sm:text-7xl font-black tabular-nums text-gradient-rose"
          >
            {remaining}
          </motion.span>
        </AnimatePresence>
        <span className="text-2xl sm:text-3xl font-semibold text-ink/60">
          / 150
        </span>
      </div>

      <p className="text-sm text-ink/60">
        places restantes sur 150 coureurs max
      </p>

      {/* Barre de remplissage */}
      <div className="w-full max-w-xs h-1.5 rounded-full bg-rose-light/40 overflow-hidden">
        <motion.div
          className="h-full gradient-rose"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
