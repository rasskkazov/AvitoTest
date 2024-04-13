import { useSearchParams } from "react-router-dom";

export const usePaginationQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //   const query = searchParams.get("ageRating");

  const handlePageChange = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return [handlePageChange] as const;
};
