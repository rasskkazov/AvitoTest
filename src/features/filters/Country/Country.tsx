import { FormItem, Select } from "@vkontakte/vkui";
import React, { FC } from "react";
import { countries } from "../../../../token/mockData";
import { useQueryCountry } from "./hooks";

const countryToRender = [
  {
    name: "Все",
    slug: "any",
  },
]
  .concat(countries)
  .map((country) => ({
    label: country.name,
    value: country.slug,
  }));

export const Country: FC = () => {
  const [selectedCountry, handleCountryChange] = useQueryCountry();
  return (
    <FormItem top="Страна" htmlFor="start">
      <Select
        searchable
        name="country"
        id="countries"
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countryToRender}
      />
    </FormItem>
  );
};
