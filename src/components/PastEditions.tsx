import { pastEditions } from "@/lib/mock";

export function PastEditions() {
  return (
    <section id="editions" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-rose font-semibold">
            Éditions précédentes
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Un rendez-vous qui grandit.
          </h2>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            Depuis 2024, le SARC rassemble les coureurs d'Indre-et-Loire pour
            un format exigeant et convivial. Cette année, on lui donne un sens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pastEditions.map((ed) => (
            <article
              key={ed.year}
              className="group relative overflow-hidden rounded-3xl border border-rose-light/30 bg-white"
            >
              {/* Placeholder photo */}
              <div className="aspect-[16/10] relative gradient-rose opacity-30 flex items-center justify-center">
                <span className="font-display text-white text-7xl font-black opacity-60">
                  {ed.year}
                </span>
              </div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-widest text-rose font-semibold">
                  {ed.edition}
                </p>
                <div className="mt-4 flex items-baseline gap-8">
                  <div>
                    <p className="font-display text-4xl font-black">
                      {ed.participants}
                    </p>
                    <p className="text-xs text-ink/60 uppercase tracking-wide">
                      participants
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-black text-gradient-rose">
                      {ed.lastHour} h
                    </p>
                    <p className="text-xs text-ink/60 uppercase tracking-wide">
                      last one standing
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-ink/70 italic">"{ed.note}"</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink/50 italic">
          Photos des éditions précédentes à intégrer depuis le dossier partagé.
        </p>
      </div>
    </section>
  );
}
