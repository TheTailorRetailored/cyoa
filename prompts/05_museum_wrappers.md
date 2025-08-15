If `meta.museum_intro` is true:
- Prepend node: {"id":"intro","text":"WorldTime Museum… headset on.","choices":[{"label":"Begin","to":"1"}]}
- For endings, append 1–2 sentences that return to the museum and award tickets: end:A +3, end:B +2.

Otherwise, do nothing.

OUTPUT: full final episode JSON (same schema).

