import { Instagram, Facebook } from "lucide-react";
import { RegisterButton } from "./RegisterButton";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* Final CTA */}
      <div className="border-b border-cream/10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Tu{" "}
            <span className="text-gradient-rose">cours</span> le 10 octobre ?
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-2xl mx-auto">
            150 places. 20 € minimum. 100 % reversé. Un après-midi. Une cause.
            Un dernier debout.
          </p>
          <div className="mt-10">
            <RegisterButton>Je prends ma place</RegisterButton>
          </div>
        </div>
      </div>

      {/* Liens */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div>
            <p className="font-display text-xl font-bold">Infiniment Rose</p>
            <p className="mt-2 text-cream/60 max-w-xs">
              Backyard trail caritatif organisé par le SARC, au profit de la
              Ligue contre le Cancer 37.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/60 mb-3">
              Navigation
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#format" className="hover:text-rose-light transition">
                  Format
                </a>
              </li>
              <li>
                <a
                  href="#parcours"
                  className="hover:text-rose-light transition"
                >
                  Parcours
                </a>
              </li>
              <li>
                <a href="#dons" className="hover:text-rose-light transition">
                  Dons
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-light transition">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#benevoles"
                  className="hover:text-rose-light transition"
                >
                  Bénévoles
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/60 mb-3">
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@infinimentrose.fr"
                  className="hover:text-rose-light transition"
                >
                  contact@infinimentrose.fr
                </a>
              </li>
              <li className="text-cream/60">
                35 Rue du Général Mocquery
                <br />
                37550 Saint-Avertin
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/60 mb-3">
              Suivez-nous
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/laforet_saintavertin"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-rose hover:text-rose transition"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-rose hover:text-rose transition"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>
            © 2026 Saint-Avertin Run Club · Infiniment Rose est un événement
            non lucratif, 100 % reversé à la Ligue contre le Cancer 37.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cream transition">
              Mentions légales
            </a>
            <a href="#" className="hover:text-cream transition">
              Confidentialité
            </a>
            <a href="#" className="hover:text-cream transition">
              Règlement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
