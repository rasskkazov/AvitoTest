import { FormItem, Radio } from "@vkontakte/vkui";
import React from "react";
import { AGE_RATINGS } from "./constants";
export const AgeRating = () => {
  return (
    <FormItem top="Возраст">
      {Object.keys(AGE_RATINGS).map((age) => (
        <Radio
          key={age}
          name="radio"
          value={age}
          //   checked={selectedRadio === p}
          //   onChange={() => {
          //     setSelectedRadio(p);
          //   }}
        >
          {age}
        </Radio>
      ))}
    </FormItem>
  );
};
