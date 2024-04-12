import { useSearchParams } from "react-router-dom";

export const useQueryAgeRating = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("ageRating");

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAgeRating = event.target.value;

    if (selectedAgeRating === "all") {
      searchParams.delete("ageRating");
    } else {
      searchParams.set("ageRating", selectedAgeRating);
    }
    setSearchParams(searchParams);
  };

  return [query, handleCheckboxChange] as const;
};
