export type MovieDataType = {
  [key: string]: any;
};
// не знаю как обработать тип, который возвращает кинопоиск

export type PaginatedData<T> = {
  docs: T[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
export type ImagePaginated = PaginatedData<{
  url: string;
  id: string;
}>;
export type ActorPaginated = PaginatedData<{
  id: number;
  name: string | null;
  enName: string | null;
  photo: string | null;
  sex: string;
  age: number | null;
}>;
export type SeasonPaginated = PaginatedData<{
  episodes: {
    number: number;
    name: string;
    enName: string;
    still: {
      url: string;
      previewUrl: string;
    };
    duration: number;
    date?: null;
    description: string;
    airDate: string;
    enDescription: string;
  }[];
  id: string;
}>;

export type ReviewPaginated = PaginatedData<{
  review: string;
  author: string;
}>;
