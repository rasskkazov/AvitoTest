import { Panel, Button, FormItem, FormLayoutGroup } from "@vkontakte/vkui";
import React from "react";
import { AgeRating, Country } from "../../../features";
import { Year } from "../../../features";
import { PagesNumber } from "../../../features/filters";

export const MoviesFilters = () => {
  return (
    <Panel>
      <FormLayoutGroup>
        <AgeRating />
        <Country />
      </FormLayoutGroup>

      <Year />
      <PagesNumber />

      <FormLayoutGroup>
        <FormItem>
          <Button size="m" stretched onClick={() => {}}>
            Применить
          </Button>
        </FormItem>
      </FormLayoutGroup>
    </Panel>
  );
};
