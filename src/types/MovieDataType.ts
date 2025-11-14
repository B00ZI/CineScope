export interface moviesDataType {
  id: number;
  title: string;
  overview: string;
  poster: string;
  backdrop: string;
  rating: number;
  date: string;
  genres: number[];

}

export interface TMDBMovie  {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
};

