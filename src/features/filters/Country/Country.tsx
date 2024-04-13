import { FormItem, Select } from "@vkontakte/vkui";
import React from "react";
import { countries } from "../../../../token/mockData";
import { useQuery } from "../hooks";

const countryToRender = [
  {
    name: "Все",
  },
]
  .concat(countries)
  .map((country) => ({
    label: country.name,
    value: country.name,
  }));

export const Country = () => {
  const [country, setCountry] = useQuery("country", "Все");
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };
  return (
    <FormItem top="Страна" htmlFor="start">
      <Select
        searchable
        name="country"
        id="countries"
        value={country}
        onChange={handleCountryChange}
        options={countryToRender}
      />
    </FormItem>
  );
};
