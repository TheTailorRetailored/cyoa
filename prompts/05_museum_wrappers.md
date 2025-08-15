If `meta.museum_intro` is true, lightly frame the adventure before and after without breaking tone.

Intro node to prepend:
{"id":"intro","text":"WorldTime Museum. A guide unlocks a quiet wing. You slip into the dusty dark. Begin.","choices":[{"label":"Step inside","to":"1"}]}

For endings, append 1–2 sentences that wrap the experience (e.g., you back into moonlight; you leave a mark on a slate). No tickets or game-y currency. Keep the number of endings from the input; do not add or remove endings.

Otherwise, do nothing.

OUTPUT: full final episode JSON (same schema as previous step).
