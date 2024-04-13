import {
  Group,
  SplitLayout,
  SplitCol,
  Panel,
  useAdaptivityWithJSMediaQueries,
  Spinner,
  Pagination,
} from "@vkontakte/vkui";
import { MainList, MoviesFilters } from "../../../widgets";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./Home.scss";
import { getMovies, searchMovies } from "../api";

import { MoviesSearch, useMoviesSearchHistory } from "../../../widgets";
import { debounce } from "../../../shared/utils";
import { HomeDataType, QueryParams } from "../types";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "../../../features/filters/hooks";
import { useRequest } from "../../hooks";
const extractQuery = (searchParams: URLSearchParams): QueryParams => ({
  page: searchParams.get("page") ?? "1",
  ageRating: searchParams.get("ageRating") ?? undefined,
  ["countries.name"]: searchParams.get("country") ?? undefined,
  limit: searchParams.get("limit") ?? "10",
  year: searchParams.get("year") ?? undefined,
});

export const Home = () => {
  // const [data, setMainData] = useState<HomeDataType | null>(null);
  const [params, setParams] = useState<QueryParams | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchParams] = useSearchParams();
  const [page, setPage] = useQuery("page", "1");

  const { status, errorMessage, data, performRequest } =
    useRequest<HomeDataType | null>();

  useEffect(() => {
    if (!params) return;
    performRequest((signal) => getMovies(params, signal));
  }, [params]);

  const applyFilters = useCallback(() => {
    setParams({ ...extractQuery(searchParams), page });
  }, [searchParams, page]);

  useEffect(() => {
    if (searchQuery) {
      performRequest((signal) =>
        searchMovies({ query: searchQuery, page, limit: "10" }, signal)
      );
    } else {
      applyFilters();
    }
  }, [page, searchQuery]);

  //searchbar
  const [history, updateHistory] = useMoviesSearchHistory();
  const getDataDebounced = useMemo(
    () =>
      debounce((arg: string) => {
        setSearchQuery(arg);
        setPage("1");
        if (!arg) return;
        updateHistory(arg);
      }, 1000),
    [updateHistory]
  );

  const { viewWidth } = useAdaptivityWithJSMediaQueries();
  const filters = (
    <Group>
      <MoviesFilters apply={applyFilters} />
    </Group>
  );

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
            {status === "success" && data && data.docs && (
              <div className="container">
                <MainList docs={data.docs} />
                <Pagination
                  currentPage={data.page}
                  totalPages={data.pages - 1}
                  onChange={(n) => setPage(n.toString())}
                />
              </div>
            )}
            {status === "loading" && (
              <div>
                <Spinner size="large" style={{ margin: "20px 0" }} />
              </div>
            )}
            {status === "error" && (
              <div>
                {errorMessage}
                <Pagination
                  currentPage={Number(page)}
                  totalPages={Number(page)}
                  onChange={(n) => setPage(n.toString())}
                />
              </div>
            )}
          </Group>
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
};
