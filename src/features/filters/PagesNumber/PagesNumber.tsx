import { FormItem, Input } from "@vkontakte/vkui";
import React, { FC } from "react";
import { useQueryPagesNumber } from "./hooks";
export const PagesNumber: FC = () => {
  const [selectedPagesNumber, handlePagesNumberChange] = useQueryPagesNumber();
  return (
    <FormItem top="Фильмов на странице">
      <Input
        id="pagesNumber"
        type="number"
        placeholder={"10"}
        value={selectedPagesNumber}
        onChange={handlePagesNumberChange}
      />
    </FormItem>
  );
};
