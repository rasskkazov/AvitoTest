export type MovieType = {
  id: number;
  name: string;
  year: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  countries: {
    name: string;
  }[];
  ageRating: number;
};
