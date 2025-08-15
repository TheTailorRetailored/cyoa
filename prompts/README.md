Story generation (adventure-first)

Goal
- Produce a plausible, tense adventure (second person, present) with multiple endings. Minimal input; no need to invent titles or themes.

Standalone prompts
- 00_seed.md (standalone): Give just a civ/focus or paste a short textbook excerpt. Output includes 3 options, a selected concept, a fully-populated research_brief, and a meta template. You can proceed directly to beats/prose using this content.
- 01_civ_brief.md (standalone or chained): If you already have a concept (from 00), paste the `selected` block here to refine research details. If used standalone, provide the same fields manually.
- 02_beats.md (standalone or chained): Accepts context from 00/01 if available. Otherwise, ensure you supply enough setting/hazard notes in your prompt to guide beat design.
- 03_prose.md (standalone or chained): Expand beats into rich prose. If running standalone, include the beats JSON and any tone/constraint notes you need.
- 04_fact_inserts.md (final polish): Cleans helper keys and ensures the final adventure JSON schema.
- 05_museum_wrappers.md (optional frame): Adds a light intro/outro if desired.

Integrate into the app
- Create `public/episodes/<id>.json` with:
  {
    "meta": { "id":"<id>", "title":"...", "civ":"...", "age":"5–6", "big_ideas":[], "museum_intro": true/false },
    "nodes": [ ... ]
  }
- Add `{ "id":"<id>", "title":"...", "civ":"..." }` to `public/exhibits.json`.

Preview & deploy
- Local: `npm install` then `npm run dev`.
- Push to `main` to deploy to GitHub Pages.
