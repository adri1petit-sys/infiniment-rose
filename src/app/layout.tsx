import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Infiniment Rose — Backyard trail caritatif · 10 octobre 2026",
  description:
    "Rejoignez 150 coureurs pour un backyard ultra à Saint-Avertin. 100% des inscriptions reversées à la Ligue contre le Cancer pour Octobre Rose. Une boucle de 6,7 km, toutes les heures, jusqu'au dernier debout.",
  metadataBase: new URL("https://infinimentrose.fr"),
  openGraph: {
    title: "Infiniment Rose — Backyard trail pour Octobre Rose",
    description:
      "150 coureurs. Une boucle de 6,7 km par heure. Last one standing. 100% reversé à Octobre Rose.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#E6007E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
