# SETUP — Démarrer Infiniment Rose en local

## Pré-requis (à installer une seule fois)

1. **Node.js 20+** → https://nodejs.org (installe la version LTS, clic-clic)
2. **Visual Studio Code** → https://code.visualstudio.com
3. **Claude Code** → ouvre un terminal (Terminal sur Mac, PowerShell sur Windows) et lance :
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
4. **Git** (optionnel mais recommandé) → https://git-scm.com

## Lancer le projet — 3 étapes

### 1. Ouvre le dossier dans VSCode

- File → Open Folder → sélectionne **`Infiniment Rose/infiniment-rose`** (pas le parent, le sous-dossier)

### 2. Installe les dépendances

Dans VSCode, ouvre le terminal intégré (`Ctrl + ù` ou `View → Terminal`), puis :

```bash
npm install
```

Attends 1-2 minutes.

### 3. Lance le serveur de dev

```bash
npm run dev
```

Ouvre http://localhost:3000 dans ton navigateur. Tu verras la landing page.

## Lancer Claude Code

Dans le même terminal, une autre fenêtre :

```bash
claude
```

Ou depuis VSCode : `Cmd+Shift+P` → "Claude Code: Start Session".

Claude Code lira automatiquement le `CLAUDE.md` à la racine du projet qui lui donne tout le contexte.

## Ce qui est déjà fonctionnel

- ✅ Hero avec titre, date, lieu, CTA inscription
- ✅ Compte à rebours jusqu'au 10 oct 2026 midi (en direct)
- ✅ Compteur participants 150 (mocké pour l'instant, lira HelloAsso plus tard)
- ✅ Explication format backyard (3 cartes)
- ✅ Section parcours (placeholder carte, à remplacer par le GPX)
- ✅ Pourquoi on court (sensibilisation Octobre Rose)
- ✅ Mur de dons live (mocké)
- ✅ Galerie éditions précédentes (placeholders)
- ✅ FAQ déroulante
- ✅ Formulaire bénévoles
- ✅ Bloc sponsor LaFORÊT
- ✅ Footer avec mentions légales

## Ce qui sera branché après le partenariat Ligue 37

- 🔌 Intégration HelloAsso (billetterie + webhook)
- 🔌 Base Supabase (participants réels, compteur temps réel)
- 🔌 Carte interactive GPX (Leaflet + fichier .gpx)
- 🔌 Envois email automatiques (Resend)

## Structure du projet

```
infiniment-rose/
├── CLAUDE.md           ← contexte projet pour Claude Code
├── SETUP.md            ← ce fichier
├── README.md           ← présentation du projet
├── package.json        ← dépendances npm
├── next.config.mjs     ← config Next.js
├── tsconfig.json       ← config TypeScript
├── tailwind.config.ts  ← config Tailwind + couleurs
├── public/             ← images, favicon, GPX
└── src/
    ├── app/            ← pages + layouts (App Router Next.js 15)
    │   ├── layout.tsx  ← layout global
    │   ├── page.tsx    ← page d'accueil (landing)
    │   ├── globals.css ← styles globaux
    │   └── api/        ← routes backend (mock + webhooks futurs)
    ├── components/     ← composants React (Hero, Countdown, etc.)
    └── lib/            ← utils + mock data
```

## Raccourcis utiles

- `Cmd+P` (Mac) / `Ctrl+P` : ouverture rapide de fichier
- `Cmd+Shift+F` : recherche dans tout le projet
- `Cmd+B` : toggle sidebar
- Dans Claude Code : `/clear` pour repartir propre, `/plan` pour planifier avant d'exécuter

## Si ça casse

Essaie dans l'ordre :
1. `rm -rf .next node_modules && npm install` (reset complet)
2. Vérifie que Node est en v20+ : `node -v`
3. Redémarre VSCode
