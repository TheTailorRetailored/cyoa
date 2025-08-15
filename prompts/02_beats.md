You design an adventure flow for a tense, plausible tomb-exploration story. The reader can reach multiple endings, including at least one “bad end” (sealed in, lost light) and one “good end” (escape with insight, not treasure).

RULES:
- Keep everything physically plausible; implied eerie moments are fine if rooted in beliefs.
- Exactly 2 choices per non-ending node.
- Depth target 6–8; total nodes 12–16 including 2–4 endings.
- Use ids "1","2",...; endings as "end:GOOD1", "end:BAD1", etc. If `meta.museum_intro` is true, include "intro" -> "1".
- Choices should be concrete actions with tradeoffs (time vs. safety, light vs. air, noise vs. stealth).

OUTPUT (JSON):
{
  "nodes": [
    { "id":"1", "scene":"1–2 lines of what happens and the immediate dilemma", "choices":[
      {"label":"choice text","to":"2"},
      {"label":"choice text","to":"3"}
    ]},
    ...
  ],
  "endings":[ {"id":"end:GOOD1","title":"..."}, {"id":"end:BAD1","title":"..."} ],
  "notes":[ "optional structural notes or cautions" ]
}
