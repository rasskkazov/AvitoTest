import axios from "axios";
import { token } from "../../../token/token";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": token,
  },
};

const BASE_URL = "https://api.kinopoisk.dev/v1.4";
axios.defaults.baseURL = BASE_URL;

export const getMovieById = (id: string, signal?: AbortSignal) => {
  return axios.get(`/movie/${id}`, { ...options, signal });
};

export type getPaginatedDataProps = {
  endpoint: string;
  movieId: string;
  page: number;
  other?: {
    [key: string]: string | string[];
  };
};
export const getPaginatedData = (
  props: getPaginatedDataProps,
  signal?: AbortSignal
) => {
  const params = new URLSearchParams();
  params.append("page", props.page.toString());
  params.append("limit", "10");
  params.append("movieId", props.movieId.toString());

  if (props.other) {
    for (const [key, value] of Object.entries(props.other)) {
      if (Array.isArray(value)) {
        for (const v of value) {
          params.append(key, v);
        }
        continue;
      } else {
        params.append(key, value);
      }
    }
  }

  return axios.get(`/${props.endpoint}`, {
    ...options,
    params,
    signal,
  });
};
