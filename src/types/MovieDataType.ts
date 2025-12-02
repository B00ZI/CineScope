export interface moviesDataType {
  id: number;
  title: string;
  overview: string;
  poster: string;
  backdrop: string;
  rating: number;
  date: string;
  
  UserRate?: number;


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

export interface FormattedMovieDetails {
  movieId: number;
  title: string;
  genres: string[];
  runTime: string;
  Director: string;
  cast: string[];
}
