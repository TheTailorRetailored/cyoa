Purpose
You create strong episode concepts from minimal input so a writer doesn’t need to invent titles or themes. Results must support a tense, kid-appropriate adventure with multiple endings and no explicit magic. Supernatural may be implied if it reflects period beliefs.

Project context (standalone brief for the model)
- Format: Choose-your-own-adventure for web. Second person, present tense.
- Audience: Early readers; keep tension age-safe (no gore; avoid vivid suffocation/entrapment distress).
- Design: Each non-ending page has exactly two choices; multiple endings including at least one good and one bad outcome.
- Plausibility: Ground scenes in real hazards, tools, customs, and spaces of the period. Implied eerie is okay; explicit magic is not.
- App schema: Episodes are JSON with `meta` and `nodes`; later steps will write pages at 5–8 sentences each.

INPUT (choose one minimal path)
- civ: e.g., "Ancient Egypt" (optional qualifiers: era/domain)
  optional_focus: e.g., "tombs", "river trade", "city streets at night"
- or source_text:
    chapter_title: e.g., "Burial and the Afterlife"
    excerpt: |  # a few paragraphs copied from the history book
      ...
    grade: 5–6   # intended reading maturity (not displayed)

TASKS
1) Generate 3 distinct episode options that naturally lead to an adventure with tradeoffs (time vs. air/light, safety vs. progress, noise vs. stealth, etc.).
2) Select the best option (or the one most representative of the input) and justify briefly.
3) Produce a complete, actionable brief so downstream steps (beats/prose) can run without further invention.

OUTPUT (YAML with EXACT keys)
options:                # three concise, distinct pitches
  - episode_title: ...  # compelling, kid-friendly title
    civ: ...
    timeplace: ...      # specific time + setting (e.g., "Valley of the Kings, twilight")
    themes: [ ... ]     # 2–4 themes (e.g., exploration under time pressure, reading signs)
    tone: tense but safe; curiosity > gore
    must_include:       # 4–6 concrete scene anchors (spaces/props/hazards/signs)
      - ...
    avoid:              # anachronisms/tone no‑nos
      - ...
    rationale: ...      # 1–2 lines: why this is fun and teachable
selected:               # the option to pursue
  episode_title: ...
  civ: ...
  timeplace: ...
  themes: [ ... ]
  tone: tense but safe; curiosity > gore
  must_include:
    - ...
  avoid:
    - ...
research_brief:         # fully populated for downstream prompts to use directly
  setting:              # 5–8 bullets; sensory/spatial anchors
    - ...
  hazards:              # realistic dangers and how they present
    - ...
  customs_beliefs:      # period beliefs relevant to the setting (amulets, protective spells)
    - ...
  authentic_details:    # small concrete things (lamp smell, plaster grit, rope fiber)
    - ...
  pitfalls:             # anachronisms and clichés to avoid
    - ...
meta_template:          # suggestion for app integration (editable later)
  id: <slugified-id>
  museum_intro: true    # or false; a light frame is optional
  age: "5–6"
  big_ideas: []         # kept in metadata but not displayed
success_criteria:       # quick checklist you used to shape the output
  - multiple plausible endings (good and bad)
  - concrete tradeoffs drive choices
  - no explicit magic or modern tools
  - tension is age-safe and sensory-rich

NOTES
- Prefer actionable constraints (light, air, narrow spaces, misread symbols) over trivia.
- If `source_text` is provided, prioritize its vocabulary and setting cues.
