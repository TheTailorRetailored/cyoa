Turn beats into immersive prose. Style: second person, present tense, 5–8 sentences per node. Use vivid but age-safe tension; 1–2 sensory cues per node. Keep things plausible. Implied supernatural (a shadow that “might” move, a faint rustle) is allowed if it reflects beliefs.

Rules
- Keep ids and choices; do not add nodes or endings.
- Do not add didactic fact callouts. Integrate detail naturally.
- Make choices concrete, distinct, and rooted in the scene’s constraints.

Output
- Same JSON shape as beats, adding a `text` field for every node and refining `choices[].label`.

Paste your beats JSON below
```json
{
  "nodes": [
    { "id": "1", "scene": "...", "choices": [ {"label":"...","to":"2"}, {"label":"...","to":"3"} ] },
    { "id": "2", "scene": "...", "choices": [ {"label":"...","to":"..."}, {"label":"...","to":"..."} ] }
  ],
  "endings": [ {"id":"end:GOOD1","title":"..."}, {"id":"end:BAD1","title":"..."} ]
}
```
