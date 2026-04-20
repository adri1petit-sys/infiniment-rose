export function Sponsor() {
  return (
    <section id="sponsor" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-widest text-ink/50 mb-10">
          Événement porté par
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl bg-laforet text-cream p-10 sm:p-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] opacity-70 mb-6">
              Sponsor unique
            </p>
            <p className="font-display text-4xl sm:text-5xl font-black tracking-tight">
              LaFORÊT
            </p>
            <p className="mt-2 text-lg opacity-80">Saint-Avertin</p>
            <p className="mt-6 text-sm opacity-70 max-w-sm mx-auto">
              Votre agence immobilière de proximité, partenaire du SARC depuis
              2024. 35 Rue du Général Mocquery, 37550 Saint-Avertin.
            </p>
          </div>

          <div className="rounded-3xl border border-rose-light/40 bg-cream p-10 sm:p-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-rose mb-6">
              Bénéficiaire
            </p>
            <p className="font-display text-3xl sm:text-4xl font-black tracking-tight text-ink">
              Ligue contre le Cancer
            </p>
            <p className="mt-2 text-lg text-ink/70">Comité d'Indre-et-Loire</p>
            <p className="mt-6 text-sm text-ink/60 max-w-sm mx-auto">
              100 % des inscriptions et dons sont reversés pour soutenir la
              recherche, le dépistage et l'accompagnement des patientes en
              Touraine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
