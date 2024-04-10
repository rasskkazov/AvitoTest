import { Panel, Group } from "@vkontakte/vkui";
import React from "react";

export const MoviesFilters = () => {
  return (
    <Panel>
      <Group>
        <div className="Filters">Фильтры1</div>
        <div className="Filters">Фильтры2</div>
      </Group>
      <Group>
        <div className="Filters">Фильтры12</div>
      </Group>
    </Panel>
  );
};
