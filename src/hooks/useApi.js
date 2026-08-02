import { useEffect, useState } from "react";
import api, { unwrapList } from "../services/api";

export function useApi(path, fallback = null) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api
      .get(path)
      .then((response) => {
        if (mounted) setData(Array.isArray(fallback) ? unwrapList(response.data) : response.data);
      })
      .catch(() => {
        if (mounted) setError("Content is temporarily unavailable.");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [path]);

  return { data, loading, error };
}
