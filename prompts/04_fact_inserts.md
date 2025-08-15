Remove any leftover scaffolding keys from earlier steps and polish the prose for flow and clarity. Replace any placeholders with plain text. Ensure no meta/planning keys remain other than `nodes`, `endings`, and their nested fields (`id`, `text`, `choices[{label,to}]`).

Checklist:
- Remove helper keys like `scene`, `notes`, or slots.
- Ensure every non-ending node has exactly 2 choices.
- Endings must have no `choices` array.

OUTPUT: final adventure JSON for the episode.
