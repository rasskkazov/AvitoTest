import { Group, Headline, Text } from "@vkontakte/vkui";
import React from "react";

type MovieDescriptionProps = {
  name: string;
  description: string;
};
export const MovieDescription = ({ ...props }: MovieDescriptionProps) => {
  return (
    <Group>
      <Headline level="2" weight="2" style={{ marginBottom: 16 }}>
        {props.name}
      </Headline>
      <Text>{props.description}</Text>
    </Group>
  );
};
