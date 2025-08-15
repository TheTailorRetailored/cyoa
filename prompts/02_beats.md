Design an adventure flow for a tense, plausible exploration story. The reader can reach multiple endings, including at least one bad end (sealed in, lost light) and one good end (escape with insight, not treasure).

Rules
- Keep everything physically plausible; implied eerie moments are fine if rooted in beliefs.
- Exactly two choices per non-ending node.
- Depth target 6–8; total nodes 12–16 including 2–4 endings.
- Use ids "1","2",...; endings as "end:GOOD1", "end:BAD1", etc. If `meta.museum_intro` is true, include "intro" -> "1".
- Choices must be concrete actions with tradeoffs (time vs. safety, light vs. air, noise vs. stealth).

Output (JSON)
{
  "nodes": [
    { "id":"1", "scene":"1–2 lines: what happens + the immediate dilemma", "choices":[
      {"label":"choice text","to":"2"},
      {"label":"choice text","to":"3"}
    ]},
    ...
  ],
  "endings":[ {"id":"end:GOOD1","title":"..."}, {"id":"end:BAD1","title":"..."} ],
  "notes":[ "optional structural notes or cautions" ]
}

Paste your context below (from 00_seed or your own notes)
```yaml
selected:
  episode_title: ...
  civ: ...
  timeplace: ...
  themes: [ ... ]
  tone: tense but safe; curiosity > gore
  must_include: [ ... ]
  avoid: [ ... ]
research_brief:
  setting: [ ... ]
  hazards: [ ... ]
  customs_beliefs: [ ... ]
  authentic_details: [ ... ]
  pitfalls: [ ... ]
```
