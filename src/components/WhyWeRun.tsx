import { Heart } from "lucide-react";

export function WhyWeRun() {
  return (
    <section id="cause" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-rose opacity-[0.04]" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-rose-light/40 px-4 py-2 mb-8">
          <Heart className="h-4 w-4 text-rose" fill="#E6007E" aria-hidden />
          <span className="text-sm font-medium text-rose-dark">
            Octobre Rose 2026
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
          On court pour{" "}
          <span className="text-gradient-rose">celles qui se battent</span>.
        </h2>

        <p className="mt-8 text-lg sm:text-xl text-ink/75 leading-relaxed">
          En France, 1 femme sur 8 développera un cancer du sein au cours de sa
          vie. Détecté tôt, il se guérit dans 9 cas sur 10. Chaque euro collecté
          par Infiniment Rose est reversé à la{" "}
          <strong className="text-ink">
            Ligue contre le Cancer, Comité d'Indre-et-Loire
          </strong>
          , pour financer la recherche, accompagner les patientes et développer
          le dépistage gratuit en local.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <Stat number="1/8" label="femmes touchées en France" />
          <Stat number="61 000" label="nouveaux cas chaque année" />
          <Stat number="90 %" label="guérison si dépisté à temps" />
        </div>

        <p className="mt-12 text-sm text-ink/60 italic max-w-2xl mx-auto">
          Courir 6,7 km toutes les heures, c'est accepter de se laisser dépasser
          par le temps, un tour après l'autre. C'est exactement ce que vivent
          les personnes qui se battent contre le cancer. C'est pour elles que
          nous courons.
        </p>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white border border-rose-light/40 p-6">
      <p className="font-display text-5xl sm:text-6xl font-black text-gradient-rose">
        {number}
      </p>
      <p className="mt-2 text-sm text-ink/70 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}
