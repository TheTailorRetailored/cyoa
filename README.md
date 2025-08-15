# CYOA Museum (web)

Minimal React+TS app to read branching children's history stories (ages 5–6). Stories live as JSON in `/public/episodes`. An index at `/exhibits.json` lists what to show.

## Dev
```bash
npm create vite@latest cyoa -- --template react-ts
cd cyoa
# add files from this repo on top of Vite scaffold
npm i
npm run dev


Open http://localhost:5173

Build & Deploy (GitHub Pages)
npm run build
# deploy /dist to GitHub Pages (e.g., use actions/upload-pages-artifact + actions/deploy-pages)

Content schema

See src/types.ts. Endings use ids end:A, end:B. Start node is "intro" if museum_intro: true, else "1".

Authoring

Prompts for LLM-assisted generation live in /prompts. Generate beats → prose → insert facts/questions → (optionally) add museum wrappers. Keep facts age-appropriate and accurate; if unsure, write [CHECK FACT].

Tickets

Endings award tickets (A: +3, B: +2). Stored in localStorage under cyoa:tickets.

License

MIT


### Authoring prompts

#### `prompts/01_civ_brief.md`
```md
You produce a concise fact pack for a 5–6yo history CYOA episode.

INPUT (YAML):
civ: Ancient Egypt
episode_title: The Night the River Rose
age: 5–6
learning_goals:
  - Understand purpose of nilometer.
  - See how flood height changes farming plan.
  - Meet scribe role.
must_include:
  - nilometer scene with mark height
  - levee or canal decision
  - cylinder seal or papyrus mention (one line)
vibe_bank:
  - "drums from rooftops"
  - "wet earth + mint smell"
  - "heat shimmer"
sotw_questions:
  - "How did Egyptians know when the Nile would flood?"
  - "What did scribes do?"

OUTPUT (YAML with EXACT keys):
facts:               # 10–15 short bullet points, concrete, age-safe
  - ...
constraints:         # words/ideas to avoid or simplify
  - ...
pitfalls:            # likely hallucinations/anachronisms to avoid
  - ...
```

prompts/02_beats.md
You generate a branching map for a 5–6yo CYOA episode. Depth 4–5, about 10–12 nodes, two mid-path convergences, two endings end:A/end:B.

RULES:
- Use ONLY facts provided in <FACTS>.
- Each node has exactly 2 choices (except endings).
- Place exactly 3 `fact_slot: true` and 2 `question_slot: true` on nodes where scene naturally teaches.
- Use ids "1","2",...; endings as "end:A","end:B". If museum_intro is true, also include "intro" -> "1".

OUTPUT (JSON):
{
  "nodes": [
    { "id":"1", "scene":"one or two lines of what happens", "choices":[
      {"label":"choice text","to":"2"},
      {"label":"choice text","to":"3"}],
      "fact_slot":true, "question_slot":true
    },
    ...
  ],
  "endings":[ {"id":"end:A","title":"..."},{"id":"end:B","title":"..."} ],
  "warnings":[ "...optional..." ]
}

<FACTS>
(Insert the `facts` list from the fact pack)

prompts/03_prose.md
Turn the beat JSON into prose for kids (5–6). Style: 2nd person, present tense, 2–4 sentences per node, one or two sensory words per node, age-safe peril. Use a `{name}` placeholder naturally ("You ({name}) ..."), but text MUST read cleanly if name is blank.

Keep ids and choices; DO NOT add new nodes or endings. Do NOT add new facts; just write scene text and improve choices to be concrete actions.

If the node has `fact_slot` or `question_slot`, leave them in place; they will be filled later.

OUTPUT: the same JSON shape with a `text` field for every node and polished `choices[].label`. Keep `fact_slot` / `question_slot` flags unchanged.

prompts/04_fact_inserts.md
Fill `fact` (<=18 words) and `question` (short causal prompt) ONLY where `fact_slot` or `question_slot` are true, using ONLY <FACTS>. Then REMOVE the *_slot fields.

OUTPUT: same JSON shape (nodes + endings) with `fact`/`question` filled where appropriate.

<FACTS>
(Insert the `facts` list from the fact pack)

prompts/05_museum_wrappers.md
If `meta.museum_intro` is true:
- Prepend node: {"id":"intro","text":"WorldTime Museum… headset on.","choices":[{"label":"Begin","to":"1"}]}
- For endings, append 1–2 sentences that return to the museum and award tickets: end:A +3, end:B +2.

Otherwise, do nothing.

OUTPUT: full final episode JSON (same schema).

