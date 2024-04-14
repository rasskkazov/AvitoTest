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
import { Carousel, PaginatedList } from "../../../features";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getMovieById, getPaginatedData, getPaginatedDataParams } from "../api";
import { ImagePaginated, MovieDataType, ActorPaginated } from "../types";
import { ROUTES } from "../../../app/router/constants";
import {
  PosterCarousel,
  MovieDescription,
  MoviePoster,
  SimilarMovies,
  ActorList,
} from "../../../widgets";

export const Movie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState<MovieDataType | null>(null);
  const [actorData, setActorData] = useState<ActorPaginated | null>(null);
  const [seasonData, setSeasonData] = useState<ActorPaginated | null>(null);
  const [reviewData, setReviewData] = useState<ActorPaginated | null>(null);
  const [imageData, setImageData] = useState<ImagePaginated | null>(null);

  const updateActorData = (page: number) => {
    const params: getPaginatedDataParams = {
      endpoint: "person",
      movieId: id ?? "",
      page: page,
      other: { "movies.enProfession": "actor", "movies.id": id ?? "" },
    };
    getPaginatedData(params).then((res) => {
      setActorData(res.data);
    });
  };

  useEffect(() => {
    getMovieById(id ?? "").then((res) => {
      setMovieData(res.data);
    });

    const ac = new AbortController();

    const initialParams: getPaginatedDataParams = {
      endpoint: "image",
      movieId: id ?? "",
      page: 1,
    };
    getPaginatedData(
      {
        ...initialParams,
        endpoint: "person",
        other: { "movies.enProfession": "actor", "movies.id": id ?? "" },
      },
      ac.signal
    ).then((res) => {
      setActorData(res.data);
      console.log(res.data);
    });
    getPaginatedData(
      {
        ...initialParams,
        endpoint: "season",
      },
      ac.signal
    ).then((res) => {
      // setSeasonData(res.data);
    });

    getPaginatedData(
      {
        ...initialParams,
        endpoint: "review",
      }
      // signal
    ).then((res) => {
      // setReviewData(res.data);
    });

    getPaginatedData(
      {
        ...initialParams,
        endpoint: "image",
      },
      ac.signal
    ).then((res) => {
      setImageData(res.data);
    });

    return () => {
      ac.abort();
    };
  }, [id]);

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
            <SplitCol width="100%" maxWidth="25%" stretchedOnMobile autoSpaced>
              <Panel>
                <Group>
                  <Header size="large">{`Оценка ${movieData.rating.imdb}`}</Header>
                </Group>
                {actorData && (
                  <ActorList
                    actorData={actorData}
                    updateActorData={updateActorData}
                  />
                )}
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
