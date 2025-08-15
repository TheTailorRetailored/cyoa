Story generation (adventure-first)

Goal
- Produce a plausible, tense adventure (second person, present) with multiple endings. Minimal input; no need to invent titles or themes.

Standalone prompts
- 00_seed.md (standalone): Provide a civ/focus, a textbook excerpt, or an existing concept. Output includes 3 options, a selected concept, a fully-populated research_brief, and a meta template. You can proceed directly to beats/prose using this content.
- 02_beats.md (standalone or chained): Accepts context from 00 if available. Otherwise, include short notes about setting/hazards to guide beat design.
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

When to use which prompt
- Use `00_seed.md` for everything upstream of writing: it can take minimal input or a full concept and returns a selected option plus a complete research_brief.
- Use `02_beats.md` to design the branching flow once you have the brief (from 00).
- Use `03_prose.md` to expand beats into full pages (5–8 sentences each).
- Use `04_fact_inserts.md` to polish and ensure schema.
- Use `05_museum_wrappers.md` only if you want the light museum framing.

Why 00 → 02 → 03 can skip 01
- `00_seed.md` was expanded to produce a complete `research_brief`. Since `01_civ_brief.md`’s job is to turn a concept into that same brief, it’s redundant if you already have one from 00. Keep 01 for cases where you need extra research depth or are starting from a custom concept.
