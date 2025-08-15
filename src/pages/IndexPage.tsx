import React, { useEffect, useState } from "react";
import type { ExhibitListItem } from "../types";
import { Card } from "../components/Card";
import { navigate } from "../hooks/useHashRoute";

export default function IndexPage() {
  const [list, setList] = useState<ExhibitListItem[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}exhibits.json`)
      .then(r => r.json())
      .then(setList)
      .catch(e => setErr(String(e)));
  }, []);

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>CYOA Museum</h1>
        </div>
      </header>

      {err && <p className="small">Error: {err}</p>}
      {!list && !err && <p className="small">Loading…</p>}

      <div className="grid">
        {list?.map(item => (
          <Card key={item.id}>
            <h3>{item.title}</h3>
            <p className="small">{item.civ}</p>
            <button className="button primary" onClick={() => navigate(`/episode/${item.id}`)}>
              Start
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
