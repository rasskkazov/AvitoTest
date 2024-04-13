import { useState } from "react";
export const useMoviesSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  const updateHistory = (newValue: string) => {
    setHistory([
      newValue,
      ...history.filter((item) => item !== newValue).slice(0, 19),
    ]);
  };

  return [history, updateHistory] as const;
};
