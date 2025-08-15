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

