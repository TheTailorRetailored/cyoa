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

