import React from "react";
import { useHashRoute } from "./hooks/useHashRoute";
import IndexPage from "./pages/IndexPage";
import EpisodePlayer from "./pages/EpisodePlayer";

export default function App() {
  const hash = useHashRoute();
  // routes: #/ , #/episode/:id
  const match = hash.match(/^#\/episode\/([^\/#?]+)/);
  if (match) return <EpisodePlayer id={decodeURIComponent(match[1])} />;
  return <IndexPage />;
}

