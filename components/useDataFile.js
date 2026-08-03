"use client";
import { useState, useEffect } from "react";

/**
 * Loads a public JS data file (e.g. /channels.js) that declares a
 * `const <name> = [...]` and returns the array.
 */
export function useDataFile(file, varName) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(file)
      .then((res) => res.text())
      .then((text) => {
        try {
          const getData = new Function(`${text}\nreturn ${varName};`);
          const parsed = getData();
          if (Array.isArray(parsed) && !cancelled) setData(parsed);
        } catch (err) {
          console.error(`Error parsing ${file}:`, err);
        }
        if (!cancelled) setLoading(false);
      })
      .catch((err) => {
        console.error(`Error fetching ${file}:`, err);
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [file, varName]);

  return { data, loading };
}
