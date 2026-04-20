"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { mockDonations } from "@/lib/mock";
import { useEffect, useState } from "react";

type Summary = { totalCollectedEur: number; current: number };

function timeAgo(min: number) {
  if (min < 60) return `il y a ${min} min`;
  const h = Math.floor(min / 60);
  if (h < 24) return `il y a ${h} h`;
  const d = Math.floor(h / 24);
  return `il y a ${d} j`;
}

export function DonationWall() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    fetch("/api/participants/count")
      .then((r) => r.json())
      .then((j) => setSummary(j))
      .catch(() => {});
  }, []);

  const total = summary?.totalCollectedEur ?? 1080;

  return (
    <section id="dons" className="py-24 sm:py-32 bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-rose-light font-semibold">
              Transparence totale
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Chaque euro,{" "}
              <span className="text-gradient-rose">directement</span> à
              l'association.
            </h2>
            <p className="mt-6 text-lg text-cream/75 leading-relaxed">
              0 € ne transite par nos comptes. La billetterie HelloAsso verse
              directement les fonds à la Ligue contre le Cancer 37. Chaque
              coureur reçoit son reçu fiscal (66 % déductible), et ce mur
              affiche tous les dons en temps réel.
            </p>

            <div className="mt-10 rounded-3xl gradient-rose p-8 sm:p-10 text-white">
              <p className="text-sm uppercase tracking-widest opacity-80">
                Collecté à ce jour
              </p>
              <motion.p
                key={total}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-2 font-display text-6xl sm:text-7xl font-black tabular-nums"
              >
                {total.toLocaleString("fr-FR")} €
              </motion.p>
              <p className="mt-3 text-sm opacity-90">
                au profit de la Ligue contre le Cancer · Comité 37
              </p>
            </div>
          </div>

          {/* Liste des dons récents */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">
              Derniers coureurs inscrits
            </h3>
            <ul className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {mockDonations.map((d, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-4 backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose/20 text-rose-light">
                      <Heart className="h-4 w-4" fill="#FFC8DD" />
                    </span>
                    <div>
                      <p className="font-semibold">{d.firstName}</p>
                      <p className="text-xs text-cream/60">
                        {timeAgo(d.minutesAgo)}
                      </p>
                    </div>
                  </div>
                  <p className="font-display text-xl font-bold text-rose-light tabular-nums">
                    {d.amount} €
                  </p>
                </motion.li>
              ))}
            </ul>
            <p className="text-xs text-cream/50 mt-4">
              Les coureurs qui le souhaitent peuvent masquer leur nom. Les
              montants sont toujours visibles pour la transparence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
