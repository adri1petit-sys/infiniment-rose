import { Timer, RefreshCw, Trophy } from "lucide-react";

const cards = [
  {
    icon: Timer,
    title: "La boucle",
    desc: "6,7 km à boucler en moins d'une heure. Parcours mixte route + sentiers, adapté à tous les niveaux. Un ravito à mi-parcours.",
  },
  {
    icon: RefreshCw,
    title: "Le corral",
    desc: "À xx:57, tout le monde revient au corral. À l'heure pile, coup de pistolet. Vous repartez pour un tour. Vous arrivez après 60 min, vous êtes éliminé.",
  },
  {
    icon: Trophy,
    title: "Le last one standing",
    desc: "On continue. Heure après heure. Jusqu'à ce qu'il n'en reste qu'un — le dernier à boucler seul un tour entier. Peu importe le nombre de tours.",
  },
];

export function BackyardExplained() {
  return (
    <section id="format" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-rose font-semibold">
            Le format
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Courir.{" "}
            <span className="text-gradient-rose">Encore.</span>
            <br />
            Puis recommencer.
          </h2>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            Le backyard ultra est un format créé par Lazarus Lake, inventeur de
            la Barkley. Règle unique : une boucle, chaque heure, tant que vous
            tenez. Pas de classement par temps. Juste un seul gagnant : celui
            qui bouclera un tour quand tous les autres auront renoncé.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-3xl border border-rose-light/30 bg-cream p-8 hover:shadow-[0_20px_40px_-20px_rgba(230,0,126,0.3)] transition-shadow"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-rose text-white mb-6">
                <Icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="font-display text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
