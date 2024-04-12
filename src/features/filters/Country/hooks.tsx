import { useSearchParams } from "react-router-dom";

export const useQueryCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("country");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;

    if (selectedCountry === "any") {
      searchParams.delete("country");
    } else {
      searchParams.set("country", selectedCountry);
    }
    setSearchParams(searchParams);
  };

  return [query || undefined, handleSelectChange] as const;
};
