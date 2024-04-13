import { CardScroll, Card } from "@vkontakte/vkui";
import React from "react";
type CarouselProps = {
  elements: JSX.Element[];
};
export const Carousel = ({ ...props }: CarouselProps) => {
  return (
    <CardScroll size="s">
      {props.elements.map((item, index) => (
        <Card key={index}>{item}</Card>
      ))}
    </CardScroll>
  );
};
