import { Group } from "@vkontakte/vkui";
import React from "react";

type MoviePosterProps = {
  url: string;
  name: string;
};
export const MoviePoster = ({ ...props }: MoviePosterProps) => {
  return (
    <Group>
      <div className="mainList__container">
        <img
          src={props.url}
          alt={props.name}
          title={props.name}
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>
    </Group>
  );
};
