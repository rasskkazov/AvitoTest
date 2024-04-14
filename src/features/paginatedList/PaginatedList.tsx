import { Cell, List, Pagination } from "@vkontakte/vkui";
import React from "react";

export type PaginatedListData = {
  elements: JSX.Element[];
  page: number;
  pages: number;
  onChange: (arg: number) => void;
};
export const PaginatedList = (props: PaginatedListData) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <List>
        {props.elements.length === 0 && <div>Список пуст</div>}
        {props.elements.length && (
          <>
            {props.elements.map((item, index) => (
              <Cell key={index}>{item}</Cell>
            ))}
          </>
        )}
      </List>
      {props.pages > 1 && (
        <Pagination
          currentPage={props.page}
          totalPages={props.pages}
          onChange={(n) => props.onChange(n)}
        />
      )}
    </div>
  );
};
