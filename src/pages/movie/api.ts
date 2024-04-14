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

export type getPaginatedDataParams = {
  endpoint: string;
  movieId: string;
  page: number;
  other?: {
    [key: string]: string;
  };
};
export const getPaginatedData = (
  params: getPaginatedDataParams,
  signal?: AbortSignal
) => {
  return axios.get(`/${params.endpoint}`, {
    ...options,
    params: {
      page: params.page,
      limit: 10,
      movieId: params.movieId,
      ...params.other,
    },
    signal,
  });
};
