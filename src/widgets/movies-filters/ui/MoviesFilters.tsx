import { Panel, Button, FormItem, FormLayoutGroup } from "@vkontakte/vkui";
import React from "react";
import { AgeRating } from "../../../features";

export const MoviesFilters = () => {
  return (
    <Panel>
      <FormLayoutGroup>
        <AgeRating />
        <FormItem>
          <Button size="l" stretched onClick={() => {}}>
            Показать результаты
          </Button>
        </FormItem>
      </FormLayoutGroup>
    </Panel>
  );
};
