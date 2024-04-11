import React, { FC } from "react";
import type { MovieType } from "../../../entities";
import { CardGrid, Card } from "@vkontakte/vkui";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../app/router/constants";

type MainListProps = {
  docs: MovieType[];
};
export const MainList: FC<MainListProps> = ({ ...props }: MainListProps) => {
  return (
    <div className="mainList">
      <CardGrid>
        {props.docs.map((movie) => (
          <Card key={movie.id}>
            <NavLink to={`${ROUTES.MOVIE}${movie.id}`}>
              <div className="mainList__container">
                <img
                  src={movie.poster.url}
                  alt={movie.name}
                  title={movie.name}
                  style={{ width: "100%" }}
                />
              </div>
            </NavLink>
          </Card>
        ))}
      </CardGrid>
    </div>
  );
};
