import { useSearchParams } from "react-router-dom";

export const useQueryPagesNumber = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("pagesNumber");

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPagesNumber = event.target.value;

    if (selectedPagesNumber === "") {
      searchParams.delete("pagesNumber");
    } else {
      searchParams.set("pagesNumber", selectedPagesNumber);
    }
    setSearchParams(searchParams);
  };

  return [query || undefined, handleRangeChange] as const;
};
