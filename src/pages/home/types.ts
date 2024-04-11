import type { MovieType } from "../../entities";
export type HomeDataType = {
  docs: MovieType[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
