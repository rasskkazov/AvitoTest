import { FormItem, Radio } from "@vkontakte/vkui";
import React, { FC } from "react";
import { AGE_RATINGS } from "./constants";
import { useQueryAgeRating } from "./hooks";
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
          {age}
        </Radio>
      ))}
    </FormItem>
  );
};
