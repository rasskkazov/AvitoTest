import { Group, Header } from "@vkontakte/vkui";
import React from "react";
import { Carousel } from "../../features";
import { ImageDataType } from "../../pages/movie/types";
type PosterCarouselProps = {
  imageData: ImageDataType | null;
};
export const PosterCarousel = (props: PosterCarouselProps) => {
  const posterItems = props.imageData?.docs.map((item) => (
    <div
      key={item.url}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <img
        src={item.url}
        alt="poster"
        style={{
          width: "100%",
          maxHeight: "20rem",
          objectFit: "contain",
        }}
      />
    </div>
  ));
  return (
    <Group header={<Header mode="secondary">Постеры</Header>}>
      <Carousel elements={posterItems ?? []} />
    </Group>
  );
};
