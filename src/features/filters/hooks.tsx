import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useQuery = (name: string, defaultValue: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(defaultValue);
  useEffect(() => {
    setQuery(searchParams.get(name) || defaultValue);
  }, []);
  useEffect(() => {
    if (query === defaultValue) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, query);
    }
    setSearchParams(searchParams);
  }, [query]);

  return [query, setQuery] as const;
};
