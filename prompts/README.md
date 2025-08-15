Story generation pipeline (adventure-first)

Goal: Produce a plausible, tense adventure (second person, present) with multiple endings. Minimal input from you; no need to invent titles/themes.

0) Seed concepts (00_seed.md)
- Provide either a civilization/era (e.g., "Ancient Egypt", optional focus) OR paste a short chapter/excerpt.
- Output: three pitch options and a `selected` block with title, time/place, themes, constraints.

1) Research brief (01_civ_brief.md)
- Input: paste the `selected` block from step 0.
- Output: setting, hazards, beliefs, authentic details, pitfalls.

2) Beats (02_beats.md)
- Use the brief as context. Output a beats JSON with ids, 2 choices per node, and multiple endings (include at least one good and one bad end).

3) Prose (03_prose.md)
- Expand each beat into 5–8 sentences per node; keep choices concrete. No explicit fact callouts.

4) Final polish (04_fact_inserts.md)
- Clean helper keys; ensure only `nodes[]` with `id/text/choices` and `endings[]` remain.

5) Optional museum frame (05_museum_wrappers.md)
- If `meta.museum_intro` is true, add a light intro and wrap endings without game-y tokens.

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

