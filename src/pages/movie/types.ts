export type MovieDataType = {
  //   name: string;
  //   description: string;
  //   poster: {
  //     url: string;
  //     previewUrl: string;
  //   };

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
