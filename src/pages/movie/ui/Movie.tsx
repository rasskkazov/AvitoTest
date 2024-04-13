import {
  SplitLayout,
  SplitCol,
  Panel,
  Group,
  useAdaptivityWithJSMediaQueries,
  Header,
  ChipsSelect,
  Button,
  Spinner,
} from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import { Carousel, MovieDescription, MoviePoster } from "../../../features";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById, getPaginatedData, getPaginatedDataParams } from "../api";
import { ImageDataType, MovieDataType } from "../types";
export const Movie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState<MovieDataType | null>(null);
  const [actorData, setActorData] = useState<ImageDataType | null>(null);
  const [seasonData, setSeasonData] = useState<ImageDataType | null>(null);
  const [reviewData, setReviewData] = useState<ImageDataType | null>(null);
  const [imageData, setImageData] = useState<ImageDataType | null>(null);

  useEffect(() => {
    getMovieById(id ?? "").then((res) => {
      setMovieData(res.data);
    });

    const initialParams: getPaginatedDataParams = {
      endpoint: "image",
      movieId: id ?? "",
      page: 1,
    };
    getPaginatedData({
      ...initialParams,
      endpoint: "person",
      other: { "movies.enProfession": "actor", "movies.id": id ?? "" },
    }).then((res) => {
      setActorData(res.data);
    });
    getPaginatedData({
      ...initialParams,
      endpoint: "season",
    }).then((res) => {
      setSeasonData(res.data);
    });

    getPaginatedData({
      ...initialParams,
      endpoint: "review",
    }).then((res) => {
      setReviewData(res.data);
    });

    getPaginatedData({
      ...initialParams,
      endpoint: "image",
    }).then((res) => {
      setImageData(res.data);
    });
  }, [id]);

  const posterItems = imageData?.docs.map((item) => (
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
      <img
        src={item.url}
        alt="poster"
        style={{ width: "100%", aspectRatio: "3/2" }}
      />
    </div>
  ));

  const navigate = useNavigate();
  const { viewWidth } = useAdaptivityWithJSMediaQueries();
  return (
    <SplitLayout style={{ justifyContent: "center" }}>
      {movieData && (
        <>
          {viewWidth > 3 && (
            <SplitCol width="100%" maxWidth="20%" stretchedOnMobile autoSpaced>
              <Panel>
                <Group>
                  <Button onClick={() => navigate(-1)}>Назад</Button>
                </Group>
                <MoviePoster url={movieData.poster.url} name={movieData.name} />
              </Panel>
            </SplitCol>
          )}
          <SplitCol width="100%" maxWidth="40%" stretchedOnMobile autoSpaced>
            <Panel>
              <MovieDescription
                name={movieData.name}
                description={movieData.description}
              />
              <Group header={<Header mode="secondary">Постеры</Header>}>
                <Carousel elements={posterItems ?? []} />
              </Group>
            </Panel>
          </SplitCol>
          {viewWidth > 3 && (
            <SplitCol width="100%" maxWidth="20%" stretchedOnMobile autoSpaced>
              <Panel>
                <Group>
                  <Header size="large">{`Оценка ${movieData.rating.imdb}`}</Header>
                </Group>
                <Group header={<Header mode="secondary">Актеры</Header>}>
                  <ChipsSelect
                    id="actors"
                    // defaultValue={actorItems}
                    disabled={true}
                    icon={<></>}
                  />
                </Group>
              </Panel>
            </SplitCol>
          )}
        </>
      )}
      {!movieData && (
        <div>
          <Spinner size="large" style={{ margin: "20px 0" }} />
        </div>
      )}
    </SplitLayout>
  );
};
