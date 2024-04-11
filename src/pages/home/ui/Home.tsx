import { Group, SplitLayout, SplitCol, Panel } from "@vkontakte/vkui";
import { MainList, MoviesFilters } from "../../../widgets";
import React from "react";
import "./Home.scss";
// import { getMainData } from "../api";
// import { HomeDataType } from "../types";
import { res1 } from "../../../../token/mockData";
import { MainPagination } from "../../../features";

export const Home = () => {
  // const [mainData, setMainData] = useState<HomeDataType>();

  // useEffect(() => {
  //   getMainData(setMainData);
  // }, []);
  const mainData = res1;

  return (
    <SplitLayout style={{ justifyContent: "center" }}>
      <SplitCol width="100%" maxWidth="60%" stretchedOnMobile autoSpaced>
        <Panel>
          <Group>
            <MoviesFilters />
          </Group>
          <Group>
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
