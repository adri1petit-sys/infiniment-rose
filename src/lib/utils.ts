export const EVENT_START_ISO =
  process.env.NEXT_PUBLIC_EVENT_START_ISO ?? "2026-10-10T12:00:00+02:00";

export const MAX_PARTICIPANTS = Number(
  process.env.NEXT_PUBLIC_MAX_PARTICIPANTS ?? 150,
);

export function formatEuro(cents: number): string {
  return (cents / 100).toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

export function formatDateLong(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
