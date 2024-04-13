import type { MovieType } from "../../entities";
export type HomeDataType = {
  docs: MovieType[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};

type QueryParam = "page" | "ageRating" | "countries.name" | "limit" | "year";
export type QueryParams = Partial<Record<QueryParam, string>>;
