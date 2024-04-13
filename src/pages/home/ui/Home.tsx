import {
  Group,
  SplitLayout,
  SplitCol,
  Panel,
  useAdaptivityWithJSMediaQueries,
} from "@vkontakte/vkui";
import { MainList, MoviesFilters } from "../../../widgets";
import React, { useEffect, useState } from "react";
import "./Home.scss";
import { updateMainData } from "../api";

import { res1 } from "../../../../token/mockData";
import { MainPagination } from "../../../features";
import { MoviesSearch, useMoviesSearchHistory } from "../../../widgets";
import { debounce } from "../../../shared/utils";
import { HomeDataType } from "../types";
import { usePaginationQuery } from "../hooks";

export const Home = () => {
  // const [mainData, setMainData] = useState<HomeDataType>();

  // useEffect(() => {
  //   updateMainData().then((data) => setMainData(data));
  // }, []);
  const mainData = res1;

  const { viewWidth } = useAdaptivityWithJSMediaQueries();
  const filters = (
    <Group>
      <MoviesFilters />
    </Group>
  );

  const [updateHistory, history] = useMoviesSearchHistory();
  const getDataDebounced = debounce((arg: string) => {
    if (!arg) return;
    updateHistory(arg);
    console.log(`fetch ${arg}`);
  }, 2000);

  const [handlePageChange] = usePaginationQuery();

  useEffect(() => {
    handlePageChange(1);
  }, []);
  return (
    <SplitLayout style={{ justifyContent: "center" }}>
      {viewWidth > 3 && (
        <SplitCol width="100%" maxWidth="20%" stretchedOnMobile autoSpaced>
          {filters}
        </SplitCol>
      )}
      <SplitCol width="100%" maxWidth="60%" stretchedOnMobile autoSpaced>
        <Panel>
          {viewWidth < 4 && filters}
          <Group>
            <MoviesSearch onChange={getDataDebounced} history={history} />
            {mainData.docs && (
              <div className="container">
                <MainList docs={mainData.docs} />
                <MainPagination
                  mainData={mainData}
                  handleChange={handlePageChange}
                />
              </div>
            )}
          </Group>
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
};
