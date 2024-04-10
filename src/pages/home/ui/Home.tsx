import { Group, SplitLayout, SplitCol, Panel } from "@vkontakte/vkui";
import React from "react";
import { MainList, MoviesFilters } from "../../../widgets";

export const Home = () => {
  // const showTablet = Boolean(viewWidth.tabletPlus);

  return (
    <SplitLayout style={{ justifyContent: "center" }}>
      <SplitCol width="100%" maxWidth="80%" stretchedOnMobile autoSpaced>
        <Panel>
          <Group>
            <MoviesFilters />
          </Group>
          <Group>
            <MainList />
          </Group>
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
};

<Home />;
