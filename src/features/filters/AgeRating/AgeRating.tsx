import { FormItem, Radio } from "@vkontakte/vkui";
import React, { FC } from "react";
import { AGE_RATINGS } from "./constants";
import { useQueryAgeRating } from "./hooks";
enum RUSSIAN_AGES {
  children = "Для детей",
  teenagers = "Для подростков",
  adult = "Для взрослых",
}
export const AgeRating: FC = () => {
  const [selectedAgeRating, handleCheckboxChange] = useQueryAgeRating();

  return (
    <FormItem top="Возраст">
      <Radio
        name="radio"
        defaultChecked
        value={"all"}
        onChange={handleCheckboxChange}
      >
        all
      </Radio>
      {Object.keys(AGE_RATINGS).map((age) => (
        <Radio
          key={age}
          name="radio"
          value={AGE_RATINGS[age as keyof typeof AGE_RATINGS]}
          checked={
            selectedAgeRating === AGE_RATINGS[age as keyof typeof AGE_RATINGS]
          }
          onChange={handleCheckboxChange}
        >
          {RUSSIAN_AGES[age as keyof typeof RUSSIAN_AGES]}
        </Radio>
      ))}
    </FormItem>
  );
};
