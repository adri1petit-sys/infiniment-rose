"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  notes: string;
};

const roles = [
  { value: "ravito_agence", label: "Ravitaillement agence" },
  { value: "parcours", label: "Signalisation / parcours" },
  { value: "accueil", label: "Accueil & dossards" },
  { value: "chrono", label: "Chronométrage / corral" },
  { value: "photo", label: "Photo / vidéo" },
  { value: "tous", label: "Peu importe, je prends" },
];

export function VolunteerForm() {
  const [form, setForm] = useState<Form>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // À brancher sur Supabase ou une route API après partenariat.
    // Pour l'instant, on simule.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="benevoles" className="py-24 sm:py-32 bg-rose-light/20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex h-20 w-20 items-center justify-center rounded-full gradient-rose text-white mb-6"
          >
            <Check className="h-10 w-10" />
          </motion.div>
          <h2 className="font-display text-4xl font-black">Merci, {form.firstName} !</h2>
          <p className="mt-4 text-ink/70">
            On te recontacte d'ici 48h avec le planning et le briefing.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="benevoles" className="py-24 sm:py-32 bg-rose-light/20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-rose font-semibold">
            Sans vous, pas d'event
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Rejoins l'équipe bénévoles.
          </h2>
          <p className="mt-6 text-lg text-ink/70">
            15 places pour rendre la journée inoubliable. T-shirt bénévole,
            repas offert, souvenirs garantis.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid sm:grid-cols-2 gap-4 bg-white rounded-3xl border border-rose-light/40 p-8"
        >
          <Input
            label="Prénom"
            value={form.firstName}
            onChange={(v) => setForm({ ...form, firstName: v })}
            required
          />
          <Input
            label="Nom"
            value={form.lastName}
            onChange={(v) => setForm({ ...form, lastName: v })}
            required
          />
          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
            required
          />
          <Input
            label="Téléphone"
            type="tel"
            value={form.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
            required
          />
          <div className="sm:col-span-2">
            <Label>Rôle préféré</Label>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              required
              className="mt-1.5 w-full rounded-xl border border-rose-light/50 bg-cream px-4 py-3 text-ink focus:border-rose focus:outline-none"
            >
              <option value="">Sélectionne…</option>
              {roles.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <Label>Remarques, disponibilités, talents spéciaux…</Label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={3}
              className="mt-1.5 w-full rounded-xl border border-rose-light/50 bg-cream px-4 py-3 text-ink focus:border-rose focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="sm:col-span-2 mt-2 rounded-full gradient-rose text-white font-semibold py-4 hover:opacity-95 transition-opacity shadow-lg shadow-rose/30"
          >
            Je deviens bénévole
          </button>
        </form>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs uppercase tracking-widest text-ink/70 font-medium">
      {children}
    </label>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-rose-light/50 bg-cream px-4 py-3 text-ink focus:border-rose focus:outline-none"
      />
    </div>
  );
}
