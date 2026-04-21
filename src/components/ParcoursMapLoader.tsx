"use client";

import dynamic from "next/dynamic";

// Leaflet accède à `window` à l'import → SSR impossible.
// Chargement client-only via dynamic, skeleton en fallback.
export const ParcoursMapLoader = dynamic(
  () => import("./ParcoursMap").then((m) => m.ParcoursMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-full w-full rounded-3xl bg-rose-light/30 animate-pulse"
        aria-hidden
      />
    ),
  },
);
