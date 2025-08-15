import type { Episode, Node } from "../types";

export function nodeMap(nodes: Node[]) {
  const m = new Map<string, Node>();
  for (const n of nodes) m.set(n.id, n);
  return m;
}

export function replaceName(text: string, name: string) {
  const safe = (name || "you").trim();
  return text.replaceAll("{name}", safe || "you");
}

export function validateEpisode(ep: Episode): string[] {
  const msgs: string[] = [];
  const m = nodeMap(ep.nodes);
  const start = ep.meta.museum_intro ? "intro" : "1";
  if (!m.has(start)) msgs.push(`Missing start node "${start}"`);
  const ids = new Set(ep.nodes.map(n => n.id));
  for (const n of ep.nodes) {
    for (const c of n.choices || []) {
      const targetIsEnd = c.to.startsWith("end:");
      if (!ids.has(c.to) && !targetIsEnd) {
        msgs.push(`Broken link: node ${n.id} → "${c.to}"`);
      }
    }
  }
  // Keep depth calculation for diagnostics only (no hard warning threshold)
  const depth = estimateDepth(m, start, new Set());
  if (depth < 2) msgs.push(`Very shallow depth: ${depth}`);
  return msgs;
}

function estimateDepth(m: Map<string, Node>, id: string, seen: Set<string>): number {
  if (seen.has(id)) return 0;
  seen.add(id);
  const n = m.get(id);
  if (!n || !n.choices || n.choices.length === 0) return 1;
  let best = 0;
  for (const c of n.choices) {
    if (c.to.startsWith("end:")) best = Math.max(best, 1);
    else best = Math.max(best, 1 + estimateDepth(m, c.to, new Set(seen)));
  }
  return best;
}
