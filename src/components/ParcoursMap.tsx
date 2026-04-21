"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip } from "react-leaflet";
import L, { type LatLngBounds, type LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

type Track = {
  points: LatLngTuple[];
  bounds: LatLngBounds;
};

async function loadBoucleGpx(): Promise<Track> {
  const res = await fetch("/gpx/boucle.gpx");
  if (!res.ok) throw new Error(`GPX fetch failed: ${res.status}`);
  const text = await res.text();
  const xml = new DOMParser().parseFromString(text, "application/xml");
  const trkpts = xml.querySelectorAll("trkpt");
  const points: LatLngTuple[] = Array.from(trkpts)
    .map((p): LatLngTuple | null => {
      const lat = Number(p.getAttribute("lat"));
      const lon = Number(p.getAttribute("lon"));
      return Number.isFinite(lat) && Number.isFinite(lon) ? [lat, lon] : null;
    })
    .filter((p): p is LatLngTuple => p !== null);
  if (points.length === 0) throw new Error("GPX sans trkpt exploitable");
  return { points, bounds: L.latLngBounds(points) };
}

export function ParcoursMap() {
  const [track, setTrack] = useState<Track | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    loadBoucleGpx()
      .then(setTrack)
      .catch(() => setFailed(true));
  }, []);

  if (failed) {
    return (
      <div className="h-full w-full rounded-3xl border border-rose-light/30 bg-white flex items-center justify-center p-8 text-center">
        <p className="text-sm text-ink/60">
          Carte indisponible. Le GPX sera envoyé par email à tous les inscrits.
        </p>
      </div>
    );
  }

  if (!track) {
    return (
      <div
        className="h-full w-full rounded-3xl bg-rose-light/30 animate-pulse"
        aria-hidden
      />
    );
  }

  const [startLat, startLon] = track.points[0];

  return (
    <figure className="h-full w-full">
      <MapContainer
        bounds={track.bounds}
        boundsOptions={{ padding: [24, 24] }}
        scrollWheelZoom={false}
        className="h-full w-full rounded-3xl border border-rose-light/30"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &middot; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Polyline
          positions={track.points}
          pathOptions={{ color: "#E6007E", weight: 4, opacity: 0.9 }}
        />
        <CircleMarker
          center={[startLat, startLon]}
          radius={8}
          pathOptions={{
            color: "#FFFFFF",
            weight: 3,
            fillColor: "#E6007E",
            fillOpacity: 1,
          }}
        >
          <Tooltip permanent={false} direction="top" offset={[0, -6]}>
            Départ &amp; arrivée
          </Tooltip>
        </CircleMarker>
      </MapContainer>
      <figcaption className="sr-only">
        Tracé de la boucle de 6,7 km, départ et arrivée devant l&apos;agence
        LaFORÊT à Saint-Avertin.
      </figcaption>
    </figure>
  );
}
