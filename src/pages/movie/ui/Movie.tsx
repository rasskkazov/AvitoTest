import {
  SplitLayout,
  SplitCol,
  Panel,
  Group,
  useAdaptivityWithJSMediaQueries,
  Header,
  ChipsSelect,
} from "@vkontakte/vkui";
import React from "react";
import { movie, posters } from "../../../../token/mockData";
import { Carousel, MovieDescription, MoviePoster } from "../../../features";
export const Movie = () => {
  const { viewWidth } = useAdaptivityWithJSMediaQueries();
  //   console.log(movie);
  //   console.log(posters);
  const posterItems = posters.docs.map((item) => (
    <div
      key={item.url}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <img src={item.url} alt="poster" style={{ width: "100%" }} />
    </div>
  ));

  const colors = [
    { value: "red", label: "Красный" },
    { value: "blue", label: "Синий" },
    { value: "navarin", label: "Наваринского пламени с дымом" },
  ];

  return (
    <SplitLayout style={{ justifyContent: "center" }}>
      {viewWidth > 3 && (
        <SplitCol width="100%" maxWidth="20%" stretchedOnMobile autoSpaced>
          <Panel>
            <Group>Назад</Group>
            <MoviePoster url={movie.poster.url} name={movie.name} />
          </Panel>
        </SplitCol>
      )}
      <SplitCol width="100%" maxWidth="40%" stretchedOnMobile autoSpaced>
        <Panel>
          <MovieDescription name={movie.name} description={movie.description} />
          <Group header={<Header mode="secondary">Постеры</Header>}>
            <Carousel elements={posterItems} />
          </Group>
        </Panel>
      </SplitCol>
      {viewWidth > 3 && (
        <SplitCol width="100%" maxWidth="20%" stretchedOnMobile autoSpaced>
          <Panel>
            <Group>
              <Header size="large">{`Оценка ${movie.rating.imdb}`}</Header>
            </Group>
            <Group header={<Header mode="secondary">Актеры</Header>}>
              <ChipsSelect
                id="actors"
                defaultValue={colors}
                disabled={true}
                icon={<></>}
              />
            </Group>
          </Panel>
        </SplitCol>
      )}
    </SplitLayout>
  );
};
