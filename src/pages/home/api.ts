import axios from "axios";
import { token } from "../../../token/token";
import { QueryParams } from "./types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": token,
  },
};

const BASE_URL = "https://api.kinopoisk.dev/v1.4";
axios.defaults.baseURL = BASE_URL;

export const getMovies = (params: QueryParams, signal?: AbortSignal) => {
  return axios.get("/movie", { ...options, params, signal });
};

type SearchMoviesParams = {
  query: string;
  page: string;
  limit: string;
};
export const searchMovies = (
  params: SearchMoviesParams,
  signal?: AbortSignal
) => {
  return axios.get("/movie/search", {
    ...options,
    params,
    signal,
  });
};
