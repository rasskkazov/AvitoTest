import { Cell, Input, List, Text } from "@vkontakte/vkui";
import React, { FC, useState } from "react";

type MoviesSearchProps = {
  onChange: (arg: string) => void;
  history: string[];
};
export const MoviesSearch: FC<MoviesSearchProps> = ({
  ...props
}: MoviesSearchProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const search = (query: string) => {
    setSearchValue(query);
    props.onChange(query);
  };

  return (
    <div className="search-container">
      <div className="search-inner" style={{ padding: "0 1rem" }}>
        <Input
          placeholder="Поиск"
          type="search"
          onChange={(e) => search(e.target.value)}
          value={searchValue}
          onFocus={() => setIsDropdownVisible(true)}
          onBlur={() => {
            setTimeout(() => setIsDropdownVisible(false), 100);
          }}
        />
      </div>
      {isDropdownVisible && (
        <div className="dropdown" style={{ padding: "0 1rem" }}>
          <List>
            {props.history
              .filter((item) => item.includes(searchValue))
              .map((item, index) => (
                <Cell
                  key={index}
                  className="dropdown__item"
                  onClick={() => search(item)}
                >
                  <Text>{item}</Text>
                </Cell>
              ))}
          </List>
        </div>
      )}
    </div>
  );
};
