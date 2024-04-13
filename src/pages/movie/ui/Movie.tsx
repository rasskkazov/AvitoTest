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
import { Carousel } from "../../../features";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getMovieById, getPaginatedData, getPaginatedDataParams } from "../api";
import { ImageDataType, MovieDataType } from "../types";
import { ROUTES } from "../../../app/router/constants";
import {
  PosterCarousel,
  MovieDescription,
  MoviePoster,
  SimilarMovies,
} from "../../../widgets";
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

  const similarItems = movieData?.similarMovies.map((item) => (
    <NavLink to={`${ROUTES.MOVIE}${item.id}`} key={item.id}>
      <div>
        <img
          src={item.poster?.url}
          alt={item.name}
          title={item.name}
          style={{ width: "100%", aspectRatio: "2/3" }}
        />
      </div>
    </NavLink>
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
              <PosterCarousel imageData={imageData} />
              <SimilarMovies movieData={movieData} />
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
