import {
  Group,
  SplitLayout,
  SplitCol,
  Panel,
  useAdaptivityWithJSMediaQueries,
} from "@vkontakte/vkui";
import { MainList, MoviesFilters } from "../../../widgets";
import React from "react";
import "./Home.scss";
// import { getMainData } from "../api";
// import { HomeDataType } from "../types";
import { res1 } from "../../../../token/mockData";
import { MainPagination } from "../../../features";
import { MoviesSearch, useMoviesSearchHistory } from "../../../widgets";
import { debounce } from "../../../shared/utils";

export const Home = () => {
  // const [mainData, setMainData] = useState<HomeDataType>();

  // useEffect(() => {
  //   getMainData().then((data) => setMainData(data));
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
                <MainPagination mainData={mainData} handleChange={() => {}} />
              </div>
            )}
          </Group>
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
};
<Home />;
