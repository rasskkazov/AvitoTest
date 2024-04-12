import { List, Cell, Text } from "@vkontakte/vkui";
import React from "react";

type SuggestionsListProps = {
  items: string[];
  visible: boolean;
  onSelect: (key: string) => void;
  filter: string;
};
export const SuggestionsList = ({ ...props }: SuggestionsListProps) => {
  return props.visible ? (
    <div className="suggestionsList" style={{ padding: "0 1rem" }}>
      <List>
        {props.items
          .filter((item) => item.includes(props.filter))
          .map((item, index) => (
            <Cell
              key={index}
              className="suggestionsList__item"
              onMouseDown={() => props.onSelect(item)}
              onClick={() => {}}
            >
              <Text>{item}</Text>
            </Cell>
          ))}
      </List>
    </div>
  ) : null;
};
