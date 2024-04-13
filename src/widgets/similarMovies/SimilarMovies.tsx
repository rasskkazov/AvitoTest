import { Group, Header } from "@vkontakte/vkui";
import React from "react";
import { Carousel } from "../../features";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../app/router/constants";

export const SimilarMovies = ({ movieData }) => {
  const similarItems = movieData?.similarMovies.map((item) => (
    <NavLink to={`${ROUTES.MOVIE}${item.id}`} key={item.id}>
      <div>
        <img
          src={item.poster?.url}
          alt={item.name}
          title={item.name}
          style={{ width: "100%", aspectRatio: "2/3" }}
        />
      </div>
    </NavLink>
  ));
  return (
    <Group header={<Header mode="secondary">Похожие фильмы</Header>}>
      <Carousel elements={similarItems ?? []} />
    </Group>
  );
};
