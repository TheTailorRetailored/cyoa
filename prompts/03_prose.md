Turn the beat JSON into prose for kids (5–6). Style: 2nd person, present tense, 2–4 sentences per node, one or two sensory words per node, age-safe peril. Use a `{name}` placeholder naturally ("You ({name}) ..."), but text MUST read cleanly if name is blank.

Keep ids and choices; DO NOT add new nodes or endings. Do NOT add new facts; just write scene text and improve choices to be concrete actions.

If the node has `fact_slot` or `question_slot`, leave them in place; they will be filled later.

OUTPUT: the same JSON shape with a `text` field for every node and polished `choices[].label`. Keep `fact_slot` / `question_slot` flags unchanged.

