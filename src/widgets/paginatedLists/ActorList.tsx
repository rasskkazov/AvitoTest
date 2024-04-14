import { Group, Header } from "@vkontakte/vkui";
import React from "react";
import { PaginatedList } from "../../features";
import { ActorPaginated } from "../../pages/movie/types";
type ActorListProps = {
  actorData: ActorPaginated;
  updateActorData: (page: number) => void;
};
export const ActorList = (props: ActorListProps) => {
  const actorItems = props.actorData.docs.map((item) => (
    <div key={item.id}>{item.enName ?? item.name}</div>
  ));
  return (
    <Group header={<Header mode="secondary">Актеры</Header>}>
      <PaginatedList
        page={props.actorData.page}
        pages={props.actorData.pages}
        onChange={props.updateActorData}
        elements={actorItems ?? []}
      />
    </Group>
  );
};
