import { useSearchParams } from "react-router-dom";

export const useQueryYear = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("year");

  const handleRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    if (selectedYear === "any") {
      searchParams.delete("year");
    } else {
      searchParams.set("year", selectedYear);
    }
    setSearchParams(searchParams);
  };

  return [query || undefined, handleRangeChange] as const;
};
