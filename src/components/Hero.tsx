import { MapPin, Calendar, Heart } from "lucide-react";
import { RegisterButton } from "./RegisterButton";
import { Countdown } from "./Countdown";
import { ParticipantCounter } from "./ParticipantCounter";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background rose gradient subtle */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-light/40 via-cream to-cream" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-rose/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-40 h-[400px] w-[400px] rounded-full bg-rose-light/40 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Pre-title */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-4 py-2 border border-rose-light/50">
            <Heart className="h-4 w-4 text-rose" fill="#E6007E" aria-hidden />
            <span className="text-sm font-medium tracking-wide">
              3ᵉ édition · 100 % reversé à Octobre Rose
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight">
          <span className="block">Infiniment</span>
          <span className="block text-gradient-rose">Rose</span>
        </h1>

        {/* Pitch */}
        <p className="mt-8 text-center text-lg sm:text-xl md:text-2xl text-ink/75 max-w-3xl mx-auto leading-snug">
          Une boucle de{" "}
          <span className="font-semibold text-ink">6,7 km</span>. Toutes les
          heures.{" "}
          <span className="font-semibold text-ink">
            Jusqu'au dernier debout.
          </span>
          <br className="hidden sm:block" /> 150 coureurs.{" "}
          <span className="text-rose font-semibold">
            100 % reversé à la lutte contre le cancer du sein.
          </span>
        </p>

        {/* Meta */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-ink/70">
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-rose" />
            Samedi 10 octobre 2026 · 12h00
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-rose" />
            Agence LaFORÊT Saint-Avertin (37550)
          </span>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <RegisterButton>Je m'inscris · 20 € minimum</RegisterButton>
          <span className="text-xs text-ink/50">
            Paiement sécurisé via HelloAsso · reçu fiscal automatique
          </span>
        </div>

        {/* Counter + Countdown */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex justify-center">
            <ParticipantCounter />
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-ink/60">
              Top départ dans
            </span>
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}
