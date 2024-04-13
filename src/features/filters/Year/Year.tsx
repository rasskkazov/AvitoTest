import { FormItem, Select } from "@vkontakte/vkui";
import React from "react";
import { useQuery } from "../hooks";
const FIRST_MOVIE_YEAR = 1895;
export const Year = () => {
  const [year, setYear] = useQuery("year", "any");

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
  };

  const curYear = new Date().getFullYear();

  const years = new Array(curYear - FIRST_MOVIE_YEAR)
    .fill(null)
    .map((_, index) => {
      const year = String(curYear - index);
      return { label: year, value: year };
    });
  years.unshift({ label: "Все", value: "any" });
  return (
    <FormItem top="Год">
      <Select
        searchable
        name="year"
        id="years"
        value={year}
        onChange={handleYearChange}
        options={years}
      ></Select>
    </FormItem>
  );
};
