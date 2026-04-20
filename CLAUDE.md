# Contexte — Infiniment Rose 2026

Tu aides Adrien Petit (agent immobilier LaFORÊT Saint-Avertin) et son frère Vincent à développer la landing page de **Infiniment Rose**, la 3ᵉ édition de leur backyard trail caritatif organisé par le Saint-Avertin Run Club (SARC).

## L'event en 1 paragraphe

Samedi **10 octobre 2026, midi**. Départ du parking LaFORÊT, 35 Rue du Général Mocquery, 37550 Saint-Avertin. Format backyard ultra : boucle de **6,7 km à relancer chaque heure, last one standing gagne**. Limité à **150 coureurs**, **20 € minimum** d'inscription, **100 % reversé à la Ligue contre le Cancer Comité 37** au profit d'Octobre Rose. Sponsor unique : **LaFORÊT Saint-Avertin**. Le SARC n'est pas une association, Adrien & Vincent sont co-organisateurs.

## Stack technique

- **Next.js 15** (App Router, Server Components)
- **React 19**, **TypeScript**
- **Tailwind CSS 3.4** + animations maison + **Framer Motion 11**
- **Lucide-react** pour les icônes
- **Supabase** (à brancher plus tard) pour participants + realtime
- **HelloAsso API** (à brancher plus tard) pour billetterie + webhook
- **Leaflet** (à ajouter) pour carte GPX
- **Resend** (à ajouter) pour emails transactionnels
- Déploiement : **Vercel**

## Design system

Palette (définie dans `tailwind.config.ts`) :
- `rose` (principal) : `#E6007E` — Rose Octobre Rose officiel
- `rose-light` : `#FFC8DD` — accents doux
- `rose-dark` : `#A3005A` — hover/emphasis
- `ink` : `#0A0A0A` — texte principal
- `cream` : `#FAF7F5` — fond
- `laforet` : `#005F3C` — bloc sponsor uniquement

Typographie :
- Titres : `font-display` (Fraunces ou alternative serif)
- Corps : `font-sans` (Inter)

Ton : **premium, chaleureux, engagé**. S'inspire de l'esthétique Apple (grosses typos, espace, simplicité) avec une chaleur caritative.

## Priorités produit

1. **Zéro euro ne transite par les comptes d'Adrien/Vincent/LaFORÊT** — tout passe par HelloAsso et arrive direct sur le compte de la Ligue 37.
2. Le **compteur 150 places** doit être crédible et en temps réel.
3. Le **compte à rebours** jusqu'à midi le 10/10/2026.
4. **Mobile first** — la majorité des runners s'inscriront depuis un smartphone.
5. **Accessibilité** — contrastes AA minimum, navigation clavier, alt textes.

## État actuel

- ✅ Scaffolding complet, toutes les sections en mock data
- ⏳ En attente de réponse Ligue 37 pour brancher HelloAsso
- ⏳ En attente du GPX d'Adrien pour intégrer la carte

## Guidelines code

- Composants React en PascalCase dans `src/components/`
- Un composant = un fichier (pas de barrels qui cachent la structure)
- Pas de `any` TypeScript, types explicites partout
- Animations Framer Motion parcimonieuses, pas de flashy
- Tout le texte est en français
- Commentaires rares, uniquement quand le code n'est pas évident

## Conventions

- Jamais de `console.log` committé
- Jamais de secret dans le repo → `.env.local` (gitignored)
- Pas de librairie lourde sans accord (underscore, moment.js, etc.)
- Préfère les Server Components par défaut, `"use client"` uniquement quand nécessaire (interactions, hooks)

## Quand tu travailles

- Si tu ajoutes une dépendance, explique pourquoi
- Si tu changes la palette ou la typo, demande confirmation
- Avant un refacto > 3 fichiers, fais un mini-plan
- Relis `SETUP.md` si tu as un doute sur la structure
