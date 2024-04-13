import { FormItem, Radio } from "@vkontakte/vkui";
import React from "react";
import { AGE_RATINGS } from "./constants";
import { useQuery } from "../hooks";
enum RUSSIAN_AGES {
  children = "Для детей",
  teenagers = "Для подростков",
  adult = "Для взрослых",
}
export const AgeRating = () => {
  const [ageRating, setAgeRating] = useQuery("ageRating", "all");
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeRating(event.target.value);
  };
  return (
    <FormItem top="Возраст">
      <Radio
        name="radio"
        defaultChecked
        value={"all"}
        onChange={handleCheckboxChange}
      >
        Для всех
      </Radio>
      {Object.keys(AGE_RATINGS).map((age) => (
        <Radio
          key={age}
          name="radio"
          value={AGE_RATINGS[age as keyof typeof AGE_RATINGS]}
          checked={ageRating === AGE_RATINGS[age as keyof typeof AGE_RATINGS]}
          onChange={handleCheckboxChange}
        >
          {RUSSIAN_AGES[age as keyof typeof RUSSIAN_AGES]}
        </Radio>
      ))}
    </FormItem>
  );
};
