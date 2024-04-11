import { Pagination } from "@vkontakte/vkui";
import React, { FC } from "react";
import { HomeDataType } from "../../../pages";
type MainPaginationProps = {
  mainData: HomeDataType;
  handleChange: () => void;
};
export const MainPagination: FC<MainPaginationProps> = ({
  ...props
}: MainPaginationProps) => {
  return (
    <Pagination
      currentPage={props.mainData.page}
      totalPages={props.mainData.pages}
      onChange={props.handleChange}
    />
  );
};
