import { FormItem, Input } from "@vkontakte/vkui";
import React from "react";
import { useQuery } from "../hooks";

export const PagesNumber = () => {
  const [limit, setLimit] = useQuery("limit", "");
  return (
    <FormItem top="Фильмов на странице">
      <Input
        id="pagesNumber"
        type="number"
        placeholder={"10"}
        value={limit}
        onChange={(e) => {
          setLimit(e.currentTarget.value);
        }}
      />
    </FormItem>
  );
};
