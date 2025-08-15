import { useEffect, useState } from "react";

export function useHashRoute() {
  const [hash, setHash] = useState<string>(() => location.hash || "#/" );
  useEffect(() => {
    const onHash = () => setHash(location.hash || "#/" );
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
}

export function navigate(to: string) {
  location.hash = to.startsWith("#") ? to : "#" + to;
}

