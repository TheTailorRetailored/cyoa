import React, { useEffect, useMemo, useState } from "react";
import type { Episode, Node } from "../types";
import { navigate } from "../hooks/useHashRoute";
import { nodeMap, replaceName, validateEpisode } from "../utils/episode";

export default function EpisodePlayer({ id }: { id: string }) {
  const [ep, setEp] = useState<Episode | null>(null);
  const [err, setErr] = useState<string | null>(null);
  // keep tickets for fun rewards, but remove name personalization
  const [tickets, setTickets] = useState<number>(() => {
    try { return Number(localStorage.getItem("cyoa:tickets") || 0); } catch { return 0; }
  });
  const [current, setCurrent] = useState<string>("1");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}episodes/${id}.json`)
      .then(r => r.json())
      .then((data: Episode) => {
        setEp(data);
        const start = data.meta.museum_intro ? "intro" : "1";
        setCurrent(start);
        const warnings = validateEpisode(data);
        warnings.forEach(w => console.warn("[episode warn]", w));
      })
      .catch(e => setErr(String(e)));
  }, [id]);

  const map = useMemo(() => (ep ? nodeMap(ep.nodes) : new Map<string, Node>()), [ep]);
  const node = ep ? map.get(current) : null;
  const isEnding = node ? !node.choices || node.choices.length === 0 : false;

  useEffect(() => {
    if (!isEnding || !node) return;
    if (node.id === "end:A") setTickets(n => n + 3);
    if (node.id === "end:B") setTickets(n => n + 2);
  }, [isEnding, node, setTickets]);

  useEffect(() => {
    try { localStorage.setItem("cyoa:tickets", String(tickets)); } catch {}
  }, [tickets]);

  if (err) return <div className="container"><p>Error: {err}</p></div>;
  if (!ep || !node) return <div className="container"><p>Loading…</p></div>;

  return (
    <div className="reader">
      <header className="reader-header">
        <div className="container header">
          <div>
            <h1>{ep.meta.title}</h1>
            <p className="small">{ep.meta.civ}</p>
          </div>
          <div className="row">
            <span className="badge">🎟️ {tickets}</span>
          </div>
        </div>
      </header>

      <main className="reader-main">
        <div className="container">
          <article className="page">
            <p className="small page-label">{node.id.startsWith("end:") ? "Ending" : `Page ${node.id}`}</p>
            <p className="page-text">{replaceName(node.text, "")}</p>
            {node.fact && <p className="fact"><strong>Spot the fact:</strong> {node.fact}</p>}
            {node.question && <p className="q"><strong>Think it through:</strong> {node.question}</p>}
          </article>
        </div>
      </main>

      <div className="choices">
        <div className="container">
          {!isEnding ? (
            <div>
              {(node.choices || []).map(c => (
                <div key={c.label} style={{ marginBottom: 8 }}>
                  <button className="button choice" onClick={() => setCurrent(c.to)}>
                    {c.label}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="row">
              <button className="button" onClick={() => setCurrent(ep.meta.museum_intro ? "intro" : "1")}>Play again</button>
              <button className="button" onClick={() => navigate("/")}>Back to exhibits</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
