"use client";

import { useEffect, useState } from "react";
import { EVENT_START_ISO } from "@/lib/utils";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
};

function computeRemaining(targetIso: string): Remaining {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, finished: false };
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const [r, setR] = useState<Remaining | null>(null);

  useEffect(() => {
    setR(computeRemaining(EVENT_START_ISO));
    const id = setInterval(() => {
      setR(computeRemaining(EVENT_START_ISO));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!r) {
    // placeholder sans flicker SSR
    return (
      <div className={compact ? "h-6" : "h-24"} aria-hidden />
    );
  }

  if (r.finished) {
    return (
      <p className="text-center text-2xl font-display">
        C'est parti.{" "}
        <span className="text-gradient-rose font-bold">Infiniment Rose !</span>
      </p>
    );
  }

  if (compact) {
    return (
      <span className="font-mono text-sm opacity-80">
        J−{r.days} · {String(r.hours).padStart(2, "0")}:
        {String(r.minutes).padStart(2, "0")}:
        {String(r.seconds).padStart(2, "0")}
      </span>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
      {[
        { label: "jours", value: r.days },
        { label: "heures", value: r.hours },
        { label: "minutes", value: r.minutes },
        { label: "secondes", value: r.seconds },
      ].map((unit) => (
        <div
          key={unit.label}
          className="rounded-2xl bg-white/80 backdrop-blur border border-rose-light/40 p-4 sm:p-6 text-center shadow-sm"
        >
          <div className="font-display text-4xl sm:text-6xl font-black tabular-nums text-ink">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm uppercase tracking-widest text-ink/60 mt-1">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
