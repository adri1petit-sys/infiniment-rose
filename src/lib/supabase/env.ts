export function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      `Variable d'environnement manquante : ${key}. Vérifie .env.local (local) ou la config Vercel (prod).`,
    );
  }
  return value;
}
