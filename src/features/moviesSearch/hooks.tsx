import { useState } from "react";
export const useMoviesSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  const updateHistory = (newValue: string) => {
    if (history.length > 19)
      setHistory([
        newValue,
        ...history.filter((item) => item !== newValue).slice(0, -1),
      ]);
    else setHistory([newValue, ...history.filter((item) => item !== newValue)]);
  };

  return [updateHistory, history] as const;
};
