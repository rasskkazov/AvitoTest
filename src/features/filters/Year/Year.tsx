import { FormItem, Select } from "@vkontakte/vkui";
import React, { FC } from "react";
import { useQueryYear } from "./hooks";
const FIRST_MOVIE_YEAR = 1895;
export const Year: FC = () => {
  const [selectedYear, handleYearChange] = useQueryYear();

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
        value={selectedYear}
        onChange={handleYearChange}
        options={years}
      ></Select>
    </FormItem>
  );
};
