import { Group, useAdaptivityWithJSMediaQueries } from "@vkontakte/vkui";
import React from "react";

type MoviePosterProps = {
  url: string;
  name: string;
};
export const MoviePoster = ({ ...props }: MoviePosterProps) => {
  const { viewWidth } = useAdaptivityWithJSMediaQueries();
  return (
    <Group>
      <div className="mainList__container">
        <img
          src={props.url}
          alt={props.name}
          title={props.name}
          style={{
            width: viewWidth > 3 ? "100%" : "30%",
            borderRadius: "10px",
          }}
        />
      </div>
    </Group>
  );
};
