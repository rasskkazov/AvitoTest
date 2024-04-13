import { Panel, Button, FormItem, FormLayoutGroup } from "@vkontakte/vkui";
import React from "react";
import { AgeRating, Country } from "../../../features";
import { Year } from "../../../features";
import { PagesNumber } from "../../../features/filters";

type MoviesFiltersProps = {
  apply: () => void;
};
export const MoviesFilters = (props: MoviesFiltersProps) => {
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
          <Button size="m" stretched onClick={props.apply}>
            Применить
          </Button>
        </FormItem>
      </FormLayoutGroup>
    </Panel>
  );
};
