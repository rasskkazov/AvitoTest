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

export type ImageDataType = {
  docs: {
    url: string;
    id: string;
  }[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
