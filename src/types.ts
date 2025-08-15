export type Choice = { label: string; to: string };
export type Node = {
  id: string;
  text: string;
  choices?: Choice[];
  fact?: string;
  question?: string;
};
export type EpisodeMeta = {
  id: string;
  title: string;
  civ: string;
  age: string;
  big_ideas: string[];
  museum_intro?: boolean;
};
export type Episode = { meta: EpisodeMeta; nodes: Node[] };
export type ExhibitListItem = { id: string; title: string; civ: string };

