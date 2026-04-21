import { Mountain, Route, Droplets } from "lucide-react";
import { ParcoursMapLoader } from "./ParcoursMapLoader";

export function Parcours() {
  return (
    <section id="parcours" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-rose font-semibold">
            Le parcours
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            6,7 km autour de Saint-Avertin
          </h2>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            Une boucle accessible qui serpente entre les coteaux du Cher et les
            chemins forestiers. Départ et arrivée devant l'agence LaFORÊT, sous
            les encouragements des bénévoles à chaque tour.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 aspect-[4/3] overflow-hidden">
            <ParcoursMapLoader />
          </div>

          {/* Stats parcours */}
          <div className="lg:col-span-2 space-y-4">
            <StatCard
              icon={Route}
              label="Distance par boucle"
              value="6,7 km"
            />
            <StatCard icon={Mountain} label="Dénivelé positif" value="~85 m" />
            <StatCard
              icon={Droplets}
              label="Ravitaillements"
              value="1 sur le parcours + 1 à l'agence"
            />
            <div className="rounded-2xl bg-ink text-cream p-6">
              <p className="text-sm uppercase tracking-widest text-rose-light mb-2">
                Temps cible
              </p>
              <p className="text-3xl font-display font-black">
                ≤ 60 min / tour
              </p>
              <p className="text-sm text-cream/70 mt-2">
                Soit une allure moyenne de 9 min/km, marche rapide incluse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mountain;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-rose-light/30 bg-white p-5 flex items-center gap-4">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-light/50 text-rose-dark">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-ink/60">{label}</p>
        <p className="font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
}
