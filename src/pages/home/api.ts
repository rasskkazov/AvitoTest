import { token } from "../../../token/token";
import { HomeDataType } from "./types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": token,
  },
};

export const updateMainData = () => {
  return fetch(
    "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=3&selectFields=id&selectFields=name&selectFields=ageRating&selectFields=year&selectFields=countries&selectFields=poster",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
