import { Group, Header } from "@vkontakte/vkui";
import React from "react";
import { PaginatedList } from "../../features";
type SeasonListProps = {
  page: number;
  pages: number;
  episodes: string[];
  updateSeasonData: (page: number) => void;
};
export const SeasonList = (props: SeasonListProps) => {
  const seasonItems = props.episodes.map((item) => (
    <div key={item} style={{ whiteSpace: "pre-wrap" }}>
      {item}
    </div>
  ));

  return (
    <Group header={<Header mode="secondary">Сезоны</Header>}>
      <PaginatedList
        page={props.page}
        pages={props.pages}
        onChange={props.updateSeasonData}
        elements={seasonItems ?? []}
      />
    </Group>
  );
};
