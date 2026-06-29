# CLAUDE.md — Kennu (leer-eilanden)

Persoonlijke Kinnu-variant van Stijn: leer-eilanden met korte sessies (lezen → quiz →
samenvatting), spaced repetition en een knowledge-map. Privé-project.

## Stack
- bun · Vite · React 19 · TypeScript (strict) · react-router-dom v7 · Tailwind v4 (`@theme`, geen config-js) · vite-plugin-pwa
- Geen state library: `useState` + simpele localStorage-engine (`src/engines/storage.ts`).

## Structuur
```
src/
  components/   herbruikbare UI (Layout, MarkdownLite, KnowledgeMap, OrbReader, QuestionCard, …)
  routes/       één bestand per route (Home, Island, Learn, Review, Bank, Settings)
  content/      getypte data-modules per eiland (muziek, vaderschap, talen-spaans, groei) + index.ts
  engines/      pure logica: storage (localStorage), sm2 (Memory Shield), tts (SpeechSynthesis)
  types.ts      gedeelde types
  App.tsx       router · main.tsx createRoot + BrowserRouter · index.css thema
public/favicon.svg · vercel.json (SPA-rewrites)
```

## Datamodel (kort)
Eiland (pathway) → Topic → **Orb** (1 concept: body + glossary + priming-vraag + quizvragen + samenvatting + prereqs).
Vraagtypes: `mcq`, `truefalse`, `whyhow` (open, zelfbeoordeeld), `ordering`, `matching`.
Voortgang in localStorage: review-cards (SM-2), voltooide orbs, stamps (nooit reset), certificaten.

## Inhoud toevoegen
Nieuwe orb = object toevoegen aan het juiste `content/<eiland>.ts`. Nieuw eiland = nieuw bestand +
registreren in `content/index.ts`. Toon: informeel, narrative, 200-400 woorden per orb.

## Design (verplicht)
- Dark-mode default (`<html class="dark">` + `@custom-variant dark`). Achtergrond `#0a0a0a`, tekst `#f4f4f5`.
- Mobile-first, `max-w-2xl mx-auto px-4`. Accent = `glow-*` (oranje). Geen disclaimers/footer.
- SVG-visuals met lichte fills/strokes (donkere strokes verdwijnen op zwart).

## Verificatie
1. Typecheck: `bun x tsc -b` (leeg = groen). Geen `npx` op deze laptop.
2. Browser: `mcp__Claude_Preview__preview_*` — minstens één scherm met de wijziging, in dark-mode.

## Taal & toon
Nederlands, je-vorm, direct, kort. Geen emoji in code/commits (wel in UI als het past). Geen losse .md's tenzij gevraagd.
