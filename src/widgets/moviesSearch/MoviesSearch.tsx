import { Input } from "@vkontakte/vkui";
import React, { FC, useRef, useState } from "react";
import { SuggestionsList } from "../../features";

type MoviesSearchProps = {
  onChange: (arg: string) => void;
  history: string[];
};
export const MoviesSearch: FC<MoviesSearchProps> = ({
  ...props
}: MoviesSearchProps) => {
  const textInput = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const search = (query: string) => {
    if (textInput.current) textInput.current.focus();
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
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            setShowSuggestions(false);
          }}
          getRef={textInput}
        />
      </div>
      <SuggestionsList
        items={props.history}
        visible={showSuggestions}
        filter={searchValue}
        onSelect={search}
      />
    </div>
  );
};
