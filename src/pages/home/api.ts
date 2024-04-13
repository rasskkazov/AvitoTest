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

// "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=3&selectFields=id&selectFields=name&selectFields=ageRating&selectFields=year&selectFields=countries&selectFields=poster",

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
