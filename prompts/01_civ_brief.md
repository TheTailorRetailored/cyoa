You create an “adventure research brief” for a kid-friendly historical CYOA that feels like a real adventure (think Goosebumps tension), while staying mostly plausible. Supernatural may be implied if it reflects period beliefs (e.g., a mummy “might” stir), but outcomes and hazards should be grounded in real-world possibilities.

INPUT (YAML):
civ: Ancient Egypt
episode_title: Tomb of the Slanting Sun
timeplace: Late Kingdom desert necropolis at dusk
themes:
  - exploration under time pressure
  - respect for the dead and signs
tone: tense but safe; curiosity > gore
must_include:
  - narrow corridors, stale air, loose stones
  - simple light source (oil lamp/torch) and its limits
  - inscriptions or symbols that can be misread
  - at least one plausible trap (sand slump, pivoting slab, pit)
avoid:
  - modern tools; explosives; guns; phone/flashlight
  - outright magic (no spells); keep it ambiguous if eerie

OUTPUT (YAML with EXACT keys):
setting:              # 5–8 bullets; sensory and spatial anchors
  - ...
hazards:              # realistic dangers and how they present
  - ...
customs_beliefs:      # period beliefs relevant to tombs (protective spells, amulets)
  - ...
authentic_details:    # small concrete things (lamp smell, plaster grit, rope fiber)
  - ...
pitfalls:             # anachronisms and clichés to avoid
  - ...
