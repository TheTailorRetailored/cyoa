Fill `fact` (<=18 words) and `question` (short causal prompt) ONLY where `fact_slot` or `question_slot` are true, using ONLY <FACTS>. Then REMOVE the *_slot fields.

OUTPUT: same JSON shape (nodes + endings) with `fact`/`question` filled where appropriate.

<FACTS>
(Insert the `facts` list from the fact pack)

